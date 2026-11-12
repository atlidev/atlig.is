import { ReactNode } from "react";

type Branch = {
  title: string;
  subtitle?: string;
  diagram?: ReactNode;
  examples?: string[];
  notes?: string[];
  children?: Branch[];
};

const Scene = ({
  width = 260,
  height,
  label,
  children,
}: {
  width?: number;
  height: number;
  label: string;
  children: ReactNode;
}) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    className="max-w-full h-auto"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label={label}
  >
    {children}
  </svg>
);

const Arrow = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
  <path d={`M${x1} ${y}H${x2}m-7 -5l7 5-7 5`} />
);

const Words = ({
  x,
  y,
  lines,
  anchor = "start",
  size = 16,
  weight = 500,
}: {
  x: number;
  y: number;
  lines: string[];
  anchor?: "start" | "middle";
  size?: number;
  weight?: number;
}) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} textAnchor={anchor} fill="currentColor" stroke="none">
    {lines.map((line, i) => (
      <tspan key={line} x={x} dy={i ? size * 1.25 : 0}>
        {line}
      </tspan>
    ))}
  </text>
);

const Hanging = ({ x, y, text, size = 13 }: { x: number; y: number; text: string; size?: number }) => (
  <>
    <path d={`M${x} ${y}v17`} />
    <Words x={x} y={y + 32} lines={[text]} anchor="middle" size={size} weight={400} />
  </>
);

const star = (cx: number, cy: number, outer: number, inner: number, points: number) =>
  Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 ? inner : outer;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join("") + "Z";

const TextFlow = ({
  from,
  note,
  to,
  toNote,
  via,
  arrowStart = 104,
}: {
  from: string[];
  note?: string;
  to: string[];
  toNote?: string;
  via?: string;
  arrowStart?: number;
}) => (
  <Scene
    width={236}
    height={via ? 66 : 52}
    label={`${[...from, note].filter(Boolean).join(" ")} → ${[...to, toNote].filter(Boolean).join(" ")}${via ? ` (${via})` : ""}`}
  >
    <Words x={0} y={22} lines={from} size={18} />
    {note && <Words x={0} y={42} lines={[note]} size={14} weight={400} />}
    <Arrow x1={arrowStart} x2={160} y={28} />
    {via && <Hanging x={(arrowStart + 160) / 2} y={28} text={via} size={14} />}
    <Words x={170} y={to.length > 1 || toNote ? 22 : 34} lines={to} size={18} />
    {toNote && <Words x={170} y={42} lines={[toNote]} size={14} weight={400} />}
  </Scene>
);

const Sprengjur = () => (
  <Scene height={68} label="Heilt → sprungið (hiti, hraði, orka)">
    <circle cx={20} cy={28} r={12} />
    <Arrow x1={44} x2={164} y={28} />
    <Hanging x={104} y={28} text="hiti, hraði, orka" />
    <path d={star(200, 28, 22, 12, 9)} />
  </Scene>
);

const Deadline = () => (
  <Scene height={90} label="Gilt → … þegar klukkan slær">
    <circle cx={104} cy={20} r={12} />
    <path d="M104 13v7h6" />
    <circle cx={20} cy={52} r={12} />
    <Arrow x1={44} x2={164} y={52} />
    <Hanging x={104} y={52} text="klukkan slær!" />
    <Words x={180} y={58} lines={["…"]} size={22} />
  </Scene>
);

const Forn = () => (
  <Scene height={78} label="Ferningur → þríhyrningur, með hring → … sem greinist frá örinni og sameinast henni aftur">
    <rect x={10} y={12} width={26} height={26} rx={2} />
    <Arrow x1={48} x2={212} y={25} />
    <path d="M240 10l16 28h-32z" />
    <path d="M66 25V62H80" />
    <circle cx={96} cy={62} r={8} />
    <Arrow x1={112} x2={140} y={62} />
    <Words x={146} y={68} lines={["…"]} size={18} />
    <path d="M172 62H194V25" />
  </Scene>
);

const WearAndTear = () => (
  <Scene height={58} label="Hlutur slitnar smám saman niður í ekkert">
    <rect x={4} y={8} width={14} height={44} rx={2} />
    <Arrow x1={34} x2={62} y={30} />
    <rect x={78} y={22} width={14} height={30} rx={2} />
    <Arrow x1={108} x2={136} y={37} />
    <rect x={152} y={36} width={12} height={16} rx={2} />
    <Arrow x1={180} x2={208} y={44} />
    <path d="M224 52h22" strokeWidth={3} />
  </Scene>
);

const BRANCHES: Branch[] = [
  {
    title: "Tærleiki",
    children: [
      {
        title: "Hreinlæti",
        subtitle: "spítali",
        diagram: <TextFlow from={["tært"]} note="sterílt" arrowStart={58} to={["óhreint"]} via="+ óhrein" />,
        examples: ["klósett pappír", "bleyja", "nál + sprauta", "kleenex"],
        notes: ["traust", "vernd", "fjarlægja rusl úr líkama"],
      },
      {
        title: "Matarumbúðir",
        diagram: <TextFlow from={["tært"]} note="hreint" arrowStart={58} to={["opið"]} via="+ opnun" />,
        examples: ["kjöt", "ostur", "krukkur", "áldósir"],
        notes: ["næringargildi", "auglýsing", "vernd (airtight)", "aldrei bara pappi, alltaf plast eða ál"],
      },
      {
        title: "Umbúðir",
        diagram: <TextFlow from={["tært"]} note="án eiganda" arrowStart={80} to={["opið"]} toNote="þitt" />,
        examples: ["iphone", "innsigli", "umslag"],
        notes: ["vernd", "ritual (∅→1)", "traust", "auglýsing"],
      },
    ],
  },
  {
    title: "Sprengjur",
    diagram: <Sprengjur />,
    examples: ["bensín", "byssukúlur", "sprengjur", "flugeldar", "loftpúði", "kerti", "piñata"],
    notes: ["orka → hreyfing", "ritual / spectacle"],
  },
  {
    title: "Deadline",
    diagram: <Deadline />,
    examples: ["samningar", "skilti", "auglýsingar", "plaggöt", "tíska", "hlutir"],
    notes: ["upplýsingar fyrir þig", "upplýsingar frá þér"],
  },
  {
    title: "Fórn",
    diagram: <Forn />,
    examples: ["3d prent stoð", "cutoffs", "mót"],
    notes: ["fórna sér fyrir tilgang"],
  },
  {
    title: "Wear & tear",
    diagram: <WearAndTear />,
    examples: ["bremsur", "dekk", "föt", "skór"],
    notes: ["hægt ferli", "hvert skipti missir smá tilgang", "núningur", "hybrid: fjölnota + einnota"],
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
          {branch.diagram}
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
