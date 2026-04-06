import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {

  // ✅ 54 chars — perfect!
  title: "PixoraNest | AI Automation & WhatsApp Business API",

  // ✅ 158 chars — perfect!
  description:
    "PixoraNest is an AI automation company providing AI receptionist, WhatsApp automation, AI voice agents and CRM workflow automation for businesses across India.",

  keywords: [
    "AI automation company india",
    "WhatsApp automation software",
    "AI receptionist",
    "AI voice agent",
    "CRM automation",
    "business automation rajasthan",
    "WhatsApp business API",
  ],

  // ✅ Absolute URL — correct!
  alternates: {
    canonical: "https://pixoranest.com",
  },

  openGraph: {
    title: "PixoraNest | AI Automation & WhatsApp Business API",
    description:
      "Automate calls, leads and customer communication using PixoraNest AI automation tools including WhatsApp automation and AI voice agents.",
    url: "https://pixoranest.com",
    siteName: "PixoraNest",
    type: "website",
    images: [
      {
        url: "https://pixoranest.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixoraNest AI automation platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PixoraNest | AI Automation & WhatsApp Business API",
    description:
      "AI receptionist, WhatsApp automation, AI voice agents and CRM automation tools for businesses across India.",
    images: ["https://pixoranest.com/og-image.png"],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <SolutionsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
