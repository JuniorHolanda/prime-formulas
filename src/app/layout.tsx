import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";
import OpeningScreen from "@/components/opening-screen/opening-screen";
import { OpeningScreenProvider } from "@/components/opening-screen/opening-screen-context";
import StyleProvider from "@/providers/style-provider";
import SGlobalStyles from "@/styles/global-styles";

const nunito = Nunito({
  variable: "--font-primary",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Fórmulas",
  description:
    "Nossa farmácia de manipulação prioriza o compromisso com a qualidade",
  openGraph: {
    title: "Prime Fórmulas",
    description:
      "Nossa farmácia de manipulação prioriza o compromisso com a qualidade",
    type: "website",
    siteName: "Prime Fórmulas",
    locale: "pt_BR",
    images: [
      {
        url: "https://res.cloudinary.com/efpn6vod/image/upload/v1790941252/logo-prime-thumb.jpg",
        alt: "Prime Fórmulas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Fórmulas",
    description:
      "Nossa farmácia de manipulação prioriza o compromisso com a qualidade",
    images: [
      "https://res.cloudinary.com/efpn6vod/image/upload/v1790941252/logo-prime-thumb.jpg",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-Br" className={`${nunito.variable} ${roboto.variable}`}>
      <body>
        <StyleProvider>
          <SGlobalStyles />
          <OpeningScreenProvider>
            <OpeningScreen />
            {children}
          </OpeningScreenProvider>
        </StyleProvider>
      </body>
    </html>
  );
}
