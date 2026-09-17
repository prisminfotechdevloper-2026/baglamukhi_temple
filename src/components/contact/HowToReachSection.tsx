import { Train, Car, Plane, MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";

export default function HowToReachSection() {
  const REACH_MODES = [
    {
      id: "train",
      title: "ट्रेन द्वारा (By Train)",
      subtitle: "निकटतम प्रमुख रेलवे जंक्शंस",
      icon: Train,
      tag: "रेलवे मार्ग",
      distances: [
        { place: "शाजापुर रेलवे स्टेशन", dist: "58 किमी", time: "लगभग 1.2 घंटे" },
        { place: "उज्जैन जंक्शन (UJN)", dist: "98 किमी", time: "लगभग 2 घंटे" },
        { place: "नागदा जंक्शन (NAD)", dist: "85 किमी", time: "लगभग 1.8 घंटे" },
      ],
      description:
        "उज्जैन एवं नागदा जंक्शन देश के सभी प्रमुख महानगरों जैसे दिल्ली, मुम्बई, हैदराबाद, अहमदाबाद, कोलकाता, जयपुर और बैंगलोर से सुपरफास्ट व एक्सप्रेस ट्रेनों द्वारा सीधे जुड़े हैं। स्टेशन से नलखेड़ा हेतु नियमित बस व टैक्सी उपलब्ध हैं।",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    },
    {
      id: "road",
      title: "सड़क के द्वारा (By Road)",
      subtitle: "हाईवे एवं बस/टैक्सी कनेक्टिविटी",
      icon: Car,
      tag: "सड़क मार्ग",
      distances: [
        { place: "उज्जैन (महाकाल धाम)", dist: "98 किमी", time: "2 घंटे" },
        { place: "इंदौर (म.प्र. व्यावसायिक केंद्र)", dist: "156 किमी", time: "3.5 घंटे" },
        { place: "भोपाल (राजधानी)", dist: "182 किमी", time: "4 घंटे" },
        { place: "कोटा (राजस्थान)", dist: "191 किमी", time: "4 घंटे" },
      ],
      description:
        "नलखेड़ा धाम आगर-मालवा सड़क मार्ग से सुगम रूप से जुड़ा हुआ है। उज्जैन, इंदौर, शाजापुर, सुसनेर एवं भोपाल से नियमित सरकारी व निजी बसें, कैब तथा टैक्सी सेवाएं 24 घंटे उपलब्ध रहती हैं।",
      badgeColor: "bg-red-100 text-red-900 border-red-300",
    },
    {
      id: "air",
      title: "वायु मार्ग द्वारा (By Air)",
      subtitle: "निकटतम घरेलू एवं अंतरराष्ट्रीय एयरपोर्ट",
      icon: Plane,
      tag: "हवाई मार्ग",
      distances: [
        { place: "देवी अहिल्याबाई होलकर एयरपोर्ट (इंदौर)", dist: "156 किमी", time: "3.5 घंटे" },
        { place: "राजा भोज एयरपोर्ट (भोपाल)", dist: "188 किमी", time: "4 घंटे" },
      ],
      description:
        "इंदौर का देवी अहिल्याबाई होलकर एयरपोर्ट मध्य प्रदेश का प्रमुख हवाई अड्डा है। यह दिल्ली, मुम्बई, बेंगलुरु, हैदराबाद, अहमदाबाद, चेन्नई, कोलकाता व जयपुर से सीधी उड़ानों से जुड़ा है। एयरपोर्ट से नलखेड़ा हेतु प्रीपेड टैक्सी उपलब्ध है।",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    },
  ];

  return (
    <section
      id="how-to-reach"
      className="relative py-12 sm:py-16 bg-gradient-to-b from-[#fff8e7] via-[#fffdfa] to-[#fff8e7] text-[#4a2618] overflow-hidden border-b border-[#ebdcb9]/80"
      aria-label="माँ बगलामुखी मंदिर कैसे पहुंचे"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-[#b77900]" />
            <span className="font-serif text-[#78350f] text-xs sm:text-sm font-bold tracking-wide">
              ॥ पावन धाम यात्रा मार्गदर्शिका ॥
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-serif font-bold text-[#420a10] leading-tight">
            माँ बगलामुखी मंदिर{" "}
            <span className="bg-gradient-to-r from-[#800000] via-[#b84724] to-[#d89b18] bg-clip-text text-transparent">
              नलखेड़ा धाम कैसे पहुंचे?
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#6d4330] font-serif leading-relaxed">
            देश के किसी भी कोने से सिद्धपीठ नलखेड़ा धाम की सुगम व पावन यात्रा हेतु रेल, सड़क एवं वायु मार्ग का सम्पूर्ण विवरण।
          </p>

          <div className="w-full max-w-md mx-auto my-3">
            <LotusDivider />
          </div>
        </div>

        {/* 3 Travel Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {REACH_MODES.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className="group relative rounded-3xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-[0_6px_25px_rgba(74,38,24,0.06)] hover:shadow-[0_16px_40px_rgba(216,155,24,0.18)] transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#faedd2] to-[#f4deb3] border border-[#d89b18]/60 flex items-center justify-center text-[#8b0000] shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-serif font-bold px-3 py-1 rounded-full border ${mode.badgeColor}`}
                    >
                      {mode.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#420a10] group-hover:text-[#8b0000] transition-colors">
                    {mode.title}
                  </h3>
                  <p className="text-xs font-serif text-[#854d0e] font-medium mt-0.5 mb-4">
                    {mode.subtitle}
                  </p>

                  {/* Distance Pills */}
                  <div className="space-y-2 mb-4">
                    {mode.distances.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs font-serif bg-[#fffaf0] border border-[#faedd2] rounded-xl p-2.5"
                      >
                        <div className="flex items-center gap-1.5 font-medium text-[#4a2618]">
                          <MapPin className="w-3.5 h-3.5 text-[#b91c1c] flex-shrink-0" />
                          <span>{d.place}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#8b0000] block">{d.dist}</span>
                          <span className="text-[10px] text-[#8a5d43]">{d.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[0.84rem] text-[#6d4330] font-serif leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Directions CTA Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-[#240307] via-[#3a060d] to-[#240307] border-2 border-[#d89b18] p-6 sm:p-8 text-center text-white shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd700]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase font-serif tracking-widest text-[#ffd700] font-bold block mb-1">
                ॥ लाइव जीपीएस नेविगेशन ॥
              </span>
              <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                माँ बगलामुखी मंदिर नलखेड़ा धाम का लाइव मार्ग देखें
              </h4>
              <p className="text-xs sm:text-sm text-[#faebd0]/90 font-serif mt-1">
                शासकीय मां बगलामुखी मंदिर प्रबंध समिति, लखुंदर नदी तट, नलखेड़ा (म.प्र.)
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir//23.8413611,76.2356389/@23.8392856,76.2303308,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d89b18] via-[#f7c85f] to-[#c6890c] text-[#3d0309] font-serif font-extrabold text-sm sm:text-base shadow-[0_4px_20px_rgba(216,155,24,0.5)] hover:scale-105 active:scale-95 transition-all flex-shrink-0 border border-[#ffe8a3]"
            >
              <Navigation className="w-4.5 h-4.5 text-[#3d0309] fill-[#3d0309]" />
              <span>Google Maps पर दिशा-निर्देश लें</span>
              <ExternalLink className="w-4 h-4 text-[#3d0309]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
