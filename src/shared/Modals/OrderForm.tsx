"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"
import { useState } from "react"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function OrderForm({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    region: "",
    phone: "",
    address: "",
    length: "",
    width: "",
    thickness: "",
    color: "",
    material: "",
    wish: "",
    payment: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const now = new Date()
    const formattedDate = now.toLocaleString("uz-UZ")

    const message = `
🪑 <b>YANGI BUYURTMA</b>

👤 <b>Ism:</b> ${form.firstName} ${form.lastName}

📍 <b>Hudud:</b> ${form.region}
📞 <b>Telefon:</b> ${form.phone}
🗺 <b>Manzil:</b> ${form.address}

📏 <b>O‘lchamlar:</b>
• Uzunlik: ${form.length} sm
• Kenglik: ${form.width} sm
• Qalinlik: ${form.thickness} sm

🎨 <b>Rang:</b> ${form.color}
🧱 <b>Material:</b> ${form.material}

✨ <b>Sizning hohishingiz:</b>
${form.wish}

💳 <b>To‘lov turi:</b> ${form.payment}

🕒 <b>Yuborilgan vaqt:</b> ${formattedDate}
`

    await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative">

              {/* SUCCESS ANIMATION */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 bg-white flex flex-col items-center justify-center rounded-2xl"
                  >
                    <CheckCircle size={70} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold">
                      Buyurtma yuborildi!
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-black"
              >
                <X />
              </button>

              <h2 className="text-2xl font-semibold mb-6 text-center">
                Buyurtma berish
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >

                {/* TEXT ONLY */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="Ism"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Familiya"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="text"
                  name="region"
                  placeholder="Viloyat / Shahar"
                  required
                  onChange={handleChange}
                  className="input md:col-span-2"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon raqam"
                  required
                  onChange={handleChange}
                  className="input md:col-span-2"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Google Maps manzil"
                  onChange={handleChange}
                  className="input md:col-span-2"
                />

                {/* NUMBER ONLY */}
                <input
                  type="number"
                  name="length"
                  placeholder="Uzunlik (sm)"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="number"
                  name="width"
                  placeholder="Kenglik (sm)"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="number"
                  name="thickness"
                  placeholder="Qalinlik (sm)"
                  required
                  onChange={handleChange}
                  className="input md:col-span-2"
                />

                <select
                  name="color"
                  required
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Rang tanlang</option>
                  <option>Kulrang</option>
                  <option>Qora</option>
                  <option>Oq</option>
                </select>

                <select
                  name="material"
                  required
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Material tanlang</option>
                  <option>LDSP</option>
                  <option>LMDF</option>
                  <option>Akril</option>
                </select>

                <textarea
                  name="wish"
                  placeholder="Sizning hohishingiz"
                  rows={3}
                  required
                  onChange={handleChange}
                  className="input md:col-span-2"
                />

                <select
                  name="payment"
                  required
                  onChange={handleChange}
                  className="input md:col-span-2"
                >
                  <option value="">To‘lov turi</option>
                  <option>Naqd</option>
                  <option>Plastik</option>
                </select>

                <button
                  type="submit"
                  className="md:col-span-2 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Yuborish
                </button>

              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
