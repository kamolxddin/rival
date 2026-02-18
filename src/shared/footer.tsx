'use client'

import { Facebook, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-950 text-gray-300 w-full">

      <div className="w-full px-6 sm:px-10 lg:px-16 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-semibold">Miro</h3>
            <p className="text-sm leading-relaxed max-w-md">
              {t('about.description')}
            </p>

            <div className="flex gap-5 pt-2">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">
              {t('footer.company')}
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">
              {t('contact.title')}
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:rivaluzofficial@gmail.com"
                  className="hover:text-white transition"
                >
                  rivaluzofficial@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+998901234567"
                  className="hover:text-white transition"
                >
                  +998 55 500 18 00
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        <div className="max-w-[1400px] mx-auto px-6">
          © 2026 Miro. {t('footer.rights')}
        </div>
      </div>

    </footer>
  );
}
