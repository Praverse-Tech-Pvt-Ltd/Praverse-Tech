import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
import { PravProvider } from "@/components/assistant/PravProvider";

export const metadata: Metadata = {
  title: "Praverse Tech - Bringing Innovations to Market",
  description:
    "Praverse Tech pioneers intelligent systems that learn, perceive, and collaborate — from pharma AI to humanoid robotics and next-gen bio-intelligence. Bringing Innovations to Market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/Logo%20Design%20for%20Praverse%20Tech%20Pvt.%20Ltd..png" />
        <link rel="icon" href="/Logo%20Design%20for%20Praverse%20Tech%20Pvt.%20Ltd..png" sizes="192x192" />
        <link rel="icon" href="/Logo%20Design%20for%20Praverse%20Tech%20Pvt.%20Ltd..png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/Logo%20Design%20for%20Praverse%20Tech%20Pvt.%20Ltd..png" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased dark">
        <PravProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </PravProvider>
      </body>
    </html>
  );
}
