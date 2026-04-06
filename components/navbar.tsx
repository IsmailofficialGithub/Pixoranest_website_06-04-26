"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { navLinks, socialLinks, industries } from "@/lib/data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] z-50 bg-white border-b">
      
      {/* NAV */}
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo-pixoranest.png"
            alt="PixoraNest AI Automation Platform"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.label === "Industries" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() =>
                  setTimeout(() => setIndustriesOpen(false), 150)
                }
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium hover:text-primary",
                    pathname.startsWith("/industries")
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border bg-white p-2 shadow-xl"
                    >
                      {industries.slice(0, 10).map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {ind.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Book a Demo
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t lg:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-white"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}