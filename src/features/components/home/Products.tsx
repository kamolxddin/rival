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
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl text-[#1F6F63] font-semibold tracking-tight mb-6">
            {t("products.title")}
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
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
        {/* Simple CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => alert("Ma’lumotlar endi qo‘shiladi")}
            className="text-gray-900 font-medium hover:underline underline-offset-4 transition"
          >
            <span> {t("products.button")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
