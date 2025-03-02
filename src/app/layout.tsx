import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import type { Metadata } from "next";
import Footer from "./ui/components/Footer";
import Navbar from "./ui/components/Navbar";

export const metadata: Metadata = {
  title: "Flowmazon",
  description: "Achat en ligne de produits électroniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
