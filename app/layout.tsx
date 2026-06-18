import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import HeaderPage from "./Header/page";
import FooterPage from "./Footer/page";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "BOSCO Bags - Premium Bags Manufacturing Company | E-Commerce Shop",
  description: "Discover premium, durable, and stylish backpacks, travel duffels, and office laptop bags from BOSCO, the leading bags manufacturing company. Special sale this week!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <HeaderPage />

        <main>
          {children}
        </main>

        <FooterPage />
      </body>
    </html>
  );
}
