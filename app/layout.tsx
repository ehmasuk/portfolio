import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  title: {
    default: "Eh Masuk | Fullstack Developer",
    template: "%s | Eh Masuk",
  },
  description: "Emdadul Haque (Eh Masuk) - Fullstack Developer specializing in MERN stack and modern web technologies.",
  keywords: ["Emdadul Haque", "Eh Masuk", "Fullstack Developer", "MERN Stack", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Emdadul Haque", url: "https://github.com/ehmasuk" }],
  creator: "Emdadul Haque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL,
    title: "Eh Masuk | Fullstack Developer",
    description: "Emdadul Haque (Eh Masuk) - Fullstack Developer specializing in MERN stack and modern web technologies.",
    siteName: "Eh Masuk Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Eh Masuk Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eh Masuk | Fullstack Developer",
    description: "Emdadul Haque (Eh Masuk) - Fullstack Developer specializing in MERN stack and modern web technologies.",
    creator: "@eh_masuk",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="max-w-3xl mx-auto px-4">
            <NextTopLoader color="#000" showSpinner={false} easing="ease" speed={300} />
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
