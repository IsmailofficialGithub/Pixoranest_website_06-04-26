"use client"

import { useEffect, useState } from "react"

export default function LeadFlow() {
  const [step, setStep] = useState(0)

  const messages = [
    "📞 Incoming call — AI picking up...",
    "🤖 AI qualifying lead...",
    "📋 CRM updated...",
    "💬 Follow-up sent...",
    "✅ Deal closed!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">

      <p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-wider">
        How a lead becomes a customer
      </p>

      {/* FLOW */}
      <div className="flex items-center justify-between mb-6">

        {["Lead", "AI", "CRM", "Follow", "Close"].map((label, i) => (
          <div key={i} className="flex flex-col items-center flex-1">

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
              ${
                step >= i
                  ? "bg-blue-600 text-white scale-110 shadow-md"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              ●
            </div>

            <p className="text-xs mt-2 text-gray-500 text-center">
              {label}
            </p>

          </div>
        ))}

      </div>

      {/* MESSAGE */}
      <div className="text-center text-sm text-gray-600 mb-4">
        {messages[step]}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-3 mt-4">

        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <p className="text-blue-600 font-bold">10M+</p>
          <p className="text-xs text-gray-500">Calls</p>
        </div>

        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <p className="text-green-600 font-bold">98%</p>
          <p className="text-xs text-gray-500">Response</p>
        </div>

        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <p className="text-emerald-600 font-bold">3.2x</p>
          <p className="text-xs text-gray-500">Conversion</p>
        </div>

      </div>

    </div>
  )
}