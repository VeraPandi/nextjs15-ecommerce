import "@/app/ui/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./ui/components/Footer";
import Navbar from "./ui/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Flowmazon",
    default: "Flowmazon",
  },
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
