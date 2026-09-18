import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import {
  ContactHero,
  ContactQuickCards,
  HowToReachSection,
  ContactFormAndMapSection,
  TempleFactsSection,
} from "@/components/contact";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "संपर्क एवं मंदिर यात्रा मार्ग (Contact Us) | माँ बगलामुखी मंदिर नलखेड़ा धाम",
  description:
    "माँ बगलामुखी मंदिर नलखेड़ा धाम संपर्क सूत्र, हेल्पलाइन (+91 93406 05235), मंदिर कैसे पहुंचे (ट्रेन, सड़क, वायु मार्ग), लाइव गूगल मैप, दर्शन व महाआरती समय, एवं पूज्य गुरुजी (पंडित शुभम शर्मा जी) से वैदिक परामर्श।",
  keywords: [
    "shubham pandit nalkheda",
    "baglamukhi mata temple",
    "bagla mukhi mandir pujari shubam sharma",
    "baglamukhi mandir pujari shubham sharma",
    "pandit shubham sharma nalkheda",
    "pujari shubham sharma phone number",
    "माँ बगलामुखी संपर्क",
    "बगलामुखी मंदिर फोन नंबर",
    "नलखेड़ा कैसे पहुंचे",
    "Baglamukhi Mandir Nalkheda Contact",
    "How to reach Nalkheda Dham",
    "पंडित शुभम शर्मा संपर्क",
    "बगलामुखी दर्शन समय",
    "शासकीय मां बगलामुखी मंदिर प्रबंध समिति",
    "नलखेड़ा धाम पता",
  ],
  alternates: {
    canonical: "https://mabaglamukhi.org/contact",
  },
  openGraph: {
    title: "संपर्क एवं मंदिर यात्रा मार्ग | माँ बगलामुखी मंदिर नलखेड़ा धाम - पंडित शुभम शर्मा",
    description:
      "विश्व विख्यात माँ बगलामुखी शक्तिपीठ नलखेड़ा धाम—संपर्क सूत्र, यात्रा मार्गदर्शन, लाइव मैप, आरती समय एवं पूज्य गुरुजी सान्निध्य।",
    images: [
      {
        url: "/mandir/mandir-complex-panoramic.jpg",
        width: 1200,
        height: 630,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा धाम संपर्क एवं परिसर",
      },
    ],
  },
};

export default function ContactPage() {
  // Structured Data (JSON-LD) for SEO ContactPage & HinduTemple
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "मुख्य पृष्ठ",
            item: "https://mabaglamukhi.org/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "संपर्क (Contact Us)",
            item: "https://mabaglamukhi.org/contact",
          },
        ],
      },
      {
        "@type": "HinduTemple",
        name: "सिद्धपीठ माँ बगलामुखी मंदिर, नलखेड़ा धाम",
        alternateName: "Maa Baglamukhi Mata Mandir Nalkheda",
        description:
          "माँ बगलामुखी मंदिर नलखेड़ा धाम—पूज्य पंडित शुभम शर्मा जी के सान्निध्य में 100% शास्त्रीय संकल्प, महाहवन एवं वैदिक मार्गदर्शन।",
        url: "https://mabaglamukhi.org/contact",
        telephone: "+919340605235",
        email: "shubhampandit9340@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "सिद्धपीठ माँ बगलामुखी मंदिर, लखुंदर नदी तट",
          addressLocality: "Nalkheda",
          addressRegion: "Madhya Pradesh",
          postalCode: "465445",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.841371,
          longitude: 76.235637,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "05:30",
            closes: "21:30",
          },
        ],
        founder: {
          "@type": "Person",
          name: "पूज्य पंडित शुभम शर्मा जी (गुरुजी)",
          alternateName: [
            "Pandit Shubham Sharma",
            "Shubham Pandit Nalkheda",
            "Pujari Shubham Sharma",
            "Baglamukhi Mandir Pujari Shubham Sharma",
          ],
          jobTitle: "माँ बगलामुखी मुख्य उपासक एवं वरिष्ठ पुजारी",
          telephone: "+919340605235",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fff8e7] w-full max-w-full overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <ContactHero />

      {/* 3 Quick Info Cards (Email, Phone, Location) */}
      <ContactQuickCards />

      {/* How to Reach the Temple (Train, Road, Air) */}
      <HowToReachSection />

      {/* Devotee Query Form & Live Google Map */}
      <ContactFormAndMapSection />

      {/* Temple Facts & Spiritual Significance */}
      <TempleFactsSection />

      {/* Global Sacred Footer */}
      <Footer />
    </main>
  );
}
