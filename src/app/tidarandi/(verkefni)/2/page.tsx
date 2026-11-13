import { Article } from "@/components/Article";
import { TilgangurDiagram } from "@/components/TilgangurDiagram";

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
        <TilgangurDiagram />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Samhengi og Lykilinnsýn</h3>
        <p className="font-bold">Samhengi</p>
        <p>
          Þetta verkefni er mjög global. Þetta er rannsókn í alla þá litlu
          hluti sem mynda daglegt líf. Allar litlu hefðinnar sem við tökum ekki
          einu sinni eftir eins og lyktin af eldspýtum, að fylgjast með
          flugeldum, að fá bólusetningu eða að opna sultu krukku.
        </p>
        <p className="font-bold">Key Insights</p>
        <ol className="list-decimal pl-6 flex flex-col gap-2">
          <li>
            Stór „rituals“ eru línulegt ferli þar sem manneskja umbreytist í
            aðra þar sem ekki er hægt að snúast til baka. Með þessari hefð
            fyglja oft hlutir sem fara í sömu línulegu átt
          </li>
          <li>
            Mikið um einnota umbúðir snýst um tærleika. Það sem tengist
            líkamanum: matur, spítala, eða baðherbergið snýst um að fá það
            hreina inn og það óhreina út. Með þessu fylgja rituals kringum
            einnota vörur, að enginn annar hafi komist að og skemmt vöruna -
            eða að við séum þau sem fáum að gera hana óhreina.
          </li>
          <li>
            Fyrir vörur og gripi, snúast umbúðir um tærleika á eignarhaldi. Með
            því að opna pakkann ert þú sá sem eignast hann. Með því að opna
            bréfið ert þú sá eini sem hefur lesið það.
          </li>
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Mikilvægi</h3>
        <p>
          Ef samfélagið á að breytast í hringrásarsamfélag, þá er mikilvægt að
          greina einnota hluti: hlutina sem koma mest í veg fyrir svoleiðis
          samfélag akkúrat núna.
        </p>
      </section>
    </Article>
  );
}
