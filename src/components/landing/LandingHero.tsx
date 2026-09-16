import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle, Sparkles, ShieldCheck, Flame } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";
import maaDarshanImg from "../../../public/image.png";

/**
 * LandingHero Component
 * - Background Image: hero.png (/hero/hero.png) with sacred royal temple aura overlay
 * - Left Side: Maa Bagalamukhi authentic Beej Mantra, Vedic Anushthan benefits, and direct Contact CTA buttons
 * - Right Side: hero-right.png (/hero/hero-right.png) sacred Trishul-Om-Dhwaja with glowing golden halo & floating animation
 * - Responsive: 80% viewport height (80vh) on desktop (lg screen) and elegantly adaptive on mobile
 */
export default function LandingHero() {
  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "जय माँ बगलामुखी! मुझे पूजा, अनुष्ठान एवं दर्शन सम्बन्धी परामर्श चाहिए।"
  )}`;

  return (
    <section
      className="relative isolate w-full overflow-hidden flex items-center lg:h-[80vh] lg:min-h-[620px] lg:max-h-[820px] min-h-[620px] py-10 sm:py-14 lg:py-0"
      aria-label="माँ बगलामुखी नलखेड़ा धाम - मुख्य पृष्ठ"
    >
      {/* ============================================================
          1. BACKGROUND IMAGE & ATMOSPHERIC SACRED OVERLAYS
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Divine Temple Sanctum Background Image */}
        <Image
          src="/hero/hero.png"
          alt="माँ बगलामुखी नलखेड़ा धाम गर्भगृह"
          fill
          priority
          quality={95}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDp7J0+yR7ANuwdPpWVqkMI2sTgbufyNS6F/wAgtag1n/j0X/erilqkdENz/9k="
          className="object-cover object-center lg:object-[center_28%] select-none transition-transform duration-700 ease-out scale-100"
        />

        {/* Directional Vignette: Deep rich contrast on the left for text, completely open & sunlit on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#180205]/92 via-[#250409]/75 via-48% to-[#180205]/30 lg:from-[#180205]/90 lg:via-[#250409]/68 lg:via-46% lg:to-transparent" />

        {/* Soft Golden Ambient Light Filter across top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140204]/40 via-transparent to-[#140204]/25" />

        {/* Bottom smooth fade to bridge seamlessly with page background (#fff8e7) */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#fff8e7] via-[#fff8e7]/15 to-transparent" />

        {/* Top subtle navbar shadow */}
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#140204]/40 to-transparent" />
      </div>

      {/* ============================================================
          2. HERO CONTENT GRID (Left: Mantra & CTA | Right: Hero Right)
          ============================================================ */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* ------------------------------------------------------------
              LEFT COLUMN: SACRED MANTRA, PEETH INFO & CONTACT BUTTONS
              ------------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Sacred Peeth Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a0000]/90 border border-[#d89b18] shadow-[0_2px_12px_rgba(216,155,24,0.35)] backdrop-blur-md mb-3.5 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse" />
              <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
                ॥ ॐ ह्लीं पीताम्बरायै नमः ॥ विश्वप्रसिद्ध सिद्धपीठ • नलखेड़ा धाम
              </span>
            </div>

            {/* Main Sacred Heading */}
            <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] leading-[1.2] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              माँ बगलामुखी{" "}
              <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(216,155,24,0.5)]">
                नलखेड़ा धाम
              </span>
            </h1>

            {/* Sub-headline / Blessing promise */}
            <p className="font-serif text-[#ffedd5] text-sm sm:text-base md:text-lg mt-1.5 sm:mt-2 max-w-xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              समस्त शत्रु बाधा, रोग-दोष निवारण एवं मनोकामना सिद्धि हेतु अखंड प्रत्यक्ष वैदिक अनुष्ठान
            </p>

            {/* Ornate Divider */}
            <div className="w-full max-w-md my-3 sm:my-4">
              <LotusDivider />
            </div>

            {/* Sacred Mantra Box */}
            <div className="w-full max-w-xl bg-gradient-to-br from-[#2a0408]/95 via-[#1a0204]/98 to-[#2a0408]/95 border border-[#d89b18]/60 rounded-2xl p-4 sm:p-5 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md mb-5 sm:mb-6 text-left relative overflow-hidden group">
              {/* Subtle radiant golden accent top line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-90" />

              {/* Mantra Title with sacred diya icon */}
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
                <span className="font-serif text-[#f4d58d] text-xs sm:text-sm font-semibold tracking-wide">
                  ॥ माँ बगलामुखी महामन्त्र (शत्रु स्तम्भन एवं रक्षा कवच) ॥
                </span>
              </div>

              {/* The Sacred Sanskrit Mantra in prominent glowing Devanagari */}
              <p className="text-amber-100 font-serif text-[1.05rem] sm:text-xl md:text-[1.28rem] font-bold leading-relaxed tracking-wide text-center sm:text-left py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#fce293] to-[#f4d58d] drop-shadow-[0_2px_8px_rgba(216,155,24,0.4)]">
                ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥
              </p>

              {/* Key Anushthan tags */}
              <div className="mt-3 pt-2.5 border-t border-[#d89b18]/30 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-[#eed6a8]">
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium">
                  <ShieldCheck className="w-3 h-3 text-[#f7c85f]" /> शत्रु स्तम्भन
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium">
                  • कोर्ट-कचहरी विजय
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium">
                  • व्यापार वृद्धि
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium">
                  • गृह शांति
                </span>
              </div>
            </div>

            {/* Contact Action Buttons (Call & WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">

              {/* Primary Contact Button: Direct Phone Call */}
              <a
                href={`tel:${DEFAULT_CONTACT.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full text-white font-bold text-base sm:text-lg shadow-[0_6px_22px_rgba(185,28,28,0.55)] border border-amber-300/40 bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#991b1b] hover:from-[#dc2626] hover:to-[#7f1d1d] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                aria-label={`परामर्श हेतु कॉल करें - ${DEFAULT_CONTACT.displayPhone}`}
              >
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <PhoneCall className="w-5 h-5 text-white animate-pulse" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold leading-none">
                    निःशुल्क परामर्श
                  </span>
                  <span className="leading-tight font-serif tracking-wide text-white">
                    Call Now : {DEFAULT_CONTACT.displayPhone}
                  </span>
                </div>
              </a>

              {/* Secondary Contact Button: WhatsApp Anushthan Booking */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full text-white font-bold text-sm sm:text-base shadow-[0_4px_18px_rgba(22,163,74,0.4)] border border-emerald-300/40 bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#22c55e] hover:to-[#166534] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                aria-label="व्हाट्सएप पर पूजा अनुष्ठान बुक करें"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600 flex-shrink-0" />
                <span>पूजा अनुष्ठान बुक करें</span>
              </a>
            </div>

            {/* Micro Pandit Ji Trust Guarantee */}
            <p className="text-[#f4d58d] text-xs sm:text-sm mt-3 font-serif flex items-center justify-center lg:justify-start gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <span className="text-[#f7c85f] font-bold">✓</span>
              पूज्य पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त तंत्र विधि
            </p>
          </div>

          {/* ------------------------------------------------------------
              RIGHT COLUMN: ROYAL SANCTUM DARSHAN (माँ बगलामुखी दिव्य दर्शन)
              Inspired by India's Top Pilgrimage & Mandir Shrines
              ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            {/* Multi-Layer Divine Golden Sunburst Aura */}
             
            {/* Royal Sanctum Arch Frame with Gold Trim */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[410px] xl:w-[440px] aspect-square  overflow-hidden border-2 border-[#d89b18] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(216,155,24,0.35)] group bg-[#1a0306] transition-all duration-500 hover:shadow-[0_25px_65px_rgba(216,155,24,0.5)]">
              
              
               
              {/* The High-Definition Divine Deity Image */}
              <Image
                src={maaDarshanImg}
                alt="माँ बगलामुखी नलखेड़ा धाम - दिव्य पीताम्बरा स्वरूप दर्शन"
                priority
                quality={95}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              

             

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
