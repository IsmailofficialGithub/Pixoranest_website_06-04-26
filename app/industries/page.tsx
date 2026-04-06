import type { Metadata } from "next"
import { IndustriesPageContent } from "./industries-content"

export const metadata: Metadata = {
  title: "AI Automation Solutions by Industry | PixoraNest",

  description:
    "Explore PixoraNest AI automation for healthcare, real estate, education and e-commerce. Automate calls, lead management and customer communication easily.",

  keywords: [
    "AI automation solutions for industries",
    "AI automation for healthcare businesses",
    "AI automation for real estate companies",
    "AI automation for hospitality industry",
    "AI automation for education sector",
    "AI automation for e-commerce businesses",
    "AI tools for customer communication",
    "AI automation for lead management",
    "business automation using AI",
    "AI automation by industry",
    "AI automation healthcare",
    "AI automation real estate",
    "AI automation education",
    "AI automation ecommerce",
    "AI automation hospitality",
    "lead management automation",
    "customer communication AI"
  ],

  alternates: {
    canonical: "https://pixoranest.com/industries",
  },

  openGraph: {
    title: "AI Automation Solutions for Industries | PixoraNest",
    description:
      "Discover how PixoraNest AI automation helps industries automate customer communication, lead management, and operational workflows.",
    url: "https://pixoranest.com/industries",
    siteName: "PixoraNest",
    type: "website",
    images: [
      {
        url: "https://pixoranest.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI automation solutions for industries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Solutions by Industry | PixoraNest",
    description:
      "Explore how PixoraNest AI automation helps industries automate customer communication, calls, and lead management.",
    images: ["https://pixoranest.com/og-image.png"],
  },
}

export default function IndustriesPage() {
  return <IndustriesPageContent />
}