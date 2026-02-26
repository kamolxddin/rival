"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { CommentModal } from "./Modals/CommentModal";

export function Footer() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-[#1F6F63] text-white w-full">
        <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 items-start">
            {/* 1️⃣ Brand Column */}
            <div className="space-y-6">
              <div className="inline-block leading-none select-none">
                <div className="text-3xl font-semibold tracking-[-0.02em]">
                  miro
                </div>
                <div className="text-[11px] tracking-[0.08em] text-right opacity-90">
                  by rival
                </div>
              </div>

              <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
                2020 yildan buyon oshxona mebellari, shkaflar va turli xil
                interyer mebellarini ishlab chiqaramiz.
              </p>

              {/* subtle line */}
              <div className="w-12 h-[2px] bg-white/30"></div>
            </div>

            {/* 2️⃣ Company */}
            <div className="space-y-5">
              <h4 className="text-lg font-semibold">{t("footer.company")}</h4>

              <ul className="space-y-3 text-sm text-gray-200">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition">
                    {t("nav.products")}
                  </a>
                </li>
                <li>
                  <a href="#showroom" className="hover:text-white transition">
                    {t("nav.showroom")}
                  </a>
                </li>
              </ul>
            </div>

            {/* 3️⃣ Contact */}
            <div className="space-y-5">
              <h4 className="text-lg font-semibold">{t("footer.contact")}</h4>

              <div className="flex items-center gap-3 text-sm text-gray-200">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+998555001800"
                  className="hover:text-white transition"
                >
                  +998 55 500 18 00
                </a>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-4 bg-white text-[#1F6F63] px-6 py-3 rounded-lg text-sm hover:bg-gray-200 transition w-full md:w-auto"
              >
                {t("footer.comment")}
              </button>
            </div>

            {/* 4️⃣ Location */}
            <div className="space-y-5">
              <h4 className="text-lg font-semibold">{t("footer.location")}</h4>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6020.583924643208!2d70.070111!3d41.018868!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzA3LjkiTiA3MMKwMDQnMTIuNCJF!5e0!3m2!1sen!2s!4v1771478590827!5m2!1sen!2s"
                  className="w-full h-32"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-200">
          © 2026 Miro Production. {t("footer.rights")}
        </div>
      </footer>

      <CommentModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
