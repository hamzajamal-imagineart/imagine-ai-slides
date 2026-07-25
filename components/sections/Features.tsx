import { Reveal } from "@/components/primitives/Reveal";

interface Feature {
  eyebrow: string;
  heading: string;
  body: string;
  img: string;
  pillBg: string;
  pillText: string;
}

const FEATURES: Feature[] = [
  {
    eyebrow: "Step 01",
    heading: "Tell AI what you need",
    body: "Describe the topic, audience, and length in plain language, or drop in files worth presenting.",
    img: "/assets/step-tell.png",
    pillBg: "#e7eefe",
    pillText: "#0740df",
  },
  {
    eyebrow: "Step 02",
    heading: "Shape the outline",
    body: "Review the proposed outline and pick a theme to set the design direction. In a hurry? It can go straight to slides.",
    img: "/assets/step-refine.png",
    pillBg: "#fdecee",
    pillText: "#d62c6b",
  },
  {
    eyebrow: "Step 03",
    heading: "Generate, then make it yours",
    body: "Watch the deck stream in slide by slide. Ask the agent for changes, or click any element and edit it by hand.",
    img: "/assets/step-generate.png",
    pillBg: "#ecebfb",
    pillText: "#5b3fd6",
  },
  {
    eyebrow: "Step 04",
    heading: "Export pixel-perfect",
    body: "Download an editable PPTX that matches what you see on screen, or grab a PDF and per-slide images.",
    img: "/assets/step-export.png",
    pillBg: "#e6f6ef",
    pillText: "#0a7a52",
  },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 74 90" fill="none" className={`shrink-0 w-8 md:w-[64px] h-auto ${className}`} aria-hidden="true">
      <g clipPath="url(#clip0_324_21801)">
        <path d="M48.9539 27.4933C33.0953 23.9312 30.9209 21.0469 28.2342 0C25.5476 21.0416 23.3732 23.9312 7.51462 27.4933C23.3732 31.0555 25.5476 33.9398 28.2342 54.9867C30.9209 33.9451 33.0953 31.0555 48.9539 27.4933Z" fill="white" />
        <path d="M73.657 72.493C60.2731 70.2256 58.4379 68.3831 56.1735 54.9863C53.9092 68.388 52.0691 70.2256 38.6901 72.493C52.074 74.7603 53.9092 76.6029 56.1735 89.9996C58.4379 76.5979 60.278 74.7603 73.657 72.493Z" fill="white" />
        <path d="M73.657 13.125C73.657 11.1598 72.0659 9.5625 70.0992 9.5625C68.1365 9.5625 66.5414 11.1598 66.5414 13.125C66.5414 15.0903 68.1365 16.6876 70.0992 16.6876C72.0618 16.6876 73.657 15.0903 73.657 13.125Z" fill="white" />
        <path d="M7.51251 63.3311C7.51251 61.3658 5.92131 59.7686 3.95461 59.7686C1.99201 59.7686 0.396812 61.3658 0.396812 63.3311C0.396812 65.2963 1.99201 66.8936 3.95461 66.8936C5.91731 66.8936 7.51251 65.2963 7.51251 63.3311Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_324_21801">
          <rect width="74" height="90" fill="white" transform="matrix(-1 0 0 1 74 0)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Features() {
  return (
    <section id="how-it-works" className="pt-6 md:pt-8 pb-20 md:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center justify-center gap-3 md:gap-8">
            <Sparkle className="scale-x-[-1]" />
            <h2 className="font-display font-medium capitalize text-content-primary tracking-[-1px] leading-[1.02] text-center max-w-[18ch] text-[clamp(36px,5.4vw,68px)]">
              How To Generate Presentations With AI
            </h2>
            <Sparkle />
          </div>
          <p className="font-sans text-content-secondary text-[17px] leading-[1.6] text-center max-w-[46ch] mx-auto mt-6">
            Four steps, and only the first one is required to be yours.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-28">
          {FEATURES.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={f.eyebrow}
                className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20`}
              >
                <Reveal direction={reversed ? "right" : "left"} className="flex-1 min-w-0">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[12px] font-semibold tracking-[0.4px] uppercase"
                    style={{ background: f.pillBg, color: f.pillText }}
                  >
                    {f.eyebrow}
                  </span>
                  <h3 className="font-display font-semibold capitalize text-content-primary tracking-[-0.5px] leading-[1.08] mt-5 text-[clamp(28px,3.4vw,44px)] max-w-[15ch]">
                    {f.heading}
                  </h3>
                  <p className="font-sans text-content-secondary text-[17px] leading-[1.65] mt-5 max-w-[46ch]">{f.body}</p>
                </Reveal>

                <Reveal direction={reversed ? "left" : "right"} className="flex-1 w-full">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-primary shadow-[0_20px_50px_rgba(0,34,83,0.12)]">
                    <img src={f.img} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
