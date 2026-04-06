"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-primary/5 px-8 py-16 text-center sm:px-16">

          {/* Glow accent */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          {/* H2 */}
          <motion.h2
            variants={fadeInUp}
            className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
          >
            Build Your <span className="text-primary">AI Automation System</span>
          </motion.h2>

          {/* SEO text */}
          <motion.p
            variants={fadeInUp}
            className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Schedule a free discovery call and discover how PixoraNest AI
            automation solutions can automate customer communication, manage
            leads, and streamline your business operations using AI-powered
            tools.
          </motion.p>

          <motion.div variants={fadeInUp} className="relative mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}