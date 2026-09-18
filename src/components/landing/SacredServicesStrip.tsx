"use client";

import React from "react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function SacredServicesStrip() {
  const { t } = useLanguage();

  const SERVICE_ICONS: Record<string, React.ReactNode> = {
    "havan-poojan-jaap": (
      <span
        className="font-serif font-bold text-xl xs:text-2xl sm:text-[1.75rem] text-[#4a0d16] select-none leading-none"
        aria-hidden="true"
      >
        ॐ
      </span>
    ),
    "sarva-shatrunash": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.11v4.71c0 4.54-3.04 8.79-7 9.88V12H5.08c-.05-.33-.08-.66-.08-1V6.29l7-3.11z" />
      </svg>
    ),
    "aakarshan-sammohan": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        <path d="M5.5 10c1.38 0 2.5-1.12 2.5-2.5S6.88 5 5.5 5 3 6.12 3 7.5 4.12 10 5.5 10zm-2 2.5C2.17 13.08 1 13.97 1 15v1h3.5v-1.5c0-.85.34-1.63.9-2.22-.65-.18-1.29-.28-1.9-.28zm15 0c-.61 0-1.25.1-1.9.28.56.59.9 1.37.9 2.22V16H23v-1c0-1.03-1.17-1.92-2.5-2.5zm-2-2.5c1.38 0 2.5-1.12 2.5-2.5S17.88 5 16.5 5 14 6.12 14 7.5s1.12 2.5 2.5 2.5z" />
      </svg>
    ),
    "laxmi-prapti": (
      <span
        className="font-serif font-bold text-xl xs:text-2xl sm:text-[1.75rem] text-[#4a0d16] select-none leading-none"
        aria-hidden="true"
      >
        ₹
      </span>
    ),
    "rajnaitik-pad": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 19h20v2H2v-2zm1.15-4.68L4 7.18l4.47 3.58L12 3.5l3.53 7.26L20 7.18l.85 7.14H3.15z" />
      </svg>
    ),
    "samman-prapti": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    "rognash": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.7 2.3c-4.2 0-7.8 2.8-9.1 6.8-1.5-.7-3.3-.5-4.6.6-1.7 1.4-2.2 3.8-1.2 5.7 1 1.9 3.2 2.9 5.3 2.4l-.6 2.7 2 .5.6-2.6c3.2-.6 6-2.7 7.2-5.7 1.8-4.4.9-9.5.4-10.4zm-7.2 9.2c-.3-1.8.3-3.6 1.6-4.9-.7 2.4-1.2 4.1-1.6 4.9z" />
      </svg>
    ),
    "sarva-karya-siddhi": (
      <svg
        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#4a0d16]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
  };

  const services = t.sacredStrip.services;

  return (
    <section
      className="w-full max-w-full overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fffaf0] to-[#fff8e7] pt-5 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-9 border-b border-[#ebdcb9]/60 relative z-10"
      aria-label="माँ बगलामुखी अनुष्ठान, पूजन एवं सर्व सिद्धि सेवाएँ"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 className="sr-only" itemProp="name">
        {t.sacredStrip.srTitle}
      </h2>

      <div className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
        {/* 8 SACRED CIRCULAR SERVICE BADGES ROW */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-4 xs:gap-y-5 sm:gap-y-6 gap-x-1.5 xs:gap-x-2 sm:gap-x-4 lg:gap-x-3 items-start justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center group cursor-pointer w-full max-w-[110px] sm:max-w-[125px] transition-transform duration-300"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Medallion Badge */}
              <div
                className="w-13 h-13 xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-[66px] lg:h-[66px] rounded-full aspect-square flex items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_25%,#fcf3dc_70%,#f0ddb8_100%)] border-[1.5px] border-[#deb881]/80 shadow-[0_3px_10px_rgba(216,155,24,0.18),inset_0_1px_2px_rgba(255,255,255,0.85)] group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(216,155,24,0.35)] group-hover:border-[#c99542] active:scale-95 transition-all duration-300 select-none flex-shrink-0"
                aria-hidden="true"
              >
                {SERVICE_ICONS[service.id]}
              </div>

              {/* Service Label */}
              <div className="font-serif font-bold text-[#3e1014] text-[0.68rem] xs:text-[0.74rem] sm:text-[0.82rem] text-center leading-[1.2] mt-1.5 sm:mt-2.5 tracking-tight xs:tracking-normal group-hover:text-[#8b0000] transition-colors duration-200 min-h-[34px] xs:min-h-[36px] sm:min-h-[40px] flex flex-col justify-start items-center w-full px-0.5">
                <span className="whitespace-nowrap">{service.title}</span>
                <span className="block text-[0.62rem] xs:text-[0.68rem] sm:text-[0.74rem] text-[#8b0000] font-semibold mt-0.5 whitespace-nowrap">
                  {service.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ORNAMENTAL LOTUS DIVIDER */}
        <div className="mt-7 sm:mt-8 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-md my-1.5">
            <LotusDivider />
          </div>

          <p className="font-serif text-[#8f6a42] text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-[0.28em] text-center uppercase mt-1">
            {t.sacredStrip.locationLine}
          </p>
        </div>
      </div>
    </section>
  );
}
