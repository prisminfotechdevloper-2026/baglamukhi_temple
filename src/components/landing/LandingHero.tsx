import Image from "next/image";
import Link from "next/link";
import { Phone, Sparkles, ShieldCheck, Flame, CheckCircle2 } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";
import maaDarshanImg from "../../../public/image.png";

/**
 * LandingHero Component
 * - Background Image: hero.png (/hero/hero.png) with sacred royal temple sanctum aura overlay
 * - Left Side: Maa Bagalamukhi authentic Beej Mantra, Vedic Anushthan benefits, and direct Contact CTA buttons
 * - Right Side: maaDarshanImg (Trishakti Bagalamukhi Divya Darshan) enlarged on lg screens with sacred glowing golden aura
 * - Responsive: Adaptive height & padding ensuring all CTA buttons and sacred elements fit perfectly in view
 */
export default function LandingHero() {
  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "जय माँ बगलामुखी! मुझे पूजा, अनुष्ठान एवं दर्शन सम्बन्धी परामर्श चाहिए।"
  )}`;

  return (
    <section
      id="mandir"
      className="relative isolate w-full overflow-hidden pt-2 sm:pt-2.5 lg:pt-3.5 pb-6 sm:pb-8 lg:pb-10"
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

        {/* Directional Vignette: Deep rich contrast on the left for text, open golden sanctum on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#180205]/95 via-[#250409]/80 via-48% to-[#180205]/35 lg:from-[#180205]/92 lg:via-[#250409]/72 lg:via-46% lg:to-transparent" />

        {/* Top subtle navbar shadow */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#140204]/30 to-transparent" />
      </div>

      {/* ============================================================
          2. HERO CONTENT GRID (Left: Mantra & CTA | Right: Maa Darshan)
          ============================================================ */}
      <div className="max-w-7xl mx-auto w-full py-3 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* ------------------------------------------------------------
              LEFT COLUMN: SACRED MANTRA, PEETH INFO & CONTACT BUTTONS
              ------------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Sacred Peeth Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a0000]/90 border border-[#d89b18] shadow-[0_2px_12px_rgba(216,155,24,0.35)] backdrop-blur-md mb-2 sm:mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse" />
              <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
                ॥ ॐ ह्लीं पीताम्बरायै नमः ॥ विश्वप्रसिद्ध सिद्धपीठ • नलखेड़ा धाम
              </span>
            </div>

            {/* Main Sacred Heading */}
            <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              माँ बगलामुखी{" "}
              <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(216,155,24,0.5)]">
                नलखेड़ा धाम
              </span>
            </h1>

            {/* Sub-headline / Blessing promise */}
            <p className="font-serif text-[#ffedd5] text-sm sm:text-base md:text-lg mt-1 sm:mt-1.5 max-w-xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              समस्त शत्रु बाधा, रोग-दोष निवारण एवं मनोकामना सिद्धि हेतु अखंड प्रत्यक्ष वैदिक अनुष्ठान
            </p>

            {/* Ornate Lotus Divider */}
            <div className="w-full max-w-md my-2 sm:my-2.5">
              <LotusDivider />
            </div>

            {/* Sacred Mantra Box */}
            <div className="w-full max-w-xl bg-gradient-to-br from-[#2a0408]/95 via-[#1a0204]/98 to-[#2a0408]/95 border border-[#d89b18]/60 rounded-2xl p-4 sm:p-5 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md mb-3.5 sm:mb-4 text-left relative overflow-hidden group">
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
              <p className="font-serif text-[1.05rem] sm:text-xl md:text-[1.28rem] font-bold leading-relaxed tracking-wide text-center sm:text-left py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#fce293] to-[#f4d58d] drop-shadow-[0_2px_8px_rgba(216,155,24,0.4)]">
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

            {/* ============================================================
                CONTACT ACTION BUTTONS (CALL & WHATSAPP) - MATCHING USER DESIGN
                With Left-to-Right Moving Color Sheen ONLY on Hover & Click
                ============================================================ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">

              {/* Button 1: Call Now (Red Gradient Pill with Handset Icon) */}
              <a
                href={`tel:${DEFAULT_CONTACT.phone}`}
                className="relative overflow-hidden w-full sm:w-auto min-w-[210px] sm:min-w-[235px] inline-flex items-center gap-3 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ba1616] via-[#8c0608] to-[#4e0204] text-white shadow-[0_4px_16px_rgba(139,0,0,0.38)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 group"
                aria-label={`Call Now - ${DEFAULT_CONTACT.displayPhone}`}
              >
                {/* Left-to-Right Moving Color Sheen (Only on Hover & Click) */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent button-sheen-sweep" />

                {/* Phone Handset Icon: White Outline, Terracotta Interior */}
                <Phone className="relative z-10 w-5 h-5 text-white fill-[#b84724] stroke-[2.2] transform -rotate-12 flex-shrink-0" />

                {/* Text: Call Now & Number */}
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-white font-serif font-bold text-base sm:text-[1.08rem] leading-tight tracking-wide">
                    Call Now
                  </span>
                  <span className="text-white/90 text-xs sm:text-[0.82rem] font-medium tracking-wide leading-tight mt-0.5">
                    {DEFAULT_CONTACT.displayPhone}
                  </span>
                </div>
              </a>

              {/* Button 2: WhatsApp (Ivory Pill with Green Logo) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full sm:w-auto min-w-[210px] sm:min-w-[235px] inline-flex items-center gap-3 px-6 py-2.5 sm:py-3 rounded-full bg-[#fffcf7] hover:bg-white text-[#38040b] border border-[#ead6b3] shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:border-[#dfc38c] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 group"
                aria-label="WhatsApp - Chat with Us"
              >
                {/* Left-to-Right Moving Color Sheen (Only on Hover & Click) */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#25D366]/25 to-transparent button-sheen-sweep" />

                {/* WhatsApp Green Outline Logo */}
                <svg
                  className="relative z-10 w-6 h-6 flex-shrink-0 text-[#25D366]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2.5 21.5l4.33-1.01A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    stroke="#25D366"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8 8.8c-.2 0-.44.07-.67.33-.23.26-.88.85-.88 2.08s.9 2.41 1.02 2.58c.12.17 1.73 2.76 4.28 3.79 2.12.85 2.55.68 3.01.64.46-.05 1.48-.61 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3s-1.48-.73-1.71-.81c-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8 1-.15.17-.29.19-.54.06s-1.07-.39-2.04-1.25c-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44h-.48z"
                    fill="#25D366"
                  />
                </svg>

                {/* Text: WhatsApp & Chat with Us */}
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-[#38040b] font-serif font-bold text-base sm:text-[1.08rem] leading-tight tracking-wide">
                    WhatsApp
                  </span>
                  <span className="text-[#6b5247] text-xs sm:text-[0.82rem] font-medium leading-tight mt-0.5">
                    Chat with Us
                  </span>
                </div>
              </a>

            </div>

            {/* Pandit Ji Trust Guarantee */}
            <p className="text-[#f4d58d] text-xs sm:text-sm mt-3.5 font-serif flex items-center justify-center lg:justify-start gap-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <CheckCircle2 className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
              <span>पूज्य पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त तंत्र विधि</span>
            </p>
          </div>

          {/* ------------------------------------------------------------
              RIGHT COLUMN: ROYAL SANCTUM DARSHAN (माँ बगलामुखी दिव्य दर्शन)
              - Scaled up on lg / xl breakpoints for majestic prominence
              - Soft glowing golden halo aura and holy depth drop-shadows
              ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
            {/* Sized container: noticeably increased on lg & xl */}
            <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[540px] 2xl:w-[580px] aspect-square flex items-center justify-center group">
              
              {/* Divine Multi-Layer Golden Glow / Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d89b18]/30 via-[#f4d58d]/25 to-[#e59a17]/15 blur-2xl lg:blur-3xl animate-aura-pulse pointer-events-none" />
              <div className="absolute inset-6 rounded-full bg-amber-500/20 blur-xl pointer-events-none" />

              {/* The High-Definition Divine Deity Image with Floating Sanctum Effect */}
              <div className="relative z-10 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105  ">
                <Image
                  src={maaDarshanImg}
                  alt="माँ बगलामुखी नलखेड़ा धाम - दिव्य पीताम्बरा स्वरूप दर्शन"
                  priority
                  quality={95}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.75)] drop-shadow-[0_0_35px_rgba(216,155,24,0.35)] select-none"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

