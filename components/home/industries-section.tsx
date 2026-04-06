"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { industries } from "@/lib/data"
import {
  Heart,
  ShoppingCart,
  Factory,
  Truck,
  DollarSign,
  GraduationCap,
  Hotel,
  Building,
  Monitor,
  Rocket,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Heart,
  ShoppingCart,
  Factory,
  Truck,
  DollarSign,
  GraduationCap,
  Hotel,
  Building,
  Monitor,
  Rocket,
}

const colorMap: Record<string, { text: string; bg: string }> = {
  Heart: { text: "text-red-400", bg: "bg-red-500/10" },
  ShoppingCart: { text: "text-green-400", bg: "bg-green-500/10" },
  Factory: { text: "text-amber-400", bg: "bg-amber-500/10" },
  Truck: { text: "text-sky-400", bg: "bg-sky-500/10" },
  DollarSign: { text: "text-emerald-400", bg: "bg-emerald-500/10" },
  GraduationCap: { text: "text-violet-400", bg: "bg-violet-500/10" },
  Hotel: { text: "text-rose-400", bg: "bg-rose-500/10" },
  Building: { text: "text-orange-400", bg: "bg-orange-500/10" },
  Monitor: { text: "text-cyan-400", bg: "bg-cyan-500/10" },
  Rocket: { text: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
}

export function IndustriesSection() {
  return (
    <SectionWrapper id="industries" className="bg-card/30">
      <SectionHeader
        title="AI Automation Solutions for Every Industry"
        subtitle="PixoraNest provides AI automation solutions tailored for industries like healthcare, real estate, e-commerce, hospitality, education, and technology."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.slice(0, 9).map((industry) => {
          const Icon = iconMap[industry.icon] || Monitor
          const colors =
            colorMap[industry.icon] || {
              text: "text-primary",
              bg: "bg-primary/10",
            }

          return (
            <motion.div key={industry.slug} variants={fadeInUp}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg}`}
                >
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {industry.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}