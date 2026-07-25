/* eslint-disable @next/next/no-img-element */
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Templates } from "@/components/sections/Templates";
import { Testimonials } from "@/components/sections/Testimonials";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/primitives/Reveal";

function CtaBand() {
  return (
    <section id="install" className="relative overflow-hidden pt-24 md:pt-32 pb-72 md:pb-[36rem] text-center">
      <img src="/assets/ai-slides-bg.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      <div className="container-page relative">
        <Reveal>
          <span id="pricing" className="sr-only">Get Started</span>
          <h2 className="font-display font-medium capitalize text-white tracking-[-0.5px] leading-[1.05] text-[clamp(28px,4.4vw,56px)] max-w-[18ch] mx-auto">
            Your Next Presentation Is One Prompt Away
          </h2>
          <p className="font-sans text-white/70 text-[17px] leading-[1.6] mt-5 max-w-[42ch] mx-auto">
            Skip the blank slide. Describe the deck and start presenting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <ButtonLink href="https://computer-125.animagine.ai/computer/agent/slides" variant="white" size="lg">
              Generate your deck
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #DCEEFF 14%, #BFE4FF 30%, #CFF0FF 54%, #EAF5FF 82%, #ffffff 100%)",
          }}
        >
          {/* artistic film-grain over the sky gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 mix-blend-soft-light opacity-[0.5]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "140px 140px",
            }}
          />
          <div className="relative z-10">
            <Products />
            <Stats />
          </div>
        </div>
        <Features />
        <Templates />
        <Testimonials />
        <FaqSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
