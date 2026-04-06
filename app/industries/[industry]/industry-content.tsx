"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionWrapper } from "@/components/section-wrapper"
import { solutions } from "@/lib/data"
import {
  ArrowRight, ArrowLeft, CheckCircle2,
  Heart, ShoppingCart, Factory, Truck, DollarSign,
  GraduationCap, Hotel, Building, Monitor, Rocket,
  Phone, MessageCircle, PhoneCall, Mic, Zap, TrendingUp,
  Users, Shield, Clock, BarChart3, Bot,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Heart, ShoppingCart, Factory, Truck, DollarSign,
  GraduationCap, Hotel, Building, Monitor, Rocket,
}

// ─── Industry-specific accent colours ────────────────────────────────────────
const industryTheme: Record<string, { color: string; light: string; gradient: string }> = {
  Heart:         { color: "#ef4444", light: "#fef2f2", gradient: "from-red-50 to-rose-50/30" },
  ShoppingCart:  { color: "#22c55e", light: "#f0fdf4", gradient: "from-green-50 to-emerald-50/30" },
  Factory:       { color: "#f59e0b", light: "#fffbeb", gradient: "from-amber-50 to-yellow-50/30" },
  Truck:         { color: "#0ea5e9", light: "#f0f9ff", gradient: "from-sky-50 to-blue-50/30" },
  DollarSign:    { color: "#10b981", light: "#ecfdf5", gradient: "from-emerald-50 to-teal-50/30" },
  GraduationCap: { color: "#8b5cf6", light: "#f5f3ff", gradient: "from-violet-50 to-purple-50/30" },
  Hotel:         { color: "#f43f5e", light: "#fff1f2", gradient: "from-rose-50 to-pink-50/30" },
  Building:      { color: "#f97316", light: "#fff7ed", gradient: "from-orange-50 to-amber-50/30" },
  Monitor:       { color: "#06b6d4", light: "#ecfeff", gradient: "from-cyan-50 to-sky-50/30" },
  Rocket:        { color: "#a855f7", light: "#faf5ff", gradient: "from-fuchsia-50 to-purple-50/30" },
}

// ─── Industry-specific stats ───────────────────────────────────────────────
const industryStats: Record<string, { value: string; label: string; icon: React.ElementType }[]> = {
  Heart:         [{ value: "60%", label: "Cost reduction", icon: TrendingUp }, { value: "24/7", label: "Patient support", icon: Clock }, { value: "3x", label: "Faster response", icon: Zap }],
  ShoppingCart:  [{ value: "40%", label: "Cart recovery", icon: TrendingUp }, { value: "24/7", label: "Customer support", icon: Clock }, { value: "5x", label: "Lead conversion", icon: Zap }],
  Factory:       [{ value: "55%", label: "Downtime reduced", icon: TrendingUp }, { value: "98%", label: "Quality accuracy", icon: Shield }, { value: "3x", label: "Output increase", icon: Zap }],
  Truck:         [{ value: "35%", label: "Fuel savings", icon: TrendingUp }, { value: "24/7", label: "Route monitoring", icon: Clock }, { value: "2x", label: "Delivery speed", icon: Zap }],
  DollarSign:    [{ value: "80%", label: "Fraud detected", icon: Shield }, { value: "24/7", label: "Compliance check", icon: Clock }, { value: "4x", label: "Faster KYC", icon: Zap }],
  GraduationCap: [{ value: "70%", label: "Admin saved", icon: TrendingUp }, { value: "24/7", label: "Student support", icon: Clock }, { value: "3x", label: "Enrolment rate", icon: Zap }],
  Hotel:         [{ value: "50%", label: "Staff workload", icon: TrendingUp }, { value: "24/7", label: "Guest support", icon: Clock }, { value: "4x", label: "Booking rate", icon: Zap }],
  Building:      [{ value: "60%", label: "Lead response", icon: TrendingUp }, { value: "24/7", label: "Inquiry handling", icon: Clock }, { value: "3x", label: "Deals closed", icon: Zap }],
  Monitor:       [{ value: "65%", label: "Support costs", icon: TrendingUp }, { value: "24/7", label: "User assistance", icon: Clock }, { value: "5x", label: "Trial conversion", icon: Zap }],
  Rocket:        [{ value: "70%", label: "Ops automated", icon: TrendingUp }, { value: "24/7", label: "Investor updates", icon: Clock }, { value: "4x", label: "Growth speed", icon: Zap }],
}

const defaultStats = [
  { value: "60%", label: "Cost reduction", icon: TrendingUp },
  { value: "24/7", label: "Automated support", icon: Clock },
  { value: "3x", label: "Faster response", icon: Zap },
]

// ─── Animated Hero Visual ──────────────────────────────────────────────────
function IndustryHeroVisual({
  iconKey, color, light,
}: { iconKey: string; color: string; light: string }) {
  const Icon = iconMap[iconKey] || Monitor
  const stats = industryStats[iconKey] || defaultStats

  const floatingCards = [
    { icon: Phone,         label: "AI Receptionist", delay: 0.2 },
    { icon: MessageCircle, label: "WhatsApp Bot",     delay: 0.5 },
    { icon: PhoneCall,     label: "Call Automation",  delay: 0.8 },
    { icon: Mic,           label: "Voice Agent",      delay: 1.1 },
  ]

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "0 auto" }}>
      {/* Glow */}
      <div style={{
        position: "absolute", inset: "-20px",
        background: `radial-gradient(ellipse at 60% 40%, ${color}18 0%, transparent 65%)`,
        pointerEvents: "none", borderRadius: "50%",
      }} />

      {/* Central badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{
          width: 96, height: 96, borderRadius: "50%",
          background: light, border: `3px solid ${color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px",
          boxShadow: `0 0 0 12px ${color}10, 0 8px 32px ${color}20`,
        }}
      >
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <Icon size={40} color={color} />
        </motion.div>
      </motion.div>

      {/* Floating solution cards (2×2 grid) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {floatingCards.map((card, i) => {
          const CardIcon = card.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14, padding: "12px 14px",
                  display: "flex", alignItems: "center", gap: 10,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: light,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <CardIcon size={16} color={color} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#1e293b", lineHeight: 1.3 }}>
                  {card.label}
                </span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}
      >
        {stats.map((s, i) => {
          const StatIcon = s.icon
          return (
            <div key={i} style={{
              background: "#ffffff", border: "1px solid #e2e8f0",
              borderRadius: 12, padding: "12px 8px", textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}>
              <StatIcon size={14} color={color} style={{ margin: "0 auto 6px" }} />
              <p style={{ fontSize: 18, fontWeight: 700, color: "#1e293b", margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0, lineHeight: 1.3 }}>{s.label}</p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

// ─── Solutions Section Visual ──────────────────────────────────────────────
function SolutionCard({ title, description, index, color }: {
  title: string; description: string; index: number; color: string;
}) {
  const icons = [Phone, MessageCircle, PhoneCall, Mic]
  const Icon = icons[index % icons.length]

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 16, padding: 24,
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: "16px 16px 0 0" }} />

      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: `${color}15`,
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
      }}>
        <Icon size={20} color={color} />
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{description}</p>

      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
        <span style={{ fontSize: 11, color: color, fontWeight: 600 }}>AI Powered</span>
      </div>
    </motion.div>
  )
}

// ─── Benefits Visual Grid ──────────────────────────────────────────────────
function BenefitItem({ text, index, color }: { text: string; index: number; color: string }) {
  const icons = [TrendingUp, Clock, Shield, BarChart3, Users, Bot]
  const Icon = icons[index % icons.length]

  return (
    <motion.div
      variants={fadeInUp}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14,
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 14, padding: "16px 18px",
        transition: "all 0.2s",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `${color}12`,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={18} color={color} />
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", margin: 0, lineHeight: 1.5 }}>{text}</p>
      </div>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────
interface IndustryData {
  title: string; slug: string; description: string; icon: string;
}

export function IndustryPageContent({ industry }: { industry: IndustryData }) {
  const Icon = iconMap[industry.icon] || Monitor
  const theme = industryTheme[industry.icon] || { color: "#2563eb", light: "#eff6ff", gradient: "from-blue-50 to-indigo-50/30" }

  const benefits = [
    "Reduce operational costs by up to 60%",
    "24/7 automated customer engagement",
    "Seamless integration with existing tools",
    "Real-time analytics and reporting",
    "Scalable solutions that grow with you",
    "Industry-specific compliance built-in",
  ]

  const faqs = [
    {
      q: `How can AI automation help ${industry.title.toLowerCase()} businesses?`,
      a: `AI automation helps ${industry.title.toLowerCase()} businesses manage customer communication, automate lead capture, and handle incoming calls efficiently — improving productivity and customer satisfaction.`,
    },
    {
      q: "Can AI handle customer inquiries automatically?",
      a: "Yes. PixoraNest AI tools such as AI receptionists and AI voice agents can automatically answer customer questions, manage conversations, and provide instant support around the clock.",
    },
    {
      q: "Is AI automation suitable for small businesses?",
      a: "Yes. AI automation helps small businesses reduce operational costs, provide 24/7 support, and improve customer engagement without needing large teams.",
    },
  ]

  return (
    <div className="pt-24">

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className={`px-4 pb-16 pt-12 sm:px-6 lg:px-8 bg-gradient-to-br ${theme.gradient}`}>
        <div className="mx-auto max-w-7xl">

          {/* Back link */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Link
              href="/industries"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Industries
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div
                variants={fadeInUp}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `${theme.color}15`,
                  border: `1px solid ${theme.color}30`,
                  borderRadius: 20, padding: "6px 14px",
                  marginBottom: 20,
                }}
              >
                <Icon size={14} color={theme.color} />
                <span style={{ fontSize: 12, fontWeight: 600, color: theme.color }}>
                  {industry.title} Industry
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
              >
                AI Automation Solutions for{" "}
                <span style={{ color: theme.color }}>{industry.title}</span> Industry
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                PixoraNest provides advanced AI automation solutions for the{" "}
                {industry.title.toLowerCase()} industry. Automate customer
                communication, manage leads, handle calls, and improve engagement
                while reducing operational costs.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  style={{ background: theme.color }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/solutions" className="border border-border px-6 py-3 rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                  View All Solutions
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-6">
                {[
                  { icon: Shield,   label: "Enterprise secure" },
                  { icon: Clock,    label: "24/7 support" },
                  { icon: Zap,      label: "Quick setup" },
                ].map((b, i) => {
                  const BadgeIcon = b.icon
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BadgeIcon size={14} color={theme.color} />
                      <span>{b.label}</span>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right — visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <IndustryHeroVisual iconKey={industry.icon} color={theme.color} light={theme.light} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW AI WORKS — animated flow strip
      ═══════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
            {[
              { step: "01", label: "Lead arrives",      icon: Phone },
              { step: "02", label: "AI qualifies",      icon: Bot },
              { step: "03", label: "CRM updated",       icon: BarChart3 },
              { step: "04", label: "Follow-up sent",    icon: MessageCircle },
              { step: "05", label: "Deal closed",       icon: TrendingUp },
            ].map((item, i) => {
              const StepIcon = item.icon
              return (
                <div key={i} className="flex items-center flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center px-6"
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: "50%",
                      background: theme.light,
                      border: `2px solid ${theme.color}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 8,
                    }}>
                      <StepIcon size={20} color={theme.color} />
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: theme.color, letterSpacing: "0.08em" }}>
                      STEP {item.step}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1e293b", marginTop: 2 }}>
                      {item.label}
                    </span>
                  </motion.div>

                  {i < 4 && (
                    <div style={{ width: 40, height: 2, background: `${theme.color}30`, flexShrink: 0, position: "relative" }}>
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ position: "absolute", top: 0, left: 0, height: "100%", background: theme.color }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SOLUTIONS
      ═══════════════════════════════════════════════════════ */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: theme.color,
            }}>
              Our Solutions
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mt-1">
              AI Automation Solutions for {industry.title} Businesses
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            style={{ color: theme.color }}
          >
            View all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {solutions.slice(0, 4).map((solution, i) => (
            <motion.div key={solution.slug} variants={fadeInUp}>
              <Link href={`/services/${solution.slug}`}>
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  index={i}
                  color={theme.color}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════
          BENEFITS
      ═══════════════════════════════════════════════════════ */}
      <section className={`py-20 bg-gradient-to-br ${theme.gradient}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left — visual stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 20, padding: 28,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
                  paddingBottom: 20, borderBottom: "1px solid #f1f5f9",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: theme.light,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color={theme.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", margin: 0 }}>
                      {industry.title} Automation
                    </p>
                    <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>Performance overview</p>
                  </div>
                  <div style={{
                    marginLeft: "auto", background: "#dcfce7",
                    borderRadius: 20, padding: "4px 10px",
                    fontSize: 11, fontWeight: 600, color: "#16a34a",
                  }}>
                    ↑ Active
                  </div>
                </div>

                {/* Metric rows */}
                {[
                  { label: "Leads captured",     value: 94, color: theme.color },
                  { label: "Response rate",       value: 98, color: "#22c55e" },
                  { label: "Cost saved",          value: 60, color: "#8b5cf6" },
                  { label: "Customer satisfaction",value: 91, color: "#f59e0b" },
                ].map((m, i) => (
                  <div key={i} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{m.label}</span>
                      <span style={{ fontSize: 12, color: "#1e293b", fontWeight: 700 }}>{m.value}%</span>
                    </div>
                    <div style={{ height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                        style={{ height: "100%", background: m.color, borderRadius: 3 }}
                      />
                    </div>
                  </div>
                ))}

                {/* Bottom stats */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 10, marginTop: 20, paddingTop: 20, borderTop: "1px solid #f1f5f9",
                }}>
                  {(industryStats[industry.icon] || defaultStats).map((s, i) => {
                    const StatIcon = s.icon
                    return (
                      <div key={i} style={{ textAlign: "center" }}>
                        <StatIcon size={14} color={theme.color} style={{ margin: "0 auto 4px" }} />
                        <p style={{ fontSize: 17, fontWeight: 700, color: "#1e293b", margin: 0 }}>{s.value}</p>
                        <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{s.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right — benefits list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: theme.color,
                }}
              >
                Why PixoraNest
              </motion.span>

              <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-foreground sm:text-3xl mt-1 mb-8">
                Key Benefits of AI Automation for {industry.title}
              </motion.h2>

              <div className="grid gap-4">
                {benefits.map((b, i) => (
                  <BenefitItem key={i} text={b} index={i} color={theme.color} />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — label + heading */}
          <motion.div variants={fadeInUp}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: theme.color,
            }}>
              FAQs
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mt-1">
              AI Automation FAQs for {industry.title}
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Everything you need to know about deploying AI automation in your{" "}
              {industry.title.toLowerCase()} business.
            </p>

            {/* Decorative visual */}
            <div style={{
              marginTop: 32, background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 16, padding: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: theme.light,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Bot size={20} color={theme.color} />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", margin: 0 }}>PixoraNest AI</p>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Ready to deploy</p>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                Our AI solutions are pre-configured for {industry.title.toLowerCase()} use cases — setup takes less than 24 hours.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 16, fontSize: 13, fontWeight: 600, color: theme.color,
                }}
              >
                Talk to an expert <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right — FAQ items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14, padding: "20px 22px",
                  borderLeft: `3px solid ${theme.color}`,
                }}
              >
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            maxWidth: 800, margin: "0 auto",
            background: `linear-gradient(135deg, ${theme.color}12 0%, #ffffff 50%, ${theme.color}08 100%)`,
            border: `1px solid ${theme.color}25`,
            borderRadius: 24, padding: "56px 48px",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 160, height: 160, borderRadius: "50%",
            background: `${theme.color}10`, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -30, left: -30,
            width: 100, height: 100, borderRadius: "50%",
            background: `${theme.color}08`, pointerEvents: "none",
          }} />

          <motion.div
            variants={fadeInUp}
            style={{
              width: 56, height: 56, borderRadius: "50%",
              background: `${theme.color}15`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Icon size={26} color={theme.color} />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Transform Your {industry.title} Business
          </motion.h2>

          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            See how PixoraNest can automate and optimise your{" "}
            {industry.title.toLowerCase()} operations with a custom AI solution built for your needs.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              style={{ background: theme.color }}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-medium hover:bg-muted/50 transition-colors">
              Explore Solutions
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2"><CheckCircle2 size={14} color={theme.color} /> No setup fees</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} color={theme.color} /> Live in 24 hours</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} color={theme.color} /> Cancel anytime</span>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}