import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://enesvegulsu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Enes & Gülsu | Nişan Davetiyesi",
    template: "%s | Enes & Gülsu",
  },

  description:
    "28 Ağustos 2026 tarihinde OMTEL Marin Bahçe'de gerçekleşecek nişan törenimize davetlisiniz.",

  keywords: [
    "Enes",
    "Gülsu",
    "Nişan",
    "Davetiye",
    "OMTEL Marin Bahçe",
  ],

  authors: [{ name: "Enes & Gülsu" }],
  creator: "Enes & Gülsu",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    title: "Enes & Gülsu | Nişan Davetiyesi",
    description: "28 Ağustos 2026 • OMTEL Marin Bahçe",

    siteName: "Enes & Gülsu",

    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Enes & Gülsu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Enes & Gülsu | Nişan Davetiyesi",
    description: "28 Ağustos 2026 • OMTEL Marin Bahçe",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}