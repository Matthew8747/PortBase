import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * CV request handler.
 *
 * Deliberately minimal: validate, throttle, email Matt. Nothing is stored, there is no
 * database, and the requester's details are not used for anything else. Matt sends the
 * CV himself. See docs/IA.md.
 */

const schema = z.object({
  name: z.string().trim().min(2, "Please give a name.").max(120),
  organisation: z.string().trim().min(2, "Please say where you're from.").max(160),
  email: z.string().trim().email("That email doesn't look right."),
  reason: z.string().trim().min(4, "A line about the role is plenty.").max(2000),
  website: z.string().optional(), // honeypot
});

/** Resend's shared sender. Works without a verified domain, but only delivers to the
 *  address that owns the Resend account, which is exactly where CV requests go anyway. */
const FALLBACK_FROM = "CV requests <onboarding@resend.dev>";

/** In-memory throttle. Resets on cold start, which is fine at this volume. */
const seen = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (seen.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  seen.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * True only when the *sending domain* is the problem, which the shared sender can work
 * around. Deliberately narrow: an invalid API key is also a `validation_error`, and
 * retrying that would just fail twice and muddy the logs.
 */
function isUnverifiedSenderDomain(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const e = error as { statusCode?: number; message?: string };
  const message = e.message ?? "";
  if (/api key/i.test(message)) return false;
  return e.statusCode === 403 || /not verified|verify your domain/i.test(message);
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ errors }, { status: 422 });
  }

  // A bot filled the hidden field. Accept silently so it learns nothing.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "That's a few requests in a short time. Please try again later." },
      { status: 429 },
    );
  }

  const { name, organisation, email, reason } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CV_REQUEST_TO;
  const from = process.env.CV_REQUEST_FROM ?? FALLBACK_FROM;

  // Always log, so a request survives even when email is misconfigured.
  console.info("[cv-request]", JSON.stringify({ name, organisation, email, reason }));

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        error:
          "The form isn't connected to email yet. Please reach out on LinkedIn and it'll get sorted.",
      },
      { status: 503 },
    );
  }

  const message = {
    to,
    replyTo: email,
    subject: `CV request: ${name}, ${organisation}`,
    html: `
      <h2>CV request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Reason:</strong><br>${escapeHtml(reason).replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    let { error } = await resend.emails.send({ from, ...message });

    // The configured sender needs a verified domain in Resend. Until that is done,
    // fall back to the shared sender so real requests still arrive.
    if (error && from !== FALLBACK_FROM && isUnverifiedSenderDomain(error)) {
      console.warn("[cv-request] sending domain not verified, retrying via shared sender", error);
      ({ error } = await resend.emails.send({ from: FALLBACK_FROM, ...message }));
    }

    if (error) {
      console.error("[cv-request] resend error", error);
      return NextResponse.json(
        {
          error:
            "That didn't send. The request has been logged, so please also drop Matt a line on LinkedIn.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[cv-request] unexpected", err);
    return NextResponse.json(
      {
        error:
          "That didn't send. The request has been logged, so please also drop Matt a line on LinkedIn.",
      },
      { status: 500 },
    );
  }
}
