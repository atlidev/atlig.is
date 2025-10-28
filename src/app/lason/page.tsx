import { DynamicLink } from "@/components/DynamicLink";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>
      <DynamicLink
        href="/who"
        className="cursor-pointer bg-green-400 px-3 py-1 rounded-xl ml-[20%] hover:bg-green-500 transition-all duration-500"
      >
        <p className="text-xl">Hver er ég?</p>
      </DynamicLink>
      <a className="cursor-pointer bg-green-400 px-3 py-1 rounded-xl ml-[20%] hover:bg-green-500 transition-all duration-500">
        <p className="text-xl">Ég geri heimasíður</p>
      </a>
      <a className="cursor-pointer bg-blue-400 px-3 py-1 rounded-xl mr-[20%] hover:bg-blue-500 transition-all duration-500">
        <p className="text-xl">Ég skapa hugbúnað</p>
      </a>
      <a className="cursor-pointer bg-red-400 px-3 py-1 rounded-xl ml-[30%] hover:bg-red-500 transition-all duration-500">
        <p className="text-xl">Ég er vöruhönnuður</p>
      </a>
      <DynamicLink
        href="https://instagram.com/atli_gisla"
        className="cursor-pointer bg-pink-400 px-3 py-1 rounded-xl mr-[40%] hover:bg-pink-500 transition-all duration-500"
      >
        <p className="text-xl">Ég á Instagram</p>
      </DynamicLink>
    </div>
  );
}
