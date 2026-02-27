import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ying - Frontend Developer Portfolio",
  description: "I build modern and scalable web applications. Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Ying" }],
  metadataBase: new URL("https://prapada.github.io/portfolio/"),
  openGraph: {
    title: "Ying - Frontend Developer Portfolio",
    description: "I build modern and scalable web applications. Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://prapada.github.io/portfolio/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ying - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ying - Frontend Developer Portfolio",
    description: "I build modern and scalable web applications. Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
