import { DynamicLink } from "@/components/DynamicLink";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      {/* Header */}
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>
      {/* Internal links */}
      <DynamicLink
        href="/who"
        className="side-to-side-reverse animation-delay-2 group cursor-pointer bg-orange-300 px-3 py-1 rounded-xl ml-[10%] hover:bg-orange-400 transition-all duration-500"
      >
        <p className="text-xl">
          Hver <span className="group-hover:font-black">er</span> ég?
        </p>
      </DynamicLink>
      <DynamicLink
        href="/past"
        className="side-to-side-reverse animation-delay-1 group cursor-pointer bg-slate-300 px-3 py-1 rounded-xl mr-[30%] hover:bg-slate-400 transition-all duration-500"
      >
        <p className="text-xl">
          Hver <span className="group-hover:font-black">var</span> ég?
        </p>
      </DynamicLink>
      <DynamicLink
        href="/web"
        className="side-to-side group cursor-pointer bg-green-400 px-3 py-1 rounded-xl ml-[20%] hover:bg-green-500 transition-all duration-500"
      >
        <p className="text-xl">
          Ég geri <span className="group-hover:font-black">heimasíður</span>
        </p>
      </DynamicLink>
      {/* Seperator */}
      <div className="h-32"></div>
      {/* External links */}
      <DynamicLink
        href="https://www.studiogalid.is"
        className="side-to-side-reverse animation-delay-2 group cursor-pointer bg-blue-400 px-3 py-1 rounded-xl mr-[20%] hover:bg-blue-500 transition-all duration-500"
      >
        <p className="text-xl">
          Ég skapa <span className="group-hover:font-black">hugbúnað</span>
        </p>
      </DynamicLink>
      <DynamicLink
        href="https://www.instagram.com/atli_ad_hanna"
        className="side-to-side animation-delay-1 group cursor-pointer bg-red-400 px-3 py-1 rounded-xl ml-[30%] hover:bg-red-500 transition-all duration-500"
      >
        <p className="text-xl">
          Ég er <span className="group-hover:font-black">vöruhönnuður</span>
        </p>
      </DynamicLink>
      <DynamicLink
        href="https://www.instagram.com/atli_gisla"
        className="side-to-side-reverse group cursor-pointer bg-pink-400 px-3 py-1 rounded-xl mr-[40%] hover:bg-pink-500 transition-all duration-500"
      >
        <p className="text-xl">
          Ég á <span className="group-hover:font-black">Instagram</span>
        </p>
      </DynamicLink>
    </div>
  );
}
