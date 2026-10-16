import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nusukguidance.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rawdah Booking & Appointment Guide | How to Book on Nusuk",
  description: "Learn how to book Rawdah on Nusuk with the latest Rawdah appointment steps, Nusuk slots timing, ladies schedule, 20-second timing rule, and green-slot tips.",
  keywords: [
    "rawdah booking",
    "rawdah appointment",
    "how to book rawdah on nusuk",
    "nusuk rawdah slots timing",
    "nusuk rawdah booking trick",
    "riaz ul jannah booking nusuk",
    "al rawdah al sharifah appointment",
    "nusuk slots opening time today",
    "nusuk app permit timing trick",
    "nusuk 20 second timing rule",
    "why are rawdah slots always unavailable",
    "how to book rawdah slot instantly",
    "nusuk rawdah ladies timing schedule",
    "how to get green slot in nusuk app",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/nusuksearchicon.webp", type: "image/webp" },
      { url: "/images/32by32.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    shortcut: "/images/nusuksearchicon.webp",
    apple: "/images/512by512.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rawdah Booking & Appointment Guide | How to Book on Nusuk",
    description: "A practical guide to Rawdah booking, Nusuk appointment timing, available slots, and the official permit process.",
    siteName: "Nusuk Guidance",
    images: [
      {
        url: "/images/512by512.png",
        width: 512,
        height: 512,
        alt: "Nusuk Guidance Rawdah booking logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rawdah Booking & Appointment Guide | How to Book on Nusuk",
    description: "Step-by-step Rawdah booking guidance, Nusuk slots timing, and permit tips.",
    images: ["/images/512by512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
