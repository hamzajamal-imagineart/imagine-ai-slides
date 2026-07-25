/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

const TEMPLATES = ["Etching", "Editorial", "Pixel", "Vellum", "Dossier", "Whiteboard", "Sketch"];
const THEMES = [
  { name: "Midnight", from: "#1e2a5e", to: "#0b1020" },
  { name: "Sunset", from: "#f97316", to: "#be185d" },
  { name: "Forest", from: "#166534", to: "#052e16" },
  { name: "Paper", from: "#f5f0e6", to: "#d9cdb8" },
];

export function Templates() {
  return (
    <section className="py-16 md:py-24 border-t border-border-primary overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <Reveal className="lg:w-[45%]">
            <h2 className="font-display font-semibold capitalize text-content-primary tracking-[-0.5px] leading-[1.08] text-[clamp(30px,4vw,50px)]">
              Set The Direction. Keep The Control.
            </h2>
            <p className="font-sans text-content-secondary text-[17px] leading-[1.7] mt-5 max-w-[52ch]">
              Start from a curated template, then pick a theme, the palette, typography, and spacing carry through every
              slide it generates.
            </p>
          </Reveal>
          <Reveal direction="right" className="lg:w-[55%] w-full">
            <div className="rounded-2xl border border-border-primary overflow-hidden bg-white shadow-[0_24px_60px_rgba(0,34,83,0.12)]">
              <img
                src="/assets/pick-style.png"
                alt="Choosing a visual style and template in AI Slides"
                className="block w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* templates marquee */}
      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee">
          {[...TEMPLATES, ...TEMPLATES, ...TEMPLATES, ...TEMPLATES].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="shrink-0 rounded-2xl border border-border-primary bg-surface-primary px-8 py-5 font-display font-medium text-content-primary text-[20px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* theme chips */}
      <div className="container-page">
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {THEMES.map((th) => (
            <span
              key={th.name}
              className="inline-flex items-center gap-2.5 rounded-full border border-border-primary bg-white pl-2 pr-4 py-2"
            >
              <span
                className="w-6 h-6 rounded-full"
                style={{ backgroundImage: `linear-gradient(135deg, ${th.from}, ${th.to})` }}
              />
              <span className="font-sans font-medium text-content-primary text-[14px]">{th.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
