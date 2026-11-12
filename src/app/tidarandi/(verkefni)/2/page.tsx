import Image from "next/image";
import { Article } from "@/components/Article";

export default function Verkefni2() {
  return (
    <Article>
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-archivo-black">Tíðarandi</h1>
        <h2 className="text-3xl font-archivo-black">Verkefni 2: Rannsókn og relevance</h2>
      </header>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Rannsóknaráætlun</h3>
        <p className="font-bold">Lýsing á viðfangsefni</p>
        <p>
          Heimurinn glýmir við hrikalega stórann vanda. Fjallgarður sorps.
          Haugur sem er óímyndanlega stór af efni sem við höfum tekið út úr
          jörðinni og skiljum eftir okkur á yfirborðinu, urðum eða brennum.
          Þessi fjallgarður var aðallega myndaður á síðustu 100 árum út af
          plasti, línulegri hönnun og framleiðslu - ríkjandi hugmyndafræði
          hönnunar og framleiðslu nú til dags.
        </p>
        <p>
          Samfélagið, stofnanir og hönnuðir stefna nú að hugmyndafræði
          hringrásar: þar sem hlutir eru deildir, endurnýttir, gerðir við eða
          endurunnir. Jarðfastur þröskuldur að þessu samfélagi eru einnota
          hlutir. Þeir eru holdgervi línulegra hönnunar þar sem eftir notkun -
          eftir að þeir hafi sinnt sínu hlutverki - missa þeir tilgang sinn og
          verða tilgangslausir og þ.a.l. sorp.
        </p>
        <p>
          Því vill ég rannsaka og kortleggja einnota hluti. Hvaða iðnaði þeir
          tilheyra, hvaða hlutverk þeir hafa og hvernig þeir missa það.
          Hvernig er hægt að skipta þeim út fyrir fjölnota hluti sem eiga
          heima í hringrásarhagkerfi?
        </p>
        <p className="font-bold">Rannsóknarspurning</p>
        <p>Einnota hlutir. Hvernig missa hlutir tilgang sinn?</p>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Frumrannsóknir</h3>
        <Image
          src="/images/here_diagram.jpg"
          alt="Skýringarmynd úr frumrannsóknum"
          width={1581}
          height={2056}
          className="w-full h-auto rounded-xl"
        />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Samhengi og Lykilinnsýn</h3>
        <p className="font-bold">Samhengi</p>
        <p>global overview of single use</p>
        <p className="font-bold">Key Insights</p>
        <ol className="list-decimal pl-6">
          <li>Rituals</li>
          <li>Purity</li>
          <li>Ownership</li>
          <li>Information</li>
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Mikilvægi</h3>
        <p>lorem ipsum.</p>
      </section>
    </Article>
  );
}
