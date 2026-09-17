import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Flame, BookOpen } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";

export default function TempleFactsSection() {
  const TEMPLE_FACTS = [
    {
      id: "mystery",
      image: "/mandir/baglamukhi-divine-darshan.jpg",
      tag: "महासाधना रहस्य",
      title: "माँ बगलामुखी देवी का रहस्य और महासाधना",
      description:
        "दस महाविद्याओं में अष्टम महाविद्या माँ पीताम्बरा बगलामुखी समस्त दुखों, घोर संकटों एवं शत्रु बाधाओं को स्तम्भित कर साधक को विजय, ऐश्वर्य और अभय प्रदान करती हैं।",
      mantra: "ॐ ह्लीं बगलामुख्यै सर्वदुष्टानां वाचं मुखं पदं स्तम्भय...",
    },
    {
      id: "origin",
      image: "/mandir/mandir-main-facade.jpg",
      tag: "पौराणिक इतिहास",
      title: "नलखेड़ा सिद्धपीठ की उत्पत्ति एवं महाभारत कालीन इतिहास",
      description:
        "महाभारत युद्ध से पूर्व भगवान श्रीकृष्ण के दिव्य मार्गदर्शन में धर्मराज युधिष्ठिर द्वारा नलखेड़ा धाम में माँ बगलामुखी की विशेष आराधना कर विजय वरदान प्राप्त किया गया था।",
      mantra: "द्वापर कालीन स्वयंभू त्रिशक्ति विग्रह पीठ",
    },
    {
      id: "mahavidyas",
      image: "/mandir/mandir-night-darshan.jpg",
      tag: "दस महाविद्या महिमा",
      title: "लखुंदर नदी तट, जागृत तपोभूमि एवं अखंड दीप दर्शन",
      description:
        "विश्व में केवल नलखेड़ा धाम में ही लखुंदर नदी का पावन उत्तरवाहिनी प्रवाह और जागृत श्मशान भूमि का दुर्लभ संगम है, जहाँ की गई वैदिक आहुति तत्काल फलदायी होती है।",
      mantra: "अखंड अग्निहोत्र एवं महाहवन तपोभूमि",
    },
  ];

  return (
    <section
      className="relative py-12 sm:py-16 bg-gradient-to-b from-[#fff8e7] via-[#fffdfa] to-[#fff8e7] text-[#4a2618] overflow-hidden"
      aria-label="नलखेड़ा धाम रोचक तथ्य एवं आध्यात्मिक महत्व"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-xs mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#b77900]" />
            <span className="font-serif text-[#78350f] text-xs sm:text-sm font-bold tracking-wide">
              ॥ आध्यात्मिक रहस्य एवं इतिहास ॥
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-serif font-bold text-[#420a10] leading-tight">
            माँ बगलामुखी नलखेड़ा धाम{" "}
            <span className="bg-gradient-to-r from-[#800000] via-[#b84724] to-[#d89b18] bg-clip-text text-transparent">
              रोचक तथ्य एवं साधना महिमा
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#6d4330] font-serif leading-relaxed">
            विश्वविख्यात शक्तिपीठ माँ बगलामुखी नलखेड़ा के पावन इतिहास, वैदिक तंत्र साधना एवं पौराणिक महत्व के प्रामाणिक तथ्य।
          </p>

          <div className="w-full max-w-md mx-auto my-3">
            <LotusDivider />
          </div>
        </div>

        {/* 3 Fact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEMPLE_FACTS.map((fact) => (
            <article
              key={fact.id}
              className="group relative rounded-2xl sm:rounded-3xl bg-white hover:bg-[#fffdf8] border border-[#ebd9b8] border-l-[5px] border-l-[#c2841f] hover:border-l-[#d89b18] shadow-[0_6px_25px_rgba(74,38,24,0.06)] hover:shadow-[0_16px_40px_rgba(194,132,31,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full bg-[#faedd2] overflow-hidden">
                <Image
                  src={fact.image}
                  alt={fact.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#240307]/90 border border-[#ffd700]/70 text-[#ffd700] text-[11px] font-serif font-bold shadow-md">
                    <Sparkles className="w-3 h-3 text-[#ffd700]" />
                    <span>{fact.tag}</span>
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#420a10] group-hover:text-[#8b0000] transition-colors leading-snug">
                    {fact.title}
                  </h3>
                  <p className="text-xs sm:text-[0.84rem] text-[#6d4330] font-serif leading-relaxed mt-2.5">
                    {fact.description}
                  </p>
                </div>

                {/* Mantra Box */}
                <div className="mt-4 pt-3 border-t border-[#ebdcb9] flex items-center justify-between text-xs font-serif font-semibold text-[#8b4513]">
                  <span className="text-[#b77900] truncate flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#d89b18] flex-shrink-0" />
                    <span className="truncate">{fact.mantra}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Sanskrit Mantra Banner */}
        <div className="mt-10 py-5 px-4 rounded-2xl bg-[#faedd2]/70 border border-[#d89b18]/40 text-center">
          <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#800000]">
            ॥ वादी मूकति रंकति क्षितिपतिर्वैश्वानरः शीतति क्रोधी शाम्यति दुर्जनः सुजनति क्षिप्रानुगः खंजति ॥
          </p>
          <p className="font-serif text-[11px] sm:text-xs text-[#78350f] mt-1">
            श्री माँ बगलामुखी महामंत्र के प्रभाव से असंभव कार्य भी सिद्ध हो जाते हैं।
          </p>
        </div>
      </div>
    </section>
  );
}
