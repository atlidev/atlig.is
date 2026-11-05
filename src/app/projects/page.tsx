import { DynamicLink } from "@/components/DynamicLink";
import Image from "next/image";

type Project = {
  title: string;
  year: string;
  description: string;
  image: string;
};

// Filler data – replace with real projects and images
const PROJECTS: Project[] = [
  {
    title: "Koozy",
    year: "2025",
    description:
      "Einangrandi drykkjarhulsa úr endurunnu ullarfilti. Hönnuð til að halda drykknum köldum og höndunum heitum.",
    image: "/images/koozy.jpeg",
  },
  {
    title: "Bekkur",
    year: "2024",
    description:
      "Einfaldur útibekkur úr íslensku lerki, settur saman án skrúfa með hefðbundnum trésmíðasamskeytum.",
    image: "/images/bekkur.jpeg",
  },
  {
    title: "Kebab-standur",
    year: "2024",
    description:
      "Frumgerð af samanbrjótanlegum matarbás fyrir götumatarmarkaði. Kemst fyrir í venjulegum fólksbíl.",
    image: "/images/kebab.jpeg",
  },
  {
    title: "Bjórglas",
    year: "2023",
    description:
      "Handblásið glas með breiðum botni og þunnri brún, unnið í samstarfi við glerlistamann.",
    image: "/images/bjor.jpeg",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="cursor-pointer bg-amber-200 font-archivo-black px-4 py-2 rounded-2xl hover:bg-amber-300 transition-all duration-500"
      >
        <h1 className="text-5xl">Atli Schweitz Gíslason</h1>
      </DynamicLink>

      <div className="bg-amber-50 p-4 rounded-xl opacity-80 flex flex-col gap-6 max-w-6xl w-full">
        <h2 className="text-3xl font-archivo-black">Verkefni</h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article key={project.title} className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-xl font-archivo-black">{project.title}</h3>
                <span className="text-sm text-neutral-600">{project.year}</span>
              </div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
