'use client';

import Image from 'next/image';

export default function ScreenshotsSection() {
  const steps = [
    {
      step: 1,
      title: "Open Rawdah Booking",
      description: "Start from your verified Nusuk account and open Rawdah booking to request an appointment.",
      image: "/images/makeaccount5.jpeg"
    },
    {
      step: 2,
      title: "Choose the Gender",
      description: "Select the correct gender and follow the Nusuk Rawdah ladies timing schedule when applicable.",
      image: "/images/Booking1.jpeg"
    },
    {
      step: 3,
      title: "Select your Name",
      description: (
    <>
      <span style={{ color: 'red', fontWeight: 'bold' }}>Nusuk 20 second timing rule:</span> wait at :19, :39, :59 and tap at :20, :40, :00.
    </>
    ),
      image: "/images/booking2.jpeg"
    },
    {
      step: 4,
      title: "Pick a time slot",
      description: "Tap the available green slot to learn how to get a green slot in Nusuk app and proceed.",
      image: "/images/Booking3.jpeg"
    },
    {
      step: 5,
      title: "Confirm booking",
      description: "Review the details and confirm to receive your digital permit.",
      image: "/images/Booking4.jpeg"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-canvas border-t border-surface-container/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold-light text-accent-gold-deep mb-3">
            <span className="material-symbols-outlined text-[16px]">image</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">BOOKING SCREENSHOTS</span>
          </div>
          <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-on-surface mb-3 tracking-tight">
            How to Book Rawdah Slot Instantly
          </h2>
          <p className="text-[16px] leading-[24px] text-on-surface-variant">
            Follow these screenshots to book a Rawdah appointment, find a green slot in the Nusuk app, and confirm your permit.
          </p>
        </div>

        {/* Booking screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-surface-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              {/* Screenshot */}
              <div className="relative aspect-[9/16] bg-surface-container-low overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 28vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-[16px] font-bold text-on-primary">{item.step}</span>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 bg-surface-card">
                <h3 className="text-[18px] leading-[28px] font-semibold text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
