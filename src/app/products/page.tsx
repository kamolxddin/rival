"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/features/products/data/products";
import { useRouter } from "next/navigation";

const Products = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F6F63] tracking-tight mb-6">
              {t("products.title")}
            </h2>
            <p className="text-lg text-black font-semibold max-w-3xl mx-auto leading-relaxed">
              {t("products.subtitle")}
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative bg-white rounded-t-2xl p-4">
                  <img
                    src={product.image}
                    alt={t(`product.${product.id}.name` as any)}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-gray-900">
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`product.${product.id}.name` as any)}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {t(`product.${product.id}.desc` as any)}
                  </p>

                  <p className="text-sm text-gray-500">
                    <a className="text-black">{t("products.color.title")}:</a>{" "}
                    {t(`product.${product.id}.color` as any)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          {/* FLOATING BACK BUTTON */}
          <div className="mt-20 flex justify-center">
            <motion.button
              onClick={() => router.back()}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-[#1F6F63] text-white font-semibold shadow-xl hover:bg-[#14534A] transition-all duration-300"
            >
              ← Orqaga qaytish
            </motion.button>
          </div>
        </div>
      </section>

      {/* FULL SCREEN MODAL (Mobile) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] w-auto object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;
