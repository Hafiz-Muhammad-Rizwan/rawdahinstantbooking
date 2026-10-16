'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full -mt-20 overflow-hidden bg-inverse-surface text-on-primary">
      {/* Background Image with Scrim & Chandelier Grandeur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/rawdahinstantbooking/images/mainpic.jpg"
          alt="Masjid Al-Nabawi"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/60 to-inverse-surface/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/55 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-20 lg:pt-52 lg:pb-28 flex flex-col justify-between">
        {/* Main Headline & Narrative */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-[40px] leading-[48px] md:text-[52px] md:leading-[60px] lg:text-[56px] lg:leading-[64px] font-bold text-on-primary tracking-tight">
            How to Book Your <span className="text-secondary-fixed">Rawdah Al-Sharifah</span> Permit
          </h1>
          <p className="text-[18px] leading-[28px] text-surface-container-highest max-w-2xl leading-relaxed">
            A tranquil, step-by-step interactive walkthrough for securing your blessed prayer reservation via the official Nusuk app without confusion, stress, or delays.
          </p>
        </div>

        {/* Quick Action CTAs & Stat Row */}
        <div className="mt-8 pt-8 flex flex-wrap items-center gap-4">
          <a
            href="#account-setup"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary text-[15px] leading-[20px] font-semibold shadow-md hover:bg-primary transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">touch_app</span>
            Start Account Setup
          </a>
          <a
            href="#instant-process"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-surface-card/15 backdrop-blur-md text-on-primary text-[15px] leading-[20px] font-semibold hover:bg-surface-card/25 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary-fixed">play_circle</span>
            Watch Video Guide
          </a>
        </div>
      </div>
    </section>
  );
}
