import type { Metadata } from "next";

const SITE_NAME = "DeepVisual: Нейрофотосессия на заказ за 24 часа";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const metaConstants: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Генерация изображений нейросетями - создаем реалистичные нейрофото, аватарки, уникальные AI-иллюстрации и контент для соцсетей. Недорого - от 200₽ за штуку.",
  manifest: "/web.manifest.json",
  icons: {
    apple: {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    other: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "64x64",
        url: "/favicon-64x64.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        url: "/favicon-128x128.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon-512x512.png",
      },
    ],
  },
  openGraph: {
    images: `${baseUrl}/og-image.jpg`,
  },
  other: {
    "yandex-verification": "c745a53a09958fd6",
    "google-site-verification": "6-wJRWfjc9nxvAiGINRzJxvF7-6TjFQHLzKQ0XgjSCs",
  },
};

export default metaConstants;
