/* eslint-disable @next/next/no-img-element */

const CH = "https://chatlyai.app";
const APPS = "https://computer-125.animagine.ai/computer/apps";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Features",
    links: [
      { label: "AI Chat", href: `${CH}/` },
      { label: "AI Search Engine", href: `${CH}/ai-search-engine` },
      { label: "AI Image Generator", href: `${CH}/ai-image-generator` },
      { label: "AI Document Generator", href: `${CH}/ai-document-generator` },
    ],
  },
  {
    heading: "AI Models",
    links: [
      { label: "Gemini 3 Pro", href: `${CH}/models/gemini-3-pro` },
      { label: "Gemini 3 Flash", href: `${CH}/models/gemini-3-flash` },
      { label: "GPT-5.2 Pro", href: `${CH}/models/gpt-5-2-pro` },
      { label: "GPT-5.2", href: `${CH}/models/gpt-5-2` },
      { label: "GPT-5.1", href: `${CH}/models/gpt-5-1` },
      { label: "GPT-5", href: `${CH}/models/gpt-5` },
      { label: "Claude Opus 4.5", href: `${CH}/models/claude-opus-4-5` },
      { label: "Claude 4.5 Sonnet", href: `${CH}/models/claude-sonnet-4-5` },
      { label: "Haiku 4.5", href: `${CH}/models/claude-haiku-4-5` },
      { label: "Grok 4", href: `${CH}/models/grok-4` },
      { label: "Kimi K2", href: `${CH}/models/kimi-k2` },
      { label: "30+ AI Models", href: `${CH}/models` },
    ],
  },
  {
    heading: "AI Translation Apps",
    links: [
      { label: "Translate English to Chinese", href: `${APPS}/english-to-chinese-translator` },
      { label: "Translate English to Spanish", href: `${APPS}/english-to-spanish-translator` },
      { label: "Translate English to Japanese", href: `${APPS}/english-to-japanese-translator` },
      { label: "Translate English to Urdu", href: `${APPS}/english-to-urdu-translator` },
      { label: "Translate English to Hindi", href: `${APPS}/english-to-hindi-translator` },
      { label: "Translate Chinese to English", href: `${APPS}/chinese-to-english-translator` },
    ],
  },
  {
    heading: "Blogs",
    links: [
      { label: "ChatGPT Alternatives", href: `${CH}/blog/chatgpt-alternatives` },
      { label: "GPT-5.2 Overview", href: `${CH}/blog/gpt-5-2-overview` },
      { label: "Gemini 2.5 Pro vs Gemini 3 Pro", href: `${CH}/blog/gemini-3-pro-vs-gemini-2-5-pro-cost-analysis` },
      { label: "JSON Prompting Guide", href: `${CH}/blog/json-prompting-guide` },
      { label: "Best System Prompts", href: `${CH}/blog/best-system-prompts-for-everyone` },
      { label: "Letter to Principal", href: `${CH}/blog/how-to-write-a-letter-to-principal` },
      { label: "Type Exponents on Chromebook", href: `${CH}/blog/how-to-write-exponents-in-google-docs` },
      { label: "How to Write a Press Communique", href: `${CH}/blog/how-to-write-a-press-communique` },
      { label: "Write Like a Human with ChatGPT", href: `${CH}/blog/write-like-a-human-with-chatgpt` },
      { label: "Understanding Interval Notation", href: `${CH}/blog/understanding-interval-notation` },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Help & Support", href: `${CH}/support` },
      { label: "Plans & Pricing", href: `${CH}/` },
      { label: "Chatly Help Center", href: "https://help.chatlyai.app/" },
      { label: "Blog", href: `${CH}/blog` },
      { label: "News", href: `${CH}/news` },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "https://help.chatlyai.app/policies/privacy-policy" },
      { label: "Terms & Conditions", href: "https://help.chatlyai.app/policies/terms-and-service" },
    ],
  },
];

const SOCIALS: { title: string; href: string; path: string }[] = [
  { title: "X (Twitter)", href: "https://x.com/chatlyhq", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.432-8.5L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { title: "Instagram", href: "https://www.instagram.com/chatlyhq/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { title: "YouTube", href: "https://www.youtube.com/@chatlyhq", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" },
];

export function SiteFooter() {
  return (
    <footer
      className="overflow-x-hidden text-white"
      style={{ background: "linear-gradient(180deg, #2d2f6b 0%, #8291d4 100%)" }}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12 flex-wrap">
          {/* Brand + app badges */}
          <div className="w-full md:w-56 shrink-0">
            <span className="inline-flex items-center gap-2">
              <img src="/assets/imagine-logo.svg" alt="ImagineArt" className="w-[26px] h-[26px] rounded-[8px] shrink-0" />
              <span className="font-display font-semibold text-[19px] tracking-[-0.4px] text-white">AI&nbsp;Slides</span>
            </span>
            <p className="text-[13px] leading-[1.6] text-white/55 mt-4">
              A product by{" "}
              <a href="https://vyro.ai/" target="_blank" rel="noopener noreferrer" className="text-white/90 font-medium hover:text-white">
                Vyro
              </a>
              . Trusted by thousands of professionals worldwide.
            </p>
            <a
              href="https://www.imagine.art/computer/agent/slides"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 mt-5 rounded-[10px] bg-white text-[#0b0f1a] font-sans text-[13.5px] font-medium hover:bg-white/90 transition-colors"
            >
              Get Started for Free
            </a>
          </div>

          {/* Link grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 flex-1 min-w-0">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <span className="block text-[13px] font-semibold text-white mb-5">{col.heading}</span>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[13px] leading-[1.4] text-white/75 hover:text-white transition-colors no-underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-5 border-t border-white/[0.15] flex-wrap">
          <div className="flex items-center gap-0.5 flex-wrap">
            <span className="text-[12px] text-white/70">© 2026 Vyro. All rights reserved.</span>
            <button type="button" className="text-[12px] text-white/70 px-3 bg-transparent border-none cursor-pointer hover:text-white transition-colors">
              Manage Cookie Preferences
            </button>
          </div>
          <div className="flex items-center gap-0.5">
            {SOCIALS.map((s) => (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title} aria-label={s.title}
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.12] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
