import { DynamicLink } from "@/components/DynamicLink";

export default function TidarandiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full overflow-x-clip flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="absolute lg:fixed top-4 left-4 cursor-pointer bg-amber-200 font-archivo-black text-xl px-3 py-1 rounded-xl hover:bg-amber-300 transition-all duration-500"
      >
        Atli
      </DynamicLink>
      {children}
    </div>
  );
}
