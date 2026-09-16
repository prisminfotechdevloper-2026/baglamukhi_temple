import Navbar from "@/components/common/navbarcompo";
import LandingHero from "@/components/landing/LandingHero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fff8e7]">
      {/* Implemented Navbar */}
      <Navbar />

      {/* Landing Hero Section */}
      <LandingHero />
    </main>
  );
}
