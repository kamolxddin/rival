"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center">

        {/* Soft Emerald Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute w-80 h-80 rounded-full bg-emerald-900 blur-3xl"
        />

        {/* Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1], // premium cubic
          }}
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

      </div>
    </motion.div>
  );
}