"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Showroom() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section id="showroom" className="py-20 text-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F6F63] tracking-tight mb-6">
              {t("showroom.title")}
            </h2>
            <p className="text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
              {t("showroom.subtitle")}
            </p>
          </div>

          {/* VIDEO PREVIEW */}
          <div className="w-full max-w-[900px] mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                >
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN VIDEO MODAL */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
            onClick={() => setIsPlaying(false)} // outside bosilganda yopiladi
          >
            {/* STOP PROPAGATION */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-6 text-white z-[110]"
              >
                <X size={32} />
              </button>

              {/* VIDEO */}
              <motion.video
                src="/showroom.mp4"
                autoPlay
                controls
                playsInline
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-[95vw] max-h-[95vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
