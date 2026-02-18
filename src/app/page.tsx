"use client"

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Products from '@/features/home/Products';
import { About } from '@/features/home/About';
import { Showroom } from '@/features/home/Showroom';
import { LoadingScreen } from '@/shared/LoadingScreen';
import { Navbar } from '@/features/layout/Navbar';
import { Hero } from '@/features/home/Hero';
import { Footer } from '@/features/layout/Footer';

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
