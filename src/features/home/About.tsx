"use client";

import { motion } from "framer-motion";
import { Shield, Headphones, Award, Truck, Zap, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const timeline = [
    {
      icon: Shield,
      title: t("about.step1.title"),
      description: t("about.step1.desc"),
      step: "01",
    },
    {
      icon: Headphones,
      title: t("about.step2.title"),
      description: t("about.step2.desc"),
      step: "02",
    },
    {
      icon: Award,
      title: t("about.step3.title"),
      description: t("about.step3.desc"),
      step: "03",
    },
    {
      icon: Truck,
      title: t("about.step4.title"),
      description: t("about.step4.desc"),
      step: "04",
    },
    {
      icon: Zap,
      title: t("about.step5.title"),
      description: t("about.step5.desc"),
      step: "05",
    },
  ];

  const advantages = [
    {
      icon: CheckCircle,
      title: t("why.advantage1.title"),
      description: t("why.advantage1.desc"),
    },
    {
      icon: Shield,
      title: t("why.advantage2.title"),
      description: t("why.advantage2.desc"),
    },
    {
      icon: Zap,
      title: t("why.advantage3.title"),
      description: t("why.advantage3.desc"),
    },
    {
      icon: Award,
      title: t("why.advantage4.title"),
      description: t("why.advantage4.desc"),
    },
  ];

  return (
    <>
      {/* Company History Section */}
      <section id="about" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("about.description")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>

                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl text-gray-900 mb-2 font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              {t("why.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("why.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-3 font-semibold">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
