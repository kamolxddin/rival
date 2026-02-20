"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { CommentModal } from "@/shared/Modals/CommentModal";

export function Footer() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer
        // style={{ backgroundColor: "#267479" }}
        id="contact"
        className="bg-emerald-900 text-gray-300 w-full"
      >
        <div className="px-6 sm:px-10 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* 1. Company Info */}
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-semibold">Miro</h3>
              <p className="text-sm leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* 2. Kompaniya */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl font-semibold">
                {t("footer.company")}
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="hover:text-white">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white">
                    {t("nav.products")}
                  </a>
                </li>
                <li>
                  <a href="#showroom" className="hover:text-white">
                    {t("nav.showroom")}
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Aloqa */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl font-semibold">
                {t("footer.contact")}
              </h4>

              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5" />
                <a href="tel:+998555001800" className="hover:text-white">
                  +998 55 500 18 00
                </a>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-4 bg-white text-gray-900 px-6 py-3 rounded-lg text-sm hover:bg-gray-200 transition w-full"
              >
                {t("footer.comment")}
              </button>
            </div>

            {/* 4. Lokatsiya */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl font-semibold">
                {t("footer.location")}
              </h4>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6020.583924643208!2d70.070111!3d41.018868!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzA3LjkiTiA3MMKwMDQnMTIuNCJF!5e0!3m2!1sen!2s!4v1771478590827!5m2!1sen!2s"
                  className="w-full h-40 rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          © 2026 Miro Production. {t("footer.rights")}
        </div>
      </footer>

      <CommentModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
