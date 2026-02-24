"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { OrderForm } from "@/shared/modals/OrderForm";

export default function Hero() {
  const { t } = useLanguage();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  return (
    <>
      <section className="w-full pt-36 pb-16">
        <div className="max-w-8xl  mx-auto px-5 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* LEFT */}
            <div className="flex-1  max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight mb-6 text-gray-900">
                {t("hero.title")}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-8">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setOrderFormOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1F6F63] text-white font-semibold shadow-md"
                >
                  {t("hero.cta")}
                </button>

                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-4 border border-[#1F6F63] text-[#1F6F63] rounded-xl text-center"
                >
                  {t("hero.projects")}
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-2 w-full ">
              <img
                src="/mainImage.webp"
                alt="Kitchen"
                className="w-full  rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM MODAL */}
      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  );
}
