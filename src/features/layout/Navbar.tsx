"use client"

import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { OrderForm } from "@/shared/Modals/OrderForm"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [orderFormOpen, setOrderFormOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Sticky blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
  }, [mobileMenuOpen])

  const menuItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.products") },
    { href: "#showroom", label: t("nav.showroom") },
  ]

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <div className="flex items-center h-full">
              <Image
                src="/logo.webp"
                alt="Miro"
                width={140}
                height={50}
                priority
                className="object-contain"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-black font-medium transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE DESKTOP */}
            <div className="hidden lg:flex items-center gap-6">

              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 text-gray-600 hover:text-black text-sm"
              >
                <Phone className="w-4 h-4" />
                +998 55 500 18 00
              </a>

              {/* BUYURTMA BERISH */}
              <button
                onClick={() => setOrderFormOpen(true)}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition"
              >
                {t("nav.order")}
              </button>

              {/* LANGUAGE */}
              <div className="flex items-center gap-3 text-sm font-semibold">
                <button
                  onClick={() => setLanguage("uz")}
                  className={language === "uz" ? "text-black" : "text-gray-400"}
                >
                  O‘zbek
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLanguage("ru")}
                  className={language === "ru" ? "text-black" : "text-gray-400"}
                >
                  Рус
                </button>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 p-8 flex flex-col"
            >
              {/* CLOSE */}
              <div className="flex justify-end mb-10">
                <X onClick={() => setMobileMenuOpen(false)} />
              </div>

              {/* MENU LINKS */}
              <div className="flex flex-col gap-8 text-lg font-medium">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}

                {/* BUYURTMA */}
                <button
                  onClick={() => {
                    setOrderFormOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="bg-gray-900 text-white py-3 rounded-full font-semibold"
                >
                  {t("nav.order")}
                </button>
              </div>

              {/* LANGUAGE MOBILE */}
              <div className="mt-auto flex gap-4 pt-10 text-sm font-semibold">
                <button onClick={() => setLanguage("uz")}>
                  O‘zbek
                </button>
                <button onClick={() => setLanguage("ru")}>
                  Русский
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= ORDER FORM ================= */}
      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  )
}
