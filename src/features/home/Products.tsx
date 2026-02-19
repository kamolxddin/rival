'use client'

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/constants/products";

const Products = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage(); // ✅ qo‘shildi

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.offsetWidth * 0.9;

    sliderRef.current.scrollBy({
      left: direction === "left" ?   -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            {t("products.title")}
          </h2>
          <p className="text-gray-600">
            {t("products.subtitle")}
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >

            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[90%] sm:min-w-[48%] lg:min-w-[31%] snap-center bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <div className="h-72 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </p>
                    <span className="text-gray-500 text-sm">
                      so'm
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-14">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
            {t("products.all")}
          </button>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Products;
