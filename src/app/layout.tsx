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
  title: "Maa Bagalamukhi Upasak Pandit Shubham Sharma | Nalkheda Dham",
  description:
    "माँ बगलामुखी उपासक पंडित शुभम शर्मा - नलखेड़ा धाम। विशेष अनुष्ठान, शत्रु बाधा निवारण, महापूजा एवं ज्योतिषीय परामर्श।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#fff8e7] text-[#4a2618]"
      >
        {children}
      </body>
    </html>
  );
}
