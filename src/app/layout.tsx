// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Je algemene CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kritisch Kompas",
  description: "Een publiek platform voor het analyseren van politieke toespraken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {/* Hier komt later je Header component */}
        <main className="container mx-auto p-4 md:p-8">
          {children} {/* Dit is waar je pagina-inhoud wordt geladen */}
        </main>
      </body>
    </html>
  );
}
