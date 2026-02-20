"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderForm({ isOpen, onClose }: Props) {
  const { t, language } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const colors = [
    { nameUz: "Kulrang", nameRu: "Серый", value: "#D1D5DB" },
    { nameUz: "Yog‘och", nameRu: "Деревянный", value: "#C8A97E" },
    { nameUz: "Oq", nameRu: "Белый", value: "#FFFFFF" },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    region: "",
    phone: "",
    length: "",
    width: "",
    thickness: "",
    color: "",
    material: "",
    wish: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleString(
      language === "uz" ? "uz-UZ" : "ru-RU",
    );

    const message = `
🪑 ${language === "uz" ? "YANGI ZAYAVKA" : "НОВАЯ ЗАЯВКА"}

👤 ${t("form.firstName")}: ${form.firstName} ${form.lastName}
📍 ${t("form.region")}: ${form.region}
📞 ${t("form.phone")}: ${form.phone}

📏 ${language === "uz" ? "O‘lchamlar" : "Размеры"}:
• ${t("form.length")}: ${form.length}
• ${t("form.width")}: ${form.width}
• ${t("form.thickness")}: ${form.thickness}

🎨 ${t("form.color")}: ${form.color}
🧱 ${t("form.material")}: ${form.material}

✨ ${t("form.wish")}:
${form.wish}

🕒 ${formattedDate}
`;

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.log("Xatolik:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
              {/* HEADER */}
              <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">{t("form.title")}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle size={70} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold">
                      {t("form.success")}
                    </h3>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <input
                      name="firstName"
                      placeholder={t("form.firstName")}
                      required
                      onChange={handleChange}
                      className="input"
                    />

                    <input
                      name="lastName"
                      placeholder={t("form.lastName")}
                      required
                      onChange={handleChange}
                      className="input"
                    />

                    <input
                      name="region"
                      placeholder={t("form.region")}
                      required
                      onChange={handleChange}
                      className="input md:col-span-2"
                    />

                    <input
                      name="phone"
                      placeholder={t("form.phone")}
                      required
                      onChange={handleChange}
                      className="input md:col-span-2"
                    />

                    <input
                      type="number"
                      name="length"
                      placeholder={t("form.length")}
                      required
                      onChange={handleChange}
                      className="input"
                    />

                    <input
                      type="number"
                      name="width"
                      placeholder={t("form.width")}
                      required
                      onChange={handleChange}
                      className="input"
                    />

                    <input
                      type="number"
                      name="thickness"
                      placeholder={t("form.thickness")}
                      required
                      onChange={handleChange}
                      className="input md:col-span-2"
                    />

                    {/* COLOR PANEL */}
                    <div className="md:col-span-2 relative">
                      <button
                        type="button"
                        onClick={() => setColorOpen(!colorOpen)}
                        className="input w-full text-left"
                      >
                        {form.color || t("form.color")}
                      </button>

                      {colorOpen && (
                        <div className="absolute z-20 mt-2 bg-white border rounded-xl shadow-lg p-4 flex gap-4">
                          {colors.map((color) => {
                            const name =
                              language === "uz" ? color.nameUz : color.nameRu;

                            return (
                              <button
                                key={name}
                                type="button"
                                onClick={() => {
                                  setForm({ ...form, color: name });
                                  setColorOpen(false);
                                }}
                                className={`w-10 h-10 rounded-full border-2 transition ${
                                  form.color === name
                                    ? "border-black scale-110"
                                    : "border-gray-300"
                                }`}
                                style={{ backgroundColor: color.value }}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <select
                      name="material"
                      required
                      onChange={handleChange}
                      className="input md:col-span-2"
                    >
                      <option value="">{t("form.material")}</option>
                      <option>{t("form.material.ldsp")}</option>
                      <option>{t("form.material.acrylic")}</option>
                    </select>

                    <textarea
                      name="wish"
                      placeholder={t("form.wish")}
                      rows={3}
                      required
                      onChange={handleChange}
                      className="input md:col-span-2"
                    />

                    <button
                      type="submit"
                      className="md:col-span-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                    >
                      {t("form.submit")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
