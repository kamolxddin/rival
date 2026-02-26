"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { timelineData } from "@/features/products/data/About";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-[#1F6F63] via-[#18584e] to-[#0f3c35] text-white overflow-hidden"
    >
      {/* Soft background light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            {t("about.title")}
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {timelineData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileHover={{ y: -8 }}
                className="
                  relative p-8 rounded-3xl 
                  bg-white/10 backdrop-blur-xl
                  border border-white/15
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  transition-all duration-500
                "
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Step */}
                <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                  Step {item.step}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {t(item.titleKey as any)}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {t(item.descKey as any)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
