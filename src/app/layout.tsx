import type { Metadata } from "next";
import { Cinzel, Marcellus, Plus_Jakarta_Sans } from "next/font/google";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";
import MobileScrollAnimationObserver from "@/components/common/MobileScrollAnimationObserver";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mabaglamukhi.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "माँ बगलामुखी मंदिर नलखेड़ा धाम | पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma) - Baglamukhi Mata Temple Nalkheda",
    template: "%s | माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा",
  },
  description:
    "सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम (Baglamukhi Mata Temple Nalkheda)। पूज्य मुख्य पुजारी पंडित शुभम शर्मा (Pujari Shubham Sharma / Shubham Pandit Nalkheda) द्वारा 100% शास्त्रोक्त महाहवन, शत्रु बाधा निवारण, कोर्ट केस विजय, सवा लाख महामंत्र जाप एवं वैदिक अनुष्ठान। हेल्पलाइन: +91 93406 05235।",
  keywords: [
    "shubham pandit nalkheda",
    "baglamukhi mata temple",
    "bagla mukhi mandir pujari shubam sharma",
    "baglamukhi mandir pujari shubham sharma",
    "pandit shubham sharma nalkheda",
    "shubham sharma pujari",
    "pujari shubham sharma nalkheda",
    "माँ बगलामुखी मंदिर नलखेड़ा",
    "पंडित शुभम शर्मा नलखेड़ा",
    "बगलामुखी मंदिर पुजारी शुभम शर्मा",
    "शुभम पंडित नलखेड़ा",
    "baglamukhi temple nalkheda",
    "baglamukhi havan nalkheda",
    "baglamukhi mandir phone number",
    "shatru badha nivaran baglamukhi",
    "court case vijay puja",
    "nalkheda dham darshan timings",
    "maa baglamukhi puja booking",
    "baglamukhi siddhapeeth nalkheda",
    "pandit shubham sharma baglamukhi upasak",
  ],
  authors: [{ name: "पंडित शुभम शर्मा (Pujari Shubham Sharma)" }],
  creator: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
  publisher: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "hi-IN": siteUrl,
      "en-US": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "माँ बगलामुखी मंदिर नलखेड़ा धाम | पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma)",
    description:
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा—पूज्य पुजारी पंडित शुभम शर्मा (Shubham Pandit Nalkheda) के सान्निध्य में 100% शास्त्रोक्त महाहवन, शत्रु स्तम्भन एवं वैदिक अनुष्ठान।",
    url: siteUrl,
    siteName: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
    locale: "hi_IN",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/mandir/baglamukhi-divine-darshan.jpg",
        width: 1200,
        height: 630,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा धाम - पंडित शुभम शर्मा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "माँ बगलामुखी मंदिर नलखेड़ा धाम | पंडित शुभम शर्मा (Shubham Pandit Nalkheda)",
    description:
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा—पूज्य पुजारी पंडित शुभम शर्मा जी द्वारा शास्त्रोक्त महाहवन एवं वैदिक अनुष्ठान।",
    images: ["/mandir/baglamukhi-divine-darshan.jpg"],
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
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Nalkheda, Agar Malwa, Madhya Pradesh",
    "geo.position": "23.841371;76.235637",
    ICBM: "23.841371, 76.235637",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${cinzel.variable} ${marcellus.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#fff8e7] text-[#4a2618]"
      >
        <LanguageProvider>
          <SmoothScrollProvider>
            {children}
            {/* Fixed Global Floating Contact Buttons (Call & WhatsApp) */}
            <FloatingContactButtons />
            {/* One-time Smooth Mobile Scroll Entrance Observer */}
            <MobileScrollAnimationObserver />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
