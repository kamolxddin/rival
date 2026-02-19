"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

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

  /* 🔒 BODY SCROLL LOCK */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const now = new Date()
  const formattedDate = now.toLocaleString("uz-UZ")

  const message = `
🪑 YANGI BUYURTMA

👤 Ism: ${form.firstName} ${form.lastName}

📍 Hudud: ${form.region}
📞 Telefon: ${form.phone}
🗺 Manzil: ${form.address}

📏 O‘lchamlar:
• Uzunlik: ${form.length} sm
• Kenglik: ${form.width} sm
• Qalinlik: ${form.thickness} sm

🎨 Rang: ${form.color}
🧱 Material: ${form.material}

✨ Izoh:
${form.wish}

💳 To‘lov turi: ${form.payment}

🕒 Vaqt: ${formattedDate}
`

  try {
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })

    const data = await res.json()
    console.log("Telegram response:", data)

    if (res.ok) {
      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)
    }
  } catch (error) {
    console.log("Xatolik:", error)
  }
}


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* MODAL WRAPPER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* CONTAINER */}
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">

              {/* HEADER */}
              <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">
                  Buyurtma berish
                </h2>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* CONTENT (SCROLLABLE) */}
              <div className="overflow-y-auto p-6">

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle size={70} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold">
                      Buyurtma yuborildi!
                    </h3>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <input name="firstName" placeholder="Ism" required onChange={handleChange} className="input" />
                    <input name="lastName" placeholder="Familiya" required onChange={handleChange} className="input" />

                    <input name="region" placeholder="Viloyat / Shahar" required onChange={handleChange} className="input md:col-span-2" />

                    <input name="phone" placeholder="Telefon raqam" required onChange={handleChange} className="input md:col-span-2" />

                    <input name="address" placeholder="Google Maps manzil" onChange={handleChange} className="input md:col-span-2" />

                    <input type="number" name="length" placeholder="Uzunlik (sm)" required onChange={handleChange} className="input" />
                    <input type="number" name="width" placeholder="Kenglik (sm)" required onChange={handleChange} className="input" />

                    <input type="number" name="thickness" placeholder="Qalinlik (sm)" required onChange={handleChange} className="input md:col-span-2" />

                    <select name="color" required onChange={handleChange} className="input">
                      <option value="">Rang tanlang</option>
                      <option>Kulrang</option>
                      <option>Qora</option>
                      <option>Oq</option>
                    </select>

                    <select name="material" required onChange={handleChange} className="input">
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

                    <select name="payment" required onChange={handleChange} className="input md:col-span-2">
                      <option value="">To‘lov turi</option>
                      <option>Naqd</option>
                      <option>Plastik</option>
                    </select>

                    <button
                      type="submit"
                      className="md:col-span-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                    >
                      Yuborish
                    </button>
                  </form>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
