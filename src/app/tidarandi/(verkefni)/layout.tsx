import { DynamicLink } from "@/components/DynamicLink";

const LINKS = [
  { href: "/tidarandi", label: "Tíðarandi", className: "text-xl" },
  { href: "/tidarandi/-1", label: "Verkefni -1" },
  { href: "/tidarandi/0", label: "Verkefni 0" },
  { href: "/tidarandi/1", label: "Verkefni 1" },
  { href: "/tidarandi/2", label: "Verkefni 2" },
];

export default function VerkefniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="absolute top-4 left-24 right-4 min-h-9 flex flex-wrap items-center content-center justify-center gap-x-3 text-base lg:top-20 lg:left-4 lg:right-auto lg:min-h-0 lg:flex-col lg:items-start lg:content-normal lg:justify-start lg:gap-1">
        {LINKS.map(({ href, label, className }) => (
          <DynamicLink
            key={href}
            href={href}
            className={`inline-grid justify-items-center lg:justify-items-start hover:font-bold ${className ?? ""}`}
          >
            <span aria-hidden="true" className="col-start-1 row-start-1 invisible font-bold lg:hidden">
              {label}
            </span>
            <span className="col-start-1 row-start-1">{label}</span>
          </DynamicLink>
        ))}
      </nav>
      {children}
    </>
  );
}
