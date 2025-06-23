import type { Metadata } from "next";

const SITE_NAME = "DeepVisual: Нейрофотосессия на заказ за 24 часа";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const metaConstants: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Генерация изображений нейросетями - создаем реалистичные нейрофото, аватарки, уникальные AI-иллюстрации и контент для соцсетей. Недорого - от 200₽ за штуку.",
  // manifest: "/web.manifest.json",
  icons: {
    icon: `${baseUrl}/favicon.ico`,
    apple: {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: `${baseUrl}/apple-touch-icon.png`,
    },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: `${baseUrl}/favicon-32x32.png`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "64x64",
        url: `${baseUrl}/favicon-64x64.png`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        url: `${baseUrl}/favicon-128x128.png`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: `${baseUrl}/favicon-192x192.png`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: `${baseUrl}/favicon-512x512.png`,
      },
    ],
  },
  openGraph: {
    images: `${process.env["NEXT_PUBLIC_SITE_URL"]}/og-image.jpg`,
  },
  other: {
    "yandex-verification": "4b1296e19c33dc31",
    "google-site-verification": "y_FkDZdsKOFoMdlGTh0ke1vuZo0LYmWHKz8Pw6XiLaE",
  },
};

export default metaConstants;
