"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function LoadingScreen() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-10">
        {/* LOGO TEXT ANIMATION */}
        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold tracking-widest text-white"
          >
            MIRO
          </motion.h1>

          {/* Light Sweep Effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>

        {/* PROGRESS BAR */}
        <div className="w-48 h-[2px] bg-white/20 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-white"
          />
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-sm tracking-wide"
        >
          {language === "uz" ? "Yuklanmoqda..." : "Загрузка..."}
        </motion.p>
      </div>
    </motion.div>
  );
}
