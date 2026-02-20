"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

/* ---------- Counter Hook ---------- */
function useCounter(end: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, start]);

  return count;
}

/* ---------- Component ---------- */
export function Showroom() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef(null);

  return (
    <section
      id="showroom"
      ref={sectionRef}
      className="section-soft py-20 bg-gray-900 text-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl mb-4">{t("showroom.title")}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("showroom.subtitle")}
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full max-w-[900px] mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                >
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </button>
              </div>
            ) : (
              <video
                src="/showroom.mp4"
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
