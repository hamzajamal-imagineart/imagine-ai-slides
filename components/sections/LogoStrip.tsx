/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

const LOGOS = [
  { name: "Adobe", src: "/assets/logos/adobe.png" },
  { name: "Amazon", src: "/assets/logos/amazon.png" },
  { name: "Los Angeles Times", src: "/assets/logos/latimes.png" },
  { name: "Stanford", src: "/assets/logos/stanford.png" },
  { name: "Vercel", src: "/assets/logos/vercel.png" },
  { name: "Zoom", src: "/assets/logos/zoom.png" },
];

export function LogoStrip() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-page">
        <Reveal>
          <p className="text-center font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary">
            Your Next Big Idea Is In Great Company
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {LOGOS.map((l) => (
              <img
                key={l.name}
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="h-6 md:h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-200 [filter:brightness(0)]"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
