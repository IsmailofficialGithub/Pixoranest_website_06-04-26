"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  ArrowRight, MessageCircle, Clock, Zap,
  Bot, Shield, Star, ChevronDown,
} from "lucide-react"

const BLUE = "#2563eb"
const NAVY = "#0f172a"

// ─── Contact info cards ───────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@pixoranest.com",
    sub: "We reply within 4 hours",
    href: "mailto:info@pixoranest.com",
    color: BLUE,
    bg: "#eff6ff",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 94606 86266",
    sub: "Mon–Sat, 9am–7pm IST",
    href: "tel:+919460686266",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Narayanpur, Rajasthan 301024",
    sub: "1st Floor, Near Tehsil Bhawan",
    href: "#",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
]

// ─── Trust badges ─────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: Zap,     text: "Reply within 4 hours" },
  { icon: Shield,  text: "100% data secure" },
  { icon: Star,    text: "98% satisfaction rate" },
  { icon: Clock,   text: "Live in 48 hours" },
]

// ─── Form state type ──────────────────────────────────────────────────────────
type FormData = {
  fullName: string
  email: string
  company: string
  whatsapp: string
  automationType: string
  budget: string
  requirements: string
}

// ─── Custom select ────────────────────────────────────────────────────────────
function StyledSelect({
  placeholder, value, onChange, options,
}: { placeholder: string; value: string; onChange: (v: string) => void; options: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left",
          background: "#f8fafc", border: `1.5px solid ${value ? BLUE + "40" : "#e2e8f0"}`,
          borderRadius: 12, padding: "13px 16px",
          fontSize: 13.5, color: value ? NAVY : "#94a3b8",
          fontWeight: value ? 500 : 400,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", transition: "border-color 0.2s",
        }}
      >
        <span>{value || placeholder}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} color="#94a3b8" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 12, boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
              zIndex: 50, overflow: "hidden",
            }}
          >
            {options.map(opt => (
              <button key={opt} type="button"
                onClick={() => { onChange(opt); setOpen(false) }}
                style={{
                  width: "100%", textAlign: "left", padding: "11px 16px",
                  fontSize: 13.5, color: value === opt ? BLUE : NAVY,
                  fontWeight: value === opt ? 600 : 400,
                  background: value === opt ? "#eff6ff" : "transparent",
                  border: "none", cursor: "pointer",
                  transition: "background 0.1s",
                }}
                onMouseEnter={e => { if (value !== opt) (e.currentTarget as HTMLElement).style.background = "#f8fafc" }}
                onMouseLeave={e => { if (value !== opt) (e.currentTarget as HTMLElement).style.background = "transparent" }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Input field ──────────────────────────────────────────────────────────────
function Field({
  type = "text", placeholder, value, onChange, required = true,
}: { type?: string; placeholder: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: "100%", background: "#f8fafc",
        border: `1.5px solid ${focused ? BLUE : value ? BLUE + "40" : "#e2e8f0"}`,
        borderRadius: 12, padding: "13px 16px",
        fontSize: 13.5, color: NAVY, outline: "none",
        transition: "border-color 0.2s",
        fontFamily: "inherit",
      }}
    />
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [formData,  setFormData]  = useState<FormData>({
    fullName: "", email: "", company: "", whatsapp: "",
    automationType: "", budget: "", requirements: "",
  })

  function update(key: keyof FormData) {
    return (v: string) => setFormData(prev => ({ ...prev, [key]: v }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (err) {
      console.error("Email Error:", err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-x-hidden" style={{ background: "#f8fafc" }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 50%, ${NAVY} 100%)`,
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }}
          style={{ position: "absolute", top: -80, left: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          style={{ position: "absolute", bottom: -80, right: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-4xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            <motion.div variants={fadeInUp} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
              <MessageCircle size={13} color="#4ade80" />
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>We reply within 4 hours</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Contact{" "}
              <span style={{ color: "#60a5fa" }}>PixoraNest</span>{" "}
              AI Automation Experts
            </motion.h1>

            <motion.p variants={fadeInUp}
              style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 580, margin: "0 auto 36px" }}>
              Speak with our specialists about AI automation, WhatsApp lead management, AI voice agents, and CRM workflow automation. Let's build the right solution for your business.
            </motion.p>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              {trustBadges.map((b, i) => {
                const BIcon = b.icon
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "7px 14px" }}>
                    <BIcon size={13} color="#4ade80" />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{b.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════ */}
      <section className="px-6 py-10" style={{ background: "#fff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {contactInfo.map((info, i) => {
            const InfoIcon = info.icon
            return (
              <motion.a key={i} href={info.href}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: `0 12px 32px ${info.color}18` }}
                style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid #e8edf4", borderRadius: 16, padding: "18px 20px", textDecoration: "none", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 12, background: info.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <InfoIcon size={20} color={info.color} />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8", margin: 0, marginBottom: 3 }}>{info.label}</p>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: NAVY, margin: 0 }}>{info.value}</p>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "2px 0 0" }}>{info.sub}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — FORM + CALENDAR
      ══════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: CONTACT FORM ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>

              {/* Form header */}
              <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 100%)`, padding: "28px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(37,99,235,0.3)", pointerEvents: "none" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Send size={18} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>Send Us a Message</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>We'll get back to you within 4 hours</p>
                  </div>
                </div>
              </div>

              <div style={{ padding: "28px 32px" }}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      style={{ textAlign: "center", padding: "40px 20px" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }}
                        style={{ width: 72, height: 72, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}
                      >
                        <CheckCircle2 size={36} color="#059669" />
                      </motion.div>
                      <h3 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 10 }}>Message Sent!</h3>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, maxWidth: 320, margin: "0 auto 24px" }}>
                        Thank you for reaching out. Our team will contact you within 4 hours.
                      </p>
                      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                        <button onClick={() => { setSubmitted(false); setFormData({ fullName: "", email: "", company: "", whatsapp: "", automationType: "", budget: "", requirements: "" }) }}
                          style={{ background: "#f1f5f9", color: NAVY, border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                          Send another
                        </button>
                        <a href="https://wa.me/919460686266" target="_blank" rel="noopener noreferrer"
                          style={{ background: "#25d366", color: "#fff", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                          <MessageCircle size={14} />
                          WhatsApp us
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      style={{ display: "flex", flexDirection: "column", gap: 14 }}
                    >
                      {/* Row 1 — Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field placeholder="Full Name" value={formData.fullName} onChange={update("fullName")} />
                        <Field type="email" placeholder="Business Email" value={formData.email} onChange={update("email")} />
                      </div>

                      {/* Row 2 — Company + WhatsApp */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field placeholder="Company Name" value={formData.company} onChange={update("company")} />
                        <Field type="tel" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={update("whatsapp")} />
                      </div>

                      {/* Automation type */}
                      <StyledSelect
                        placeholder="Select automation type"
                        value={formData.automationType}
                        onChange={update("automationType")}
                        options={["AI Agents", "WhatsApp Automation", "Business Workflow Automation", "CRM Automation", "Marketing Automation", "Customer Support Automation", "Custom Integrations", "Other"]}
                      />

                      {/* Budget */}
                      <StyledSelect
                        placeholder="Select your budget range"
                        value={formData.budget}
                        onChange={update("budget")}
                        options={["Below ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "₹3,00,000+", "Not sure / Need consultation"]}
                      />

                      {/* Requirements */}
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your automation needs and challenges..."
                        value={formData.requirements}
                        onChange={e => update("requirements")(e.target.value)}
                        style={{
                          width: "100%", background: "#f8fafc",
                          border: "1.5px solid #e2e8f0", borderRadius: 12,
                          padding: "13px 16px", fontSize: 13.5, color: NAVY,
                          outline: "none", resize: "none", fontFamily: "inherit",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                        onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0" }}
                      />

                      {/* Privacy note */}
                      <p style={{ fontSize: 11.5, color: "#94a3b8", display: "flex", alignItems: "center", gap: 5, margin: 0 }}>
                        <Bot size={12} color="#94a3b8" style={{ flexShrink: 0 }} />
                        Your data is 100% secure and never shared with third parties.
                      </p>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.01 }}
                        whileTap={{ scale: loading ? 1 : 0.99 }}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                          background: loading ? "#93c5fd" : BLUE,
                          color: "#fff", border: "none", borderRadius: 12,
                          padding: "15px 24px", fontSize: 14, fontWeight: 700,
                          cursor: loading ? "not-allowed" : "pointer",
                          boxShadow: loading ? "none" : `0 8px 20px ${BLUE}40`,
                          transition: "background 0.2s, box-shadow 0.2s",
                          width: "100%",
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff" }} />
                            Sending...
                          </>
                        ) : (
                          <>Send Message <Send size={15} /></>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: CALENDAR + EXTRA ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Cal.com embed header */}
            <div style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              {/* Header */}
              <div style={{ background: `linear-gradient(135deg, #059669 0%, #047857 100%)`, padding: "22px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -16, right: -16, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Bot size={18} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: 0 }}>Book a Free Demo Call</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>30 min · Google Meet · Free</p>
                  </div>
                </div>
              </div>

              {/* Cal embed */}
              <div style={{ padding: "0", background: "#fff" }}>
                <iframe
                  src="https://cal.com/pixora-nest/demo?embed=true&redirect=https://pixoranest.com/demo/success"
                  width="100%"
                  height="580"
                  frameBorder="0"
                  title="PixoraNest Demo Booking"
                  style={{ display: "block", borderRadius: "0 0 24px 24px" }}
                />
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <motion.a
              href="https://wa.me/919460686266?text=Hi%20PixoraNest%2C%20I%20want%20to%20know%20more%20about%20your%20AI%20automation%20solutions"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "#25d366", borderRadius: 16, padding: "18px 22px",
                textDecoration: "none", boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                cursor: "pointer",
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <MessageCircle size={22} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: "#fff", margin: 0 }}>Chat on WhatsApp</p>
                <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.8)", margin: "2px 0 0" }}>Get instant answers · Usually replies in minutes</p>
              </div>
              <ArrowRight size={18} color="rgba(255,255,255,0.8)" />
            </motion.a>

            {/* Office address card */}
            <div style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} color="#f59e0b" />
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 4px" }}>Office Address</p>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: NAVY, margin: 0 }}>PixoraNest Automation Solutions</p>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: "4px 0 0" }}>
                    1st Floor, Near Tehsil Bhawan<br />
                    Narayanpur, Rajasthan 301024<br />
                    India
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="px-6 py-20" style={{ background: `linear-gradient(135deg, ${NAVY}, #1e3a8a)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-3xl mx-auto text-center" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Ready to Automate Your Business?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto 32px" }}>
              Join 500+ businesses already using PixoraNest to capture leads, reply 24/7, and close more deals with AI.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pricing" style={{ background: BLUE, color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(37,99,235,0.5)", textDecoration: "none" }}>
                View Pricing <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
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