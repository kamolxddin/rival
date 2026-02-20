"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { OrderForm } from "@/shared/Modals/OrderForm";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden isolate text-white">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/product3.webp"
            alt="Zamonaviy oshxona dizayni"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-2xl">
            {/* Animated Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setOrderFormOpen(true)}
                className="px-8 py-4 bg-[#0C5C3F] text-white rounded-lg w-full sm:w-auto font-semibol"
              >
                {t("hero.cta")}
              </button>

              <a
                href="#products"
                className="px-8 py-4 border border-white rounded-lg text-center w-full sm:w-auto hover:bg-white/10 transition"
              >
                {t("hero.projects")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORDER FORM MODAL */}
      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  );
}
