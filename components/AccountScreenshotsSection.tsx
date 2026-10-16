'use client';

import Image from 'next/image';

export default function AccountScreenshotsSection() {
  const accountSteps = [
    {
      step: 1,
      title: "Download Nusuk App",
      description: "Install the official Nusuk app from your app store and click on Login or Register",
      image: "/rawdahinstantbooking/images/makeaccount1.jpeg"
    },
    {
      step: 2,
      title: "Register Your Account",
      description: "Click on the Register New Account button to start the registration process",
      image: "/rawdahinstantbooking/images/makeaccount2.jpeg"
    },
    {
      step: 3,
      title: "Enter Your Details",
      description: "Add your Name, Email and Password then click on the Create Your Account button.",
      image: "/rawdahinstantbooking/images/makeaccount3.jpeg"
    },
    {
      step: 4,
      title: "Verify OTP",
      description: "Enter the OTP sent to your email to verify your account",
      image: "/rawdahinstantbooking/images/makeaccount4.jpeg"
    },
    {
      step: 5,
      title: "Click on Rawdah",
      description: "Click on the Rawdah option to proceed with your account setup",
      image: "/rawdahinstantbooking/images/makeaccount5.jpeg"
    },
    {
      step: 6,
      title: "Visa Information",
      description: "Add your Country of Origin, Passport and Saudi visa or border number",
      image: "/rawdahinstantbooking/images/makeaccount6.jpeg"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-canvas border-t border-surface-container/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-tint text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">app_registration</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">REGISTRATION GUIDE</span>
          </div>
          <h2 className="text-[36px] leading-[44px] lg:text-[48px] lg:leading-[56px] font-bold text-on-surface mb-4 tracking-tight">
            Account Setup Screenshots
          </h2>
          <p className="text-[18px] leading-[28px] text-on-surface-variant">
            Follow these screens to create your Nusuk account step by step
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountSteps.map((item) => (
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Step Badge */}
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
