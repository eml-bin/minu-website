import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Background from "@/components/core/Background";
import Navbar from "@/components/core/Navbar";
import { LandingProviders } from "@/contexts/LandingProvider";

const brandFont = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
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
        <LandingProviders>
          <Background>
            <Navbar />
            <main className={"mainContainer"}>{children}</main>
          </Background>
        </LandingProviders>
      </body>
    </html>
  );
}
