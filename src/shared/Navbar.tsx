"use client";

import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { OrderForm } from "./Modals/OrderForm";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.products") },
    { href: "#showroom", label: t("nav.showroom") },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-white/95"
        }`}
      >
        {/* INNER WRAPPER */}
        <div className="max-w-9xl mx-auto h-[90px] flex items-center justify-between px-4 lg:px-8">
          {/* LOGO */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Image
              src="/logo.webp"
              alt="Miro by Rival"
              width={190}
              height={60}
              className="object-contain scale-110"
            />
          </motion.a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-800 font-semibold hover:text-[#1F6F63] transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+998555001800"
              className="flex items-center gap-2 text-gray-700 hover:text-[#1F6F63] text-sm"
            >
              <Phone className="w-4 h-4" />
              +998 55 500 18 00
            </a>

            <motion.button
              onClick={() => setOrderFormOpen(true)}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 rounded-xl bg-[#1F6F63] text-white font-semibold shadow-xl hover:bg-[#14534A] transition-all duration-300"
            >
              {t("nav.order")}
            </motion.button>

            {/* LANGUAGE SWITCH */}
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
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
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
                <X
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                />
              </div>

              {/* MENU LINKS */}
              <div className="flex flex-col gap-8 text-lg font-medium">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#1F6F63]"
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  className="text-white bg-[#1F6F63] py-3 rounded-full font-semibold"
                  onClick={() => {
                    setOrderFormOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  {t("nav.order")}
                </button>
              </div>

              {/* LANGUAGE MOBILE */}
              <div className="mt-auto flex gap-4 pt-10 text-sm font-semibold">
                <button onClick={() => setLanguage("uz")}>O‘zbek</button>
                <button onClick={() => setLanguage("ru")}>Русский</button>
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
  );
}
