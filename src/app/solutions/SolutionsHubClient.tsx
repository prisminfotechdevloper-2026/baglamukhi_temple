"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  Search,
  ArrowRight,
  Phone,
  MessageCircle,
  Scale,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Heart,
  Award,
  Activity,
  Compass,
} from "lucide-react";
import { SolutionCategory, SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionsHubClientProps {
  categories: SolutionCategory[];
  allSolutions: SolutionItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Heart,
  Award,
  Activity,
  Compass,
};

export default function SolutionsHubClient({
  categories,
  allSolutions,
}: SolutionsHubClientProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const phoneNum = "+919340605235";
  const displayPhone = "+91 93406 05235";

  // Filter solutions
  const filteredSolutions = allSolutions.filter((item) => {
    const title = isHi ? item.titleHi : item.titleEn;
    const desc = isHi ? item.shortDescHi : item.shortDescEn;
    const categoryName = isHi ? item.categoryNameHi : item.categoryNameEn;

    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Sacred Top Banner */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff5e1] via-[#fffbf2] to-[#fff8e7] text-[#4a2618] border-b-2 border-[#d89b18]/60 py-12 sm:py-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-[#d89b18]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2d6] border border-[#d89b18]/60 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Flame className="w-4 h-4 text-[#8b0000]" />
            <span>
              {isHi
                ? "सिद्धपीठ माँ बगलामुखी नलखेड़ा धाम"
                : "Siddhapeeth Maa Bagalamukhi Nalkheda Dham"}
            </span>
          </div>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#5c0d15] mb-3 leading-tight">
            {isHi
              ? "समस्त संकटों एवं बाधाओं के शास्त्रोक्त वैदिक समाधान"
              : "Comprehensive Vedic Solutions & Sacred Remedies"}
          </h1>

          <p className="font-serif text-xs sm:text-sm text-[#5c3a21] leading-relaxed max-w-2xl mx-auto mb-6">
            {isHi
              ? "कोर्ट-केस, शत्रु बाधा, नौकरी, व्यापार, विवाह अथवा कर्ज—जीवन के प्रत्येक अवरोध का समाधान माँ बगलामुखी की अमोघ स्तम्भन शक्ति एवं महाहवन द्वारा संभव है।"
              : "Litigation victory, enemy protection, career breakthrough, commercial growth, or family peace—find scriptural remedies tailored to your life challenges."}
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-md mx-auto relative mb-4">
            <Search className="w-4 h-4 text-[#d89b18] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isHi
                  ? "अपनी समस्या या अनुष्ठान खोजें (उदा. कोर्ट केस, शत्रु, व्यापार)..."
                  : "Search your issue (e.g. court case, enemy, business)..."
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#d89b18]/60 text-[#4a2618] placeholder-[#8c6d53] text-xs sm:text-sm focus:border-[#720e18] focus:ring-1 focus:ring-[#720e18] outline-none font-serif shadow-xs"
            />
          </div>

          {/* Fast Contact Links */}
          <div className="flex items-center justify-center gap-4 text-xs font-serif text-[#663b1f]">
            <span>
              {isHi ? "तत्काल गुरुजी से बात करें:" : "Direct Guidance with Guruji:"}
            </span>
            <a
              href={`tel:${phoneNum}`}
              className="font-mono font-bold text-[#720e18] hover:text-[#b8860b] underline"
            >
              {displayPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-serif text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
              selectedCategory === "all"
                ? "bg-[#720e18] text-white border-[#720e18] shadow-sm font-bold"
                : "bg-white text-[#553b27] border-[#d8c39e] hover:border-[#720e18]"
            }`}
          >
            {isHi ? "सभी समाधान (All)" : "All Solutions"}
          </button>

          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Flame;
            const name = isHi ? cat.nameHi : cat.nameEn;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-[#720e18] text-white border-[#720e18] shadow-sm font-bold"
                    : "bg-white text-[#553b27] border-[#d8c39e] hover:border-[#720e18]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{name}</span>
              </button>
            );
          })}
        </div>

        {/* Filtered Solutions Grid */}
        {filteredSolutions.length === 0 ? (
          <div className="text-center py-12 font-serif text-[#66462c]">
            <p className="text-base sm:text-lg mb-2">
              {isHi
                ? "आपके खोजे गए शब्द से कोई समाधान नहीं मिला।"
                : "No solutions matched your search."}
            </p>
            <p className="text-xs text-[#8c6d53] mb-4">
              {isHi
                ? "कृपया अन्य शब्द से खोजें अथवा सीधे पंडित जी से बात करें।"
                : "Try searching with different keywords or speak with Guruji directly."}
            </p>
            <a
              href={`tel:${phoneNum}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#720e18] text-white text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{displayPhone}</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredSolutions.map((sol) => {
              const title = isHi ? sol.titleHi : sol.titleEn;
              const shortDesc = isHi ? sol.shortDescHi : sol.shortDescEn;
              const categoryName = isHi ? sol.categoryNameHi : sol.categoryNameEn;

              return (
                <div
                  key={sol.slug}
                  className="rounded-2xl bg-white border border-[#e8d5b5] hover:border-[#d89b18] shadow-[0_4px_16px_rgba(100,20,20,0.05)] hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <Link href={`/solutions/${sol.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-[#faf0d7]">
                    <Image
                      src={sol.image || "/mandir/baglamukhi-divine-darshan.jpg"}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#fdf2d6]/95 text-[#720e18] border border-[#d89b18]/40 text-[0.70rem] font-serif font-bold shadow-xs">
                      {categoryName}
                    </span>
                  </Link>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/solutions/${sol.slug}`}>
                        <h2 className="font-serif font-bold text-base sm:text-lg text-[#720e18] group-hover:text-[#a01625] transition-colors mb-2 leading-snug">
                          {title}
                        </h2>
                      </Link>

                      <p className="font-serif text-xs sm:text-sm text-[#614532] leading-relaxed mb-4 line-clamp-3">
                        {shortDesc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[#f0e2cd] flex items-center justify-between font-serif">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8b0000] hover:text-[#b8860b] transition-colors"
                      >
                        <span>{isHi ? "संपूर्ण विधान पढ़ें" : "View Full Details"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={`https://wa.me/919340605235?text=${encodeURIComponent(
                          `जय माँ बगलामुखी! पंडित जी, मुझे ${title} के संबंध में अनुष्ठान कराना है।`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-800 p-1.5 rounded-lg hover:bg-green-50 transition-colors"
                        title={isHi ? "व्हाट्सएप पर पूछें" : "Chat on WhatsApp"}
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Fast Guidance Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2e0409] to-[#1c0205] text-[#fff8ea] border-2 border-[#d89b18]/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 font-serif">
          <div>
            <h3 className="font-bold text-lg sm:text-xl text-[#ffd778] mb-1">
              {isHi
                ? "क्या आपकी समस्या इस सूची में नहीं मिली?"
                : "Can't find your specific issue?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#dfc4a4]">
              {isHi
                ? "पूज्य पंडित शुभम शर्मा जी से सीधे बात कर अपनी कुंडली व समस्या अनुसार व्यक्तिगत मार्गदर्शन प्राप्त करें।"
                : "Connect directly with Pujya Pandit Shubham Sharma Ji for personalized Vedic guidance."}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${phoneNum}`}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#d89b18] hover:bg-[#e5ab2a] text-[#240307] font-bold text-xs sm:text-sm shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{isHi ? "कॉल करें" : "Call Guruji"}</span>
            </a>

            <a
              href={`https://wa.me/919340605235?text=${encodeURIComponent(
                "जय माँ बगलामुखी! पंडित जी, मुझे विशेष अनुष्ठान परामर्श चाहिए।"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
