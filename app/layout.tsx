import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans"
});

export const metadata: Metadata = {
  title: "Nusuk Guidance - Rawdah Al-Sharifah Permit Booking Guide",
  description: "Complete step-by-step guide to book your Rawdah Al-Sharifah permit with interactive tutorials, timing guides, and expert tips.",
  keywords: ["Nusuk", "Rawdah Al-Sharifah", "Riyadh Al Jannah", "Permit Booking", "Madinah", "Umrah", "Hajj"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
