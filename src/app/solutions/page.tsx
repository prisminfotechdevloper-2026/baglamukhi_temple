import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import Footer from "@/components/landing/Footer";
import SolutionsHubClient from "./SolutionsHubClient";
import { getAllCategories, getAllSolutions } from "@/data/solutionsData";

export const metadata: Metadata = {
  title: "समस्त वैदिक समाधान एवं अनुष्ठान सूची | माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा",
  description:
    "कोर्ट-कचहरी विजय, शत्रु बाधा निवारण, सरकारी नौकरी, व्यापार वृद्धि, शीघ्र विवाह, कर्ज मुक्ति एवं ग्रह शांति हेतु माँ बगलामुखी मंदिर नलखेड़ा धाम (Baglamukhi Mata Temple) में पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma / Shubham Pandit Nalkheda) द्वारा सिद्ध अनुष्ठान।",
  keywords: [
    "shubham pandit nalkheda",
    "baglamukhi mata temple",
    "bagla mukhi mandir pujari shubam sharma",
    "baglamukhi mandir pujari shubham sharma",
    "pandit shubham sharma nalkheda",
    "माँ बगलामुखी मंदिर नलखेड़ा",
    "पंडित शुभम शर्मा नलखेड़ा",
    "बगलामुखी अनुष्ठान सूची",
    "Bagalamukhi Puja Solutions",
    "कोर्ट केस समाधान",
    "शत्रु स्तम्भन पूजा",
    "शीघ्र विवाह अनुष्ठान",
    "व्यापार वृद्धि हवन",
    "नलखेड़ा धाम",
  ],
  alternates: {
    canonical: "https://mabaglamukhi.org/solutions",
  },
  openGraph: {
    title: "समस्त वैदिक समाधान एवं अनुष्ठान सूची | माँ बगलामुखी नलखेड़ा धाम",
    description:
      "जीवन के समस्त संकटों के निवारण हेतु सिद्धपीठ नलखेड़ा धाम में पूज्य पुजारी पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त अनुष्ठान।",
    url: "https://mabaglamukhi.org/solutions",
    siteName: "माँ बगलामुखी नलखेड़ा धाम",
    images: [
      {
        url: "/mandir/baglamukhi-divine-darshan.jpg",
        width: 1200,
        height: 630,
        alt: "माँ बगलामुखी नलखेड़ा धाम समस्त समाधान",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
};

export default function SolutionsPage() {
  const categories = getAllCategories();
  const allSolutions = getAllSolutions();

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
            name: "वैदिक समाधान एवं अनुष्ठान",
            item: "https://mabaglamukhi.org/solutions",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "माँ बगलामुखी समस्त वैदिक समाधान एवं अनुष्ठान सूची",
        description:
          "माँ बगलामुखी मंदिर नलखेड़ा धाम में पूज्य पंडित शुभम शर्मा (Pujari Shubham Sharma) द्वारा संपन्न होने वाले समस्त 32+ सिद्ध अनुष्ठान।",
        url: "https://mabaglamukhi.org/solutions",
        provider: {
          "@type": "HinduTemple",
          name: "सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम",
          telephone: "+919340605235",
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: allSolutions.length,
          itemListElement: allSolutions.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.titleHi,
            url: `https://mabaglamukhi.org/solutions/${item.slug}`,
            description: item.shortDescHi,
          })),
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#fffaf0] selection:bg-[#d89b18]/30 selection:text-[#3d060e]">
        <SolutionsHubClient categories={categories} allSolutions={allSolutions} />
      </main>
      <Footer />
    </>
  );
}
