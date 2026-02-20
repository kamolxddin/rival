"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { timelineData, advantagesData } from "@/shared/About/About";

export function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== COMPANY INTRO ===== */}
      <section id="about" className="section-white relative py-24 bg-white overflow-hidden">
        {/* subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              {t("about.title")}
            </h2>

            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("about.description")}
            </p>
          </motion.div>

          {/* TIMELINE CORPORATE STYLE */}
          <div className="relative border-l border-gray-200 space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="ml-8 relative"
                >
                  <div className="absolute -left-[38px] top-2 w-6 h-6 bg-gray-900 rounded-full" />

                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-6 h-6 text-gray-900" />
                      <span className="text-sm font-semibold text-gray-400 tracking-wider">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {t(item.titleKey as any)}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {t(item.descKey as any)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
