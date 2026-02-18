'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'uz' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  uz: {
    'nav.about': 'Biz haqimizda',
    'nav.products': 'Mahsulotlarimiz',
    'nav.showroom': 'Showroom',
    'nav.order': 'Buyurtma berish',

    'hero.title': 'Sizning orzuingizdagi mebellar',
    'hero.subtitle':
      "Biz yuqori sifatli mebel va ichki dizayn xizmatlari bilan uyingizni orzularingizdagi joyga aylantiramiz. Har bir loyihani maxsus e'tibor va professional yondashuv bilan amalga oshiramiz.",
    'hero.cta': 'Buyurtma berish',

    'products.title': 'Bizning loyihalarimiz',
    'products.subtitle': 'Amalga oshirilgan ishlarimizdan namunalar',
    'products.bedroom': 'Yotoqxona',
    'products.kitchen': 'Oshxona',
    'products.all': 'Barcha loyihalar',

    'about.title': 'Biz haqimizda',
    'about.description':
      "Miro kompaniyasi 2020 yilda tashkil topgan bo'lib, bugungi kunga qadar minglab mijozlarning uylarini zamonaviy va sifatli mebel bilan ta'minlab kelmoqda.",

    'showroom.title': 'Bizning showroom',
    'showroom.subtitle':
      "Ishxonamiz va tayyor mahsulotlarimizni video orqali ko'ring",

    'contact.title': "Biz bilan bog'laning",

    'form.title': 'Buyurtma berish',
    'form.firstName': 'Ism',
    'form.lastName': 'Familiya',
    'form.phone': 'Telefon raqam',
    'form.submit': 'Yuborish',

    'footer.company': 'Kompaniya',
    'footer.rights': 'Barcha huquqlar himoyalangan',
  },

  ru: {
    'nav.about': 'О нас',
    'nav.products': 'Наши продукты',
    'nav.showroom': 'Шоурум',
    'nav.order': 'Заказать',

    'hero.title': 'Мебель вашей мечты',
    'hero.subtitle':
      'Мы создаём качественную мебель и реализуем интерьер вашей мечты.',
    'hero.cta': 'Заказать',

    'products.title': 'Наши проекты',
    'products.subtitle': 'Примеры выполненных работ',
    'products.bedroom': 'Спальня',
    'products.kitchen': 'Кухня',
    'products.all': 'Все проекты',

    'about.title': 'О нас',
    'about.description':
      'Компания Miro основана в 2020 году и обеспечивает дома современной мебелью.',

    'showroom.title': 'Наш шоу-рум',
    'showroom.subtitle':
      'Посмотрите нашу мастерскую и готовые изделия через видео',

    'contact.title': 'Свяжитесь с нами',

    'form.title': 'Оформить заказ',
    'form.firstName': 'Имя',
    'form.lastName': 'Фамилия',
    'form.phone': 'Номер телефона',
    'form.submit': 'Отправить',

    'footer.company': 'Компания',
    'footer.rights': 'Все права защищены',
  },
} as const

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz')

  const t = (key: string): string => {
    const langPack = translations[language] as Record<string, string>
    return langPack[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
