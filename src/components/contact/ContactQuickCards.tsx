import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";

export default function ContactQuickCards() {
  const CONTACT_CARDS = [
    {
      id: "email",
      title: "ईमेल संपर्क (Email Address)",
      primaryText: "shubhampandit9340@gmail.com",
      secondaryText: "info@mabaglamukhi.com",
      badge: "24x7 ऑनलाइन सहायता",
      description: "पूजन, अनुष्ठान संकल्प एवं पत्र व्यवहार हेतु संपर्क करें।",
      href: "mailto:shubhampandit9340@gmail.com",
      actionText: "ईमेल भेजें",
      icon: Mail,
      iconBg: "from-[#9a3412] to-[#7c2d12]",
      borderColor: "border-[#d89b18]/40 hover:border-[#d89b18]",
    },
    {
      id: "phone",
      title: "हेल्पलाइन एवं परामर्श (Phone Number)",
      primaryText: DEFAULT_CONTACT.displayPhone,
      secondaryText: "पूज्य पंडित शुभम शर्मा जी (उपासक)",
      badge: "प्रत्यक्ष वैदिक परामर्श",
      description: "शत्रु बाधा निवारण, महाहवन व अनुष्ठान मार्गदर्शन हेतु।",
      href: `tel:${DEFAULT_CONTACT.phone}`,
      actionText: "सीधे कॉल करें",
      icon: Phone,
      iconBg: "from-[#b91c1c] to-[#991b1b]",
      borderColor: "border-[#d89b18]/60 hover:border-[#ffd700]",
      isHighlighted: true,
    },
    {
      id: "location",
      title: "मंदिर स्थल (Dham Location)",
      primaryText: "सिद्धपीठ माँ बगलामुखी मंदिर",
      secondaryText: "लखुंदर नदी तट, नलखेड़ा, जिला - आगर मालवा (म.प्र.) - 465445",
      badge: "प्राचीन महाभारत कालीन शक्तिपीठ",
      description: "शासकीय मां बगलामुखी मंदिर प्रबंध समिति, नलखेड़ा।",
      href: "https://www.google.com/maps/dir//23.8413611,76.2356389/@23.8392856,76.2303308,16z",
      actionText: "मैप पर दिशा-निर्देश देखें",
      isExternal: true,
      icon: MapPin,
      iconBg: "from-[#854d0e] to-[#713f12]",
      borderColor: "border-[#d89b18]/40 hover:border-[#d89b18]",
    },
  ];

  return (
    <section
      className="relative mt-4 sm:mt-6 md:mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="त्वरित संपर्क माध्यम"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.id}
              href={card.href}
              target={card.isExternal ? "_blank" : undefined}
              rel={card.isExternal ? "noopener noreferrer" : undefined}
              className="group relative rounded-2xl p-5 sm:p-6 bg-white hover:bg-[#fffdf8] border border-[#ebd9b8] border-l-[5px] border-l-[#c2841f] hover:border-l-[#d89b18] shadow-[0_6px_25px_rgba(74,38,24,0.06)] hover:shadow-[0_16px_40px_rgba(194,132,31,0.2)] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 reveal-card-mobile"
            >
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 border border-[#fde68a]/50`}
                >
                  <Icon className="w-5 h-5 text-[#fff8e7]" />
                </div>
                <span className="text-[11px] font-serif font-semibold text-[#8b0000] bg-[#faebd0] border border-[#d89b18]/40 px-2.5 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>

              {/* Title & Texts */}
              <div className="flex-1">
                <span className="text-xs font-serif font-bold tracking-wider text-[#8b4513] uppercase block mb-1">
                  {card.title}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#420a10] group-hover:text-[#8b0000] transition-colors leading-snug">
                  {card.primaryText}
                </h3>
                <p className="text-xs sm:text-[0.84rem] text-[#6d4330] font-serif font-medium mt-1 leading-relaxed">
                  {card.secondaryText}
                </p>
                <p className="text-[11px] text-[#8a5d43] font-serif mt-2 border-t border-[#ebdcb9]/60 pt-2 leading-tight">
                  {card.description}
                </p>
              </div>

              {/* Action Bottom Row */}
              <div className="mt-4 pt-3 border-t border-[#ebdcb9] flex items-center justify-between text-xs font-serif font-bold text-[#8b0000] group-hover:text-[#b91c1c]">
                <span>{card.actionText}</span>
                <div className="w-7 h-7 rounded-full bg-[#faebd0] group-hover:bg-[#8b0000] group-hover:text-white flex items-center justify-center transition-colors">
                  {card.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
