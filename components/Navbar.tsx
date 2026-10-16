'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-card/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-surface-container overflow-hidden">
            <Image src="/images/nusuklogo.svg" alt="Nusuk Guide" width={44} height={44} className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[20px] leading-[28px] font-semibold tracking-tight text-primary">NUSUK GUIDE</span>
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-accent-gold-light text-accent-gold-deep border border-secondary-container">
                RAWDAH
              </span>
            </div>
            <span className="text-[11px] leading-[16px] font-semibold text-on-surface-variant">
              Rawdah permit guidance
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <a
            href="#home"
            className="px-3.5 py-2 bg-primary-container text-on-primary-container rounded-lg text-[15px] leading-[20px] font-semibold shadow-sm"
          >
            Rawdah Guide
          </a>
          <a href="#videos" className="px-3.5 py-2 rounded-lg text-[15px] leading-[20px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
            Video Tutorial
          </a>
          <a href="#faq" className="px-3.5 py-2 rounded-lg text-[15px] leading-[20px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
            FAQ &amp; Rules
          </a>
          <a href="#contact" className="px-3.5 py-2 rounded-lg text-[15px] leading-[20px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
            Support
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Selector - desktop only */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-accent-gold-deep">language</span>
            <span className="text-[13px] leading-[18px] font-medium text-primary font-semibold">EN</span>
            <span className="text-outline-variant text-[11px]">/</span>
            <span className="text-[13px] leading-[18px] font-medium hover:text-primary cursor-pointer transition-colors">العربية</span>
            <span className="text-outline-variant text-[11px]">/</span>
            <span className="text-[13px] leading-[18px] font-medium hover:text-primary cursor-pointer transition-colors">اردو</span>
          </div>

          {/* Contact badge */}
          <a className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-tint text-primary text-[11px] leading-[16px] font-semibold" href="tel:+923229603359">
            <span className="material-symbols-outlined text-[16px]">call</span>+92 322 9603359
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="lg:hidden text-on-surface-variant hover:text-primary"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface-card border-t border-surface-container px-6 pb-6">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-3 text-[15px] font-semibold text-primary">Rawdah Guide</a>
          <a href="#videos" onClick={() => setIsOpen(false)} className="block py-3 text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Video Tutorial</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block py-3 text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">FAQ &amp; Rules</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-3 text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Support</a>
          <div className="mt-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-accent-gold-deep">language</span>
            <span className="text-[13px] font-semibold text-primary">EN</span>
            <span className="text-outline-variant text-[11px]">/</span>
            <span className="text-[13px] font-medium text-on-surface-variant">العربية</span>
            <span className="text-outline-variant text-[11px]">/</span>
            <span className="text-[13px] font-medium text-on-surface-variant">اردو</span>
          </div>
        </div>
      )}
    </header>
  );
}
