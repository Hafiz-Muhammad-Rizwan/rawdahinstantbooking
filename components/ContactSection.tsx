'use client';

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-surface-canvas border-t border-surface-container/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">contact_support</span>
            <span className="text-[11px] leading-[16px] font-semibold uppercase tracking-wide">CONNECT FOR ASSISTANCE</span>
          </div>
          <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-on-surface mb-3 tracking-tight">
            Contact With Me
          </h2>
          <p className="text-[16px] leading-[24px] text-on-surface-variant">
            Free personal guidance provided for the sake of Allah. Feel free to reach out directly if you need assistance securing your Rawdah permit.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923229603359"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-card rounded-2xl p-7 shadow-xs border border-surface-container hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-emerald-tint rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Image src="/rawdahinstantbooking/images/whatsapplogo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <h3 className="text-[18px] leading-[24px] font-semibold text-on-surface mb-1">
              WhatsApp
            </h3>
            <p className="text-[13px] leading-[18px] text-on-surface-variant mb-4">
              Direct message for quick help
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold text-[14px]">
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:hafizmuhammadrizwan359@gmail.com"
            className="group bg-surface-card rounded-2xl p-7 shadow-xs border border-surface-container hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-accent-gold-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Image src="/rawdahinstantbooking/images/gmaillogo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <h3 className="text-[18px] leading-[24px] font-semibold text-on-surface mb-1">
              Email
            </h3>
            <p className="text-[13px] leading-[18px] text-on-surface-variant mb-4">
              Detailed booking inquiries
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold text-[14px]">
              <span>Write Email</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-rizwan-33328a374/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-card rounded-2xl p-7 shadow-xs border border-surface-container hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Image src="/rawdahinstantbooking/images/linkedinlogo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <h3 className="text-[18px] leading-[24px] font-semibold text-on-surface mb-1">
              LinkedIn
            </h3>
            <p className="text-[13px] leading-[18px] text-on-surface-variant mb-4">
              Professional profile &amp; network
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold text-[14px]">
              <span>Connect</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-surface-card rounded-2xl p-6 lg:p-8 border border-surface-container shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <h4 className="text-[16px] leading-[22px] font-bold text-on-surface mb-0.5">
                  Prefer email?
                </h4>
                <p className="text-[13px] leading-[18px] text-on-surface-variant">
                  Send your question directly and I will get back to you.
                </p>
              </div>
            </div>
            <a
              href="mailto:hafizmuhammadrizwan359@gmail.com"
              className="flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-lg font-semibold text-[14px] transition-colors shrink-0 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Email me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
