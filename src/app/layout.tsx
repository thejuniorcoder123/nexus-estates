// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { AuthProvider } from "@/context/AuthContext"; // IMPORT our new AuthProvider

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
        {/* The AuthProvider now wraps everything */}
        <AuthProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}