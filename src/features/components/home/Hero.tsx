"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { OrderForm } from "@/shared/Modals/OrderForm";
import { PrimaryButton } from "@/shared/Components/PrimaryButton";

export default function Hero() {
  const { t } = useLanguage();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[95vh] min-h-[700px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/mainImage.webp"
          alt="Kitchen furniture by Miro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-base md:text-lg mb-8 text-white/90">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton onClick={() => setOrderFormOpen(true)}>
                {t("hero.cta")}
              </PrimaryButton>

              <PrimaryButton
                href="#products"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                {t("hero.projects")}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  );
}
