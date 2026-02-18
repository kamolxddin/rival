'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { OrderForm } from '@/shared/OrderForm'

export function Hero() {
  const { t } = useLanguage()
  const [orderFormOpen, setOrderFormOpen] = useState(false)

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./slidekitchen1.webp"   /* ✅ public ichidan */
            alt="Zamonaviy yotoqxona dizayni"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-300 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setOrderFormOpen(true)}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#products"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition text-center w-full sm:w-auto"
              >
                {t('products.all')}
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  )
}
