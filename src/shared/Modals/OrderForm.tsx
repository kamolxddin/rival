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
      image: "/dubUrban.webp",
    },
    {
      key: "white",
      name: "Oq",
      value: "#FFFFFF",
      image: "/akriyBeliy.webp",
    },
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
        body: JSON.stringify({
          message,
          image: selectedImage,
        }),
      });

      if (res.ok) {
        setSubmitted(true);

        // CLEAR FORM
        setForm({
          name: "",
          region: "",
          phone: "",
          length: "",
          width: "",
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
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-x-0 bottom-0 top-[90px] z-50 flex items-start justify-center p-4"
          >
            <div className="bg-white text-gray-800 w-full max-w-lg rounded-xl shadow-2xl max-h-[85vh] overflow-y-auto">
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2 className="text-lg font-semibold">{t("form.title")}</h2>
                <button onClick={onClose}>
                  <X />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center py-12">
                    <CheckCircle size={50} className="text-green-600" />
                    <p className="mt-4 text-sm">{t("form.success")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* TEXT */}
                    <input
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                      placeholder={t("form.name")}
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: textOnly(e.target.value),
                        })
                      }
                      required
                    />

                    <input
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                      placeholder={t("form.region")}
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
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                      placeholder={t("form.phone")}
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
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                        placeholder={t("form.length")}
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
                        className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                        placeholder={t("form.width")}
                        value={form.width}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            width: dimensionOnly(e.target.value),
                          })
                        }
                        required
                      />
                    </div>

                    {/* COLORS */}
                    <div>
                      <p className="text-sm font-medium mb-2">{t("form.selectColor")}</p>

                      <div className="flex gap-3">
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
                            className="w-8 h-8 rounded-full border"
                            style={{
                              backgroundColor: color.value,
                            }}
                          />
                        ))}
                      </div>

                      {selectedImage && (
                        <img
                          src={selectedImage}
                          className="mt-4 rounded-lg shadow"
                        />
                      )}
                    </div>

                    {/* MATERIAL */}
                    <select
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                      required
                      value={form.material}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          material: e.target.value,
                        })
                      }
                    >
                      <option value="">{t("form.selectMaterial")}</option>
                      <option>LDSP</option>
                      <option>Akril</option>
                    </select>

                    {/* WISH */}
                    <textarea
                      rows={3}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F6F63]"
                      placeholder={t("form.wish")}
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
                      className="w-full bg-[#1F6F63] hover:bg-[#174F46] text-white py-2.5 rounded-lg text-sm transition"
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
