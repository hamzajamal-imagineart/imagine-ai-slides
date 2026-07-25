import { Reveal } from "@/components/primitives/Reveal";

const STATS = [
  { value: "1", label: "prompt in", body: "A sentence or two is enough. Files welcome." },
  { value: "3–12", label: "slides per generation", body: "Pick a range that fits the story; add more in the editor." },
  { value: "3", label: "export formats", body: "Editable PPTX, shareable PDF, per-slide images." },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <span className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary">
            The Numbers
          </span>
          <div className="font-display font-semibold text-content-primary tracking-[-1px] leading-[1] mt-4 text-[clamp(64px,10vw,128px)]">
            ~100s
          </div>
          <p className="font-display font-medium text-content-primary text-[clamp(18px,2.2vw,26px)] mt-2">
            from a single prompt to a finished deck*
          </p>
          <p className="font-sans text-content-secondary text-[16px] leading-[1.6] max-w-[44ch] mx-auto mt-5">
            Made for the night before the meeting, describe the presentation and it&apos;s ready before your coffee is.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border-primary bg-white p-7">
                <div className="font-display font-semibold text-content-primary text-[40px] leading-none tracking-[-0.5px]">
                  {s.value}
                </div>
                <div className="font-sans font-medium text-content-primary text-[15px] mt-2">{s.label}</div>
                <p className="font-sans text-content-secondary text-[14px] leading-[1.55] mt-2">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="font-sans text-content-tertiary text-[12.5px] leading-[1.5] mt-6 max-w-[60ch]">
          *Cumulative generation time. Decks heavy on AI-generated images can take a little longer.
        </p>
      </div>
    </section>
  );
}
