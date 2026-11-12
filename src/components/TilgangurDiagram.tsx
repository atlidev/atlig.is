import { Fragment, ReactNode } from "react";

type Branch = {
  title: string;
  subtitle?: string;
  flows?: { steps: ReactNode[]; label?: ReactNode }[];
  examples?: string[];
  notes?: string[];
  children?: Branch[];
};

const Glyph = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Circle = () => <Glyph><circle cx="12" cy="12" r="7" /></Glyph>;
const Burst = () => (
  <Glyph>
    <path d="M12 2l2 5 5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z" />
  </Glyph>
);
const Clock = () => (
  <Glyph>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5h4" />
  </Glyph>
);
const Square = () => <Glyph><rect x="5" y="5" width="14" height="14" rx="1" /></Glyph>;
const Triangle = () => <Glyph><path d="M12 5l8 14H4z" /></Glyph>;
const Bracket = () => (
  <svg viewBox="0 0 48 12" className="h-3 w-12" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M4 0v10h12M44 0v10H32" />
  </svg>
);
const Bar = ({ height }: { height: number }) => (
  <svg viewBox="0 0 12 28" className="h-7 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <rect x="2" y={28 - height - 1} width="8" height={height} rx="1" />
  </svg>
);

const Stack = ({ lines }: { lines: string[] }) => (
  <span className="flex flex-col leading-tight font-medium">
    {lines.map((line) => (
      <span key={line}>{line}</span>
    ))}
  </span>
);

const Arrow = ({ label }: { label?: ReactNode }) => (
  <span className="flex flex-col items-center text-sm">
    <span className="flex h-7 items-center">
      <svg viewBox="0 0 64 12" className="h-3 w-10 sm:w-14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 6h58M54 1l6 5-6 5" />
      </svg>
    </span>
    {label}
  </span>
);

const BRANCHES: Branch[] = [
  {
    title: "Tærleiki",
    children: [
      {
        title: "Hreinlæti",
        subtitle: "spítali",
        flows: [{ steps: [<Stack key="a" lines={["tær", "sterílt"]} />, <Stack key="b" lines={["óhreint"]} />], label: "+ óhrein" }],
        examples: ["klósett pappír", "bleyja", "nál + sprauta", "kleenex"],
      },
      {
        title: "Matarumbúðir",
        flows: [{ steps: [<Stack key="a" lines={["„tært“", "hreint"]} />, <Stack key="b" lines={["opið"]} />], label: "+ opnun" }],
        examples: ["kjöt", "ostur", "krukkur", "áldósir"],
        notes: ["næringargildi", "auglýsing", "vernd (airtight)"],
      },
      {
        title: "Umbúðir",
        flows: [{ steps: [<Stack key="a" lines={["„tært“", "án eiganda"]} />, <Stack key="b" lines={["opið", "þitt"]} />] }],
        examples: ["iphone", "confidential", "seal (innsigli)"],
        notes: ["vernd", "ritual (∅→1)"],
      },
    ],
  },
  {
    title: "Sprengjur",
    flows: [{ steps: [<Circle key="a" />, <Burst key="b" />], label: "hiti, hraði, orka" }],
    examples: ["bensín", "byssukúlur", "sprengjur", "flugeldar", "air bags", "kerti", "piñata"],
    notes: ["orka → hreyfing", "ritual"],
  },
  {
    title: "Deadline",
    flows: [
      {
        steps: [<Circle key="a" />, <span key="b" className="font-medium">…</span>],
        label: (
          <span className="flex items-center gap-1">
            <Clock /> klukkan slær!
          </span>
        ),
      },
    ],
    examples: ["samningar", "skilti / augl.", "plaggöt", "tíska / hlutir"],
    notes: ["upplýsingar fyrir þig → frá þér"],
  },
  {
    title: "Fórn",
    subtitle: "stuðningur",
    flows: [
      { steps: [<Square key="a" />, <Triangle key="b" />], label: <Bracket /> },
      { steps: [<Circle key="a" />, <span key="b" className="font-medium">…</span>] },
    ],
    examples: ["3d prent stoð", "cutoffs", "mót"],
    notes: ["fórna sér fyrir tilgang"],
  },
  {
    title: "Wear & tear",
    flows: [{ steps: [<Bar key="a" height={26} />, <Bar key="b" height={18} />, <Bar key="c" height={10} />, <Bar key="d" height={2} />] }],
    examples: ["bremsur", "dekk", "föt", "skór"],
    notes: ["hægt ferli", "hvert skipti missir smá tilgang", "FRICTION!", "fjölnota / einnota"],
  },
];

const Chips = ({ items, className }: { items?: string[]; className: string }) =>
  items?.length ? (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className={`rounded-xl px-2 py-0.5 text-sm ${className}`}>
          {item}
        </li>
      ))}
    </ul>
  ) : null;

const Stem = () => <div className="ml-4 h-4 w-0.5 bg-stone-800/50" />;

const Tree = ({ branches }: { branches: Branch[] }) => (
  <ul className="ml-4">
    {branches.map((branch) => (
      <li
        key={branch.title}
        className="relative pl-6 pb-5 last:pb-0 before:absolute before:left-0 before:top-5 before:h-0.5 before:w-5 before:bg-stone-800/50 after:absolute after:left-0 after:top-0 after:bottom-0 after:w-0.5 after:bg-stone-800/50 last:after:bottom-auto last:after:h-5.5"
      >
        <div className="flex flex-col gap-3 rounded-xl bg-white/40 p-3">
          <p className="font-archivo-black text-xl leading-tight">
            {branch.title}
            {branch.subtitle && <span className="font-sans text-base font-normal"> · {branch.subtitle}</span>}
          </p>
          {branch.flows?.map((flow, i) => (
            <div key={i} className="flex flex-wrap items-start gap-2 sm:gap-3">
              {flow.steps.map((step, j) => (
                <Fragment key={j}>
                  {j > 0 && <Arrow label={j === 1 ? flow.label : undefined} />}
                  <span className="flex min-h-7 items-center">{step}</span>
                </Fragment>
              ))}
            </div>
          ))}
          <Chips items={branch.examples} className="bg-orange-300/70" />
          <Chips items={branch.notes} className="bg-green-300/70" />
        </div>
        {branch.children && (
          <>
            <Stem />
            <Tree branches={branch.children} />
          </>
        )}
      </li>
    ))}
  </ul>
);

export const TilgangurDiagram = () => (
  <figure className="flex flex-col">
    <p className="self-start rounded-xl bg-stone-800 px-3 py-1 font-archivo-black text-amber-50">
      Hvernig missa hlutir tilgang sinn?
    </p>
    <Stem />
    <Tree branches={BRANCHES} />
  </figure>
);
