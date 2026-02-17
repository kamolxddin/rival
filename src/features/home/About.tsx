"use client";
import { motion } from 'motion/react';
import { Shield, Headphones, Award, Truck, Zap, CheckCircle } from 'lucide-react';

export function About() {
  const timeline = [
    {
      icon: Shield,
      title: 'Yuqori sifat',
      description: 'Biz faqat yuqori sifatli materiallardan foydalanib, har bir mahsulotni chuqur nazorat ostida ishlab chiqaramiz. Mijozlarimizga eng yaxshi natijalarni taqdim etish bizning ustuvor maqsadimizdir.',
      step: '01'
    },
    {
      icon: Headphones,
      title: 'Professional xizmat',
      description: 'Malakali mutaxassislarimiz loyihangizni boshidan oxirigacha kuzatib boradi. Konsultatsiya, dizayn loyihalash va o\'rnatishda to\'liq yordam beramiz.',
      step: '02'
    },
    {
      icon: Award,
      title: 'Kafolat tizimi',
      description: 'Barcha mahsulotlarimizga 2 yillik rasmiy kafolat beramiz. Sifatimizga ishonchimiz komil va mijozlar ehtiyojlarini birinchi o\'ringa qo\'yamiz.',
      step: '03'
    },
    {
      icon: Truck,
      title: 'Yetkazib berish',
      description: 'Angren shahri bo\'ylab bepul yetkazib berish xizmatini taqdim etamiz. O\'rnatish xizmatlari ham kafolatlangan va professional darajada amalga oshiriladi.',
      step: '04'
    },
    {
      icon: Zap,
      title: 'Tezkor ishlab chiqarish',
      description: 'Express tezlikda buyurtmalarni qabul qilamiz. Standart buyurtmalar 15-20 kun ichida, shoshilinch buyurtmalar esa 7-10 kun ichida tayyor bo\'ladi.',
      step: '05'
    },
  ];

  const advantages = [
    {
      icon: CheckCircle,
      title: 'Qulaylik va funksionallik',
      description: 'Har bir mebel mahsuloti kundalik hayotingizni osonlashtirish uchun mo\'ljallangan. Zamonaviy texnologiyalar va ergonomik dizaynlardan foydalanib, sizga eng qulay yechimlarni taklif etamiz.'
    },
    {
      icon: Shield,
      title: 'Yuqori sifat va ishonchlilik',
      description: 'Materiallar tanlashdan tortib, yakuniy mahsulotgacha bo\'lgan barcha bosqichlar qat\'iy nazorat ostida amalga oshiriladi. Faqat sertifikatlangan va ekologik toza materiallar ishlatiladi.'
    },
    {
      icon: Zap,
      title: 'Tezkor va chidamli',
      description: 'Zamonaviy ishlab chiqarish uskunalari yordamida buyurtmalaringizni qisqa muddatda bajaramiz. Mahsulotlarimiz uzoq yillar xizmat qilish uchun mo\'ljallangan va yuqori bardoshlikka ega.'
    },
    {
      icon: Award,
      title: 'Arzon va hamyonbop',
      description: 'Sifatli mebel har kim uchun mavjud bo\'lishi kerak deb hisoblaymiz. Shuning uchun ishlab chiqaruvchi sifatida to\'g\'ridan-to\'g\'ri mijozlarga xizmat ko\'rsatib, eng mos narxlarni taklif etamiz.'
    },
  ];

  return (
    <>
      {/* Company History Section */}
      <section id="about" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Biz haqimizda</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Miro kompaniyasi 2020 yilda tashkil topgan bo'lib, bugungi kunga qadar minglab mijozlarning uylarini zamonaviy va sifatli mebel bilan ta'minlab kelmoqda. Bizning asosiy maqsadimiz - har bir O'zbek oilasiga sifatli, arzon va chiroyli mebel yetkazib berishdir. Yo'lning boshidan buyon biz mijozlarimizning ishonchini oqlaydigan mahsulotlar yaratib, professional xizmat ko'rsatib kelmoqdamiz. Tajribali mutaxassislar jamoasi, zamonaviy uskunalar va yuqori sifatli materiallar - bu bizning muvaffaqiyatimizning kalitidir.
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-gray-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl text-gray-900 mb-2 font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute left-10 top-full w-0.5 h-8 bg-gray-300 -translate-x-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Nima uchun bizni tanlaysiz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mijozlarimiz bizni tanlagani uchun bir qancha sabablari bor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-3 font-semibold">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
