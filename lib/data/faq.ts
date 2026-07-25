export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Is the generated deck actually editable?",
    a: "Yes. Every slide is built from real elements, text, shapes, charts, and images, not flat renders. Click anything and change it, or ask the agent, and your manual edits are preserved.",
  },
  {
    q: "What formats can I export to?",
    a: "Editable PowerPoint (PPTX), shareable PDF, and per-slide images (PNG). The PowerPoint you download stays editable and looks exactly like what you made.",
  },
  {
    q: "How long does a deck take to generate?",
    a: "Around 100 seconds from a single prompt to a finished deck. Decks heavy on AI-generated images can take a little longer.",
  },
  {
    q: "Can I bring my own material?",
    a: "Yes. A sentence or two is enough to start, and you can drop in files worth presenting.",
  },
  {
    q: "How do templates and themes work?",
    a: "Start from a curated template to set the structure, then pick a theme. The palette, typography, and spacing carry through every slide it generates.",
  },
  {
    q: "Can I change just one slide?",
    a: "Yes. Ask the agent to change a specific slide, or click any element and edit it by hand. Your earlier edits stay put.",
  },
  {
    q: "How many slides can it generate?",
    a: "Between 3 and 12 slides per generation. Pick a range that fits the story, and add more in the editor.",
  },
];
