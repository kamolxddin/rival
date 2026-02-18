import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { OrderForm } from '@/shared/OrderForm';

export function Hero() {
  const { t } = useLanguage();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src="./slidekitchen1.webp"
            alt="Zamonaviy yotoqxona dizayni"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Overlay gradient animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Animated heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Animated description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Animated buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => setOrderFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                {t('products.all')}
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </section>

      {/* Order Form Modal */}
      <OrderForm isOpen={orderFormOpen} onClose={() => setOrderFormOpen(false)} />
    </>
  );
}