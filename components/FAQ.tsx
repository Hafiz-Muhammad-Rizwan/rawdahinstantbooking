'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "Why are all calendar slots grayed out when I open the app?",
    a: "Rawdah permits are not released continuously; they open in centralized weekly batches (ordinarily on Friday afternoons KSA time). In between release waves, days remain gray. Turn on app push notifications and check 5 minutes before scheduled release times."
  },
  {
    q: "Why are Rawdah slots always unavailable?",
    a: "Unavailable slots usually mean the release window has not started, demand is high, or another pilgrim has taken the slot. Check the Nusuk slots opening time today, keep your profile ready, and refresh only around the announced release window."
  },
  {
    q: "What is the Nusuk Rawdah booking trick for the 20-second timing rule?",
    a: "The guide's timing method is to prepare before the minute changes, then tap at :00, :20, or :40 when a slot appears. This is a practical timing tip, not a guarantee; permits are issued only by the official Nusuk app."
  },
  {
    q: "Can I book for my elderly parents using my phone?",
    a: "Yes. You can add them under 'Companions' in your Nusuk profile before slot release. Ensure their Saudi Visa or Umrah Visa is active. Note that male and female family members will be assigned separate entry queues and timings."
  },
  {
    q: "What if my OTP text message is delayed on my international SIM?",
    a: "Purchase a local Saudi eSIM (STC, Mobily, or Zain) at the airport upon arrival, or log in via hotel Wi-Fi beforehand. Once logged in, the Nusuk app maintains your session for up to 14 days without requiring repeated SMS OTPs."
  },
  {
    q: "What happens if I miss my allocated time window?",
    a: "Marshals cannot scan expired QR codes at the gate. If you miss your slot, the system marks it as unutilized, and you will have to wait for the next open cycle. Please plan to be at Gate 38 or Gate 24 at least 20 minutes before your slot begins."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-surface border-t border-surface-container/60">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-tint text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">help</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">FAQ &amp; RULES</span>
          </div>
          <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-on-surface mb-3 tracking-tight">
            Rawdah Booking FAQ &amp; Nusuk Permit Timing
          </h2>
          <p className="text-[16px] leading-[24px] text-on-surface-variant">
            Solutions to real-time challenges pilgrims encounter during slot releases.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-card rounded-xl border border-surface-container shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors"
                >
                  <span className="text-[16px] leading-[22px] font-semibold text-on-surface pr-4">
                    {faq.q}
                  </span>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-surface-container text-[14px] leading-[22px] text-on-surface-variant">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* App Download Banner CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[22px] leading-[30px] font-bold mb-1">
              Get the Official Nusuk App
            </h3>
            <p className="text-[14px] leading-[20px] text-surface-container-highest max-w-md">
              Only permits booked through Nusuk are recognized by Ministry gate controllers at the Prophet&apos;s Mosque.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface-card text-on-surface hover:bg-surface-container transition-colors shadow-xs"
              href="#"
            >
              <span className="material-symbols-outlined text-primary text-[24px]">phone_iphone</span>
              <div className="text-left">
                <p className="text-[10px] text-on-surface-variant font-medium leading-none">Apple Store</p>
                <p className="text-[13px] text-on-surface font-bold leading-tight">iOS Download</p>
              </div>
            </a>
            <a
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface-card text-on-surface hover:bg-surface-container transition-colors shadow-xs"
              href="#"
            >
              <span className="material-symbols-outlined text-primary text-[24px]">smart_toy</span>
              <div className="text-left">
                <p className="text-[10px] text-on-surface-variant font-medium leading-none">Google Play</p>
                <p className="text-[13px] text-on-surface font-bold leading-tight">Android APK</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
