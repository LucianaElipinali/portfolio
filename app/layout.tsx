import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TarreDev Landing Page",
  description: "Landing page made by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`${urbanist.className} bg-no-repeat bg-gradient-to-br from-blue-800 to-purple-400`}>
<div className="flex flex-col min-h-screen">
          <Navbar />
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
