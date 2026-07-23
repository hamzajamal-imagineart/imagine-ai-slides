"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="customers" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display font-semibold capitalize text-content-primary tracking-[-1px] leading-[1.05] text-center mx-auto max-w-[18ch] text-[clamp(34px,5vw,64px)]">
            Join The Teams Rethinking How They Create
          </h2>
        </Reveal>
      </div>

      {/* full-bleed carousel */}
      <Reveal delay={120}>
        <div
          ref={trackRef}
          className="mt-12 md:mt-16 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-5 md:scroll-px-10 px-5 md:px-10"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              data-card
              className="snap-start shrink-0 w-[86vw] sm:w-[420px] rounded-3xl bg-[#eef1fb] p-7 md:p-8"
            >
              <blockquote className="font-sans text-content-primary text-[17px] leading-[1.55] m-0 min-h-[84px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover shrink-0 bg-white ring-2 ring-white"
                />
                <span className="flex flex-col">
                  <span className="text-[15px] font-medium text-content-primary leading-tight">{t.name}</span>
                  <span className="text-[13px] text-content-secondary leading-tight mt-0.5">{t.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <div className="container-page">
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-border-secondary flex items-center justify-center text-content-primary hover:bg-primary-100/[0.04] transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-border-secondary flex items-center justify-center text-content-primary hover:bg-primary-100/[0.04] transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
