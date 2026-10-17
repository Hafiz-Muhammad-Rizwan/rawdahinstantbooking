'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoBar from '@/components/InfoBar';
import MakeAccountSection from '@/components/MakeAccountSection';
import AccountScreenshotsSection from '@/components/AccountScreenshotsSection';
import InstantProcessSection from '@/components/InstantProcessSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import SafetyAdvisory from '@/components/SafetyAdvisory';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Navbar />
      <Hero />
      <InfoBar />
      <MakeAccountSection />
      <AccountScreenshotsSection />
      <InstantProcessSection />
      <ScreenshotsSection />
      <SafetyAdvisory />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
