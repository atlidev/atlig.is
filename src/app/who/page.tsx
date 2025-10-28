import { DynamicLink } from "@/components/DynamicLink";

export default function Who() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>
    </div>
  );
}
