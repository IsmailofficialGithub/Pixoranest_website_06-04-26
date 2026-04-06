"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { steps } from "@/lib/data"
import { Search, Repeat, Rocket, BarChart3 } from "lucide-react"

const icons = [Search, Repeat, Rocket, BarChart3]

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="bg-card/30">
      <SectionHeader
        title="How PixoraNest AI Automation Works"
        subtitle="Our proven four-step process helps businesses implement AI automation solutions, streamline workflows, and automate customer communication efficiently."
      />

      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={step.number} variants={fadeInUp} className="relative">
                <div className="glass glass-hover rounded-2xl p-6 text-center transition-all">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                    Step {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}