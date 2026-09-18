import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import LandingHero from "@/components/landing/LandingHero";
import SacredServicesStrip from "@/components/landing/SacredServicesStrip";
import GurujiServicesGrid from "@/components/landing/GurujiServicesGrid";
import GurujiBioSection from "@/components/landing/GurujiBioSection";
import HomeFaqSection from "@/components/landing/HomeFaqSection";
import { HOME_FAQS } from "@/data/homeFaqData";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title:
    "माँ बगलामुखी मंदिर नलखेड़ा धाम | पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma) - Baglamukhi Mata Temple Nalkheda",
  description:
    "सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम (Baglamukhi Mata Temple Nalkheda)। पूज्य उपासक व मुख्य पुजारी पंडित शुभम शर्मा (Pujari Shubham Sharma / Shubham Pandit Nalkheda) द्वारा 100% शास्त्रोक्त महाहवन, शत्रु बाधा निवारण, कोर्ट केस विजय, सवा लाख महामंत्र जाप एवं वैदिक अनुष्ठान। हेल्पलाइन: +91 93406 05235।",
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
  alternates: {
    canonical: "https://mabaglamukhi.org",
  },
  openGraph: {
    title:
      "माँ बगलामुखी मंदिर नलखेड़ा धाम | पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma)",
    description:
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा—पूज्य पुजारी पंडित शुभम शर्मा (Shubham Pandit Nalkheda) के सान्निध्य में 100% शास्त्रोक्त महाहवन, शत्रु स्तम्भन एवं वैदिक अनुष्ठान।",
    url: "https://mabaglamukhi.org",
    siteName: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
    locale: "hi_IN",
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
};

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mabaglamukhi.org/#website",
        url: "https://mabaglamukhi.org",
        name: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
        alternateName: "Maa Baglamukhi Mata Temple Nalkheda - Pujari Shubham Sharma",
        inLanguage: ["hi-IN", "en-US"],
        publisher: {
          "@id": "https://mabaglamukhi.org/#pandit-shubham-sharma",
        },
      },
      {
        "@type": "HinduTemple",
        "@id": "https://mabaglamukhi.org/#temple",
        name: "सिद्धपीठ माँ बगलामुखी मंदिर, नलखेड़ा धाम",
        alternateName: [
          "Maa Baglamukhi Temple Nalkheda",
          "Baglamukhi Mata Temple",
          "Siddhapeeth Maa Baglamukhi Mandir",
          "Nalkheda Dham",
          "Baglamukhi Mandir Nalkheda",
        ],
        description:
          "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम—लखुंदर नदी तट पर स्थित द्वापरयुगीन त्रिशक्ति शक्तिपीठ। पूज्य उपासक पंडित शुभम शर्मा (Pujari Shubham Sharma / Shubham Pandit Nalkheda) जी के सान्निध्य में विशेष महाहवन एवं वैदिक अनुष्ठान।",
        url: "https://mabaglamukhi.org",
        telephone: "+919340605235",
        email: "shubhampandit9340@gmail.com",
        image: "https://mabaglamukhi.org/mandir/baglamukhi-divine-darshan.jpg",
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
        hasMap: "https://maps.google.com/?q=23.841371,76.235637",
        priceRange: "₹₹",
        employee: {
          "@id": "https://mabaglamukhi.org/#pandit-shubham-sharma",
        },
      },
      {
        "@type": "Person",
        "@id": "https://mabaglamukhi.org/#pandit-shubham-sharma",
        name: "पंडित शुभम शर्मा",
        alternateName: [
          "Pandit Shubham Sharma",
          "Shubham Pandit Nalkheda",
          "Pujari Shubham Sharma",
          "Pujari Shubam Sharma",
          "Baglamukhi Mandir Pujari Shubham Sharma",
          "Shubham Sharma Pujari Nalkheda",
          "पूज्य पंडित शुभम शर्मा जी",
        ],
        jobTitle: "मुख्य उपासक एवं वरिष्ठ पुरोहित (Chief Vedic Priest & Upasak)",
        worksFor: {
          "@id": "https://mabaglamukhi.org/#temple",
        },
        url: "https://mabaglamukhi.org/#guruji",
        telephone: "+919340605235",
        email: "shubhampandit9340@gmail.com",
        image: "https://mabaglamukhi.org/guruji.png",
        description:
          "माँ बगलामुखी मंदिर नलखेड़ा धाम के प्रमुख उपासक एवं वरिष्ठ पुजारी पंडित शुभम शर्मा (Shubham Pandit Nalkheda / Pujari Shubham Sharma)। 15+ वर्षों का शास्त्रोक्त तंत्र साधना अनुभव, सवा लाख बीज मंत्र महाजाप, शत्रु स्तम्भन एवं वैदिक महाहवन विशेषज्ञ।",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nalkheda",
          addressRegion: "Madhya Pradesh",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Maa Baglamukhi Anushthan",
          "Shatru Stambhan Hawan",
          "Court Case Legal Victory Puja",
          "Vedic Astrology & Kundali",
          "Kaal Sarp Dosh Nivaran",
          "Navgraha Shanti",
          "Tantra Shastra",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "मुख्य पृष्ठ (Home)",
            item: "https://mabaglamukhi.org/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.questionHi,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answerHi,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fff8e7] w-full max-w-full overflow-x-hidden">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Implemented Navbar */}
      <Navbar />

      {/* Landing Hero Section */}
      <LandingHero />

      {/* 8 Sacred Vedic Siddhi & Anushthan Services Strip (SEO Optimized) */}
      <SacredServicesStrip />

      {/* 12 Vishesh Anushthan & Guruji Ki Sevayein Section (SEO Optimized) */}
      <GurujiServicesGrid />

      {/* Pujya Guruji Bio & Vedic Authority Section (SEO Optimized) */}
      <GurujiBioSection />

      {/* Home Page FAQ Section (SEO Keywords & Schema Aligned) */}
      <HomeFaqSection />

      {/* Professional Vedic Temple Footer (SEO & Mobile Optimized) */}
      <Footer />
    </main>
  );
}
