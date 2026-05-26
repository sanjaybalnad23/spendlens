import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07111f] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "SpendLens",
  description: "See where your AI budget disappears",

  openGraph: {
    title: "SpendLens",
    description: "Audit your AI stack and reduce wasted spend.",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "SpendLens",
    description: "Audit your AI stack and reduce wasted spend.",
    images: ["/og-image.png"],
  },
};
