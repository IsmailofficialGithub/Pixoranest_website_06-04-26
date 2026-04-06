"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations"
import { stats } from "@/lib/data"
import { ArrowRight, Play, Bot, Search, Zap } from "lucide-react"

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return <>{count}</>
}

function AnimatedStat({ value, label }: { value: number; label: string }) {
  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="text-3xl font-bold text-primary sm:text-4xl">
<Counter end={value} />+      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

function ChatMockup() {
  const messages = [
    { type: "user", text: "Hi! I'm interested in your AI automation services" },
    { type: "bot", text: "Hello! Welcome to PixoraNest. I'm your AI assistant." },
    { type: "bot", text: "I can help you with pricing, services, and booking a consultation." },
    { type: "bot", text: "What type of automation are you looking for?" },
  ]

  const [visible, setVisible] = useState<number>(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let index = 0

    const showNext = () => {
      if (index >= messages.length) return

      setTyping(true)

      setTimeout(() => {
        setVisible((prev) => prev + 1)
        setTyping(false)
        index++
        setTimeout(showNext, 1200)
      }, 1200)
    }

    showNext()
  }, [])

  return (
    <motion.div variants={slideInRight} className="relative">
      <div className="relative mx-auto w-full max-w-sm">

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">

          {/* HEADER */}
          <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              PN
            </div>

            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">
                PixoraNest AI
              </div>
              <div className="text-xs text-green-500">Online</div>
            </div>

            <Search className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* CHAT BODY */}
          <div className="space-y-3 p-4">
            {messages.slice(0, visible).map((msg, i) => (
              <div key={i}>
                <div
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-background border border-border text-muted-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                <div
                  className={`text-[10px] text-muted-foreground mt-1 ${
                    msg.type === "user" ? "text-right" : "text-left"
                  }`}
                >
                  10:02 AM
                </div>
              </div>
            ))}

            {/* TYPING */}
            {typing && (
              <div className="flex justify-start">
                <div className="flex space-x-1 bg-background border border-border px-3 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="flex items-center gap-2 border-t border-border px-4 py-3">
            <div className="flex-1 text-sm text-muted-foreground/50">
              Type a message...
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <ArrowRight className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* FLOATING BADGES */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -right-4 -top-3 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Bot className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium">AI Agent</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -bottom-3 -left-4 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium">Workflow</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>

            <motion.div
              variants={fadeInUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
            >
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">
                The Architects of Automation
              </span>
            </motion.div>

            {/* SEO H1 */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              AI Automation <span className="text-primary">Solutions</span> for
              Modern Businesses
            </motion.h1>

            {/* SEO paragraph */}
            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty"
            >
              PixoraNest helps businesses build powerful{" "}
              <strong className="text-foreground">AI Agents</strong> and{" "}
              <strong className="text-foreground">Automation Workflows</strong>{" "}
              to automate customer communication, manage leads, and streamline
              business operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Book 1:1 Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </motion.div>

          </div>

          <ChatMockup />

        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 rounded-2xl border border-border bg-card/50 px-8 py-8"
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}