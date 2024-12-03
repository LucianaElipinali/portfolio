import type { Metadata } from "next";
import { Urbanist } from "next/font/google";


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
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}