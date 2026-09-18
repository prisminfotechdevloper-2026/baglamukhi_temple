"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { getAllSolutions } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface RelatedSolutionsProps {
  currentSlug: string;
}

export default function RelatedSolutions({ currentSlug }: RelatedSolutionsProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const all = getAllSolutions();
  const related = all.filter((s) => s.slug !== currentSlug).slice(0, 4);

  return (
    <section className="py-4 sm:py-5 bg-[#fffaf0] text-[#4a2618] border-t border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#8b0000] font-serif font-bold uppercase tracking-wider mb-1">
              <Flame className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>{isHi ? "अन्य विशेष अनुष्ठान" : "Other Sacred Remedies"}</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#5c0d15]">
              {isHi ? "संबंधित अन्य प्रमुख समाधान" : "Explore Related Solutions"}
            </h2>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-serif font-bold text-[#720e18] hover:text-[#b8860b] hover:underline"
          >
            <span>{isHi ? "सभी 10 प्रमुख समाधान देखें →" : "View All 10 Solutions →"}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {related.map((item) => {
            const title = isHi ? item.titleHi : item.titleEn;
            const shortDesc = isHi ? item.shortDescHi : item.shortDescEn;
            const categoryName = isHi ? item.categoryNameHi : item.categoryNameEn;

            return (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="group p-5 rounded-2xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] transition-all hover:-translate-y-1 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#fdf2d6] text-[#720e18] border border-[#d89b18]/30 text-[0.70rem] font-serif font-bold uppercase tracking-wider mb-3">
                    {categoryName}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#5c0d15] group-hover:text-[#8b0000] transition-colors mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="font-serif text-xs text-[#5a3a25] line-clamp-3 leading-relaxed">
                    {shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0e2cd] flex items-center justify-between text-xs text-[#8b0000] font-serif font-bold">
                  <span>{isHi ? "विस्तार से पढ़ें" : "Learn More"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#d89b18]" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
