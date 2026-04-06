import type { Metadata } from "next"
import { AboutPageContent } from "./about-content"

export const metadata: Metadata = {
  metadataBase: new URL("https://pixoranest.com"),

  // ✅ 57 chars — perfect! No change needed
  title: "About PixoraNest | AI Automation Solutions for Businesses",

  // ✅ 156 chars — fixed!
  description:
    "Learn about PixoraNest, a global AI automation company providing AI receptionists, WhatsApp automation, AI voice agents and business automation solutions.",

  keywords: [
    "AI automation company",
    "AI automation solutions",
    "AI receptionist software",
    "WhatsApp automation",
    "AI voice agent",
    "business automation platform",
    "PixoraNest",
  ],

  // ✅ Absolute URL — fixes Bing canonical issue!
  alternates: {
    canonical: "https://pixoranest.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About PixoraNest | AI Automation Solutions",
    description:
      "Discover PixoraNest, a global AI automation platform helping businesses automate communication, manage leads and improve productivity.",
    url: "https://pixoranest.com/about",
    siteName: "PixoraNest",
    images: [
      {
        url: "https://pixoranest.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "PixoraNest AI Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About PixoraNest | AI Automation Solutions",
    description:
      "PixoraNest builds AI automation solutions including AI receptionists, WhatsApp automation and AI voice agents.",
    images: ["https://pixoranest.com/og-about.jpg"],
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
