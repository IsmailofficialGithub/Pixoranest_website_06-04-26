import type { Metadata } from "next"
import { SolutionsPageContent } from "./solutions-content"



export const metadata: Metadata = {
  title: "AI Automation Solutions for Businesses | PixoraNest",

  description:
    "Explore PixoraNest AI automation solutions including AI receptionist, WhatsApp automation, AI voice agents and CRM workflow automation for businesses.",

  keywords: [
        "AI automation solutions",
    "AI receptionist",
    "WhatsApp automation lead generation",
    "AI voice agent customer support",
    "CRM workflow automation",
    "business automation tools",
    "AI call automation",
    "automated lead management",
  ],

  alternates: {
    canonical: "https://pixoranest.com/solutions",
  },

  openGraph: {
    title: "AI Automation Solutions | PixoraNest",
    description:
      "Discover AI automation solutions that help businesses automate customer communication, manage leads, and streamline workflows.",
    url: "https://pixoranest.com/solutions",
    siteName: "PixoraNest",
    type: "website",
    images: [
      {
        url: "https://pixoranest.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixoraNest AI automation solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Solutions for Businesses | PixoraNest",
    description:
      "Automate calls, leads, and customer communication using PixoraNest AI automation tools.",
    images: ["https://pixoranest.com/og-image.png"],
  },
}

export default function SolutionsPage() {
  return <SolutionsPageContent />
}