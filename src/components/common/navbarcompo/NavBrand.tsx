import Image from "next/image";
import Link from "next/link";
import LotusDivider from "./LotusDivider";

interface NavBrandProps {
  className?: string;
}

/**
 * NavBrand - Server Component for Brand Logo, Titles, and Sacred Lotus Divider.
 * Ensures maximum SEO authority & indexing for Maa Bagalamukhi & Pt. Shubham Sharma.
 */
export default function NavBrand({ className = "" }: NavBrandProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 sm:gap-4.5 group text-decoration-none ${className}`}
      aria-label="Maa Bagalamukhi Upasak Pandit Shubham Sharma - Nalkheda Dham"
      itemProp="url"
    >
      {/* Circular Mata Bagalamukhi Emblem with Gold Halo Ring */}
      <div className="temple-logo-frame w-[54px] h-[54px] sm:w-[62px] sm:h-[62px]">
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
      <div className="flex flex-col items-stretch justify-center">
        <span
          className="font-serif font-bold tracking-[0.03em] sm:tracking-[0.05em] text-[#4a0c16] text-[0.88rem] sm:text-[1.06rem] md:text-[1.14rem] uppercase leading-tight group-hover:text-[#680f1e] transition-colors"
          itemProp="name"
        >
          MAA BAGALAMUKHI UPASAK PANDIT
        </span>
        <div className="flex items-center text-[#c21f27] font-serif font-semibold text-[0.85rem] sm:text-[0.99rem] md:text-[1.06rem] mt-0.5 leading-tight">
          <span itemProp="founder">Shubham Sharma</span>
          <span className="text-[#d89b18] mx-1.5 text-xs font-bold">·</span>
          <span itemProp="addressLocality">Nalkheda Dham</span>
        </div>

        {/* Dynamic Edge-to-Edge Sacred Lotus Divider */}
        <LotusDivider className="mt-1.5" />
      </div>
    </Link>
  );
}
