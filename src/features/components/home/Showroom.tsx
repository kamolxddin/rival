"use client";

import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Showroom() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 200);
  };

  const handleClose = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };

  return (
    <>
      <section id="showroom" className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1F6F63] mb-6">
              {t("showroom.title")}
            </h2>

            {/* BIG COMPANY STYLE CTA TEXT */}
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
              Bizning ishlab chiqarish jarayonimizni va tayyor oshxona
              mebellarini video orqali ko‘ring.
            </p>
          </div>

          {/* VIDEO BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)] group">
              {/* Video Element */}
              <video
                ref={videoRef}
                src="/showroom.mp4"
                className="w-full h-full object-cover"
                playsInline
              />

              {/* Thumbnail Overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={handlePlay}
                  >
                    <Image
                      src="/thumbnail.webp"
                      alt="Showroom preview"
                      fill
                      className="object-cover"
                    />


                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-500">
                        <Play
                          className="w-10 h-10 text-[#1F6F63] ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button (when playing) */}
              {isPlaying && (
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-10"
                >
                  <X size={22} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
