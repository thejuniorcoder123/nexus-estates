// src/app/layout.tsx

import type { Metadata } from "next";
// The font import for Inter and Montserrat might already be here. If not, add it.
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// If these font loaders aren't here, add them. Otherwise, leave them as they are.
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

// This is the new metadata object.
export const metadata: Metadata = {
  title: {
    // %s will be replaced by the specific title of a child page
    template: '%s | Nexus Estates',
    // default is the title used for the root page (homepage)
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
      {/* Ensure the class names from the font variables are applied */}
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}