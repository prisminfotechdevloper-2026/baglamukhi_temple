import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import Footer from "@/components/landing/Footer";
import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionChallenges from "@/components/solutions/SolutionChallenges";
import SolutionSpiritualContext from "@/components/solutions/SolutionSpiritualContext";
import SolutionMantraCard from "@/components/solutions/SolutionMantraCard";
import SolutionVidhiSection from "@/components/solutions/SolutionVidhiSection";
import SolutionBenefitsSection from "@/components/solutions/SolutionBenefitsSection";
import SolutionConsultationForm from "@/components/solutions/SolutionConsultationForm";
import SolutionFaqSection from "@/components/solutions/SolutionFaqSection";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import { getAllSolutions, getSolutionBySlug } from "@/data/solutionsData";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allSolutions = getAllSolutions();
  return allSolutions.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "समाधान नहीं मिला | माँ बगलामुखी नलखेड़ा धाम",
    };
  }

  const title = `${solution.titleHi} | माँ बगलामुखी नलखेड़ा धाम`;
  const description = `${solution.shortDescHi} पूज्य पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त वैदिक अनुष्ठान एवं महाहवन।`;

  return {
    title,
    description,
    keywords: [
      solution.titleHi,
      solution.titleEn,
      solution.categoryNameHi,
      "माँ बगलामुखी अनुष्ठान",
      "बगलामुखी मंत्र जाप",
      "नलखेड़ा धाम",
      "पंडित शुभम शर्मा",
      "शत्रु स्तम्भन",
      "Bagalamukhi Puja",
      "Nalkheda Dham",
    ],
    openGraph: {
      title,
      description,
      url: `https://mabaglamukhi.org/solutions/${solution.slug}`,
      siteName: "माँ बगलामुखी नलखेड़ा धाम",
      images: [
        {
          url: solution.image || "/mandir/baglamukhi-divine-darshan.jpg",
          width: 1200,
          height: 630,
          alt: solution.titleHi,
        },
      ],
      locale: "hi_IN",
      type: "article",
    },
    alternates: {
      canonical: `https://mabaglamukhi.org/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  // Schema.org Structured Data
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
            name: "समाधान",
            item: "https://mabaglamukhi.org/solutions",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.titleHi,
            item: `https://mabaglamukhi.org/solutions/${solution.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: solution.titleHi,
        alternateName: solution.titleEn,
        description: solution.shortDescHi,
        provider: {
          "@type": "HinduTemple",
          name: "सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम",
          address: {
            "@type": "PostalAddress",
            streetAddress: "लखुंदर नदी तट",
            addressLocality: "नलखेड़ा",
            addressRegion: "मध्य प्रदेश",
            postalCode: "465445",
            addressCountry: "IN",
          },
          telephone: "+919340605235",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: solution.faqs.map((faq) => ({
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen flex flex-col bg-[#fff8e7] text-[#4a2618] selection:bg-[#d89b18]/30 selection:text-[#3d060e]">
        {/* 1. Divine Solution Hero with CTAs */}
        <SolutionHero solution={solution} />

        {/* 2. Devotee Pain Points & Challenges */}
        <SolutionChallenges solution={solution} />

        {/* 3. Root Cause Analysis (Vedic Astrology & Karma) */}
        <SolutionSpiritualContext solution={solution} />

        {/* 4. Consecrated Stambhan Mantra & Jaap Vidhi */}
        <SolutionMantraCard solution={solution} />

        {/* 5. Authentic Vedic Anushthan & Hawan at Nalkheda */}
        <SolutionVidhiSection solution={solution} />

        {/* 6. Transformative Blessings & Benefits */}
        <SolutionBenefitsSection solution={solution} />

        {/* 7. Guruji Consultation & Sankalp Booking Form */}
        <SolutionConsultationForm solution={solution} />

        {/* 8. Frequently Asked Questions */}
        <SolutionFaqSection solution={solution} />

        {/* 9. Related Solutions Grid */}
        <RelatedSolutions currentSlug={solution.slug} />
      </main>

      <Footer />
    </>
  );
}
