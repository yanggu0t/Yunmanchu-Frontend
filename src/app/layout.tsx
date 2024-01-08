import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | 蘊慢築 YunManChu",
    default: "蘊慢築 YunManChu Homestay", // a default is required when creating a template
  },
  description:
    "蘊慢築，蘊慢築茶花藝主題民宿 YunManChu Homestay 位於苗栗公館，在這裡可以享受到綠植、花藝、品茗等生活美學，每位客人都可以在民宿主人的陪伴下品茶聊天，周遭種植豐富的蕨類、多肉植物、積水鳳梨等各種植物，並可以欣賞民宿內許多老件及古玩，歡迎您來體驗我們的民宿。",
  metadataBase: new URL("https://yunmanchu.com"),
  openGraph: {
    title: "首頁 | 蘊慢築 YunManChu",
    description:
      "蘊慢築民宿 YunManChu Homestay 位於苗栗公館，在這裡可以享受到綠植、花藝、品茗等生活美學，並可以欣賞民宿內許多老件及古玩，歡迎您來體驗我們的民宿。",
    url: "https://yunmanchu.com",
    siteName: "蘊慢築 YunManChu",
    images: [
      {
        url: "https://yunmanchu.com/preview.jpeg",
        alt: "蘊慢築 YunManChu",
        width: 800,
        height: 533,
      },
      {
        url: "https://yunmanchu.com/preview.jpeg",
        alt: "蘊慢築 YunManChu",
        width: 1800,
        height: 1200,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
    other: {
      url: "/icon.ico",
    },
  },
  manifest: "https://yunmanchu.com/manifest.json",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["support@yunmanchu.com", "https://yunmanchu.com"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
