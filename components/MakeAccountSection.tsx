'use client';

import Image from 'next/image';

export default function MakeAccountSection() {
  const steps = [
    {
      number: "1",
      title: "Download the Nusuk App",
      description: "Download the official Nusuk app from Google Play Store or Apple App Store on your mobile device."
    },
    {
      number: "2",
      title: "Create Your Account",
      description: "Register a new account using your mobile number. You will receive an OTP code for verification."
    },
    {
      number: "3",
      title: "Add Passport Details",
      description: "Enter your passport number exactly as it appears on your physical document."
    },
    {
      number: "4",
      title: "Add Visa Information",
      description: "Input your Saudi visa number or border entry number to complete your pilgrim profile."
    }
  ];

  return (
    <section id="account-setup" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-tint text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">account_circle</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">ACCOUNT SETUP</span>
          </div>
          <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-on-surface mb-3 tracking-tight">
            Create Your Nusuk Account
          </h2>
          <p className="text-[16px] leading-[24px] text-on-surface-variant">
            Before booking your Rawdah permit, you need to create an account and complete your profile with valid documents.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Side 1: Pic */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-surface-container bg-surface-card max-w-md mx-auto">
              <Image
                src="/rawdahinstantbooking/images/nusk2.jpeg"
                alt="Nusuk App Account Registration"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Side 2: Simple Bullet Points */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-[22px] leading-[30px] font-bold text-on-surface">
              Account Registration Steps
            </h3>
            
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4 pb-4 border-b border-surface-container last:border-b-0">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary text-[13px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-[16px] leading-[22px] font-semibold text-on-surface mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[14px] leading-[20px] text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Note Box */}
            <div className="bg-accent-gold-light/70 rounded-xl p-5 border-l-4 border-accent-gold-deep mt-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold-deep text-[22px] shrink-0">
                  info
                </span>
                <div>
                  <h4 className="text-[15px] leading-[20px] font-semibold text-on-surface mb-1">
                    Important Note
                  </h4>
                  <p className="text-[13px] leading-[18px] text-on-surface-variant">
                    Make sure all your information matches your official documents exactly. Any mismatch may cause delays during slot confirmation or at entry checkpoints.
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
