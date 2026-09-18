"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, Shield, Lock } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionConsultationFormProps {
  solution: SolutionItem;
}

export default function SolutionConsultationForm({
  solution,
}: SolutionConsultationFormProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gotra: "",
    sankalpType: "online",
    city: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const phoneNum = "+919340605235";
  const displayPhone = "+91 93406 05235";
  const title = isHi ? solution.titleHi : solution.titleEn;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp fallback message
    const waText = encodeURIComponent(
      `जय माँ बगलामुखी! 🙏\n\n*अनुष्ठान संकल्प अनुरोध:*\n- समाधान विषय: ${title}\n- यजमान का नाम: ${formData.name}\n- फोन: ${formData.phone}\n- गोत्र: ${formData.gotra || "कश्यप (अथवा ज्ञात नहीं)"}\n- स्थान: ${formData.city}\n- अनुष्ठान माध्यम: ${formData.sankalpType === "online" ? "ऑनलाइन लाइव वीडियो संकल्प" : "प्रत्यक्ष मंदिर धाम उपस्थिति"}\n- विवरण: ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Auto open WhatsApp with the details prefilled
      window.open(`https://wa.me/919340605235?text=${waText}`, "_blank");
    }, 600);
  };

  return (
    <section
      id="consultation-booking"
      className="py-4 sm:py-5 lg:py-6 bg-[#fffaf0] text-[#3d2314] border-b border-[#ebdcb9] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-[#d89b18]/60 shadow-[0_12px_40px_rgba(100,20,20,0.1)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Sidebar: Sacred Guidance & Instant Contact */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#fdf6e6] via-[#faf0d7] to-[#fbf4e2] text-[#4a2618] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#ebdcb9]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2d6] text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-4 border border-[#d89b18]/40 shadow-xs">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isHi ? "वैदिक परामर्श" : "Vedic Guidance"}</span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5c0d15] mb-3 leading-tight">
                  {isHi ? "पूज्य पंडित शुभम शर्मा जी से परामर्श" : "Direct Consultation with Pandit Ji"}
                </h3>

                <p className="font-serif text-xs sm:text-sm text-[#5a3a25] leading-relaxed mb-6">
                  {isHi
                    ? "आपकी कुंडली, गोत्र व वर्तमान समस्या के अनुसार अनुकूल समय, मंत्र विधि एवं संकल्प का निर्धारण व्यक्तिगत मार्गदर्शन में किया जाता है।"
                    : "Receive personalized guidance tailored to your birth chart, Gotra, and specific challenges directly from the Chief Priest at Nalkheda Dham."}
                </p>

                {/* Instant Call Option */}
                <div className="space-y-3 mb-6 font-serif">
                  <a
                    href={`tel:${phoneNum}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-[#fffdf9] border border-[#ebdcb9] hover:border-[#d89b18] text-[#4a2618] shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#d89b18] text-[#220104] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-[0.70rem] text-[#7c4d29] uppercase tracking-wider font-semibold">
                        {isHi ? "सीधा फोन कॉल" : "Direct Phone Call"}
                      </p>
                      <p className="font-bold text-sm text-[#720e18] font-mono">{displayPhone}</p>
                    </div>
                  </a>

                  {/* WhatsApp Option */}
                  <a
                    href={`https://wa.me/919340605235?text=${encodeURIComponent(
                      `जय माँ बगलामुखी! पंडित जी, मुझे ${title} के संबंध में मार्गदर्शन चाहिए।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-[#f2fcf5] border border-[#25D366]/50 text-[#14532d] shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-[0.70rem] text-[#15803d] uppercase tracking-wider font-semibold">
                        {isHi ? "व्हाट्सएप परामर्श" : "WhatsApp Chat"}
                      </p>
                      <p className="font-bold text-sm text-[#166534]">
                        {isHi ? "संदेश भेजें" : "Chat with Guruji"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Privacy notice */}
              <div className="pt-4 border-t border-[#ebdcb9] flex items-center gap-2 text-[0.72rem] font-serif text-[#7c4d29]">
                <Lock className="w-3.5 h-3.5 text-[#b8860b] flex-shrink-0" />
                <span>{isHi ? "आपकी संपूर्ण जानकारी 100% गोपनीय रखी जाती है।" : "100% Confidential & Secure Sankalp."}</span>
              </div>
            </div>

            {/* Right Form: Devotee Details & Sankalp Request */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#720e18] mb-1">
                {isHi ? "अनुष्ठान संकल्प व परामर्श फॉर्म" : "Request Sankalp & Consultation"}
              </h3>
              <p className="font-serif text-xs text-[#70523b] mb-5">
                {isHi
                  ? "कृपया अपना विवरण भरें, पंडित जी की टीम आपसे तुरंत संपर्क करेगी।"
                  : "Please submit your details; Guruji's team will contact you promptly."}
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-green-300 text-center font-serif text-green-950">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-1">
                    {isHi ? "संकल्प अनुरोध सफलतापूर्वक प्राप्त हुआ!" : "Sankalp Request Received!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-green-800 leading-relaxed mb-4">
                    {isHi
                      ? "आपका विवरण दर्ज हो गया है। व्हाट्सएप विंडो खुल चुकी है, जहाँ आप पंडित जी से तुरंत बात कर सकते हैं।"
                      : "Your details have been logged. A direct WhatsApp consultation link has opened for immediate follow-up."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-lg bg-green-700 text-white text-xs font-semibold hover:bg-green-800 transition-colors"
                  >
                    {isHi ? "नया अनुरोध भेजें" : "Submit Another Request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-serif text-xs sm:text-sm">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-semibold text-[#543621] mb-1">
                        {isHi ? "यजमान का पूरा नाम *" : "Your Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isHi ? "उदा. राहुल शर्मा" : "e.g. Rahul Sharma"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8c39e] bg-[#fdfaf5] focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] outline-none text-[#2d1b10]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#543621] mb-1">
                        {isHi ? "मोबाइल नंबर (WhatsApp) *" : "Phone Number (WhatsApp) *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8c39e] bg-[#fdfaf5] focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] outline-none text-[#2d1b10]"
                      />
                    </div>
                  </div>

                  {/* Gotra & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-semibold text-[#543621] mb-1">
                        {isHi ? "गोत्र (यदि ज्ञात हो)" : "Gotra (If known)"}
                      </label>
                      <input
                        type="text"
                        value={formData.gotra}
                        onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                        placeholder={isHi ? "उदा. कश्यप, भारद्वाज" : "e.g. Kashyap, or Unknown"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8c39e] bg-[#fdfaf5] focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] outline-none text-[#2d1b10]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#543621] mb-1">
                        {isHi ? "आपका शहर / राज्य *" : "City / State *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={isHi ? "उदा. इंदौर, दिल्ली, मुंबई" : "e.g. Indore, Delhi, Mumbai"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8c39e] bg-[#fdfaf5] focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] outline-none text-[#2d1b10]"
                      />
                    </div>
                  </div>

                  {/* Mode of Anushthan (In-Person / Online) */}
                  <div>
                    <label className="block font-semibold text-[#543621] mb-1">
                      {isHi ? "अनुष्ठान का माध्यम चुने *" : "Preferred Ritual Mode *"}
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, sankalpType: "online" })}
                        className={`py-2 px-3 rounded-lg border text-center font-medium transition-all ${
                          formData.sankalpType === "online"
                            ? "bg-[#720e18] text-white border-[#720e18]"
                            : "bg-[#fbf7ee] text-[#553b27] border-[#d8c39e]"
                        }`}
                      >
                        {isHi ? "ऑनलाइन वीडियो संकल्प" : "Live Video Sankalp"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, sankalpType: "in-person" })}
                        className={`py-2 px-3 rounded-lg border text-center font-medium transition-all ${
                          formData.sankalpType === "in-person"
                            ? "bg-[#720e18] text-white border-[#720e18]"
                            : "bg-[#fbf7ee] text-[#553b27] border-[#d8c39e]"
                        }`}
                      >
                        {isHi ? "नलखेड़ा धाम में उपस्थिति" : "In-Person at Nalkheda"}
                      </button>
                    </div>
                  </div>

                  {/* Issue details */}
                  <div>
                    <label className="block font-semibold text-[#543621] mb-1">
                      {isHi ? "समस्या का संक्षिप्त विवरण" : "Brief Details of Your Issue"}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isHi ? "अपनी परिस्थिति या प्रश्न का विवरण यहाँ लिखें..." : "Describe your current situation or inquiry..."}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8c39e] bg-[#fdfaf5] focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] outline-none text-[#2d1b10] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d89b18] via-[#e5ab2a] to-[#c78b12] text-[#240307] font-serif font-bold text-sm shadow-[0_4px_16px_rgba(216,155,24,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? isHi
                          ? "संकल्प प्रेषित हो रहा है..."
                          : "Submitting..."
                        : isHi
                        ? "संकल्प अनुरोध प्रेषित करें"
                        : "Send Sankalp Request"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
