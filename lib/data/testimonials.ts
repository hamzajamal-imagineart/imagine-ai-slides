export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I typed two sentences about our Q3 roadmap and presented the deck the same afternoon. The PPTX export was so clean my team assumed a designer made it.",
    name: "Sara K.",
    title: "Product Manager",
  },
  {
    quote:
      "The outline step is the quiet killer feature. I reorder three bullets, pick a theme, and the structure lands right every time.",
    name: "Daniel M.",
    title: "Strategy Consultant",
  },
  {
    quote: "I teach three classes. AI Slides turns my lesson notes into decks while I make coffee.",
    name: "Amina R.",
    title: "High-school Teacher",
  },
  {
    quote:
      "Asked the agent to 'make slide 5 less wordy and add a chart' and it just did it. No hunting through menus, and my earlier edits stayed put.",
    name: "Jonas L.",
    title: "Startup Founder",
  },
  {
    quote:
      "The generated images actually match the topic instead of looking like generic stock. That alone saves me an hour per deck.",
    name: "Priya S.",
    title: "Growth Marketer",
  },
  {
    quote:
      "Exported to PowerPoint fully expecting broken layouts. Every text box was exactly where it should be. Sold.",
    name: "Tom W.",
    title: "Sales Lead",
  },
];
