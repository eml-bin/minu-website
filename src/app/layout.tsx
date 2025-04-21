import "./globals.css";

import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { LandingProviders } from "@/contexts/LandingProvider";

import Navbar from "@/components/core/Navbar/Component";
import Background from "@/components/core/Background/Component";
import Footer from "@/components/core/Footer/Component";

const brandFont = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
});

export const metadata: Metadata = {
  title: "Minu Repostería",
  description: "Repostería hecha en casa. Irapuato, Guanajuato.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.className}`}>
        <LandingProviders>
          <Background>
            <Navbar />
            <main className={"mainContainer"}>{children}</main>
            <Footer />
          </Background>
        </LandingProviders>
      </body>
    </html>
  );
}
