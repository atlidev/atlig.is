import { DynamicLink } from "@/components/DynamicLink";
import Image from "next/image";

export default function Who() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>
      <div className="bg-amber-50 p-4 rounded-lg opacity-80 flex flex-col gap-6">
        <h2 className="text-3xl font-archivo-black">
          What am I currently doing?
        </h2>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-archivo-black">Education</h2>
          <Image
            src="/assets/lhi.trans.png"
            alt="Listaháskóli Íslands Logo"
            width={300}
            height={200}
            className="my-4"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-archivo-black">Work</h2>
          <Image
            src="/assets/kara.svg"
            alt="Kara Connect Logo"
            width={300}
            height={200}
            className="my-4"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-archivo-black">Independent</h2>
          <span className="text-2xl">studio galid</span>
        </div>
      </div>
    </div>
  );
}
