export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const A = "/assets/avatars";

export const TESTIMONIALS: Testimonial[] = [
  { quote: "AI Slides saved me hours of busywork, and the results made me a bit of a hero on campus.", name: "Christina Salazar", title: "Language Development Teacher", avatar: `${A}/christina-salazar.jpg` },
  { quote: "Whatever I make, AI Slides is where my most ambitious ideas come together, clearly and beautifully.", name: "Jordan Crawford", title: "Founder", avatar: `${A}/jordan-crawford.jpg` },
  { quote: "AI Slides transformed how our team collaborates and freed our startup from clunky slides and docs.", name: "Young Zhao", title: "Founder", avatar: `${A}/young-zhao.jpg` },
  { quote: "AI Slides nails the balance between deep customization and a genuinely fast workflow.", name: "Jeff Shuck", title: "Principal Consultant", avatar: `${A}/jeff-shuck.jpg` },
  { quote: "This tool is fantastic. I've basically retired my old slide software, it feels ancient now.", name: "Denise Penn", title: "Social Media Creator", avatar: `${A}/denise-penn.jpg` },
  { quote: "AI Slides removed our website bottleneck; pages now ship fast, on brand, and ready to go.", name: "Darby Rollins", title: "Founder & Educator", avatar: `${A}/darby-rollins.jpg` },
  { quote: "AI Slides changed how I build presentations, and I can turn any of them into a standalone site in a few clicks.", name: "Matthew Fried", title: "Coach", avatar: `${A}/matthew-fried.jpg` },
  { quote: "We used AI Slides to help raise our pre-seed round, and its website builder lets us test ideas fast.", name: "Aibek Yegemberdin", title: "Founder", avatar: `${A}/aibek.jpg` },
  { quote: "I tell everyone about AI Slides. It's a genuine magic moment every time. Thank you for building it.", name: "Zohar Urian", title: "Consultant", avatar: `${A}/zohar-urian.jpg` },
  { quote: "AI Slides saves time and spares the headache. The hours lost to formatting are simply gone.", name: "Antony Mayfield", title: "Founder", avatar: `${A}/anthony-mayfield.jpg` },
  { quote: "AI Slides completely changed how we build high-impact proposals, like a designer and strategist in one.", name: "Stacie Sussman", title: "Revenue Consultant", avatar: `${A}/stacie-sussman.jpg` },
  { quote: "AI Slides has become essential to everything I do. I can't picture prepping an important talk without it.", name: "Aaron Baughman", title: "Educator", avatar: `${A}/aaron-baughman.jpg` },
  { quote: "AI Slides brought back my love for making presentations, it's fun, fast, and the output is stunning.", name: "Loree Lash-Valencia", title: "Fractional CRO", avatar: `${A}/loree-lash-valencia.jpg` },
  { quote: "It's never been simpler to build a presentation quickly and share it with the world.", name: "Dean Fiacco", title: "Consultant", avatar: `${A}/dean-fiacco.jpg` },
  { quote: "No more blank-page dread. AI Slides helps me structure ideas and present them cleanly and professionally.", name: "Hernán Giambastiani", title: "Founder", avatar: `${A}/hernan.jpg` },
  { quote: "AI Slides handles the technical side of design so I can focus on creating great learning experiences.", name: "Christian Yao", title: "Educator", avatar: `${A}/christian-yao.jpg` },
  { quote: "Co-creating with AI to instantly visualize my ideas is exactly why I keep coming back to AI Slides.", name: "Matthias Rossini", title: "Founder", avatar: `${A}/matthias-rossini.jpg` },
];
