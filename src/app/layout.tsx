import "./styles/index.scss";

import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

import { primaryFont, secondaryFont } from "./fonts";
import { Providers } from "./providers";

import "simplebar-react/dist/simplebar.min.css";
import "swiper/css";

import Script from "next/script";

import metaConstants from "$shared/constants/meta";
import siteConstants from "$shared/constants/site";
import viewportConstants from "$shared/constants/viewport";
import { PageLayout } from "$shared/layouts/page";
import { Analytics } from "$widgets/analytics";
import { Burger } from "$widgets/burger";
import { Footer } from "$widgets/footer";
import { Header } from "$widgets/header";
import clsx from "clsx";

export const metadata: Metadata = metaConstants;

export const viewport: Viewport = viewportConstants;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning={siteConstants.IS_TELEGRAM_WEB_APP}>
      {siteConstants.IS_TELEGRAM_WEB_APP && (
        <head>
          <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        </head>
      )}
      <body className={clsx(primaryFont.variable, secondaryFont.variable)}>
        <NextTopLoader color={siteConstants.PROGRESS_BAR_COLOR} showSpinner={false} />
        <Providers>
          <PageLayout>
            <Header />
            <Burger />
            <main>{children}</main>
            <Footer />
          </PageLayout>
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}
