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
    "nav.order": "Bepul loyiha olish",

    form: {
      title: "Bepul loyiha olish",
      name: "Ism",
      region: "Viloyat / Shahar",
      phone: "Telefon",
      length: "Uzunlik (mm)",
      width: "Kenglik (mm)",
      selectColor: "Rang tanlang",
      selectMaterial: "Material tanlang",
      material: "Material",
      wish: "Qanday oshxona xohlaysiz?",
      submit: "Buyurtma yuborish",
      success: "Buyurtma yuborildi!",
      newOrder: "Yangi buyurtma",
      size: "O‘lchamlar",
    },
    // Hero,
    "hero.title": "Sizning orzuingizdagi oshxona mebellari",
    "hero.subtitle":
      "Sizga zamonaviy dizayn va tezkor ishlab chiqarishni uyg‘unlashtirgan holda, orzuyingizdagi va hohishingizga mos ranglardagi oshxonangizni tayyorlab beramiz. Har bir loyiha ishonch, mas’uliyat va professional tajriba asosida amalga oshiriladi.",
    "hero.cta": "Bepul loyiha olish",
    "hero.projects": "Bizning mahsulotlar",

    // Products
    "products.title": "Mahsulotlarimiz",
    "products.subtitle": "Ishlab chiqarilgan mahsulotlarimizdan namunalar",
    "products.color.title": "Rang",
    // Products Data
    "product.1.name": "Ixcham oshxona",
    "product.1.desc": "Yuqori sifatli va zamonaviy dizayn",
    "product.1.color": "Oq",

    "product.2.name": "O'zgacha Oshxona",
    "product.2.desc": "Funksional va chiroyli interyer",
    "product.2.color": "Yog‘och rang",

    "product.3.name": "Premium oshxona",
    "product.3.desc": "Hashamatli ko'rinish",
    "product.3.color": "Jigarrang",

    // About
    "about.title": "Biz haqimizda",
    "about.description":
      "MIRO — bu Rival Group tomonidan ishga tushirilgan yangi loyiha bo`lib, zamonaviy va sifatli oshxona mebellarini ishlab chiqarishga ixtisoslashgan. Rival Group 2020 yildan beri mebel ishlab chiqarish sohasida faoliyat yuritib keladi. Ko`p yillik tajriba, sinovdan o`tgan materiallar va professional jamoa asosida MIRO loyihasi tashkil etildi.",
    "about.step1.title": "Dizayn va zamer",
    "about.step1.desc":
      "Malakali mutaxassislarimiz sizga bepul konsultatsiya, bepul dizayn va bepul o`lcham olish xizmatini taqdim etadi. Har bir loyiha individual yondashuv asosida amalga oshiriladi.",
    "about.step2.title": "Professional xizmat",
    "about.step2.desc":
      "Malakali mutaxassislarimiz loyihangizni boshidan oxirigacha kuzatib boradi. Konsultatsiya, dizayn loyihalash va o'rnatishda to'liq yordam beramiz.",
    "about.step3.title": "Tezkor ishlab chiqarish",
    "about.step3.desc":
      "Buyurtmalar belgilangan muddatda tayyorlanadi. Standart buyurtmalar qisqa vaqt ichida ishlab chiqariladi va sifatdan hech qachon chekinilmaydi.",
    "about.step4.title": "Yetkazib berish va o'rnatish",
    "about.step4.desc":
      "Angren shahri bo`ylab yetkazib berish xizmati mavjud. Professional jamoamiz mahsulotni to`g`ri va sifatli o`rnatib beradi.",
    "about.step5.title": "Kafolat tizimi",
    "about.step5.desc":
      "Barcha mahsulotlarimiz rasmiy kafolat bilan taqdim etiladi. Sifat va mijoz ishonchi biz uchun ustuvor.",

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
    "nav.order": "Получить бесплатный проект",

    form: {
      title: "Получить бесплатный проект",
      name: "Имя",
      region: "Регион / Город",
      phone: "Телефон",
      length: "Длина (мм)",
      width: "Ширина (мм)",
      selectColor: "Выберите цвет",
      selectMaterial: "Выберите материал",
      wish: "Какую кухню вы хотите?",
      submit: "Отправить заявку",
      success: "Заявка отправлена",
    },

    // Hero
    "hero.title": "Кухонная мебель вашей мечты",
    "hero.subtitle":
      "Мы создадим кухню вашей мечты в желаемых вами цветах, сочетая современный дизайн и быстрое изготовление. Каждый проект выполняется с доверием, ответственностью и профессиональным опытом.",
    "hero.cta": "Получить бесплатный проект",
    "hero.projects": "Наши продукты",

    // Products
    "products.title": "Наши продукты",
    "products.subtitle": "Образцы нашей производимой продукции",
    "products.color.title": "Чвет",

    // Products Data
    "product.1.name": "Компактная кухня",
    "product.1.desc": "Высокое качество и современный дизайн",
    "product.1.color": "Серый",

    "product.2.name": "Уникальная Кухня",
    "product.2.desc": "Функциональный и стильный интерьер",
    "product.2.color": "Белый",

    "product.3.name": "Премиум кухня",
    "product.3.desc": "Просторный и удобный проект",
    "product.3.color": "Деревянный цвет",

    // About
    "about.title": "О нас",
    "about.description":
      "MIRO — это новый проект, запущенный компанией Rival Group, специализирующейся на производстве современной и высококачественной кухонной мебели. Компания Rival Group работает в мебельной отрасли с 2020 года. Проект MIRO был создан на основе многолетнего опыта, проверенных материалов и профессиональной команды.",
    "about.step1.title": "Дизайн и размеры",
    "about.step1.desc":
      "Мы принимаем заказы онлайн и офлайн. Каждому клиенту мы предоставляем бесплатный дизайн-проект и бесплатные замеры.",
    "about.step2.title": "Профессиональное обслуживание",
    "about.step2.desc":
      "Наши квалифицированные специалисты будут следить за вашим проектом от начала до конца. Мы оказываем полную помощь в консультировании, проектировании дизайна и установке.",
    "about.step3.title": "Гарантийная система",
    "about.step3.desc":
      "Заказы выполняются в указанные сроки. Стандартные заказы производятся в короткие сроки, при этом качество никогда не страдает.",
    "about.step4.title": "Доставка и установка",
    "about.step4.desc":
      "Доставка осуществляется по всему городу Ангрен. Наша профессиональная команда установит изделие правильно и качественно.",
    "about.step5.title": "Гарантийная система",
    "about.step5.desc":
      "На всю нашу продукцию распространяется официальная гарантия. Качество и доверие клиентов — наши главные приоритеты.",

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

  const t = (key: string) => {
    const keys = key.split(".");
    let result = translations[language];

    for (let k of keys) {
      if (!result) break;
      result = result[k];
    }

    return result || translations[language][key] || key;
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
