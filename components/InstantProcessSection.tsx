'use client';

export default function InstantProcessSection() {
  return (
    <section id="videos" className="w-full py-16 lg:py-24 bg-surface border-t border-surface-container/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-tint text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">play_circle</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">BOOKING TUTORIAL</span>
          </div>
          <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-on-surface mb-3 tracking-tight">
            How to Book Your Instant Slot
          </h2>
          <p className="text-[16px] leading-[24px] text-on-surface-variant">
            Watch the video guide to follow the exact Nusuk booking sequence.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl border border-surface-container">
            <video
              className="h-full w-full object-contain"
              controls
              preload="metadata"
              poster="/images/mainpic.jpg"
              aria-label="Nusuk instant booking tutorial"
            >
              <source src="/videos/nusukinstantbooking.mp4" type="video/mp4" />
              Your browser does not support the video player.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
