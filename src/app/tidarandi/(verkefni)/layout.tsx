import { DynamicLink } from "@/components/DynamicLink";

export default function VerkefniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="absolute top-20 left-4 hidden lg:flex flex-col gap-1 text-base">
        <DynamicLink href="/tidarandi" className="hover:font-bold">Tíðarandi</DynamicLink>
        <DynamicLink href="/tidarandi/-1" className="hover:font-bold">Verkefni -1</DynamicLink>
        <DynamicLink href="/tidarandi/0" className="hover:font-bold">Verkefni 0</DynamicLink>
        <DynamicLink href="/tidarandi/1" className="hover:font-bold">Verkefni 1</DynamicLink>
        <DynamicLink href="/tidarandi/2" className="hover:font-bold">Verkefni 2</DynamicLink>
      </nav>
      {children}
    </>
  );
}
