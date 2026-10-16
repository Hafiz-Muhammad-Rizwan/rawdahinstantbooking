'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-card shadow-[0_-1px_12px_rgba(0,0,0,0.03)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white border border-surface-container overflow-hidden">
                <Image src="/images/nusuklogo.svg" alt="" width={32} height={32} className="h-full w-full object-contain" />
              </div>
              <span className="text-[20px] font-semibold tracking-tight text-primary">NUSUK GUIDE</span>
            </div>
            <p className="max-w-sm text-[14px] leading-6 text-on-surface-variant">
              Clear, practical guidance for preparing your Rawdah Al-Sharifah permit booking.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[15px] font-semibold text-on-surface">Explore</h4>
            <ul className="space-y-2 text-[14px] text-on-surface-variant">
              <li><a className="transition-colors hover:text-primary" href="#home">Home</a></li>
              <li><a className="transition-colors hover:text-primary" href="#videos">Video Tutorial</a></li>
              <li><a className="transition-colors hover:text-primary" href="#faq">FAQ &amp; Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[15px] font-semibold text-on-surface">Contact</h4>
            <ul className="space-y-2 text-[14px] text-on-surface-variant">
              <li><a className="transition-colors hover:text-primary" href="tel:+923229603359">+92 322 9603359</a></li>
              <li><a className="break-all transition-colors hover:text-primary" href="mailto:hafizmuhammadrizwan359@gmail.com">hafizmuhammadrizwan359@gmail.com</a></li>
              <li><a className="transition-colors hover:text-primary" href="https://www.linkedin.com/in/hafiz-muhammad-rizwan-33328a374/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-surface-container pt-4 text-[11px] text-on-surface-variant md:flex-row">
          <p>© {currentYear} Nusuk Guide. Independent guidance resource.</p>
          <a className="transition-colors hover:text-primary" href="#contact">Contact support</a>
        </div>
      </div>
    </footer>
  );
}
