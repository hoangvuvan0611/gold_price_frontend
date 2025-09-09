import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {Toaster} from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Giá vàng hôm nay",
    description: "Trang web hiển thị thông tin giá vàng Việt Nam và Thế giới",
    icons: {
        icon: [
            { url: "/gold_logo.png", type: "image/png", sizes: "192x192" },
        ],
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Toaster position="top-right"/>
      <div className={'mx-auto max-w-[1280px] px-2 sm:px-4'}>
          <div className={'sticky top-0 z-50'}>
              <Header/>
          </div>
          {children}
          <div>
              <Footer/>
          </div>
      </div>
      </body>
    </html>
  );
}
