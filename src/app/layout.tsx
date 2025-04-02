import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const brandFont = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Minu Repostería",
  description: "Repostería hecha en casa. Irapuato, Guanajuato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.className}`}>
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
