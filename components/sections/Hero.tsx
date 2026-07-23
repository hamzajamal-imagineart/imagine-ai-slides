/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/primitives/Reveal";

function HeroShowcase() {
  return (
    <div className="relative w-full lg:w-[124%]">
      {/* soft brand glow */}
      <div
        aria-hidden="true"
        className="hero-glow absolute -inset-16 rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(44,136,247,0.4), transparent 60%), radial-gradient(circle at 70% 75%, rgba(177,121,251,0.34), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* hot air balloon card peeking behind, bottom-right */}
        <div className="absolute -bottom-12 right-0 w-[58%] rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,34,83,0.18)] rotate-[3deg] -z-10 hidden sm:block">
          <img src="/assets/hotairballoon.png" alt="" aria-hidden="true" className="block w-full h-auto" />
        </div>

        {/* main deck card */}
        <div className="relative rounded-[26px] border border-border-primary bg-white shadow-[0_30px_70px_rgba(0,34,83,0.20)] overflow-hidden rotate-[-1.5deg]">
          <img
            src="/assets/marketing-tactics.png"
            alt="Editing a presentation about marketing tactics in AI Slides"
            className="block w-full h-auto"
          />
          {/* floating chip */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-2xl border border-border-primary bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,34,83,0.14)]">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-brand-gradient">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[13px] font-medium text-content-primary">Generated In Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          <div className="flex-1 lg:w-[44%] min-w-0">
            <Reveal delay={80}>
              <h1 className="font-display font-medium capitalize text-content-primary tracking-[-1px] leading-[1.04] text-[clamp(34px,4.6vw,56px)]">
                Create Beautiful Presentations Online With AI
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-sans text-content-secondary text-[18px] leading-[1.7] max-w-[44ch] mt-6 tracking-[-0.005em]">
                Describe your idea and AI Slides walks you through simple steps to a polished, professional
                presentation. Trusted by thousands of professionals worldwide.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <ButtonLink href="#install" variant="brand" size="lg">
                  Start For Free
                </ButtonLink>
                <ButtonLink href="#features" variant="white" size="lg">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Video
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} direction="right" className="flex-1 lg:w-[56%] w-full min-w-0">
            <HeroShowcase />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
