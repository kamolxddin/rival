"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { timelineData } from "@/shared/About/About";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-28 bg-[#0C5C3F] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("about.title")}
          </h2>

          <div className="w-20 h-1 bg-white/60 mx-auto mb-6" />

          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {timelineData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="bg-white/10 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                {/* ICON (static, no animation) */}
                <div className="mb-4">
                  <Icon className="w-6 h-6 text-white/80" />
                </div>

                {/* STEP */}
                <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
                  Step {item.step}
                </p>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-3">
                  {t(item.titleKey as any)}
                </h3>

                {/* DESCRIPTION */}
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
