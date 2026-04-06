import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { industries } from "@/lib/data"
import { IndustryPageContent } from "./industry-content"

export function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>
}): Promise<Metadata> {
  const { industry: slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) return {}

  const title = `AI Automation for ${industry.title} Industry | PixoraNest`

  const description = `AI automation solutions for the ${industry.title.toLowerCase()} industry. Automate customer communication, calls, lead management, and customer engagement using PixoraNest AI tools.`

  const url = `https://pixoranest.com/industries/${industry.slug}`

  const keywords = [
    `AI automation for ${industry.title.toLowerCase()} industry`,
    `AI solutions for ${industry.title.toLowerCase()} businesses`,
    `AI automation tools for ${industry.title.toLowerCase()}`,
    `business automation for ${industry.title.toLowerCase()} companies`,
    `AI customer communication for ${industry.title.toLowerCase()}`,
  ]

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "PixoraNest",
      type: "website",
      images: [
        {
          url: "https://pixoranest.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `AI automation for ${industry.title} industry`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://pixoranest.com/og-image.png"],
    },
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>
}) {
  const { industry: slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) notFound()

  return <IndustryPageContent industry={industry} />
}