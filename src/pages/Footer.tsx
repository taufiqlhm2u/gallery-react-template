import React from "react";

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "Youtube", href: "https://www.youtube.com/" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-100 px-2 sm:px-4 md:px-6">
      <div
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[36px] md:rounded-[40px] bg-[#1d1d1d] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 h-auto min-h-[450px] md:min-h-[550px] flex flex-col justify-between shadow-xl shadow-black/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
      >
        {[
          "top-4 left-4 sm:top-6 sm:left-6",
          "top-4 right-4 sm:top-6 sm:right-6",
          "bottom-4 left-4 sm:bottom-6 sm:left-6",
          "bottom-4 right-4 sm:bottom-6 sm:right-6",
        ].map((position, idx) => (
          <span
            key={idx}
            className={`absolute ${position} h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-linear-to-br from-neutral-300 via-neutral-400 to-neutral-600 shadow-[0_1px_3px_rgba(0,0,0,0.6)] z-20`}
          />
        ))}

        <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Social Media Section - appears first on mobile */}
          <div className="flex flex-col items-start gap-6 order-1 md:order-2 md:items-end">
            <p className="text-sm text-neutral-500">© 2026</p>
            <span className="text-xs uppercase tracking-wider text-neutral-600">
              Website Social Media
            </span>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm sm:text-base text-white opacity-90 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-100"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Created By Section - appears second on mobile */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-3xl font-light text-white tracking-tight">
              Created by
            </h2>
            <a
              href="mailto:client@mysite.com"
              className="group mt-4 inline-flex items-center gap-1 text-base sm:text-lg text-orange-500 transition-colors duration-300 ease-out hover:text-orange-400"
            >
              <a href="https://www.linkedin.com/in/taufiqul-hakim-6644843a2" target="_blank" className="relative">
                Taufiqul Hakim
                <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 ease-out group-hover:scale-x-0" />
                <span className="absolute left-0 -bottom-0.5 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-2 left-1/2 z-0 w-full -translate-x-1/2 translate-y-[20%] text-center font-black leading-none text-white opacity-[0.08] sm:opacity-[0.06] text-[22vw] sm:text-[16vw] md:text-[14rem] lg:text-[16rem] whitespace-nowrap"
        >
          Gallery
        </div>
      </div>
    </footer>
  );
};

export default Footer;