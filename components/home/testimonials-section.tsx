"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { testimonials } from "@/lib/data"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        title="Client Success Stories with AI Automation"
        subtitle="See how businesses improve efficiency, automate customer communication, and generate more leads using PixoraNest AI automation solutions."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <div className="glass glass-hover h-full rounded-2xl p-6">

              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <Quote className="mb-3 h-8 w-8 text-primary/30" />

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {t.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}