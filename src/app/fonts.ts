import { Open_Sans } from "next/font/google"
import localFont from "next/font/local"

export const primaryFont = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--primary-font",
  weight: ["400", "500", "600", "700"],
})

export const secondaryFont = localFont({
  display: "swap",
  variable: "--secondary-font",
  src: [
    {
      path: "./fonts/RussoOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
})
