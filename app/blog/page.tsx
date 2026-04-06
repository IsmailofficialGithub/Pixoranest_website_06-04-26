import type { Metadata } from "next"
import { BlogPageContent } from "./blog-content"

export const metadata: Metadata = {
  metadataBase: new URL("https://pixoranest.com"),

  title: "AI Automation Blog | WhatsApp & AI Insights | PixoraNest",

  description:
    "Explore PixoraNest blog for expert insights on WhatsApp automation, AI voice agents, business workflow automation and AI lead generation strategies.",

  keywords: [
    "AI automation blog",
    "WhatsApp automation tips",
    "AI voice agents",
    "business automation",
    "workflow automation AI",
    "AI lead generation",
    "WhatsApp business API",
    "AI receptionist",
  ],

  authors: [{ name: "PixoraNest Team" }],
  creator: "PixoraNest",
  publisher: "PixoraNest",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://pixoranest.com/blog",
  },

  openGraph: {
    title: "AI Automation Blog | PixoraNest",
    description:
      "Expert insights on WhatsApp automation, AI voice agents and business automation strategies to help you scale faster.",
    url: "https://pixoranest.com/blog",
    siteName: "PixoraNest",
    type: "website",
    images: [
      {
        url: "https://pixoranest.com/blog/blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "PixoraNest AI Automation Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog | PixoraNest",
    description:
      "Expert insights on WhatsApp automation, AI voice agents and business automation strategies.",
    images: ["https://pixoranest.com/blog/blog-cover.jpg"],
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}
