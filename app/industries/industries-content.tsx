"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionWrapper } from "@/components/section-wrapper"
import { industries } from "@/lib/data"
import {
  Heart, ShoppingCart, Factory, Truck, DollarSign,
  GraduationCap, Hotel, Building, Monitor, Rocket,
  ArrowUpRight, Bot, Zap, TrendingUp, Clock,
  Phone, MessageCircle, Shield, Users, CheckCircle2,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Heart, ShoppingCart, Factory, Truck, DollarSign,
  GraduationCap, Hotel, Building, Monitor, Rocket,
}

type Industry = typeof industries[0]

// ─── Per-industry data ────────────────────────────────────────────────────────
const meta: Record<string, {
  color: string
  gradient: string
  darkBg: string
  stat1: string; stat1Label: string
  stat2: string; stat2Label: string
  caption: string
  tags: string[]
  bullets: string[]
  image: string // Unsplash image URL
}> = {
  Heart: {
    color: "#f87171",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3b0d0d 60%, #1a0a0a 100%)",
    darkBg: "#1a0505",
    stat1: "60%", stat1Label: "Operational costs reduced",
    stat2: "3x",  stat2Label: "Faster patient response",
    caption: "Intelligent patient communication at scale",
    tags: ["Appointments", "Prescriptions", "Triage", "Follow-ups"],
    bullets: ["24/7 virtual AI receptionist for patient calls", "Automated appointment scheduling & reminders", "Prescription follow-up & compliance tracking"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  ShoppingCart: {
    color: "#4ade80",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 60%, #052e16 100%)",
    darkBg: "#052e16",
    stat1: "5x",  stat1Label: "Lead conversion rate",
    stat2: "40%", stat2Label: "Cart recovery",
    caption: "Convert every visitor into a paying customer",
    tags: ["Cart Recovery", "Order Tracking", "Returns", "Support"],
    bullets: ["Recover abandoned carts via WhatsApp & SMS", "Real-time order status automation", "24/7 customer support AI"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  Factory: {
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #1c1000 0%, #451a03 60%, #1c1000 100%)",
    darkBg: "#1c0f00",
    stat1: "55%", stat1Label: "Downtime eliminated",
    stat2: "3x",  stat2Label: "Production output",
    caption: "Smart automation for the modern factory floor",
    tags: ["Scheduling", "QA Reports", "Maintenance", "Shifts"],
    bullets: ["Predictive equipment maintenance AI", "Automated QA reporting & alerts", "Intelligent shift scheduling system"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  },
  Truck: {
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #0a1628 0%, #0c4a6e 60%, #0a1628 100%)",
    darkBg: "#061018",
    stat1: "35%", stat1Label: "Fuel costs saved",
    stat2: "2x",  stat2Label: "Delivery speed",
    caption: "End-to-end logistics intelligence",
    tags: ["Route AI", "Fleet Tracking", "Dispatch", "ETA Updates"],
    bullets: ["AI-powered route optimisation", "Real-time fleet monitoring & alerts", "Automated dispatch & customer ETA updates"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  DollarSign: {
    color: "#34d399",
    gradient: "linear-gradient(135deg, #022c22 0%, #064e3b 60%, #022c22 100%)",
    darkBg: "#011a14",
    stat1: "80%", stat1Label: "Fraud cases detected",
    stat2: "4x",  stat2Label: "Faster KYC process",
    caption: "Compliance and security, automated",
    tags: ["KYC", "Fraud Detection", "Loans", "Compliance"],
    bullets: ["Real-time transaction fraud detection AI", "Automated KYC & document verification", "Regulatory compliance reporting system"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  GraduationCap: {
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #1e0a3c 0%, #4c1d95 60%, #1e0a3c 100%)",
    darkBg: "#130520",
    stat1: "70%", stat1Label: "Admin hours saved",
    stat2: "3x",  stat2Label: "Student enrolment rate",
    caption: "AI that teaches institutions how to scale",
    tags: ["Enrolment", "Fee Reminders", "Attendance", "Queries"],
    bullets: ["Student inquiry & enrolment automation", "AI-driven fee collection reminders", "Attendance tracking & parent notifications"],
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
  },
  Hotel: {
    color: "#fb7185",
    gradient: "linear-gradient(135deg, #1a0510 0%, #881337 60%, #1a0510 100%)",
    darkBg: "#150208",
    stat1: "4x",  stat1Label: "Booking conversion",
    stat2: "98%", stat2Label: "Guest satisfaction",
    caption: "Five-star guest experience, automated",
    tags: ["Reservations", "Concierge AI", "Reviews", "Check-in"],
    bullets: ["Instant booking & reservation automation", "24/7 AI concierge for guest queries", "Automated review response & reputation management"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  Building: {
    color: "#fb923c",
    gradient: "linear-gradient(135deg, #1a0900 0%, #7c2d12 60%, #1a0900 100%)",
    darkBg: "#130600",
    stat1: "3x",  stat1Label: "Deals closed",
    stat2: "60%", stat2Label: "Faster lead response",
    caption: "Close more deals with less manual work",
    tags: ["Lead Capture", "Site Visits", "WhatsApp AI", "Contracts"],
    bullets: ["WhatsApp-first lead qualification AI", "Automated site visit scheduling", "Follow-up & contract management AI"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  Monitor: {
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #041a1f 0%, #164e63 60%, #041a1f 100%)",
    darkBg: "#021014",
    stat1: "65%", stat1Label: "Support costs cut",
    stat2: "5x",  stat2Label: "Trial conversion",
    caption: "Scale your SaaS without scaling your team",
    tags: ["Onboarding", "Churn Prevention", "Support AI", "Upsell"],
    bullets: ["Automated new user onboarding sequences", "Churn prediction & prevention campaigns", "Intelligent tiered support routing AI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  Rocket: {
    color: "#c084fc",
    gradient: "linear-gradient(135deg, #1a0830 0%, #581c87 60%, #1a0830 100%)",
    darkBg: "#100520",
    stat1: "4x",  stat1Label: "Growth velocity",
    stat2: "70%", stat2Label: "Ops automated",
    caption: "Move fast, automate everything, scale infinitely",
    tags: ["Lead Gen", "Investor Updates", "Scaling", "Comms"],
    bullets: ["AI-powered lead generation & qualification", "Automated investor update distribution", "End-to-end sales pipeline automation"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  },
}

const fallback = meta.Monitor

// ─── Industry-specific SVG illustrations ──────────────────────────────────────
function Illustration({ iconKey, color }: { iconKey: string; color: string }) {
  const Icon = iconMap[iconKey] || Monitor
  const illustrationMap: Record<string, React.ReactNode> = {
    Heart: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="10" y="20" width="50" height="60" rx="8" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <rect x="16" y="28" width="38" height="5" rx="2" fill={color} fillOpacity="0.4" />
        <rect x="16" y="38" width="30" height="4" rx="2" fill={color} fillOpacity="0.25" />
        <rect x="16" y="47" width="34" height="4" rx="2" fill={color} fillOpacity="0.25" />
        <rect x="16" y="56" width="24" height="4" rx="2" fill={color} fillOpacity="0.25" />
        <polyline points="72,60 85,60 90,40 96,75 102,50 108,60 120,60" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="148" cy="38" r="16" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <path d="M140 38 Q142 33 148 38 Q154 33 156 38 Q156 44 148 50 Q140 44 140 38z" fill={color} fillOpacity="0.6" />
        <circle cx="148" cy="75" r="10" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        <text x="148" y="79" textAnchor="middle" fontSize="9" fill={color} fillOpacity="0.5" fontWeight="600">AI</text>
      </svg>
    ),
    ShoppingCart: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="60" y="20" width="60" height="65" rx="10" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="68" y="32" width="44" height="6" rx="3" fill={color} fillOpacity="0.35" />
        <rect x="68" y="44" width="36" height="4" rx="2" fill={color} fillOpacity="0.2" />
        <rect x="68" y="54" width="40" height="4" rx="2" fill={color} fillOpacity="0.2" />
        <rect x="68" y="68" width="44" height="10" rx="5" fill={color} fillOpacity="0.5" />
        <circle cx="25" cy="50" r="18" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        <text x="25" y="46" textAnchor="middle" fontSize="18" fill={color} fillOpacity="0.5">🛒</text>
        <path d="M43 50 L57 50" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="155" cy="35" r="14" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <path d="M149 35 L154 40 L162 30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M125 65 L140 65" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="155" cy="72" r="10" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        <text x="155" y="76" textAnchor="middle" fontSize="8" fill={color} fillOpacity="0.5" fontWeight="600">+40%</text>
      </svg>
    ),
    Factory: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="10" y="50" width="160" height="40" rx="4" fill={color} fillOpacity="0.06" />
        <rect x="20" y="35" width="20" height="55" rx="3" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="50" y="25" width="20" height="65" rx="3" fill={color} fillOpacity="0.18" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <rect x="80" y="40" width="20" height="50" rx="3" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="110" y="30" width="20" height="60" rx="3" fill={color} fillOpacity="0.22" stroke={color} strokeOpacity="0.35" strokeWidth="1" />
        <rect x="140" y="45" width="20" height="45" rx="3" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="30" cy="22" r="5" fill={color} fillOpacity="0.4" />
        <circle cx="60" cy="12" r="5" fill={color} fillOpacity="0.4" />
        <circle cx="120" cy="17" r="5" fill={color} fillOpacity="0.4" />
        <polyline points="10,90 35,90 50,90 90,90 120,90 170,90" stroke={color} strokeOpacity="0.15" strokeWidth="1" />
      </svg>
    ),
    Truck: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="10" y="35" width="95" height="45" rx="6" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <path d="M105 48 L135 48 L148 58 L148 80 L105 80 Z" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="35" cy="85" r="9" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        <circle cx="35" cy="85" r="4" fill={color} fillOpacity="0.5" />
        <circle cx="130" cy="85" r="9" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        <circle cx="130" cy="85" r="4" fill={color} fillOpacity="0.5" />
        <polyline points="10,20 50,10 90,18 130,8 170,15" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        <circle cx="50" cy="10" r="3" fill={color} fillOpacity="0.6" />
        <circle cx="130" cy="8" r="3" fill={color} fillOpacity="0.6" />
        <text x="52" y="60" fontSize="10" fill={color} fillOpacity="0.6" fontWeight="700">FLEET AI</text>
      </svg>
    ),
    DollarSign: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={15 + i * 30} y={80 - [40,55,30,65,45][i]} width="22" height={[40,55,30,65,45][i]} rx="4"
            fill={color} fillOpacity={0.1 + i * 0.05} stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        ))}
        <polyline points="26,40 56,25 86,50 116,15 146,35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {[26,56,86,116,146].map((x,i) => (
          <circle key={i} cx={x} cy={[40,25,50,15,35][i]} r="3" fill={color} fillOpacity="0.8" />
        ))}
        <rect x="130" y="8" width="42" height="20" rx="10" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <text x="151" y="22" textAnchor="middle" fontSize="9" fill={color} fontWeight="700" fillOpacity="0.8">+80%</text>
      </svg>
    ),
    GraduationCap: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <polygon points="90,15 150,40 90,55 30,40" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M55 47 L55 72 Q90 82 125 72 L125 47" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <line x1="150" y1="40" x2="150" y2="62" stroke={color} strokeOpacity="0.4" strokeWidth="2" />
        <circle cx="150" cy="66" r="5" fill={color} fillOpacity="0.5" />
        {[0,1,2].map(i => (
          <rect key={i} x={25 + i * 45} y="20" width="30" height="4" rx="2" fill={color} fillOpacity={0.2 - i * 0.04} />
        ))}
        <rect x="10" y="78" width="160" height="3" rx="1" fill={color} fillOpacity="0.1" />
      </svg>
    ),
    Hotel: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="40" y="10" width="100" height="80" rx="8" fill={color} fillOpacity="0.06" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        {[[55,22],[75,22],[95,22],[115,22],[55,38],[75,38],[95,38],[115,38],[55,54],[75,54],[95,54],[115,54]].map(([x,y],i) => (
          <rect key={i} x={x} y={y} width="12" height="10" rx="2" fill={color} fillOpacity={i % 3 === 0 ? 0.4 : 0.15} stroke={color} strokeOpacity="0.2" strokeWidth="0.5" />
        ))}
        <rect x="75" y="72" width="30" height="18" rx="4" fill={color} fillOpacity="0.25" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        {[20,155].map((x,i) => (
          <g key={i}>
            <circle cx={x} cy="50" r="14" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.15" strokeWidth="1" />
            <text x={x} y="54" textAnchor="middle" fontSize={i===0?"14":"12"} fill={color} fillOpacity="0.4">{i===0?"★":"AI"}</text>
          </g>
        ))}
      </svg>
    ),
    Building: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="20" y="30" width="55" height="60" rx="5" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="90" y="15" width="70" height="75" rx="5" fill={color} fillOpacity="0.14" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        {[[28,40],[44,40],[60,40],[28,55],[44,55],[60,55]].map(([x,y],i) => (
          <rect key={i} x={x} y={y} width="10" height="9" rx="1.5" fill={color} fillOpacity="0.3" />
        ))}
        {[[98,28],[114,28],[130,28],[146,28],[98,44],[114,44],[130,44],[146,44],[98,60],[114,60],[130,60],[146,60]].map(([x,y],i) => (
          <rect key={i} x={x} y={y} width="10" height="10" rx="1.5" fill={color} fillOpacity={i%4===0?0.5:0.2} />
        ))}
        <rect x="112" y="76" width="36" height="14" rx="4" fill={color} fillOpacity="0.35" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
        <path d="M5 90 L175 90" stroke={color} strokeOpacity="0.15" strokeWidth="1" />
      </svg>
    ),
    Monitor: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <rect x="15" y="15" width="150" height="65" rx="8" fill={color} fillOpacity="0.06" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="23" y="23" width="134" height="49" rx="5" fill={color} fillOpacity="0.04" />
        <rect x="30" y="30" width="50" height="6" rx="3" fill={color} fillOpacity="0.35" />
        <rect x="30" y="42" width="70" height="4" rx="2" fill={color} fillOpacity="0.2" />
        <rect x="30" y="52" width="60" height="4" rx="2" fill={color} fillOpacity="0.2" />
        <rect x="30" y="62" width="40" height="4" rx="2" fill={color} fillOpacity="0.15" />
        <rect x="100" y="30" width="48" height="36" rx="6" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        {[0,1,2].map(i => (
          <rect key={i} x={106} y={37 + i * 9} width={[30,20,25][i]} height="5" rx="2.5" fill={color} fillOpacity={[0.5,0.25,0.35][i]} />
        ))}
        <rect x="65" y="80" width="50" height="10" rx="3" fill={color} fillOpacity="0.15" />
        <circle cx="170" cy="15" r="10" fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <text x="170" y="19" textAnchor="middle" fontSize="8" fill={color} fillOpacity="0.6" fontWeight="700">AI</text>
      </svg>
    ),
    Rocket: (
      <svg viewBox="0 0 180 100" fill="none" width="100%" height="100%">
        <path d="M90 10 C110 10 130 25 130 50 C130 70 115 80 90 90 C65 80 50 70 50 50 C50 25 70 10 90 10Z" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        <path d="M90 85 L82 98 L90 93 L98 98 Z" fill={color} fillOpacity="0.3" />
        <ellipse cx="90" cy="45" rx="18" ry="22" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="90" cy="45" r="8" fill={color} fillOpacity="0.5" />
        <path d="M55 58 C40 62 30 70 35 80 C40 88 55 85 55 75" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <path d="M125 58 C140 62 150 70 145 80 C140 88 125 85 125 75" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        {[[20,20],[155,15],[165,50],[15,65]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={[3,4,2.5,3][i]} fill={color} fillOpacity={[0.5,0.6,0.4,0.3][i]} />
        ))}
      </svg>
    ),
  }

  return (
    <div style={{ width: "100%", height: "100%", opacity: 0.9 }}>
      {illustrationMap[iconKey] || (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={48} color={color} style={{ opacity: 0.3 }} />
        </div>
      )}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
//  BENTO CARD — Dark photo card for large featured industries
// ══════════════════════════════════════════════════════════════════════════════
function BentoCardDark({ industry }: { industry: Industry }) {
  const Icon = iconMap[industry.icon] || Monitor
  const m = meta[industry.icon] || fallback

  return (
    <Link href={`/industries/${industry.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25 }}
        style={{
          background: m.gradient,
          borderRadius: 24, padding: "36px",
          height: "100%", minHeight: 340,
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
          boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)`,
        }}
      >
        {/* Unsplash image overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${m.image})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.08, borderRadius: 24,
        }} />

        {/* Noise grain overlay */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 24,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4, pointerEvents: "none",
        }} />

        {/* Illustration area */}
        <div style={{ position: "absolute", right: 24, bottom: 80, width: 180, height: 100, opacity: 0.6 }}>
          <Illustration iconKey={industry.icon} color={m.color} />
        </div>

        {/* Content */}
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `${m.color}20`,
              border: `1px solid ${m.color}35`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={22} color={m.color} />
            </div>
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "5px 13px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>Live AI</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
            {[{v: m.stat1, l: m.stat1Label}, {v: m.stat2, l: m.stat2Label}].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.v}</div>
                <div style={{ fontSize: 11, color: m.color, fontWeight: 600, marginTop: 4, opacity: 0.9 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            {industry.title}
          </h3>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 24, maxWidth: "60%" }}>
            {m.caption}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 24 }}>
            {m.tags.map(t => (
              <span key={t} style={{
                fontSize: 10.5, fontWeight: 600, color: m.color,
                background: `${m.color}15`,
                border: `1px solid ${m.color}30`,
                borderRadius: 20, padding: "4px 11px",
              }}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="group-hover:opacity-100 opacity-60 transition-opacity duration-300">
            <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>Explore solutions</span>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${m.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ArrowUpRight size={13} color={m.color} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
//  BENTO CARD — White card with illustration for medium industries
// ══════════════════════════════════════════════════════════════════════════════
function BentoCardLight({ industry }: { industry: Industry }) {
  const Icon = iconMap[industry.icon] || Monitor
  const m = meta[industry.icon] || fallback

  return (
    <Link href={`/industries/${industry.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -6, boxShadow: `0 24px 60px -12px ${m.color}25, 0 0 0 1px ${m.color}15` }}
        transition={{ duration: 0.25 }}
        style={{
          background: "#fff",
          border: "1px solid #eaecf0",
          borderRadius: 24, padding: "30px",
          height: "100%", minHeight: 300,
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {/* Top accent strip */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: m.color, borderRadius: "24px 24px 0 0" }} />

        {/* Subtle bg tint */}
        <div style={{ position: "absolute", top: 3, right: 0, width: "50%", bottom: 0, background: `linear-gradient(135deg, transparent, ${m.color}05)`, pointerEvents: "none" }} />

        {/* Illustration */}
        <div style={{ height: 90, marginBottom: 20, position: "relative" }}>
          <Illustration iconKey={industry.icon} color={m.color} />
        </div>

        {/* Icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `${m.color}12`, border: `1px solid ${m.color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={17} color={m.color} />
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", margin: 0 }} className="group-hover:text-primary transition-colors duration-200">
            {industry.title}
          </h3>
        </div>

        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
          {m.caption}
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 20, marginBottom: 16, padding: "12px 14px", background: "#f8fafc", borderRadius: 12, border: "1px solid #f1f5f9" }}>
          {[{v: m.stat1, l: m.stat1Label}, {v: m.stat2, l: m.stat2Label}].map((s, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: m.color, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500, marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {m.tags.slice(0,3).map(t => (
            <span key={t} style={{ fontSize: 10, fontWeight: 600, color: m.color, background: `${m.color}10`, border: `1px solid ${m.color}18`, borderRadius: 20, padding: "3px 9px" }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5, paddingTop: 12, borderTop: `1px solid ${m.color}10` }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: m.color }}>Explore AI Solutions</span>
          <ArrowUpRight size={13} color={m.color} />
        </div>
      </motion.div>
    </Link>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
//  BENTO CARD — Horizontal full-width card for Startups / feature
// ══════════════════════════════════════════════════════════════════════════════
function BentoCardWide({ industry }: { industry: Industry }) {
  const Icon = iconMap[industry.icon] || Monitor
  const m = meta[industry.icon] || fallback

  return (
    <Link href={`/industries/${industry.slug}`} className="group block">
      <motion.div
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.25 }}
        style={{
          background: m.gradient,
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0,
          minHeight: 220,
          boxShadow: `0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)`,
        }}
      >
        {/* Image overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${m.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />

        {/* Left — identity */}
        <div style={{ padding: "36px 32px", position: "relative", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `${m.color}20`, border: `1px solid ${m.color}35`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <Icon size={22} color={m.color} />
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>{industry.title}</h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 20 }}>{m.caption}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="group-hover:opacity-100 opacity-60 transition-opacity">
            <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>Explore</span>
            <ArrowUpRight size={13} color={m.color} />
          </div>
        </div>

        {/* Mid — illustration + stats */}
        <div style={{ padding: "36px 32px", position: "relative", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ height: 90, marginBottom: 16 }}>
            <Illustration iconKey={industry.icon} color={m.color} />
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[{v: m.stat1, l: m.stat1Label}, {v: m.stat2, l: m.stat2Label}].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: m.color, fontWeight: 600, marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bullets */}
        <div style={{ padding: "36px 32px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          {m.bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${m.color}20`, border: `1px solid ${m.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <CheckCircle2 size={10} color={m.color} />
              </div>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{b}</span>
            </div>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {m.tags.map(t => (
              <span key={t} style={{ fontSize: 10, fontWeight: 600, color: m.color, background: `${m.color}15`, border: `1px solid ${m.color}30`, borderRadius: 20, padding: "3px 10px" }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function IndustryMarquee() {
  const items = ["Healthcare", "E-Commerce", "Manufacturing", "Logistics", "Finance", "Education", "Hospitality", "Real Estate", "Technology", "Retail", "Automotive", "Insurance"]
  const doubled = [...items, ...items]
  return (
    <div style={{ background: "#1d4ed8", overflow: "hidden", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <style>{`
        @keyframes mqScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .mq-tr { display:flex; width:max-content; animation:mqScroll 32s linear infinite; }
        .mq-tr:hover { animation-play-state:paused; }
      `}</style>
      <div className="mq-tr">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "0 32px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Hero Visual ──────────────────────────────────────────────────────────────
function IndustriesHeroVisual() {
  const floaters = [
    { icon: Heart,         label: "Healthcare",    color: "#f87171", bg: "#fef2f2", x: 0,   y: 0,   delay: 0   },
    { icon: ShoppingCart,  label: "E-commerce",    color: "#4ade80", bg: "#f0fdf4", x: 165, y: 15,  delay: 0.2 },
    { icon: GraduationCap, label: "Education",     color: "#a78bfa", bg: "#f5f3ff", x: 305, y: 0,   delay: 0.4 },
    { icon: Hotel,         label: "Hospitality",   color: "#fb7185", bg: "#fff1f2", x: 55,  y: 125, delay: 0.6 },
    { icon: Factory,       label: "Manufacturing", color: "#fbbf24", bg: "#fffbeb", x: 215, y: 135, delay: 0.8 },
    { icon: Building,      label: "Real Estate",   color: "#fb923c", bg: "#fff7ed", x: 5,   y: 248, delay: 1.0 },
    { icon: Truck,         label: "Logistics",     color: "#38bdf8", bg: "#f0f9ff", x: 175, y: 255, delay: 1.2 },
    { icon: DollarSign,    label: "Finance",       color: "#34d399", bg: "#ecfdf5", x: 320, y: 145, delay: 1.4 },
  ]
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 430, margin: "0 auto" }}>
      <div style={{ position: "relative", height: 340 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 55% 45%, rgba(59,130,246,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} viewBox="0 0 430 340">
          {floaters.map((c, i) => (
            <motion.line key={i} x1={c.x + 68} y1={c.y + 22} x2={215} y2={168}
              stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4"
              initial={{ opacity: 0 }} animate={{ opacity: 0.15 }}
              transition={{ delay: c.delay + 0.4 }} />
          ))}
        </svg>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 150 }}
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "#2563eb", borderRadius: 20, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 8px 32px rgba(37,99,235,0.4)", zIndex: 10 }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <Bot size={22} color="#fff" />
          </motion.div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 800, color: "#fff", margin: 0 }}>PixoraNest AI</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", margin: 0 }}>10 industries covered</p>
          </div>
        </motion.div>
        {floaters.map((card, i) => {
          const CIcon = card.icon
          return (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.5, type: "spring", stiffness: 130 }}
              style={{ position: "absolute", left: card.x, top: card.y, zIndex: 2 }}
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "9px 14px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 3px 14px rgba(0,0,0,0.08)", minWidth: 130 }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 8, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CIcon size={14} color={card.color} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap" }}>{card.label}</span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 12 }}
      >
        {[{ icon: Zap, value: "10M+", label: "Calls automated" }, { icon: TrendingUp, value: "98%", label: "Response rate" }, { icon: Clock, value: "24/7", label: "Always on" }].map((s, i) => {
          const SI = s.icon
          return (
            <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "10px 8px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <SI size={13} color="#2563eb" style={{ margin: "0 auto 5px" }} />
              <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{s.label}</p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

// ─── Bento grid layout assignment ─────────────────────────────────────────────
// Layout: 3-col bento
// Row 1: [Healthcare DARK 2col] [E-commerce LIGHT 1col]
// Row 2: [Logistics LIGHT 1col] [Finance DARK 1col] [Education LIGHT 1col]
// Row 3: [Manufacturing LIGHT 1col] [Hospitality DARK 2col]
// Row 4: [Real Estate LIGHT 1col] [IT&SaaS DARK 1col] [Startups LIGHT 1col]
// Full: Rocket WIDE
const cardStyles: Record<string, "dark" | "light" | "wide"> = {
  Heart:         "dark",
  ShoppingCart:  "light",
  Factory:       "light",
  Truck:         "light",
  DollarSign:    "dark",
  GraduationCap: "light",
  Hotel:         "dark",
  Building:      "light",
  Monitor:       "dark",
  Rocket:        "wide",
}

const colSpans: Record<string, string> = {
  Heart:         "lg:col-span-2",
  ShoppingCart:  "lg:col-span-1",
  Factory:       "lg:col-span-1",
  Truck:         "lg:col-span-1",
  DollarSign:    "lg:col-span-1",
  GraduationCap: "lg:col-span-1",
  Hotel:         "lg:col-span-2",
  Building:      "lg:col-span-1",
  Monitor:       "lg:col-span-1",
  Rocket:        "lg:col-span-3",
}

// ─── Main page ────────────────────────────────────────────────────────────────
export function IndustriesPageContent() {
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="px-4 pb-0 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.p variants={fadeInUp} className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                Trusted by 500+ businesses worldwide
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance" style={{ letterSpacing: "-0.02em" }}>
                AI Automation Solutions for{" "}
                <span className="text-primary">Every Industry</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                PixoraNest delivers industry-specific AI automation — from healthcare to logistics — automating calls, leads, and communication so you focus on growth.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link href="/demo" className="bg-blue-600 text-white px-7 py-3.5 rounded-xl hover:bg-blue-700 text-sm font-semibold transition-colors shadow-lg shadow-blue-600/25">
                  Book a Demo →
                </Link>
                <Link href="/contact" className="border border-border px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors">
                  Contact Us
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap gap-6 text-sm text-muted-foreground">
                {["AI Call Automation", "WhatsApp Lead Automation", "CRM Workflow Automation"].map(t => (
                  <span key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:block">
              <IndustriesHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mt-16"><IndustryMarquee /></div>

      {/* BENTO GRID */}
      <SectionWrapper>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>

          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-blue-600 block mb-3">Industries</span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              Industries We Support with{" "}
              <span className="text-primary">AI Automation</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tailored AI solutions for every sector — built to handle the unique challenges of your industry at scale.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => {
              const style = cardStyles[industry.icon] || "light"
              const span = colSpans[industry.icon] || "lg:col-span-1"

              return (
                <motion.div key={industry.slug} variants={fadeInUp} className={span}>
                  {style === "dark"  && <BentoCardDark industry={industry} />}
                  {style === "light" && <BentoCardLight industry={industry} />}
                  {style === "wide"  && <BentoCardWide industry={industry} />}
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeInUp} className="mt-14 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Don&apos;t see your industry? We customise for any business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Talk to an Expert <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

        </motion.div>
      </SectionWrapper>
    </div>
  )
}