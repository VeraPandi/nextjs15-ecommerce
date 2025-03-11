import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { Metadata } from "next";
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
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
