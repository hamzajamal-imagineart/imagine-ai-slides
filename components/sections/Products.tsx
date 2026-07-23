/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

interface Product {
  title: string;
  body: string;
  img: string;
}

const PRODUCTS: Product[] = [
  { title: "Presentations", body: "Transform a rough idea into a refined slide deck, then export to PPT, PDF, and more.", img: "/assets/presentations.png" },
  { title: "Social Media", body: "Produce platform-ready social posts, correctly sized, on-style, and ready to publish.", img: "/assets/social-media.png" },
  { title: "Documents", body: "Well-structured, visual documents, from quick one-pagers to detailed white papers, ready to share.", img: "/assets/documents.png" },
  { title: "Websites", body: "Spin up a shareable, hosted website in minutes, with no developers required.", img: "/assets/websites.png" },
  { title: "API", body: "Build with AI Slides programmatically. Automate production, connect your tools, and scale your content.", img: "/assets/api.png" },
  { title: "Graphics", body: "Design and refine custom, on-brand graphics, from infographics to illustrations, with our AI design agent.", img: "/assets/ai-graphics.png" },
];

export function Products() {
  return (
    <section id="products" className="relative py-16 md:py-24">
      <div className="container-page relative">
        {/* decorative clouds — subtly overlapping behind the last cards */}
        <div className="absolute inset-x-0 -bottom-28 md:-bottom-40 flex justify-between items-end pointer-events-none select-none z-0">
          <img src="/assets/clouds.png" alt="" aria-hidden="true" className="w-32 sm:w-52 md:w-[30rem] h-auto" />
          <img src="/assets/clouds.png" alt="" aria-hidden="true" className="w-32 sm:w-52 md:w-[30rem] h-auto scale-x-[-1]" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <div className="h-full flex items-center gap-5 rounded-3xl bg-white p-6 md:p-7">
                <div className="w-[38%] max-w-[190px] shrink-0">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,34,83,0.14)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold capitalize text-content-primary tracking-[-0.3px] text-[clamp(22px,2.2vw,30px)]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-content-secondary text-[15px] leading-[1.6] mt-2">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
