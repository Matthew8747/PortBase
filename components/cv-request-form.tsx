"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Errors = Partial<Record<"name" | "organisation" | "email" | "reason" | "form", string>>;

export default function CvRequestForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setSending(true);

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/cv-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // A proxy or edge network in front of the app can answer with plain text or an
      // HTML error page, so the body is only trustworthy when it says it is JSON.
      const isJson = res.headers.get("content-type")?.includes("application/json");
      const body = isJson ? ((await res.json()) as { errors?: Errors; error?: string }) : null;

      if (res.ok) {
        router.push("/thanks");
        return;
      }

      setErrors(
        body?.errors ??
          (body?.error
            ? { form: body.error }
            : {
                form:
                  "That didn't send. Please try again, or message Matt on LinkedIn and he'll pick it up.",
              }),
      );
      setSending(false);
    } catch {
      setErrors({
        form: "That didn't send. Check your connection, or message Matt on LinkedIn instead.",
      });
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-describedby={errors.name ? "name-err" : undefined}
        />
        {errors.name ? (
          <span className="err" id="name-err">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="organisation">Company or university</label>
        <input id="organisation" name="organisation" autoComplete="organization" required />
        {errors.organisation ? <span className="err">{errors.organisation}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email to reply to</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        {errors.email ? <span className="err">{errors.email}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="reason">What&rsquo;s it for?</label>
        <textarea id="reason" name="reason" required />
        <span className="hint">
          A line is plenty. The role you&rsquo;re hiring for, or whatever you&rsquo;d like to ask.
        </span>
        {errors.reason ? <span className="err">{errors.reason}</span> : null}
      </div>

      {/* Honeypot: real people never fill this in. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {errors.form ? (
        <span className="err" role="alert">
          {errors.form}
        </span>
      ) : null}

      <div>
        <button className="btn btn-ink" type="submit" disabled={sending}>
          {sending ? "Sending" : "Request the CV"}
        </button>
      </div>

      <p className="form-note">
        Your details are used to reply to you and nothing else. No list, no forwarding, no
        analytics on this form.
      </p>
    </form>
  );
}
