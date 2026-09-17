"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Clock,
  Sun,
  Moon,
  Flame,
  Building2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";

export default function ContactFormAndMapSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "बगलामुखी महाहवन एवं संकल्प",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate WhatsApp Sankalp Message URL
    const text = encodeURIComponent(
      `जय माँ बगलामुखी! पूज्य गुरुजी (पंडित शुभम शर्मा जी),\n` +
      `मेरा नाम: ${formData.name}\n` +
      `मोबाइल नंबर: ${formData.phone}\n` +
      `स्थान / शहर: ${formData.city || "नलखेड़ा धाम"}\n` +
      `अनुष्ठान / सेवा: ${formData.service}\n` +
      `इच्छित तिथि: ${formData.date || "यथाशीघ्र"}\n` +
      `विशेष संदेश: ${formData.message || "मार्गदर्शन एवं संकल्प हेतु संपर्क"}`
    );

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    const url = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${text}`;
    window.open(url, "_blank");
  };

  const PUJA_SERVICES = [
    "बगलामुखी महाहवन एवं संकल्प",
    "सर्व शत्रु स्तम्भन एवं रक्षा कवच",
    "सवा लाख महामंत्र जाप अनुष्ठान",
    "कोर्ट-कचहरी व राजनैतिक विजय अनुष्ठान",
    "महालक्ष्मी साधना एवं व्यापार वृद्धि",
    "असाध्य रोग निवारण व स्वास्थ्य रक्षा",
    "कालसर्प, पितृ व नवग्रह शांति",
    "जन्मकुंडली विश्लेषण एवं तंत्र परामर्श",
    "मंदिर दर्शन, धर्मशाला व अन्य जानकारी",
  ];

  return (
    <section
      id="contact-form-section"
      className="relative py-12 sm:py-16 bg-gradient-to-b from-[#fffaf0] via-[#fffdfa] to-[#fff8e7] text-[#4a2618] overflow-hidden border-b border-[#ebdcb9]/80"
      aria-label="परामर्श फॉर्म एवं मंदिर समय सारणी"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ============================================================
              LEFT COLUMN: SACRED DEVOTEE CONSULTATION FORM (7 Cols)
              ============================================================ */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#d89b18]/60 shadow-[0_10px_35px_rgba(74,38,24,0.08)] p-6 sm:p-8 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#d89b18] via-[#ffd700] to-[#d89b18]" />

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faedd2] border border-[#d89b18]/60 text-xs font-serif font-bold text-[#8b0000] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#b77900]" />
                <span>निःशुल्क वैदिक परामर्श एवं संकल्प</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#420a10]">
                पूजन, अनुष्ठान एवं दर्शन सम्बन्धी परामर्श
              </h3>
              <p className="text-xs sm:text-sm text-[#6d4330] font-serif mt-1">
                अपनी समस्या या अनुष्ठान का विवरण भरें। पूज्य गुरुजी (पंडित शुभम शर्मा जी) द्वारा आपको व्यक्तिगत मार्गदर्शन प्रदान किया जाएगा।
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-[#86efac] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#22c55e] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#14532d]">
                  आपका संदेश सफलतापूर्वक प्रेषित कर दिया गया है!
                </h4>
                <p className="text-xs sm:text-sm text-[#166534] font-serif">
                  माँ बगलामुखी की कृपा से आपका कल्याण हो। पूज्य गुरुजी शीघ्र ही आपसे संपर्क करेंगे।
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#15803d] text-white text-xs font-serif font-bold hover:bg-[#166534] transition-colors"
                >
                  पुनः नया संदेश भेजें
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                      पूरा नाम (Full Name) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. अमित शर्मा"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                      मोबाइल / व्हाट्सएप नंबर (Phone) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="उदा. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                      शहर एवं राज्य (City & State)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा. इंदौर, मध्य प्रदेश"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                      संकल्प की इच्छित तिथि (Preferred Date)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                    अनुष्ठान / सेवा का विषय (Select Puja / Service)
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif"
                  >
                    {PUJA_SERVICES.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-serif font-bold text-[#420a10] mb-1">
                    अपनी समस्या या विशेष प्रार्थना का विवरण (Message Details)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="अपनी समस्या, गोत्र अथवा अनुष्ठान से सम्बन्धित विशेष विवरण यहाँ लिखें..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d89b18]/40 bg-[#fffdfa] text-sm text-[#4a2618] focus:outline-none focus:ring-2 focus:ring-[#d89b18] focus:border-transparent font-serif resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#b8800b] text-[#2b1708] font-serif font-extrabold text-sm sm:text-base shadow-[0_4px_18px_rgba(216,155,24,0.45)] hover:shadow-[0_6px_25px_rgba(216,155,24,0.65)] hover:scale-[1.01] active:scale-95 transition-all duration-200 border border-[#ffe8a3] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>परामर्श एवं संकल्प हेतु संदेश भेजें (WhatsApp Connect)</span>
                  </button>
                  <p className="text-[11px] text-center text-[#78350f] font-serif mt-2">
                    🔒 आपकी संपूर्ण जानकारी 100% गोपनीय एवं शास्त्रोक्त मर्यादा में सुरक्षित रखी जाती है।
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ============================================================
              RIGHT COLUMN: LIVE GOOGLE MAP + TEMPLE TIMINGS (5 Cols)
              ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Google Maps Card */}
            <div className="rounded-3xl bg-white border border-[#ebdcb9] shadow-lg overflow-hidden">
              <div className="p-4 bg-[#240307] text-white flex items-center justify-between border-b border-[#d89b18]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#d89b18] text-[#240307] flex items-center justify-center font-bold font-serif text-sm">
                    📍
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#ffd700] leading-none">
                      माँ बगलामुखी मंदिर लाइव मैप
                    </h4>
                    <p className="text-[11px] text-[#faebd0]/80 font-serif mt-0.5">
                      लखुंदर नदी तट, नलखेड़ा धाम
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#d89b18]/20 border border-[#d89b18] text-[#ffd700] px-2 py-0.5 rounded-full font-serif font-semibold">
                  Google GPS
                </span>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-[280px] sm:h-[300px] bg-[#ebdcb9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3649.359324470771!2d76.235637!3d23.841371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUwJzI4LjkiTiA3NsKwMTQnMDguMyJF!5e0!3m2!1sen!2sin!4v1739616954385!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maa Baglamukhi Mandir Nalkheda Dham Google Map"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* 2. Darshan Timings Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#240307] via-[#33050a] to-[#1a0205] text-[#f7e7ce] border border-[#d89b18] p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#d89b18]/30">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#ffd700]" />
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#ffd778]">
                    मंदिर दर्शन एवं आरती समय
                  </h4>
                </div>
                <span className="text-xs font-serif font-bold text-[#ffd700]">॥ ॐ ॥</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-serif">
                {/* Morning */}
                <div className="p-3 rounded-2xl bg-[#3d080e]/80 border border-[#d89b18]/30">
                  <div className="flex items-center gap-1.5 text-xs text-[#ffd778] font-bold mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>प्रातः दर्शन व पूजन</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    05:30 AM - 12:30 PM
                  </p>
                </div>

                {/* Evening */}
                <div className="p-3 rounded-2xl bg-[#3d080e]/80 border border-[#d89b18]/30">
                  <div className="flex items-center gap-1.5 text-xs text-[#ffd778] font-bold mb-1">
                    <Moon className="w-3.5 h-3.5 text-amber-300" />
                    <span>संध्या महाआरती</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    06:30 PM - 09:30 PM
                  </p>
                </div>
              </div>

              {/* Hawan & Accommodation Info */}
              <div className="pt-2 border-t border-[#d89b18]/25 space-y-2 text-xs font-serif text-[#e4c9a8]">
                <div className="flex items-center gap-2 text-[#ffd778]">
                  <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>अखंड महाहवन: दैनिक प्रातः 07:00 AM से संकल्प मुहूर्त अनुसार</span>
                </div>
                <div className="flex items-center gap-2 text-[#e4c9a8]">
                  <Building2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>धर्मशाला व विश्राम: मंदिर परिसर के समीप उत्तम आवास सुविधा उपलब्ध</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
