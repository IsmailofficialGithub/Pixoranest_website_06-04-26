"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionWrapper } from "@/components/section-wrapper"
import { stats, teamMembers } from "@/lib/data"
import {
  Facebook, Instagram, Youtube, Linkedin, ArrowRight,
  Target, Eye, Lightbulb, Users, Shield, Zap,
  CheckCircle2, Bot, TrendingUp, Globe, Award, Rocket,
} from "lucide-react"

const BLUE = "#2563eb"
const NAVY = "#0f172a"

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step  = end / 80
    const timer = setInterval(() => {
      current += step
      if (current >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── Values data ──────────────────────────────────────────────────────────────
const values = [
  { icon: Lightbulb, title: "Innovation First",  color: "#f59e0b", bg: "#fffbeb", description: "We stay at the forefront of AI technology, constantly exploring new ways to solve business challenges." },
  { icon: Users,     title: "Client-Centric",    color: "#2563eb", bg: "#eff6ff", description: "Every solution we build starts with understanding our clients' unique needs and goals." },
  { icon: Shield,    title: "Trust & Security",  color: "#059669", bg: "#ecfdf5", description: "We prioritize data security and privacy in every solution, ensuring full compliance with industry standards." },
  { icon: Zap,       title: "Results-Driven",    color: "#8b5cf6", bg: "#f5f3ff", description: "We measure success by the tangible results and ROI our solutions deliver for each client." },
]

// ─── Solutions list ───────────────────────────────────────────────────────────
const solutions = [
  { name: "FirstVoice AI Receptionist",       href: "/solutions/ai-receptionist",        icon: Bot },
  { name: "LeadNest WhatsApp Management",     href: "/solutions/whatsapp-lead-management",icon: TrendingUp },
  { name: "CallOrbit AI Call Automation",     href: "/solutions/ai-call-automation",      icon: Rocket },
  { name: "Socialium Social Automation",      href: "/solutions/social-media-automation", icon: Globe },
  { name: "EchoAssist AI Voice Agent",        href: "/solutions/ai-voice-agent",          icon: Zap },
]

// ─── Social links ─────────────────────────────────────────────────────────────
const socials = [
  { icon: Facebook,  label: "Facebook",  href: "https://www.facebook.com/pixoranest2025", color: "#1877f2" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/pixoranest/",   color: "#e1306c" },
  { icon: Youtube,   label: "YouTube",   href: "https://youtube.com/@pixora-nest",        color: "#ff0000" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/pixoranest-official/", color: "#0077b5" },
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export function AboutPageContent() {
  return (
    <div className="overflow-x-hidden" style={{ background: "#f8fafc" }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 50%, ${NAVY} 100%)`, position: "relative", overflow: "hidden" }}
      >
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />

        {/* Glow blobs */}
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }}
          style={{ position: "absolute", top: -80, left: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          style={{ position: "absolute", bottom: -80, right: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-5xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            <motion.div variants={fadeInUp} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
              <Award size={13} color="#fbbf24" />
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>India's Leading AI Automation Company</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
              AI Automation Company<br />
              <span style={{ color: "#60a5fa" }}>Helping Businesses Grow</span><br />
              with Smart Technology
            </motion.h1>

            <motion.p variants={fadeInUp}
              style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto 32px" }}>
              PixoraNest is a global AI automation company that helps businesses streamline operations through intelligent automation. From AI receptionists to WhatsApp lead management — we build tools that work 24/7 so you don't have to.
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
              <Link href="/contact" style={{ background: BLUE, color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(37,99,235,0.5)", textDecoration: "none" }}>
                Talk to Our Team <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                View Solutions
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
              {["500+ Businesses", "10M+ Messages Automated", "98% Satisfaction", "24/7 AI Support"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={14} color="#4ade80" />
                  <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", borderBottom: "1px solid #f1f5f9" }} className="px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 500,  suffix: "+",  label: "Businesses Served",      icon: Users,      color: BLUE      },
            { end: 10,   suffix: "M+", label: "Messages Automated",     icon: Bot,        color: "#059669" },
            { end: 98,   suffix: "%",  label: "Customer Satisfaction",  icon: Award,      color: "#f59e0b" },
            { end: 50,   suffix: "+",  label: "Industries Covered",     icon: Globe,      color: "#8b5cf6" },
          ].map((s, i) => {
            const SI = s.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <SI size={22} color={s.color} />
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: NAVY, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, marginTop: 6 }}>{s.label}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 10 }}>Who We Are</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em" }}>Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target, title: "Our Mission",
                color: BLUE, bg: "#eff6ff",
                body: "To empower businesses of all sizes with accessible and intelligent AI automation. We build powerful tools — AI receptionists, WhatsApp management, call automation, and voice agents — that help companies improve productivity, enhance customer engagement, and scale efficiently.",
                link: { text: "Explore our AI solutions →", href: "/solutions" },
              },
              {
                icon: Eye, title: "Our Vision",
                color: "#8b5cf6", bg: "#f5f3ff",
                body: "To become the global leader in AI business automation. We envision a future where businesses operate with intelligent systems that automate communication, improve decision-making, and unlock new growth opportunities — where human creativity and AI work hand in hand.",
                link: { text: "View our pricing plans →", href: "/pricing" },
              },
            ].map((card, i) => {
              const CardIcon = card.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
                  style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 24, padding: "36px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}
                >
                  {/* Top accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: card.color, borderRadius: "24px 24px 0 0" }} />
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <CardIcon size={24} color={card.color} />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 14, letterSpacing: "-0.02em" }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, marginBottom: 20 }}>{card.body}</p>
                  <Link href={card.link.href} style={{ fontSize: 13, fontWeight: 700, color: card.color, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    {card.link.text}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 10 }}>Why PixoraNest</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 12 }}>Why Businesses Choose PixoraNest</h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 540, margin: "0 auto" }}>
              We help businesses worldwide streamline operations and accelerate growth with powerful, industry-tested AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Advanced AI Technology",         color: BLUE,     bg: "#eff6ff", body: "PixoraNest develops intelligent automation platforms powered by modern AI. Our systems automate repetitive tasks, manage conversations, and optimise workflows across all industries." },
              { title: "Scalable Business Platform",     color: "#059669", bg: "#ecfdf5", body: "From WhatsApp lead management to AI call handling and social media automation — our tools help businesses scale efficiently while improving customer engagement." },
              { title: "Secure & Reliable Infrastructure",color: "#8b5cf6",bg: "#f5f3ff", body: "Security is our top priority. Our infrastructure ensures full data protection, reliable uptime, and scalable deployment for businesses operating at any scale globally." },
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 20, padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <CheckCircle2 size={20} color={card.color} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: NAVY, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 10 }}>Our Values</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 12 }}>Core Values Driving PixoraNest</h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
              These principles guide how we design and deliver every AI automation solution we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 20, padding: "28px 24px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}
                >
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 3, background: v.color, borderRadius: "0 0 4px 4px" }} />
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Icon size={22} color={v.color} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: NAVY, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.65 }}>{v.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR SOLUTIONS (internal links)
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 12 }}>Our Solutions</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Explore Our AI Automation Solutions
              </h2>
              <p style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.75, marginBottom: 24 }}>
                PixoraNest provides advanced AI automation tools that help businesses streamline operations, automate communication, and improve customer engagement — reducing manual work and enabling scalable digital transformation.
              </p>
              <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BLUE, color: "#fff", padding: "12px 24px", borderRadius: 12, fontWeight: 700, fontSize: 13.5, textDecoration: "none", boxShadow: `0 6px 20px ${BLUE}40` }}>
                View All Solutions <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Right — solution cards */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {solutions.map((sol, i) => {
                const SIcon = sol.icon
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <Link href={sol.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14, background: "#f8fafc", border: "1px solid #e8edf4", borderRadius: 14, padding: "14px 18px", transition: "all 0.2s" }}
                      className="hover:border-blue-300 hover:shadow-md hover:bg-white group">
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <SIcon size={17} color={BLUE} />
                      </div>
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: NAVY }}>{sol.name}</span>
                      <ArrowRight size={14} color="#94a3b8" style={{ marginLeft: "auto" }} />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div className="max-w-4xl mx-auto" style={{ position: "relative" }}>
          <div className="text-center mb-12">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 10 }}>Our Story</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>The PixoraNest Story</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "PixoraNest was founded with a mission to simplify business operations through powerful AI automation. Our founders recognised that companies were spending too much time managing repetitive processes that could be automated with modern AI technologies.",
              "Today, PixoraNest builds advanced products including FirstVoice AI Receptionist, LeadNest WhatsApp Lead Management, CallOrbit AI Call Automation, Socialium Social Media Automation, and EchoAssist AI Voice Agent — all designed to handle real business problems at scale.",
              "These intelligent systems help businesses automate communication, manage leads, improve customer support, and scale operations efficiently. Our team continues to innovate, enabling companies worldwide to operate smarter and faster every day.",
            ].map((para, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px", borderLeft: "3px solid #60a5fa" }}
              >
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: 0 }}>{para}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 10 }}>Our Team</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Meet the Experts Behind PixoraNest
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
              AI engineers, automation specialists, and product innovators building intelligent solutions for businesses worldwide.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 4) * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "#f8fafc" }}>
                    <Image
                      src={member.image}
                      alt={`${member.name} — PixoraNest AI Automation Team`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:640px)50vw,(max-width:768px)33vw,25vw"
                    />
                    {/* Gradient overlay */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(15,23,42,0.6), transparent)", pointerEvents: "none" }} />
                  </div>
                  <div style={{ padding: "16px", textAlign: "center" }}>
                    <span style={{ display: "inline-flex", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 20, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: BLUE, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {member.role}
                    </span>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginTop: 8 }}>{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOCIAL MEDIA
      ══════════════════════════════════════════ */}
      <section className="px-6 py-16" style={{ background: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, display: "block", marginBottom: 10 }}>Follow Us</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Connect with PixoraNest
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", maxWidth: 480, margin: "0 auto 32px" }}>
            Stay updated with the latest AI automation insights, product launches, and business tips.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {socials.map((s, i) => {
              const SIcon = s.icon
              return (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer nofollow"
                  aria-label={`Follow PixoraNest on ${s.label}`}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #e8edf4", borderRadius: 14, padding: "12px 20px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}
                >
                  <SIcon size={18} color={s.color} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{s.label}</span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="px-6 py-24" style={{ background: `linear-gradient(135deg, ${NAVY}, #1e3a8a)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-3xl mx-auto text-center" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(37,99,235,0.25)", border: "1px solid rgba(37,99,235,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Rocket size={28} color="#60a5fa" />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}>
              Start Automating Your Business<br />with PixoraNest
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto 36px" }}>
              Discover how AI receptionists, WhatsApp lead management, call automation, and voice agents can transform your business operations — starting today.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: BLUE, color: "#fff", padding: "15px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(37,99,235,0.5)", textDecoration: "none" }}>
                Talk to Our AI Experts <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "15px 32px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                Explore Solutions
              </Link>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 20 }}>
              ✉ info@pixoranest.com · 📞 9460686266
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}