"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  before: string;
  after: string;
}

export default function BeforeAfter({ before, after }: Props) {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === 1 ? -1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(direction === 1 ? 100 : 0);
  }, [direction]);

  return (
    <div className="relative w-full h-full">
      {/* AFTER */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE */}
      <motion.div
        animate={{
          clipPath: `inset(0 ${100 - progress}% 0 0)`,
        }}
        transition={{
          duration: 2.2,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src={before}
          alt="Before"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Divider */}
      <motion.div
        animate={{ left: `${progress}%` }}
        transition={{
          duration: 2.2,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="absolute top-0 bottom-0 w-[2px] bg-white"
      />
    </div>
  );
}