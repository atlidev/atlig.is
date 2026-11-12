import Image from "next/image";
import { Article } from "@/components/Article";

export default function Verkefni0() {
  return (
    <Article>
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-archivo-black">Tíðarandi</h1>
        <h2 className="text-3xl font-archivo-black">Verkefni 0: Design Literature Review</h2>
      </header>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Fortíð</h3>
        <p>
          Bhar eru litlir bollar sem eru notaðir víða í Indlandi sérstaklega í
          Kolkata borg. Hefðin er þúsunda ára gömul og hefðin er að handa
          þessum bollum. Þetta er víða talið fyrsta einnota mál í
          mannkynssögunni.
        </p>
        <Image
          src="/images/verkefni0/bhar.png"
          alt="Bhar leirbollar"
          width={678}
          height={452}
          className="max-w-full h-auto rounded-xl"
        />
        <p>
          Ölgerðin Egill Skallagrímsson er stofnuð árið 1913. Fyrstu árin eru
          einkennd af flöskuskorti þar sem flöskur voru dýrar í framleiðslu og
          gátu verið jafn dýrar og innihaldið í þeim.
        </p>
        <Image
          src="/images/verkefni0/olgerdin_1913.png"
          alt="Ölgerðin Egill Skallagrímsson"
          width={311}
          height={292}
          className="max-w-full h-auto rounded-xl"
        />
        <p>
          Árið 1970 er enn engin opinber sorp aðstaða og Ölgerðin þarf sjálf að
          halda um endurkaup á drykkjarmálum við viðskiptavini. SORPA er
          stofnuð 1988 og Endurvinnslan stofnuð 1989.
        </p>
        <Image
          src="/images/verkefni0/olgerdin_1970.png"
          alt="Auglýsing frá Ölgerðinni í Morgunblaðinu, 1970"
          width={788}
          height={331}
          className="max-w-full h-auto rounded-xl"
        />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-archivo-black">Samtíð</h3>
        <p>
          „Overly packaged foods“ er verkefni eftir Emil Söderberg. Hann
          gagnrýnir sóun frá umbúðum matarpakkninga með því að sér pakka inn
          hverju einasta hrísgrjóni. Þetta er blanda af satíru, húmor,
          vitundarvakningu og ádeilu.
        </p>
        <Image
          src="/images/verkefni0/overpackaged_1.png"
          alt="Overpackaged Foods eftir Emil Söderberg"
          width={460}
          height={293}
          className="max-w-full h-auto rounded-xl"
        />
        <Image
          src="/images/verkefni0/overpackaged_2.png"
          alt="Overpackaged Foods eftir Emil Söderberg"
          width={570}
          height={270}
          className="max-w-full h-auto rounded-xl"
        />
        <p>
          „This is temporary“ er verkefni eftir Shay Castel. Það snýst frekar
          að „planned obsolesence“ og líftíma raftækja. Þar hefur hann sett
          raftæki í búning sem brotnar niður í náttúru. Verkefnið snýst um að
          tímabundnar vöru eiga að líta út fyrir að vera tímabundnar og þá
          helst gera það á náttúruvænan máta.
        </p>
        <Image
          src="/images/verkefni0/this_is_temporary_1.png"
          alt="This is temporary eftir Shay Castel"
          width={818}
          height={477}
          className="max-w-full h-auto rounded-xl"
        />
        <Image
          src="/images/verkefni0/this_is_temporary_2.png"
          alt="This is temporary eftir Shay Castel"
          width={818}
          height={673}
          className="max-w-full h-auto rounded-xl"
        />
      </section>

      <section className="flex flex-col gap-4 text-base">
        <h3 className="text-2xl font-archivo-black">Heimildarskrá</h3>
        <p>
          Al Jazeera. „Kolkata’s Age Old Tradition of ‘Bhar’ Clay Cups of
          Tea.“ 26. október 2016.{" "}
          <a href="https://www.aljazeera.com/gallery/2016/10/26/kolkatas-age-old-tradition-of-bhar-clay-cups-of-tea" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://www.aljazeera.com/gallery/2016/10/26/kolkatas-age-old-tradition-of-bhar-clay-cups-of-tea
          </a>
          .
        </p>
        <p>
          Castel, Shay. „Shay Castel’s Biodegradable Series of Everyday Objects
          Challenges Consumerist Habits.“ designboom, 13. ágúst 2017.{" "}
          <a href="https://www.designboom.com/design/shay-castel-this-is-temporary-plastic-china-products-08-13-2017" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://www.designboom.com/design/shay-castel-this-is-temporary-plastic-china-products-08-13-2017
          </a>
          .
        </p>
        <p>
          Emil Söderberg. „Overpackaged Foods.“ Emil Söderberg.{" "}
          <a href="https://www.emilsoderberg.com/overpackaged-foods" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://www.emilsoderberg.com/overpackaged-foods
          </a>
          .
        </p>
        <p>
          Endurvinnslan hf. „Um okkur.“{" "}
          <a href="https://endurvinnslan.is/um-okkur/" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://endurvinnslan.is/um-okkur/
          </a>
          .
        </p>
        <p>
          „HREINT LAND BETRA LAND!“ Frjáls verslun, 3. tbl., 1. mars 1991,
          30–31.{" "}
          <a href="https://timarit.is/page/3172714" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://timarit.is/page/3172714
          </a>
          .
        </p>
        <p>
          „Konunglegt ölgerðarhús í heila öld.“ Kópavogur, 7. tbl., 5. júlí
          2013, 8–9.{" "}
          <a href="https://timarit.is/page/5895447" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://timarit.is/page/5895447
          </a>
          .
        </p>
        <p>
          „Auglýsing.“ Morgunblaðið, 268. tbl., 24. nóvember 1970, 20.{" "}
          <a href="https://timarit.is/page/1416556" target="_blank" rel="noopener noreferrer" className="underline break-all">
            https://timarit.is/page/1416556
          </a>
          .
        </p>
      </section>
    </Article>
  );
}
