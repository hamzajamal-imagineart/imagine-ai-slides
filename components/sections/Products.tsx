/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

interface Product {
  title: string;
  body: string;
  img: string;
}

const PRODUCTS: Product[] = [
  {
    title: "Truly editable, top to bottom",
    body: "Every slide is built from real elements, text, shapes, charts, images, not renders. Click anything, change everything.",
    img: "/assets/slide-philosophy.png",
  },
  {
    title: "Pixel-perfect PPTX export",
    body: "Take your deck anywhere. The PowerPoint you download stays editable and looks exactly like what you made.",
    img: "/assets/documents.png",
  },
  {
    title: "Themes set the direction",
    body: "Pick a theme and every slide follows, palette, typography, and spacing land on-brand without touching a style panel.",
    img: "/assets/pick-style.png",
  },
  {
    title: "Edit your way",
    body: "Ask the agent for the change you want, or drag, resize, and restyle it yourself. Both work, your manual edits are preserved.",
    img: "/assets/edit-your-way.png",
  },
  {
    title: "A curated set of templates",
    body: "Start from hand-crafted templates and let AI fill the structure with your story instead of a blank first slide.",
    img: "/assets/templates.jpg",
  },
  {
    title: "Images that match your topic",
    body: "AI-generated visuals tailored to your content and placed where they belong, no stock-photo safari required.",
    img: "/assets/slide-botanical.png",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-16 md:py-24">
      <div className="container-page relative">
        <Reveal className="max-w-[720px] mb-12">
          <h2 className="font-display font-semibold capitalize text-content-primary tracking-[-0.5px] leading-[1.08] text-[clamp(30px,4vw,50px)]">
            Everything A Great Deck Needs. Nothing You Have To Fight.
          </h2>
          <p className="font-sans text-content-secondary text-[17px] leading-[1.7] mt-5 max-w-[56ch]">
            Generated slides aren&apos;t flat pictures, they&apos;re living documents you can reshape by prompt or by
            hand, then take anywhere.
          </p>
        </Reveal>

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
                  <img src={p.img} alt="" aria-hidden="true" loading="lazy" className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,34,83,0.14)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-content-primary tracking-[-0.3px] text-[clamp(20px,2vw,26px)] leading-[1.15]">
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
