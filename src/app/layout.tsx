import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

// Utility function to get the correct path based on environment
function getAssetPath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/midwest-junior-volleyball-website' : ''
  return `${basePath}${path}`
}

export const metadata: Metadata = {
  title: "Midwest Junior Volleyball Championships",
  description: "Premier junior volleyball championships featuring the best young talent from across the nation. Join us at Navy Pier for the 2025 ASICS Junior National Volleyball Championships.",
  keywords: "volleyball, junior volleyball, championships, Navy Pier, Chicago, ASICS, youth sports, tournament",
  authors: [{ name: "Midwest Junior Volleyball" }],
  openGraph: {
    title: "Midwest Junior Volleyball Championships",
    description: "Premier junior volleyball championships at Navy Pier, Chicago",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midwest Junior Volleyball Championships",
    description: "Premier junior volleyball championships at Navy Pier, Chicago",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: getAssetPath("/images/volleyball/volleyball-icon-vector.svg"), type: "image/svg+xml" },
      { url: getAssetPath("/images/volleyball/volleyball-icon-vector.svg"), sizes: "32x32", type: "image/svg+xml" },
      { url: getAssetPath("/images/volleyball/volleyball-icon-vector.svg"), sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: getAssetPath("/images/volleyball/volleyball-icon-vector.svg"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 page-transition">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
