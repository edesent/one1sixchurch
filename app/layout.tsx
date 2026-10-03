import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppContact } from "./_components/WhatsAppContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ONE1SIX Church | Live Unashamed",
  description:
    "A Christ-centered church in Worcester, Massachusetts with authentic faith, fearless love, and devotion to Jesus Christ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
        <WhatsAppContact />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BR4LX8W86L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BR4LX8W86L');
          `}
        </Script>
      </body>
    </html>
  );
}
