import { DynamicLink } from "@/components/DynamicLink";

export default function Web() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>

      <div className="bg-amber-50 p-4 rounded-xl opacity-80 flex flex-col gap-6">
        <h2 className="text-3xl font-archivo-black">
          Websites I have designed and built through{" "}
          <span className="font-sans">studio galid</span>
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-archivo-black">ProRehab</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-archivo-black">Supersport!</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-archivo-black">HealthPack</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-archivo-black">Studio Galið</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-archivo-black">AtliG.is</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
