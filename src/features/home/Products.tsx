"use client";

import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/shared/Products/Products";

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C5C3F] tracking-tight mb-6">
            {t("products.title")}
          </h2>
          <p className=" text-lg text-black font-semibold max-w-3xl mx-auto leading-relaxed">
            {t("products.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={t(`product.${product.id}.name` as any)}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t(`product.${product.id}.name` as any)}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  {t(`product.${product.id}.desc` as any)}
                </p>

                <p className="text-sm text-gray-500 mb-2">
                  Rang: {t(`product.${product.id}.color` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-16">
          <button className="bg-[#0C5C3F] text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
            Barcha mahsulotlar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
