'use client'


import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Navbar
    'nav.about': 'Biz haqimizda',
    'nav.products': 'Mahsulotlarimiz',
    'nav.showroom': 'Showroom',
    'nav.order': 'Buyurtma berish',
    
    // Hero
    'hero.title': 'Sizning orzuingizdagi mebellar',
    'hero.subtitle': 'Biz yuqori sifatli mebel va ichki dizayn xizmatlari bilan uyingizni orzularingizdagi joyga aylantiramiz. Har bir loyihani maxsus e\'tibor va professional yondashuv bilan amalga oshiramiz.',
    'hero.cta': 'Buyurtma berish',
    
    // Products
    'products.title': 'Bizning loyihalarimiz',
    'products.subtitle': 'Amalga oshirilgan ishlarimizdan namunalar',
    'products.bedroom': 'Yotoqxona',
    'products.kitchen': 'Oshxona',
    'products.all': 'Barcha loyihalar',
    
    // About
    'about.title': 'Biz haqimizda',
    'about.description': 'Miro kompaniyasi 2020 yilda tashkil topgan bo\'lib, bugungi kunga qadar minglab mijozlarning uylarini zamonaviy va sifatli mebel bilan ta\'minlab kelmoqda. Bizning asosiy maqsadimiz - har bir O\'zbek oilasiga sifatli, arzon va chiroyli mebel yetkazib berishdir. Yo\'lning boshidan buyon biz mijozlarimizning ishonchini oqlaydigan mahsulotlar yaratib, professional xizmat ko\'rsatib kelmoqdamiz. Tajribali mutaxassislar jamoasi, zamonaviy uskunalar va yuqori sifatli materiallar - bu bizning muvaffaqiyatimizning kalitidir.',
    'about.step1.title': 'Yuqori sifat',
    'about.step1.desc': 'Biz faqat yuqori sifatli materiallardan foydalanib, har bir mahsulotni chuqur nazorat ostida ishlab chiqaramiz. Mijozlarimizga eng yaxshi natijalarni taqdim etish bizning ustuvor maqsadimizdir.',
    'about.step2.title': 'Professional xizmat',
    'about.step2.desc': 'Malakali mutaxassislarimiz loyihangizni boshidan oxirigacha kuzatib boradi. Konsultatsiya, dizayn loyihalash va o\'rnatishda to\'liq yordam beramiz.',
    'about.step3.title': 'Kafolat tizimi',
    'about.step3.desc': 'Barcha mahsulotlarimizga 2 yillik rasmiy kafolat beramiz. Sifatimizga ishonchimiz komil va mijozlar ehtiyojlarini birinchi o\'ringa qo\'yamiz.',
    'about.step4.title': 'Yetkazib berish',
    'about.step4.desc': 'Angren shahri bo\'ylab bepul yetkazib berish xizmatini taqdim etamiz. O\'rnatish xizmatlari ham kafolatlangan va professional darajada amalga oshiriladi.',
    'about.step5.title': 'Tezkor ishlab chiqarish',
    'about.step5.desc': 'Express tezlikda buyurtmalarni qabul qilamiz. Standart buyurtmalar 15-20 kun ichida, shoshilinch buyurtmalar esa 7-10 kun ichida tayyor bo\'ladi.',
    
    // Why Choose Us
    'why.title': 'Nima uchun bizni tanlaysiz?',
    'why.subtitle': 'Mijozlarimiz bizni tanlagani uchun bir qancha sabablari bor',
    'why.advantage1.title': 'Qulaylik va funksionallik',
    'why.advantage1.desc': 'Har bir mebel mahsuloti kundalik hayotingizni osonlashtirish uchun mo\'ljallangan. Zamonaviy texnologiyalar va ergonomik dizaynlardan foydalanib, sizga eng qulay yechimlarni taklif etamiz.',
    'why.advantage2.title': 'Yuqori sifat va ishonchlilik',
    'why.advantage2.desc': 'Materiallar tanlashdan tortib, yakuniy mahsulotgacha bo\'lgan barcha bosqichlar qat\'iy nazorat ostida amalga oshiriladi. Faqat sertifikatlangan va ekologik toza materiallar ishlatiladi.',
    'why.advantage3.title': 'Tezkor va chidamli',
    'why.advantage3.desc': 'Zamonaviy ishlab chiqarish uskunalari yordamida buyurtmalaringizni qisqa muddatda bajaramiz. Mahsulotlarimiz uzoq yillar xizmat qilish uchun mo\'ljallangan va yuqori bardoshlikka ega.',
    'why.advantage4.title': 'Arzon va hamyonbop',
    'why.advantage4.desc': 'Sifatli mebel har kim uchun mavjud bo\'lishi kerak deb hisoblaymiz. Shuning uchun ishlab chiqaruvchi sifatida to\'g\'ridan-to\'g\'ri mijozlarga xizmat ko\'rsatib, eng mos narxlarni taklif etamiz.',
    
    // Showroom
    'showroom.title': 'Bizning showroom',
    'showroom.subtitle': 'Ishxonamiz va tayyor mahsulotlarimizni video orqali ko\'ring',
    'showroom.watchVideo': 'Showroom videosini tomosha qiling',
    'showroom.projects': 'Bajarilgan loyihalar',
    'showroom.clients': 'Mamnun mijozlar',
    'showroom.experience': 'Bozordagi tajriba',
    'showroom.years': 'yil',
    
    // Contact
    'contact.title': 'Biz bilan bog\'laning',
    'contact.address': 'Angren shahri',
    'contact.phone': 'Telefon',
    
    // Form
    'form.title': 'Buyurtma berish',
    'form.firstName': 'Ism',
    'form.lastName': 'Familiya',
    'form.birthDate': 'Tug\'ilgan sana',
    'form.day': 'Kun',
    'form.month': 'Oy',
    'form.year': 'Yil',
    'form.region': 'Viloyat/Shahar',
    'form.phone': 'Telefon raqam',
    'form.address': 'Manzil',
    'form.length': 'Uzunlik (dilina)',
    'form.width': 'Kenglik (shirina)',
    'form.thickness': 'Qalinlik (tolshina)',
    'form.color': 'Rang',
    'form.color.gray': 'Kulrang',
    'form.color.black': 'Qora',
    'form.color.white': 'Oq',
    'form.material': 'Material',
    'form.material.ldsp': 'LDSP',
    'form.material.lmdf': 'LMDF',
    'form.material.acrylic': 'Akril',
    'form.myOrders': 'Mening buyurtmalarim',
    'form.orderName': 'Buyurtma nomi',
    'form.payment': 'To\'lov turi',
    'form.payment.cash': 'Naqd',
    'form.payment.card': 'Plastik',
    'form.submit': 'Yuborish',
    'form.close': 'Yopish',
    'form.cm': 'sm',
    
    // Footer
    'footer.company': 'Kompaniya',
    'footer.follow': 'Bizni kuzatib boring',
    'footer.rights': 'Barcha huquqlar himoyalangan',
  },
  ru: {
    // Navbar
    'nav.about': 'О нас',
    'nav.products': 'Наши продукты',
    'nav.showroom': 'Контакты',
    'nav.order': 'Заказать',
    
    // Hero
    'hero.title': 'Мебель вашей мечты',
    'hero.subtitle': 'Мы превратим ваш дом в место вашей мечты с помощью высококачественной мебели и услуг дизайна интерьера. Каждый проект выполняем с особым вниманием и профессиональным подходом.',
    'hero.cta': 'Заказать',
    
    // Products
    'products.title': 'Наши проекты',
    'products.subtitle': 'Примеры выполненных работ',
    'products.bedroom': 'Спальня',
    'products.kitchen': 'Кухня',
    'products.all': 'Все проекты',
    
    // About
    'about.title': 'О нас',
    'about.description': 'Компания Miro основана в 2020 году и на сегодняшний день обеспечивает дома тысяч клиентов современной и качественной мебелью. Наша основная цель - доставить качественную, доступную и красивую мебель каждой узбекской семье. С самого начала пути мы создаем продукты, оправдывающие доверие наших клиентов, и предоставляем профессиональное обслуживание. Команда опытных специалистов, современное оборудование и высококачественные материалы - ключ к нашему успеху.',
    'about.step1.title': 'Высокое качество',
    'about.step1.desc': 'Мы используем только высококачественные материалы и производим каждый продукт под строгим контролем. Наш приоритет - предоставить нашим клиентам лучшие результаты.',
    'about.step2.title': 'Профессиональное обслуживание',
    'about.step2.desc': 'Наши квалифицированные специалисты будут следить за вашим проектом от начала до конца. Мы оказываем полную помощь в консультировании, проектировании дизайна и установке.',
    'about.step3.title': 'Гарантийная система',
    'about.step3.desc': 'Мы предоставляем официальную 2-летнюю гарантию на всю нашу продукцию. Мы уверены в нашем качестве и ставим потребности клиентов на первое место.',
    'about.step4.title': 'Доставка',
    'about.step4.desc': 'Мы предлагаем бесплатную доставку по городу Ангрен. Услуги по установке также гарантированы и выполняются профессионально.',
    'about.step5.title': 'Быстрое производство',
    'about.step5.desc': 'Мы принимаем заказы с экспресс-скоростью. Стандартные заказы готовы за 15-20 дней, срочные заказы - за 7-10 дней.',
    
    // Why Choose Us
    'why.title': 'Почему выбирают нас?',
    'why.subtitle': 'Есть несколько причин, по которым наши клиенты выбирают нас',
    'why.advantage1.title': 'Удобство и функциональность',
    'why.advantage1.desc': 'Каждое мебельное изделие предназначено для облегчения вашей повседневной жизни. Используя современные технологии и эргономичный дизайн, мы предлагаем вам самые удобные решения.',
    'why.advantage2.title': 'Высокое качество и надежность',
    'why.advantage2.desc': 'Все этапы от выбора материалов до конечного продукта выполняются под строгим контролем. Используются только сертифицированные и экологически чистые материалы.',
    'why.advantage3.title': 'Быстро и долговечно',
    'why.advantage3.desc': 'С помощью современного производственного оборудования мы выполняем ваши заказы в короткие сроки. Наша продукция предназначена для многолетней службы и обладает высокой износостойкостью.',
    'why.advantage4.title': 'Доступно и недорого',
    'why.advantage4.desc': 'Мы считаем, что качественная мебель должна быть доступна каждому. Поэтому, как производитель, мы напрямую обслуживаем клиентов и предлагаем самые подходящие цены.',
    
    // Showroom
    'showroom.title': 'Наш шоу-рум',
    'showroom.subtitle': 'Посмотрите нашу мастерскую и готовые изделия через видео',
    'showroom.watchVideo': 'Посмотрите видео шоу-рума',
    'showroom.projects': 'Выполненные проекты',
    'showroom.clients': 'Довольные клиенты',
    'showroom.experience': 'Опыт на рынке',
    'showroom.years': 'лет',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.address': 'г. Ангрен',
    'contact.phone': 'Телефон',
    
    // Form
    'form.title': 'Оформить заказ',
    'form.firstName': 'Имя',
    'form.lastName': 'Фамилия',
    'form.birthDate': 'Дата рождения',
    'form.day': 'День',
    'form.month': 'Месяц',
    'form.year': 'Год',
    'form.region': 'Область/Город',
    'form.phone': 'Номер телефона',
    'form.address': 'Адрес',
    'form.length': 'Длина',
    'form.width': 'Ширина',
    'form.thickness': 'Толщина',
    'form.color': 'Цвет',
    'form.color.gray': 'Серый',
    'form.color.black': 'Черный',
    'form.color.white': 'Белый',
    'form.material': 'Материал',
    'form.material.ldsp': 'ЛДСП',
    'form.material.lmdf': 'ЛМДФ',
    'form.material.acrylic': 'Акрил',
    'form.myOrders': 'Мои заказы',
    'form.orderName': 'Название заказа',
    'form.payment': 'Способ оплаты',
    'form.payment.cash': 'Наличные',
    'form.payment.card': 'Карта',
    'form.submit': 'Отправить',
    'form.close': 'Закрыть',
    'form.cm': 'см',
    
    // Footer
    'footer.company': 'Компания',
    'footer.follow': 'Следите за нами',
    'footer.rights': 'Все права защищены',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

const t = (key: keyof typeof translations['uz']): string => {
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}