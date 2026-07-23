/* eslint-disable @next/next/no-img-element */

const BASE = "https://www.imagine.art";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "AI Studios",
    links: [
      { label: "Image Studio", href: `${BASE}/image` },
      { label: "Video Studio", href: `${BASE}/video` },
      { label: "Audio Studio", href: `${BASE}/audio-studio` },
      { label: "Film Studio", href: `${BASE}/ai-film-studio` },
      { label: "Workflow", href: `${BASE}/flow` },
      { label: "Enterprise", href: `${BASE}/business/enterprise` },
      { label: "Teams", href: `${BASE}/teams-plan` },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "AI Image Generator", href: `${BASE}/ai-image-generator` },
      { label: "AI Video Generator", href: `${BASE}/ai-video-generator` },
      { label: "AI Audio Generator", href: `${BASE}/audio-studio` },
      { label: "AI Text-to-Speech", href: `${BASE}/audio/text-to-speech` },
      { label: "AI Music Generator", href: `${BASE}/audio/music/elevenlabs-music` },
    ],
  },
  {
    heading: "Apps",
    links: [
      { label: "Video Translate", href: `${BASE}/apps/video-translate` },
      { label: "HeyGen Avatar", href: `${BASE}/apps/heygen-avatar` },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { label: "Contact Sales", href: `${BASE}/teams-plan/contact-us` },
      { label: "Book a Demo", href: "https://cal.com/team/imagineart/imagineart-customer-assist" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discord", href: "https://discord.com/invite/z7kjUyvAbv" },
      { label: "Twitter / X", href: "https://twitter.com/Imagine_aiart" },
      { label: "Instagram", href: "https://www.instagram.com/imagineartofficial" },
    ],
  },
  {
    heading: "Pricing",
    links: [{ label: "See Plans", href: `${BASE}/subscription` }],
  },
];

const SOCIALS: { title: string; href: string; path: string }[] = [
  { title: "Twitter / X", href: "https://twitter.com/Imagine_aiart", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.432-8.5L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { title: "Discord", href: "https://discord.com/invite/z7kjUyvAbv", path: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.03.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" },
  { title: "Instagram", href: "https://www.instagram.com/imagineartofficial", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { title: "YouTube", href: "https://www.youtube.com/@imagineartofficial", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" },
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
          <div className="w-full md:w-52 shrink-0">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-[8px] bg-white/15 shrink-0" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="13" rx="2.5" stroke="#fff" strokeWidth="2" />
                  <path d="M8 21h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display font-semibold text-[19px] tracking-[-0.4px] text-white">AI&nbsp;Slides</span>
            </span>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href="#" aria-label="Download on the App Store" className="inline-block">
                <img src="/assets/appstore.svg" alt="Download on the App Store" className="h-10 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play" className="inline-block">
                <img src="/assets/googleplay.png" alt="Get it on Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </div>

          {/* Link grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 flex-1 min-w-0">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <span className="block text-[13px] font-semibold text-white mb-5">{col.heading}</span>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[13px] leading-[1.4] text-white/75 hover:text-white transition-colors no-underline">
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

      {/* Big faint wordmark watermark */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pt-6 select-none pointer-events-none overflow-hidden">
        <div className="font-display font-semibold text-white/[0.10] leading-none tracking-[-0.04em] whitespace-nowrap text-[clamp(64px,17vw,220px)]">
          AI Slides
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-5 border-t border-white/[0.15] flex-wrap">
          <div className="flex items-center gap-0.5 flex-wrap">
            <span className="text-[12px] text-white/70">© 2026 AI Slides, Inc. All rights reserved.</span>
            <button type="button" className="text-[12px] text-white/70 px-3 bg-transparent border-none cursor-pointer hover:text-white transition-colors">
              Manage Cookie Preferences
            </button>
          </div>
          <div className="flex items-center gap-0.5">
            {SOCIALS.map((s) => (
              <a key={s.title} href={s.href} title={s.title} aria-label={s.title}
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
