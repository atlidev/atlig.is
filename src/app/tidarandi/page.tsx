import { DynamicLink } from "@/components/DynamicLink";

export default function Tidarandi() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-archivo-black">Tíðarandi</h1>
      <nav className="flex flex-col items-center gap-4 text-4xl font-archivo-black">
        <DynamicLink href="/tidarandi/-1" className="hover:underline">Verkefni -1</DynamicLink>
        <DynamicLink href="/tidarandi/0" className="hover:underline">Verkefni 0</DynamicLink>
        <DynamicLink href="/tidarandi/1" className="hover:underline">Verkefni 1</DynamicLink>
        <DynamicLink href="/tidarandi/2" className="hover:underline">Verkefni 2</DynamicLink>
      </nav>
    </div>
  );
}
