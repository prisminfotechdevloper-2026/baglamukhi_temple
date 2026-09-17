import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import Footer from "@/components/landing/Footer";
import SolutionsHubClient from "./SolutionsHubClient";
import { getAllCategories, getAllSolutions } from "@/data/solutionsData";

export const metadata: Metadata = {
  title: "समस्त वैदिक समाधान एवं अनुष्ठान सूची | माँ बगलामुखी नलखेड़ा धाम",
  description:
    "कोर्ट-कचहरी विजय, शत्रु बाधा निवारण, सरकारी नौकरी, व्यापार वृद्धि, शीघ्र विवाह, कर्ज मुक्ति एवं ग्रह शांति हेतु माँ बगलामुखी के समस्त 32+ सिद्ध अनुष्ठान।",
  keywords: [
    "बगलामुखी अनुष्ठान सूची",
    "Bagalamukhi Puja Solutions",
    "कोर्ट केस समाधान",
    "शत्रु स्तम्भन पूजा",
    "शीघ्र विवाह अनुष्ठान",
    "व्यापार वृद्धि हवन",
    "नलखेड़ा धाम",
    "पंडित शुभम शर्मा",
  ],
  openGraph: {
    title: "समस्त वैदिक समाधान एवं अनुष्ठान सूची | माँ बगलामुखी नलखेड़ा धाम",
    description:
      "जीवन के समस्त संकटों के निवारण हेतु सिद्धपीठ नलखेड़ा धाम में पूज्य पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त अनुष्ठान।",
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffaf0] selection:bg-[#d89b18]/30 selection:text-[#3d060e]">
        <SolutionsHubClient categories={categories} allSolutions={allSolutions} />
      </main>
      <Footer />
    </>
  );
}
