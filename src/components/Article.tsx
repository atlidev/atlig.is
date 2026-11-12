import { ReactNode } from "react";

const easedFade =
  "transparent, rgb(0 0 0 / 0.16) 2rem, rgb(0 0 0 / 0.5) 4rem, rgb(0 0 0 / 0.84) 6rem, black 8rem, black calc(100% - 8rem), rgb(0 0 0 / 0.84) calc(100% - 6rem), rgb(0 0 0 / 0.5) calc(100% - 4rem), rgb(0 0 0 / 0.16) calc(100% - 2rem), transparent";

export const Article = ({ children }: { children: ReactNode }) => (
  <article lang="is" className="relative isolate w-full max-w-2xl flex flex-col gap-6 mt-16 p-6 md:p-10 text-lg leading-relaxed">
    <div
      style={{
        maskImage: `linear-gradient(to right, ${easedFade}), linear-gradient(to bottom, ${easedFade})`,
        maskComposite: "intersect",
      }}
      className="absolute -inset-16 -z-10 backdrop-blur-md"
    />
    <div className="absolute -inset-4 -z-10 bg-[#c4d0e2]/70 blur-2xl" />
    {children}
  </article>
);
