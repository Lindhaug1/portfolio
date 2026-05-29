import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linda Haugen — UX-designer",
  description:
    "Samfunnsengasjert designer med over ni års erfaring innen tjenestedesign, UX, universell utforming og designsystemer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={cn("h-full scroll-smooth antialiased", geistSans.variable)}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
