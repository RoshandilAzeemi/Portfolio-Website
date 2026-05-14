import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Roshandil Azeemi",
  description:
    "Computer Science student at McMaster University. Data Analyst, Python Developer, and aspiring Cloud Practitioner.",
  keywords: [
    "Roshandil Azeemi",
    "Portfolio",
    "Computer Science",
    "McMaster University",
    "Data Analyst",
    "Python",
  ],
  openGraph: {
    title: "Roshandil Azeemi",
    description:
      "Computer Science student at McMaster University. Data Analyst & Python Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
