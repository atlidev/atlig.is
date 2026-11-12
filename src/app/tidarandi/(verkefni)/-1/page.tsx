import Image from "next/image";
import { Article } from "@/components/Article";

export default function VerkefniMinus1() {
  return (
    <Article>
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-archivo-black">Tíðarandi</h1>
        <h2 className="text-3xl font-archivo-black">Verkefni -1</h2>
      </header>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Hugleiðing</h3>
        <p>
          Einnota. Er þetta kannski einnota hugleiðing? Hvað gerist þegar búið
          er að lesa hana? Hún verður dregin í rusl möppuna eftir vikulangt líf
          í downloads möppunni. Þegar ég er útskrifaður og það er verið að rýma
          mig úr kerfum Canvas og Uglunnar, hverfur hún af gagnaþjónunum sem
          Canvas notar. En þessi hugleiðing er bara rafræn. Þegar henni er eytt
          er einfaldlega núllstillt plássið sem hún tekur upp og pláss er
          grisjað fyrir næsta niðurhal. Þvílík hringrás!
        </p>
        <p>
          Svona virkar (því miður) raunheimurinn ekki. Einnota hlutum er hent í
          ruslið þar sem heilmikil vinna fer í að skutla þeim milli staða og
          grafa þá. Sumir hlutir eru svo heppnir að upplifa endurvinnslu en það
          er að mestu leyti skáldsaga. Þegar hlutur verður til er mjög erfitt að
          umbreyta honum í annann.
        </p>
        <p>
          Einnota hlutir eru áhugaverðir á marga ása. Uppfinning þeirra er
          frekar nýleg. Það var ekki fyrir löngu að fólk skilaði flöskum sínum
          beint aftur til Ölgerðar Egils Skallagríms, þar sem þær voru þvegnar
          og nýttar aftur. Það eru líka ákveðnar efnahags ákvarðinar sem gerir
          þetta kleyft. Vegna de facto þrælahalds þriðja heimsins og
          miðstýringu alla gjaldmiðla út frá tilfinningum forseta Bandaríkjana
          er ódýrara að framleiða flösku í Asíu og ferja hanna milli heimsálfa
          en að borga Íslendingi 3000 krónur á tímann til þess að skola flöskur.
          Kapítalískar uppfinningar eins og gjaldmiðlamisræmi (e. unequal
          exchange) og ytri áhrif - að fyrirtæki þurfa ekki að pæla í áhrifum
          vara þeirra eftir sölu - (e. externalities) eru grunnstoð einnota
          gripa.
        </p>
        <p>
          Þessi hugvekja mætti mér í oktobér í fyrra. Ég keypti lengju af
          plastglösum og fyllti fyrsta glasið með kranavatni og svelgdi þorsta
          mínum. Svo þegar ég hefði tæmt það, þá fann ég enga ástæðu til þess að
          henda því. Ég fyllti það næsta dag og svo næsta og notaði glasið
          svoleiðis í tvo mánuði. Ég hefði getað hent því. Mér leið stundum eins
          og glasið starði á mig sorgaraugum og grátbeið mig: “Hentu mér! Hentu
          mér! Ég er plastglas og ég á ekki skilið að vera notað oft”
        </p>
        <p>
          Af hverju leið mér svona? Ég fæ aldrei þessa tilfinningu þegar ég
          horfi á kaffibollana mína eða leirtauið.
        </p>
        <figure className="flex flex-col gap-2">
          <Image
            src="/images/verkefni_minus1/sprengjur.png"
            alt="BADGER kjarnorkusprengingin í Nevada, 1953"
            width={1140}
            height={969}
            className="w-full h-auto rounded-xl"
          />
          <figcaption className="flex flex-col text-sm">
            <span>Fig 1. Sprengjur eru dæmi um einnota hluti</span>
            <span className="text-xs">
              Mynd: National Nuclear Security Administration / Nevada Site
              Office, um{" "}
              <a
                href="https://en.wikipedia.org/wiki/Nuclear_explosion#/media/File:Operation_Upshot-Knothole_-_Badger_001.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Wikimedia Commons
              </a>
            </span>
          </figcaption>
        </figure>
      </section>
    </Article>
  );
}
