import type React from "react";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Data Science & ML Portfolio",
  description:
    "Portfolio showcasing data science and machine learning projects",
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
