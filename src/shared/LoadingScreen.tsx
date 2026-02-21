"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  const letters = ["m", "i", "r", "o"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="relative inline-block">
        {/* MIRO */}
        <div className="flex text-6xl md:text-7xl font-semibold tracking-tight text-[#1F6F63] leading-none">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* BY RIVAL */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute right-[6px] top-[92%] text-[10px] tracking-[0.3em] text-gray-500"
        >
          by rival
        </motion.p>
      </div>
    </motion.div>
  );
}
