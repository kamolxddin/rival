"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/features/products/data/productImage";
import BeforeAfter from "@/features/products/productComponents/BeforeAfter";

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            {t("products.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>  

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[420px] md:max-w-none aspect-[16/10] overflow-hidden shadow-2xl"
            >
              <BeforeAfter before={product.before} after={product.after} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
