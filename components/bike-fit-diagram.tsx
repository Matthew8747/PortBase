/**
 * The bike-fit study has no publishable imagery — the ethics position on participant data
 * is still open (docs/TODO.md). This draws the method instead, which is not participant data.
 *
 * What it encodes: six instruments, each sampling on its own clock at its own rate, all of
 * which have to land on one timeline before any of it means anything. Tick spacing differs
 * per lane on purpose; that misalignment is the engineering problem. The reconciled timeline
 * carries the protocol's real RPE points, because a marker at minute four only exists once
 * every instrument agrees where minute four is.
 *
 * Colour follows docs/SYSTEM.md: ink and hair carry structure, rubric marks what matters.
 * Cobalt is absent because nothing here is interactive.
 */

const LANES: { name: string; detail: string; step: number; phase: number }[] = [
  { name: "COSMED", detail: "breath by breath", step: 46, phase: 0.35 },
  { name: "Qualisys · Theia3D", detail: "markerless capture", step: 14, phase: 0.1 },
  { name: "EMG", detail: "muscle activation", step: 11, phase: 0.62 },
  { name: "IMU", detail: "orientation", step: 19, phase: 0.2 },
  { name: "Moxy", detail: "muscle oxygenation", step: 33, phase: 0.75 },
  { name: "Pressure · strain", detail: "and respiration", step: 25, phase: 0.45 },
];

const LABEL_X = 228;
const LANE_X0 = 252;
const LANE_X1 = 540;
const GATE_X = 576;
const OUT_X0 = 604;
const OUT_X1 = 864;
const TOP = 142;
const GAP = 66;
const RPE = [4, 9, 14, 19];
const TRIAL_MIN = 20;

export default function BikeFitDiagram() {
  const midY = TOP + (GAP * (LANES.length - 1)) / 2;
  const perMinute = (OUT_X1 - OUT_X0) / TRIAL_MIN;

  return (
    <svg className="diagram" viewBox="0 0 900 560" role="img" aria-labelledby="bfd-title bfd-desc">
      <title id="bfd-title">The bike-fit data pipeline</title>
      <desc id="bfd-desc">
        Six instrument streams, each sampling at its own rate on its own clock, are resampled and
        aligned onto one common timeline. Perceived exertion is recorded at minutes four, nine,
        fourteen and nineteen of the twenty-minute trial.
      </desc>

      <text className="d-eyebrow" x="36" y="52">
        ONE SESSION, ONE TO TWO GIGABYTES
      </text>
      <line className="d-hair" x1="36" y1="70" x2="156" y2="70" />

      {LANES.map((lane, i) => {
        const y = TOP + i * GAP;
        const ticks: number[] = [];
        for (let x = LANE_X0 + lane.step * lane.phase; x <= LANE_X1; x += lane.step) ticks.push(x);
        return (
          <g key={lane.name}>
            <text className="d-label" x={LABEL_X} y={y + 1} textAnchor="end">
              {lane.name}
            </text>
            <text className="d-sub" x={LABEL_X} y={y + 17} textAnchor="end">
              {lane.detail}
            </text>
            <line className="d-hair" x1={LANE_X0} y1={y} x2={LANE_X1} y2={y} />
            {ticks.map((x) => (
              <line className="d-tick" key={x} x1={x} y1={y - 6} x2={x} y2={y + 6} />
            ))}
            <path
              className="d-join"
              d={`M${LANE_X1} ${y} C${GATE_X - 20} ${y}, ${GATE_X - 20} ${midY}, ${GATE_X} ${midY}`}
            />
          </g>
        );
      })}

      <line className="d-gate" x1={GATE_X} y1={TOP - 26} x2={GATE_X} y2={TOP + GAP * 5 + 26} />
      <text className="d-gate-label" x={GATE_X + 12} y={TOP - 36}>
        resample · align · reconcile
      </text>

      <text className="d-label" x={OUT_X1} y={midY - 44} textAnchor="end">
        One timeline
      </text>
      <text className="d-sub" x={OUT_X1} y={midY - 27} textAnchor="end">
        every stream on the same clock
      </text>

      <line className="d-out" x1={GATE_X} y1={midY} x2={OUT_X1} y2={midY} />
      <line className="d-out-cap" x1={OUT_X0} y1={midY - 8} x2={OUT_X0} y2={midY + 8} />
      <line className="d-out-cap" x1={OUT_X1} y1={midY - 8} x2={OUT_X1} y2={midY + 8} />
      {RPE.map((minute) => {
        const x = OUT_X0 + minute * perMinute;
        return (
          <g key={minute}>
            <rect className="d-node" x={x - 3.5} y={midY - 3.5} width="7" height="7" />
            <text className="d-minute" x={x} y={midY + 24} textAnchor="middle">
              {minute}
            </text>
          </g>
        );
      })}

      <text className="d-sub" x={OUT_X0} y={midY + 58}>
        20-minute trial at 95% of FTP
      </text>
      <text className="d-sub" x={OUT_X0} y={midY + 75}>
        perceived exertion recorded at each mark
      </text>
    </svg>
  );
}
