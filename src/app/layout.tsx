import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: "Justlog — Log Money the Way You Talk",
  description: "Track money by typing naturally. No forms, no categories. AI parses your words instantly. Free plan available.",
  keywords: "expense tracker, money tracking app, AI expense tracker, voice expense tracker, personal finance app, budget tracker, justlog",
  metadataBase: new URL("https://justlog.live"),
  alternates: { canonical: "https://justlog.live" },
  openGraph: {
    type: "website",
    url: "https://justlog.live",
    title: "Justlog — Log money the way you talk",
    description: "Just type what you spent. AI figures out the rest. Free to start.",
    images: [{ url: "https://justlog.live/justlog.png" }],
    siteName: "Justlog",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justlog — Log money the way you talk",
    description: "Just type what you spent. AI figures out the rest. Free to start.",
    images: ["https://justlog.live/justlog.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Justlog",
              operatingSystem: "Android, Web",
              applicationCategory: "FinanceApplication",
              description: "AI-powered personal finance journal.",
              url: "https://justlog.live",
              offers: [
                { "@type": "Offer", price: "0", priceCurrency: "INR", name: "Free Plan" },
                { "@type": "Offer", price: "299", priceCurrency: "INR", name: "Pro Plan", billingDuration: "P1Y" },
              ],
              author: { "@type": "Organization", name: "Hueness Design Private Limited" },
            }),
          }}
        />
      </head>
      <body>
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
