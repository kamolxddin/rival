"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const fullText = "miro";
  const [displayed, setDisplayed] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);

        // After typing finishes, switch to real logo
        setTimeout(() => {
          setShowLogo(true);
        }, 600);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center">

        {/* Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.12 }}
          transition={{ duration: 1 }}
          className="absolute w-80 h-80 rounded-full bg-emerald-900 blur-3xl"
        />

        {/* Typing Animation */}
        {!showLogo ? (
          <div className="flex items-center text-5xl font-semibold tracking-tight text-emerald-900">
            {displayed}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1"
            >
              |
            </motion.span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.webp"
              alt="Miro by Rival"
              width={200}
              height={80}
              priority
              className="object-contain"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 