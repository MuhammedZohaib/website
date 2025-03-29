import type React from "react";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Data Science & ML Portfolio | Muhammed Zohaib",
    template: "%s | Muhammed Zohaib - Data Science & ML Portfolio",
  },
  description:
    "Portfolio showcasing data science, machine learning, and AI projects by Muhammed Zohaib, a skilled data scientist and ML engineer.",
  keywords: [
    "data science",
    "machine learning",
    "AI",
    "portfolio",
    "data scientist",
    "ML engineer",
    "artificial intelligence",
    "deep learning",
  ],
  authors: [{ name: "Muhammed Zohaib", url: "https://zoha1b.vercel.app/home" }],
  creator: "Muhammed Zohaib",
  publisher: "Muhammed Zohaib",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://zoha1b.vercel.app/home"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Data Science & ML Portfolio | Muhammed Zohaib",
    description:
      "Portfolio showcasing data science, machine learning, and AI projects by Muhammed Zohaib, a skilled data scientist and ML engineer.",
    url: "https://zoha1b.vercel.app/home",
    siteName: "Muhammed Zohaib Portfolio",
    images: [
      {
        url: "https://zoha1b.vercel.app/logo.svg",
        width: 1200,
        height: 630,
        alt: "Muhammed Zohaib - Data Science & ML Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science & ML Portfolio | Muhammed Zohaib",
    description:
      "Portfolio showcasing data science, machine learning, and AI projects by Muhammed Zohaib, a skilled data scientist and ML engineer.",
    creator: "@yourtwitterhandle",
    images: ["https://zoha1b.vercel.app/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Su22MaJt2WkaJ_7UGPNv2YNgvNXEF64GDoRzBY9iFF8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-16">{children}</main>{" "}
        {/* Added pt-16 for header spacing */}
        <Footer />
      </body>
    </html>
  );
}
