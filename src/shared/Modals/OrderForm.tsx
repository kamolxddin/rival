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
  const { t } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const colors = [
    {
      key: "grey",
      name: "Kulrang",
      value: "#D1D5DB",
      image: "/seriyKamen.webp",
    },
    { key: "wood", name: "Yog‘och", value: "#C8A97E", image: "/dubUrban.webp" },
    { key: "white", name: "Oq", value: "#FFFFFF", image: "/akriyBeliy.webp" },
  ];

  const [form, setForm] = useState({
    name: "",
    region: "",
    phone: "",
    length: "",
    width: "",
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

  const textOnly = (value: string) => value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "");

  const numberOnly = (value: string) => value.replace(/[^0-9]/g, "");

  const dimensionOnly = (value: string) => {
    const clean = value.replace(/[^0-9]/g, "");
    return clean === "" ? "" : Math.max(1, Number(clean)).toString();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleString("uz-UZ");

    const message = `
🪑 YANGI BUYURTMA

👤 Ism: ${form.name}
📍 Hudud: ${form.region}
📞 Telefon: ${form.phone}

📏 O‘lchamlar:
• Uzunlik: ${form.length} mm
• Kenglik: ${form.width} mm

🎨 Rang: ${form.color}
🧱 Material: ${form.material}

✨ Izoh:
${form.wish}

🕒 ${formattedDate}
`;

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, image: selectedImage }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.25)] max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold">{t("form.title")}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-8 py-6">
                {submitted ? (
                  <div className="flex flex-col items-center py-12">
                    <CheckCircle size={50} className="text-[#1F6F63]" />
                    <p className="mt-4 text-sm text-gray-600">
                      {t("form.success")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Inputs */}
                    <input
                      placeholder={t("form.name")}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: textOnly(e.target.value) })
                      }
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                    />

                    <input
                      placeholder={t("form.region")}
                      value={form.region}
                      onChange={(e) =>
                        setForm({ ...form, region: textOnly(e.target.value) })
                      }
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                    />

                    <input
                      placeholder={t("form.phone")}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: numberOnly(e.target.value) })
                      }
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                    />

                    {/* Dimensions */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        placeholder={t("form.length")}
                        value={form.length}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            length: dimensionOnly(e.target.value),
                          })
                        }
                        required
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                      />

                      <input
                        placeholder={t("form.width")}
                        value={form.width}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            width: dimensionOnly(e.target.value),
                          })
                        }
                        required
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                      />
                    </div>

                    {/* Colors */}
                    <div>
                      <p className="text-sm font-medium mb-3">
                        {t("form.selectColor")}
                      </p>
                      <div className="flex gap-4">
                        {colors.map((color) => (
                          <button
                            key={color.key}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, color: color.name });
                              setSelectedImage(color.image);
                            }}
                            className={`w-10 h-10 rounded-full border-2 transition 
                            ${
                              form.color === color.name
                                ? "border-[#1F6F63] scale-110"
                                : "border-gray-200 hover:scale-105"
                            }`}
                            style={{ backgroundColor: color.value }}
                          />
                        ))}
                      </div>

                      {selectedImage && (
                        <img
                          src={selectedImage}
                          className="mt-4 rounded-xl shadow-sm"
                        />
                      )}
                    </div>

                    {/* Material */}
                    <select
                      value={form.material}
                      onChange={(e) =>
                        setForm({ ...form, material: e.target.value })
                      }
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                    >
                      <option value="">{t("form.selectMaterial")}</option>
                      <option>LDSP</option>
                      <option>Akril</option>
                    </select>

                    {/* Wish */}
                    <textarea
                      rows={3}
                      placeholder={t("form.wish")}
                      value={form.wish}
                      onChange={(e) =>
                        setForm({ ...form, wish: e.target.value })
                      }
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1F6F63]/40 focus:border-[#1F6F63] outline-none transition"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#1F6F63] hover:bg-[#174F46] text-white py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
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
