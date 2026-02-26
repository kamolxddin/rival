"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { OrderForm } from "@/shared/Modals/OrderForm";

export default function Hero() {
  const { t } = useLanguage();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1.03, 1.08, 1.03] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/main.webp"
            alt="Premium kitchen furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Premium dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Feature highlights — Big company style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-base md:text-lg text-white/85 mb-12"
            >
              <span> {t("hero.subtitle")}</span>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-10">
              {/* Primary */}
              <motion.button
                onClick={() => setOrderFormOpen(true)}
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg text-white bg-[#1F6F63] overflow-hidden group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-12 transform translate-x-0 group-hover:translate-x-[300%] transition-transform duration-700" />
                </span>

                <span className="relative z-10"> {t("hero.ctaPrimary")}</span>
              </motion.button>

              {/* Secondary */}
              <motion.a
                href="tel:+998555001800"
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg text-white bg-[#1F6F63] overflow-hidden group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-12 transform translate-x-0 group-hover:translate-x-[300%] transition-transform duration-700" />
                </span>

                <span className="relative z-10"> {t("hero.ctaSecondary")}</span>
              </motion.a>
            </div>
          </div>
      </section>

      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  );
}
