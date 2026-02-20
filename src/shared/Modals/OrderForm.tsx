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
    {
      key: "wood",
      name: "Yog‘och",
      value: "#C8A97E",
      image: "/dubVotan.webp",
    },
    {
      key: "white",
      name: "Oq",
      value: "#FFFFFF",
      image: "/akriyBeliy.webp",
    },
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

  /* ---------- VALIDATORS ---------- */

  const textOnly = (value: string) => value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "");

  const numberOnly = (value: string) => value.replace(/[^0-9]/g, "");

  const dimensionOnly = (value: string) => {
    const clean = value.replace(/[^0-9]/g, "");
    return clean === "" ? "" : Math.max(1, Number(clean)).toString();
  };

  /* ---------- SUBMIT ---------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleString("uz-UZ");

    const message = `
🪑 YANGI BUYURTMA

👤 Ism: ${form.firstName} ${form.lastName}
📍 Hudud: ${form.region}
📞 Telefon: ${form.phone}

📏 O‘lchamlar:
• Uzunlik: ${form.length} mm
• Kenglik: ${form.width} mm
• Qalinlik: ${form.thickness} mm

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
        body: JSON.stringify({
          message,
          image: selectedImage,
        }),
      });

      if (res.ok) {
        setSubmitted(true);

        // CLEAR FORM
        setForm({
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

        setSelectedImage("");

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
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-700 text-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* HEADER */}
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <h2 className="text-xl font-semibold">Bepul o‘lcham olish</h2>
                <button onClick={onClose}>
                  <X />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center py-16">
                    <CheckCircle size={60} />
                    <p className="mt-4">Buyurtma yuborildi</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {/* TEXT */}
                    <input
                      className="input"
                      placeholder="Ism"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          firstName: textOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="input"
                      placeholder="Familiya"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          lastName: textOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="input md:col-span-2"
                      placeholder="Viloyat / Shahar"
                      value={form.region}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          region: textOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="input md:col-span-2"
                      placeholder="Telefon"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: numberOnly(e.target.value),
                        })
                      }
                      required
                    />

                    {/* DIMENSIONS */}
                    <input
                      className="input"
                      placeholder="Uzunlik (mm)"
                      value={form.length}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          length: dimensionOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="input"
                      placeholder="Kenglik (mm)"
                      value={form.width}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          width: dimensionOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="input md:col-span-2"
                      placeholder="Qalinlik (mm)"
                      value={form.thickness}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          thickness: dimensionOnly(e.target.value),
                        })
                      }
                      required
                    />

                    {/* COLORS */}
                    <div className="md:col-span-2">
                      <p className="mb-3">Rang tanlang</p>

                      <div className="flex gap-4">
                        {colors.map((color) => (
                          <button
                            key={color.key}
                            type="button"
                            onClick={() => {
                              setForm({
                                ...form,
                                color: color.name,
                              });
                              setSelectedImage(color.image);
                            }}
                            className="w-10 h-10 rounded-full border"
                            style={{
                              backgroundColor: color.value,
                            }}
                          />
                        ))}
                      </div>

                      <AnimatePresence>
                        {selectedImage && (
                          <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            src={selectedImage}
                            className="mt-6 rounded-xl shadow-lg"
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* MATERIAL */}
                    <select
                      className="input md:col-span-2"
                      required
                      value={form.material}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          material: e.target.value,
                        })
                      }
                    >
                      <option value="">Material tanlang</option>
                      <option>LDSP</option>
                      <option>Akril</option>
                    </select>

                    {/* WISH */}
                    <textarea
                      rows={3}
                      className="input md:col-span-2"
                      placeholder="Qanday oshxona xohlaysiz?"
                      value={form.wish}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          wish: e.target.value,
                        })
                      }
                      required
                    />

                    <button
                      type="submit"
                      className="md:col-span-2 bg-[#0C5C3F] text-white py-3 rounded-xl"
                    >
                      Buyurtma yuborish
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
