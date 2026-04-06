"use client"

import { useEffect, useState } from "react"
import { Phone, HelpCircle, Monitor, MessageCircle, CheckCircle } from "lucide-react"

const steps = [
  { label: "Lead", icon: Phone, color: "blue" },
  { label: "AI", icon: HelpCircle, color: "orange" },
  { label: "CRM", icon: Monitor, color: "purple" },
  { label: "Follow", icon: MessageCircle, color: "green" },
  { label: "Close", icon: CheckCircle, color: "emerald" },
]

const messages = [
  "📞 Lead captured...",
  "🤖 AI qualifying lead...",
  "📋 CRM updated...",
  "💬 Follow-up sent...",
  "✅ Deal closed!",
]

export default function AnimatedWorkflow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl">

      <p className="text-center text-xs tracking-wider text-gray-500 mb-6 uppercase">
        How a lead becomes a customer
      </p>

      {/* TOP TAGS */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {["WhatsApp", "Phone call", "Social media", "Web form"].map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 bg-gray-100 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* STEPS */}
      <div className="flex items-center justify-between mb-6 relative">

        {/* LINE */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>

        {steps.map((step, i) => {
          const Icon = step.icon
          const isActive = i <= active

          return (
            <div key={i} className="flex flex-col items-center flex-1">

              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full border-2 transition-all duration-500
                ${
                  isActive
                    ? "bg-blue-600 text-white scale-110 shadow-lg"
                    : "bg-white text-gray-400"
                }`}
              >
                <Icon size={22} />
              </div>

              <p className="text-xs mt-2 text-gray-600">{step.label}</p>

            </div>
          )
        })}
      </div>

      {/* STATUS */}
      <div className="text-center text-sm text-gray-600 mb-6 transition-all">
        {messages[active]}
      </div>

      {/* SUCCESS */}
      {active === 4 && (
        <div className="text-center text-green-600 text-sm mb-4">
          ✔ Deal closed — lead converted!
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mt-4">

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-blue-600 font-bold text-lg">10M+</p>
          <p className="text-xs text-gray-500">Calls automated</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-green-600 font-bold text-lg">98%</p>
          <p className="text-xs text-gray-500">Response rate</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-emerald-600 font-bold text-lg">3.2x</p>
          <p className="text-xs text-gray-500">More conversions</p>
        </div>

      </div>

    </div>
  )
}