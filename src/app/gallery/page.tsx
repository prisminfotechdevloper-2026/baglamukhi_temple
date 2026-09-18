import type { Metadata } from "next";
import Navbar from "@/components/common/navbarcompo";
import {
  GalleryHero,
  GurujiGallerySection,
  GalleryGridSection,
  GALLERY_ITEMS,
} from "@/components/gallery";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "दिव्य दर्शन एवं चित्र दीर्घा (Gallery) | माँ बगलामुखी मंदिर नलखेड़ा धाम",
  description:
    "माँ बगलामुखी मंदिर नलखेड़ा धाम की पावन चित्र दीर्घा। गर्भगृह दिव्य दर्शन, स्वर्ण कलश, प्राचीन शिखर, वैदिक महाहवन, विशेष अनुष्ठान, पूज्य गुरुजी सान्निध्य एवं रात्रि दीप प्रकाश के सजीव दर्शन।",
  keywords: [
    "shubham pandit nalkheda",
    "baglamukhi mata temple",
    "bagla mukhi mandir pujari shubam sharma",
    "pandit shubham sharma nalkheda",
    "pujari shubham sharma",
    "माँ बगलामुखी फोटो",
    "बगलामुखी मंदिर गैलरी",
    "Baglamukhi Mandir Nalkheda Photos",
    "Baglamukhi Darshan Gallery",
    "Maa Baglamukhi Wallpaper",
    "नलखेड़ा धाम दर्शन",
    "बगलामुखी हवन चित्र",
    "पंडित शुभम शर्मा नलखेड़ा",
    "गुरुजी पंडित शुभम शर्मा",
  ],
  alternates: {
    canonical: "https://mabaglamukhi.org/gallery",
  },
  openGraph: {
    title: "दिव्य दर्शन एवं चित्र दीर्घा | माँ बगलामुखी मंदिर नलखेड़ा धाम",
    description:
      "विश्व विख्यात माँ बगलामुखी शक्तिपीठ नलखेड़ा धाम के पावन गर्भगृह, अखंड महाहवन, पूज्य गुरुजी सान्निध्य एवं दिव्य स्वरूप के अलौकिक दर्शन।",
    images: [
      {
        url: "/mandir/mandir-complex-panoramic.jpg",
        width: 1200,
        height: 630,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा धाम परिसर",
      },
    ],
  },
};

export default function GalleryPage() {
  // Structured Data (JSON-LD) for SEO ImageGallery & Breadcrumb
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
            name: "चित्र दीर्घा (Gallery)",
            item: "https://mabaglamukhi.org/gallery",
          },
        ],
      },
      {
        "@type": "ImageGallery",
        name: "माँ बगलामुखी मंदिर नलखेड़ा दिव्य चित्र दीर्घा",
        description:
          "माँ बगलामुखी मंदिर नलखेड़ा धाम की पवित्र छवियां, गर्भगृह, महाहवन, पूज्य गुरुजी एवं अनुष्ठान दर्शन।",
        publisher: {
          "@type": "Place",
          name: "माँ बगलामुखी मंदिर नलखेड़ा धाम",
          telephone: "+919340605235",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nalkheda",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
        },
        image: GALLERY_ITEMS.map((item) => ({
          "@type": "ImageObject",
          contentUrl: `https://mabaglamukhi.org${item.image}`,
          name: item.title,
          description: item.caption,
        })),
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

      {/* Gallery Majestic Hero Section (Full-Bleed 3s Auto-Slider) */}
      <GalleryHero />

      {/* Pujya Guruji Pandit Shubham Sharma Ji Gallery & Guidance Section */}
      <GurujiGallerySection />

      {/* Gallery Interactive Filter & Masonry Grid Section */}
      <GalleryGridSection />

      {/* Sacred Vedic Footer */}
      <Footer />
    </main>
  );
}
