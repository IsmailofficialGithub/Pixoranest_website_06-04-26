"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { solutions } from "@/lib/data"
import {
  Phone,
  MessageCircle,
  PhoneForwarded,
  Mic,
  Share2,
  Settings,
  Bot,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Phone,
  MessageCircle,
  PhoneForwarded,
  Mic,
  Share2,
  Settings,
  Bot,
}

export function SolutionsSection() {
  return (
    <SectionWrapper id="solutions">
      <SectionHeader
        title="AI Automation Solutions for Businesses"
        subtitle="Comprehensive AI automation services designed to transform customer communication, lead management, and business workflows."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => {
          const Icon = iconMap[solution.icon] || Bot

          return (
            <motion.div key={solution.slug} variants={fadeInUp}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group block h-full"
              >
                <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6 transition-all">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}