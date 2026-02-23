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
      <section id="showroom" className="py-20  text-black">
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

          {/* VIDEO PREVIEW WITH THUMBNAIL */}
          <div className="w-full max-w-[900px] mx-auto">
            <div
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group "
              onClick={() => setIsPlaying(true)}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </div>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setIsPlaying(false)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition z-[110]"
              >
                <X size={28} />
              </button>

              {/* VIDEO */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-[95vw] max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src="https://www.youtube.com/embed/Vp8nb6ajphU?si=i4b1W7h07AGU7sGW"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
