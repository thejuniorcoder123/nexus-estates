// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext"; // 1. IMPORT

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus Estates',
    default: 'Nexus Estates - Find Your Dream Home',
  },
  description: "Discover the perfect property from thousands of real estate listings, updated daily. Find apartments, houses, and commercial properties for sale or rent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {/* 2. WRAP children with the provider */}
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}