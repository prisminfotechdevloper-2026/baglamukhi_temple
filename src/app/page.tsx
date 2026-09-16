import Navbar from "@/components/common/navbarcompo";
import LandingHero from "@/components/landing/LandingHero";
import SacredServicesStrip from "@/components/landing/SacredServicesStrip";
import GurujiServicesGrid from "@/components/landing/GurujiServicesGrid";
import GurujiBioSection from "@/components/landing/GurujiBioSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fff8e7] w-full max-w-full overflow-x-hidden">
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

      {/* Professional Vedic Temple Footer (SEO & Mobile Optimized) */}
      <Footer />
    </main>
  );
}





