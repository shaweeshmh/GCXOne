import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GCX One | Advanced Enterprise Security & Surveillance",
  description:
    "GCX One delivers advanced enterprise security and surveillance solutions. Trusted by companies from 10+ countries. Cameras, sensors, monitored sites, and AI-powered false alarm filtering.",
  keywords: [
    "enterprise security",
    "surveillance",
    "GCX One",
    "NXGEN",
    "monitored sites",
    "false alarm filtering",
  ],
  openGraph: {
    title: "GCX One - Enterprise Security & Surveillance Solutions",
    description:
      "Advanced enterprise security and surveillance platform. Trusted by companies from 10+ countries.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={`min-h-screen bg-gcx-dark text-slate-100 antialiased ${plusJakarta.className}`}>
        {children}
      </body>
    </html>
  );
}
