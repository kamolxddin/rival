"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero, About, Products, Showroom } from "@/features/components/home";
import { LoadingScreen } from "@/shared/components/LoadingScreen";
import { Navbar } from "@/shared/components/Navbar";

import { Footer } from "@/shared/components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Showroom />
        <Footer />
      </div>
    </>
  );
}
