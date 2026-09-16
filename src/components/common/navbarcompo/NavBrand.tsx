import Image from "next/image";
import Link from "next/link";
import LotusDivider from "./LotusDivider";

interface NavBrandProps {
  className?: string;
}

/**
 * NavBrand - Server Component for Brand Logo, Titles, and Sacred Lotus Divider.
 * Fully optimized with comfortable vertical padding, larger royal emblem logo,
 * and perfectly scaled typography for mobile and desktop screens.
 */
export default function NavBrand({ className = "" }: NavBrandProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 xs:gap-3 sm:gap-4 md:gap-4.5 group text-decoration-none min-w-0 ${className}`}
      aria-label="Maa Bagalamukhi Upasak Pandit Shubham Sharma - Nalkheda Dham"
      itemProp="url"
    >
      {/* Circular Mata Bagalamukhi Emblem with Gold Halo Ring (Enhanced Mobile & Desktop Size) */}
      <div className="temple-logo-frame w-[48px] h-[48px] xs:w-[54px] xs:h-[54px] sm:w-[60px] sm:h-[60px] md:w-[66px] md:h-[66px] flex-shrink-0 shadow-[0_0_12px_rgba(216,155,24,0.4)]">
        <Image
          src="/logo.png"
          alt="माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा"
          width={90}
          height={90}
          priority
          itemProp="image"
          className="temple-logo-crop-img"
        />
      </div>

      {/* Brand Titles & Full-Width Ornamental Lotus Divider */}
      <div className="flex flex-col items-start justify-center min-w-0 overflow-hidden py-0.5">
        {/* Main Title - Pristine single-line serif typography */}
        <span
          className="font-serif font-bold tracking-[0.015em] xs:tracking-[0.025em] sm:tracking-[0.04em] text-[#4a0c16] text-[0.70rem] xs:text-[0.78rem] sm:text-[0.98rem] md:text-[1.14rem] uppercase leading-tight group-hover:text-[#680f1e] transition-colors whitespace-nowrap truncate max-w-full"
          itemProp="name"
        >
          MAA BAGALAMUKHI UPASAK PANDIT
        </span>

        {/* Subtitle - Guruji & Dham */}
        <div className="flex items-center text-[#c21f27] font-serif font-semibold text-[0.66rem] xs:text-[0.74rem] sm:text-[0.90rem] md:text-[1.04rem] mt-0.5 leading-tight whitespace-nowrap">
          <span itemProp="founder">Shubham Sharma</span>
          <span className="text-[#d89b18] mx-1 xs:mx-1.5 text-xs font-bold">·</span>
          <span itemProp="addressLocality">Nalkheda Dham</span>
        </div>

        {/* Dynamic Edge-to-Edge Sacred Lotus Divider */}
        <LotusDivider className="mt-1 sm:mt-1.5 w-full" />
      </div>
    </Link>
  );
}


