"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "uz" | "ru";

type TranslationKey = keyof (typeof translations)["uz"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations = {
  uz: {
    // Navbar
    "nav.about": "Biz haqimizda",
    "nav.products": "Mahsulotlarimiz",
    "nav.showroom": "Showroom",
    "nav.order": "O‘lcham olish",

    // Hero
    "hero.title": "Sizning orzuingizdagi mebellar",
    "hero.subtitle":
      "Biz yuqori sifatli mebel va ichki dizayn xizmatlari bilan uyingizni orzularingizdagi joyga aylantiramiz. Har bir loyihani maxsus e'tibor va professional yondashuv bilan amalga oshiramiz.",
    "hero.cta": "O‘lcham olish",
    "hero.projects": "Bizning mahsulotlar",

    // Products
    "products.title": "Mahsulotlarimiz",
    "products.subtitle": "Amalga oshirilgan ishlarimizdan namunalar",
    // Products Data
    "product.1.name": "Zamonaviy Yotoqxona",
    "product.1.desc": "Yuqori sifatli va zamonaviy dizayn",
    "product.1.color": "Kulrang",

    "product.2.name": "Premium Oshxona",
    "product.2.desc": "Funksional va chiroyli interyer",
    "product.2.color": "Oq",

    "product.3.name": "L-shaklli Oshxona",
    "product.3.desc": "Keng va qulay loyiha",
    "product.3.color": "Yog‘och rang",

    // About
    "about.title": "Biz haqimizda",
    "about.description":
      "Rival Uz 2020 yildan buyon zamonaviy va sifatli mebellar ishlab chiqarish bilan shugullanadi. Biz turli xil mebel turlari — oshxona mebellari, shkaflar, yotoqxona va boshqa interyer yechimlarini loyihalash va ishlab chiqarishga ixtisoslashganmiz. Bizning maqsadimiz — har bir mijoz uchun qulay, estetik va funksional makon yaratish. Har bir loyiha individual yondashuv asosida amalga oshiriladi, material sifati va yigilish jarayoni esa doimo yuqori nazorat ostida boladi.",
    "about.step1.title": "Yuqori sifat",
    "about.step1.desc":
      "Biz faqat yuqori sifatli materiallardan foydalanib, har bir mahsulotni chuqur nazorat ostida ishlab chiqaramiz. Mijozlarimizga eng yaxshi natijalarni taqdim etish bizning ustuvor maqsadimizdir.",
    "about.step2.title": "Professional xizmat",
    "about.step2.desc":
      "Malakali mutaxassislarimiz loyihangizni boshidan oxirigacha kuzatib boradi. Konsultatsiya, dizayn loyihalash va o'rnatishda to'liq yordam beramiz.",
    "about.step3.title": "Kafolat tizimi",
    "about.step3.desc":
      "Barcha mahsulotlarimizga 2 yillik rasmiy kafolat beramiz. Sifatimizga ishonchimiz komil va mijozlar ehtiyojlarini birinchi o'ringa qo'yamiz.",
    "about.step4.title": "Yetkazib berish",
    "about.step4.desc":
      "Angren shahri bo'ylab bepul yetkazib berish xizmatini taqdim etamiz. O'rnatish xizmatlari ham kafolatlangan va professional darajada amalga oshiriladi.",
    "about.step5.title": "Tezkor ishlab chiqarish",
    "about.step5.desc":
      "Express tezlikda buyurtmalarni qabul qilamiz. Standart buyurtmalar 15-20 kun ichida, shoshilinch buyurtmalar esa 7-10 kun ichida tayyor bo'ladi.",

    // Showroom
    "showroom.title": "Bizning showroom",
    "showroom.subtitle":
      "Ishxonamiz va tayyor mahsulotlarimizni video orqali ko'ring",
    "showroom.watchVideo": "Showroom videosini tomosha qiling",
    "showroom.projects": "Bajarilgan loyihalar",
    "showroom.clients": "Mamnun mijozlar",
    "showroom.experience": "Bozordagi tajriba",
    "showroom.years": "yil",

    // Contact
    "footer.company": "Kompaniya",
    "footer.contact": "Aloqa",
    "footer.location": "Lokatsiya",
    "footer.comment": "Izoh qoldirish",
    "footer.rights": "Barcha huquqlar himoyalangan",
    "footer.description":
      "2020 yildan buyon oshxona mebellari, shkaflar va turli xil interyer mebellarini ishlab chiqaramiz.",

    // Form
    // Form
    "form.title": "Bepul o‘lcham olish",
    "form.firstName": "Ism",
    "form.lastName": "Familiya",
    "form.region": "Viloyat / Shahar",
    "form.phone": "Telefon raqam",
    "form.length": "Uzunlik (mm)",
    "form.width": "Kenglik (mm)",
    "form.thickness": "Qalinlik (mm)",
    "form.color": "Rang tanlang",
    "form.material": "Material tanlang",
    "form.material.ldsp": "LDSP",
    "form.material.acrylic": "Akril",
    "form.wish": "Qanday oshxona xohlaysiz?",
    "form.submit": "Zayavka qoldirish",
    "form.success": "Zayavka yuborildi!",
    "form.close": "Yopish",
  },
  ru: {
    // Navbar
    "nav.about": "О нас",
    "nav.products": "Наши продукты",
    "nav.showroom": "Контакты",
    "nav.order": "Замер",

    // Hero
    "hero.title": "Мебель вашей мечты",
    "hero.subtitle":
      "Мы превратим ваш дом в место вашей мечты с помощью высококачественной мебели и услуг дизайна интерьера. Каждый проект выполняем с особым вниманием и профессиональным подходом.",
    "hero.cta": "Замер",
    "hero.projects": "Наши продукты",

    // Products
    "products.title": "Наши продукты",
    "products.subtitle": "Примеры выполненных работ",
    // Products Data
    "product.1.name": "Современная спальня",
    "product.1.desc": "Высокое качество и современный дизайн",
    "product.1.color": "Серый",

    "product.2.name": "Премиум кухня",
    "product.2.desc": "Функциональный и стильный интерьер",
    "product.2.color": "Белый",

    "product.3.name": "L-образная кухня",
    "product.3.desc": "Просторный и удобный проект",
    "product.3.color": "Деревянный цвет",

    // About
    "about.title": "О нас",
    "about.description":
      "Компания Miro основана в 2020 году и на сегодняшний день обеспечивает дома тысяч клиентов современной и качественной мебелью. Наша основная цель - доставить качественную, доступную и красивую мебель каждой узбекской семье. С самого начала пути мы создаем продукты, оправдывающие доверие наших клиентов, и предоставляем профессиональное обслуживание. Команда опытных специалистов, современное оборудование и высококачественные материалы - ключ к нашему успеху.",
    "about.step1.title": "Высокое качество",
    "about.step1.desc":
      "Мы используем только высококачественные материалы и производим каждый продукт под строгим контролем. Наш приоритет - предоставить нашим клиентам лучшие результаты.",
    "about.step2.title": "Профессиональное обслуживание",
    "about.step2.desc":
      "Наши квалифицированные специалисты будут следить за вашим проектом от начала до конца. Мы оказываем полную помощь в консультировании, проектировании дизайна и установке.",
    "about.step3.title": "Гарантийная система",
    "about.step3.desc":
      "Мы предоставляем официальную 2-летнюю гарантию на всю нашу продукцию. Мы уверены в нашем качестве и ставим потребности клиентов на первое место.",
    "about.step4.title": "Доставка",
    "about.step4.desc":
      "Мы предлагаем бесплатную доставку по городу Ангрен. Услуги по установке также гарантированы и выполняются профессионально.",
    "about.step5.title": "Быстрое производство",
    "about.step5.desc":
      "Мы принимаем заказы с экспресс-скоростью. Стандартные заказы готовы за 15-20 дней, срочные заказы - за 7-10 дней.",

    // Showroom
    "showroom.title": "Наш шоу-рум",
    "showroom.subtitle":
      "Посмотрите нашу мастерскую и готовые изделия через видео",
    "showroom.watchVideo": "Посмотрите видео шоу-рума",
    "showroom.projects": "Выполненные проекты",
    "showroom.clients": "Довольные клиенты",
    "showroom.experience": "Опыт на рынке",
    "showroom.years": "лет",

    // Contact
    "footer.company": "Компания",
    "footer.contact": "Контакты",
    "footer.location": "Локация",
    "footer.comment": "Оставить отзыв",
    "footer.rights": "Все права защищены",
    "footer.description":
      "С 2020 года производим кухонную мебель, шкафы и интерьерные решения.",

    // Form
    "form.title": "Бесплатный замер",
    "form.firstName": "Имя",
    "form.lastName": "Фамилия",
    "form.region": "Область / Город",
    "form.phone": "Номер телефона",
    "form.length": "Длина (мм)",
    "form.width": "Ширина (мм)",
    "form.thickness": "Толщина (мм)",
    "form.color": "Выберите цвет",
    "form.material": "Выберите материал",
    "form.material.ldsp": "ЛДСП",
    "form.material.acrylic": "Акрил",
    "form.wish": "Какую кухню вы хотите?",
    "form.submit": "Оставить заявку",
    "form.success": "Заявка отправлена!",
    "form.close": "Закрыть",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz");

  const t = (key: keyof (typeof translations)["uz"]): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
