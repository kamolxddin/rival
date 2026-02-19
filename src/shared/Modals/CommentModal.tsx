'use client'

import { X, Star, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface CommentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CommentModal({ isOpen, onClose }: CommentModalProps) {
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (!comment.trim()) return

    setLoading(true)

    const message = `
📝 Yangi izoh keldi!

⭐ Reyting: ${rating}/5
💬 Izoh: ${comment}
📅 Sana: ${new Date().toLocaleString()}
`

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })

      if (res.ok) {
        setSuccess(true)

        setTimeout(() => {
          setSuccess(false)
          setComment('')
          setRating(0)
          onClose()
        }, 2000)
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative transition-all duration-300">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black transition"
        >
          <X />
        </button>

        {success ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Baholaganingiz uchun rahmat!
            </h2>
            <p className="text-gray-500 text-sm">
              Fikringiz biz uchun muhim.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Izoh qoldirish
            </h2>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Fikringizni yozing..."
              className="w-full border rounded-lg p-3 h-28 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  onClick={() => setRating(num)}
                  className={`cursor-pointer transition ${
                    rating >= num
                      ? 'fill-yellow-400 text-yellow-400 scale-110'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </>
        )}

      </div>
    </div>
  )
}
