import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Miro by Rival – Zamonaviy Oshxona Mebellari",
  description:
    "Angrenda zamonaviy va sifatli oshxona mebellari. Tezkor ishlab chiqarish, professional dizayn va 2 yil kafolat bilan xizmat ko‘rsatamiz.",

  metadataBase: new URL("https://rival-lac.vercel.app"),

  openGraph: {
    title: "Miro by Rival – Zamonaviy Oshxona Mebellari",
    description:
      "Sifatli va zamonaviy oshxona mebellari. Dizayn, ishlab chiqarish va o‘rnatish xizmatlari.",
    url: "https://rival-lac.vercel.app",
    siteName: "Miro by Rival",
    images: [
      {
        url: "/logo.webp", // must be inside public/
        width: 1200,
        height: 630,
        alt: "Miro by Rival Oshxona Mebellari",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Miro by Rival – Zamonaviy Oshxona Mebellari",
    description: "Sifatli va zamonaviy oshxona mebellari Angrenda.",
    images: ["/logo.webp"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${poppins.className} overflow-x-hidden`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
