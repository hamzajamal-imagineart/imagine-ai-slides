/* eslint-disable @next/next/no-img-element */
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/primitives/Reveal";

function CtaBand() {
  return (
    <section id="install" className="relative overflow-hidden pt-24 md:pt-32 pb-72 md:pb-[36rem] text-center">
      <img
        src="/assets/ai-slides-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container-page relative">
        <Reveal>
          <span id="pricing" className="sr-only">Start Creating</span>
          <h2 className="font-display font-medium capitalize text-white tracking-[-0.5px] leading-[1.05] text-[clamp(26px,4.2vw,54px)] whitespace-nowrap mx-auto">
            Where Good Ideas Come To Life
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <ButtonLink href="#" variant="white" size="lg">
              Start For Free
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
              "linear-gradient(180deg, #ffffff 0%, #CDDAFA 14%, #A8D1FF 30%, #AFE7FC 54%, #E8EEFC 82%, #ffffff 100%)",
          }}
        >
          <Products />
          <LogoStrip />
          <Features />
        </div>
        <Testimonials />
        <FaqSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
