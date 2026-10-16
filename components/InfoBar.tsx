'use client';

export default function InfoBar() {
  return (
    <section className="w-full bg-primary/5 border-y border-primary/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="text-center mb-6">
          <h2 className="text-[24px] leading-[32px] font-semibold text-on-surface mb-2">
            Prayer Time Slots
          </h2>
          <p className="text-[14px] leading-[20px] text-on-surface-variant">
            Separate timings for men and women pilgrims
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Men's Schedule */}
          <div className="bg-surface-card rounded-xl p-6 shadow-sm border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-tint flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px] text-primary">male</span>
              </div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-on-surface">
                Men&apos;s Slots
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-emerald-tint/40 rounded-lg">
                <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">schedule</span>
                <div>
                  <p className="text-[14px] leading-[20px] font-semibold text-on-surface">
                    Dhuhr to Isha
                  </p>
                  <p className="text-[12px] leading-[16px] text-on-surface-variant">
                    Afternoon prayer until evening prayer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-tint/40 rounded-lg">
                <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">schedule</span>
                <div>
                  <p className="text-[14px] leading-[20px] font-semibold text-on-surface">
                    Midnight to Fajr
                  </p>
                  <p className="text-[12px] leading-[16px] text-on-surface-variant">
                    12:00 AM until dawn prayer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Women's Schedule */}
          <div className="bg-surface-card rounded-xl p-6 shadow-sm border-2 border-accent-gold-deep/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-gold-light flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px] text-accent-gold-deep">female</span>
              </div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-on-surface">
                Women&apos;s Slots
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-accent-gold-light/40 rounded-lg">
                <span className="material-symbols-outlined text-[20px] text-accent-gold-deep mt-0.5">schedule</span>
                <div>
                  <p className="text-[14px] leading-[20px] font-semibold text-on-surface">
                    Fajr to Dhuhr
                  </p>
                  <p className="text-[12px] leading-[16px] text-on-surface-variant">
                    Dawn prayer until afternoon prayer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-accent-gold-light/40 rounded-lg">
                <span className="material-symbols-outlined text-[20px] text-accent-gold-deep mt-0.5">schedule</span>
                <div>
                  <p className="text-[14px] leading-[20px] font-semibold text-on-surface">
                    Isha to Midnight (2 AM)
                  </p>
                  <p className="text-[12px] leading-[16px] text-on-surface-variant">
                    Evening prayer until 2:00 AM, then men&apos;s slots begin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
