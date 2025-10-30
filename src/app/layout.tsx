import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";
import { DynamicBackground } from "@/components/DynamicBackground";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Atli Schweitz Gíslason",
  description:
    "Unified page for all works and projects by Atli Schweitz Gíslason",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} antialiased`}
      >
        <Suspense fallback={<FallbackBackground />}>
          <DynamicBackground />
        </Suspense>
        {children}
        {/* <div className="absolute top-4 right-4 bg-amber-50 shadow h-16 w-16 rounded-full  flex items-center justify-center">
          <span className="text-4xl">🌐</span>
        </div> */}
      </body>
    </html>
  );
}

const FallbackBackground = () => (
  <div className="absolute inset-0 -z-10">
    {/* To Background */}
    <div
      style={{
        backgroundImage: `url(/images/atli.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="absolute inset-0"
    />
  </div>
);
