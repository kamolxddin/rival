'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { OrderForm } from '@/shared/Modals/OrderForm'
import Image from 'next/image'

export function Hero() {
  const { t } = useLanguage()
  const [orderFormOpen, setOrderFormOpen] = useState(false)

  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden text-white">

  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/slidekitchen1.webp"
      alt="Zamonaviy yotoqxona dizayni"
      fill
      priority
      sizes="100%"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 
                  flex items-center min-h-screen">
    
    <div className="max-w-2xl">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-tight mb-6">
        {t('hero.title')}
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8">
        {t('hero.subtitle')}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-white text-gray-900 rounded-lg w-full sm:w-auto">
          {t('hero.cta')}
        </button>

        <a
          href="#products"
          className="px-8 py-4 border border-white rounded-lg text-center w-full sm:w-auto"
        >
          {t('products.all')}
        </a>
      </div>
    </div>

  </div>

</section>


      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
      />
    </>
  )
}
