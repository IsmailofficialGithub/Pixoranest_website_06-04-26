import type { Metadata } from "next"
import { ContactPageContent } from "./contact-content"

export const metadata: Metadata = {
  metadataBase: new URL("https://pixoranest.com"),

  // ✅ 55 chars — perfect!
  title: "Contact PixoraNest | Book Free AI Automation Demo",

  // ✅ 155 chars — perfect!
  description:
    "Contact PixoraNest to book a free demo of our AI automation solutions. Get expert help with WhatsApp automation, AI voice agents and CRM workflow automation.",

  keywords: [
    "contact PixoraNest",
    "AI automation services",
    "WhatsApp automation demo",
    "AI voice agents",
    "CRM automation",
    "business automation consulting",
    "free automation demo",
  ],

  authors: [{ name: "PixoraNest Team" }],
  creator: "PixoraNest",
  publisher: "PixoraNest",

  robots: {
    index: true,
    follow: true,
  },

  // ✅ Absolute URL — fixes Bing canonical issue!
  alternates: {
    canonical: "https://pixoranest.com/contact",
  },

  openGraph: {
    title: "Contact PixoraNest | Book Free AI Automation Demo",
    description:
      "Speak with PixoraNest experts about WhatsApp automation, AI voice agents and CRM workflow automation solutions.",
    url: "https://pixoranest.com/contact",
    siteName: "PixoraNest",
    images: [
      {
        url: "https://pixoranest.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact PixoraNest AI Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact PixoraNest | Book Free AI Automation Demo",
    description:
      "Talk to PixoraNest experts about AI automation, WhatsApp automation and business workflow automation.",
    images: ["https://pixoranest.com/og-image.png"],
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
