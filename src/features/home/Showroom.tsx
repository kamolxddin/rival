"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* ---------- Component ---------- */
export function Showroom() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef(null);

  return (
    <section id="showroom" ref={sectionRef} className=" py-20 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            {t("showroom.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className="w-full h-full object-contain bg-emerald-600"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
