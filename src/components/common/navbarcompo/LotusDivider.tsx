import Image from "next/image";

interface LotusDividerProps {
  className?: string;
}

/**
 * LotusDivider - High-End Royal Vedic Ornamental Divider.
 * Full edge-to-edge golden embellishment with terminal diamond end-caps,
 * rich metallic gold gradients, and a radiant center lotus flower.
 * Eliminates side gaps completely and gives an authoritative, divine temple seal.
 */
export default function LotusDivider({ className = "" }: LotusDividerProps) {
  return (
    <div
      className={`w-full flex items-center justify-between gap-0 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Terminal Diamond End-Cap */}
      <span className="w-1.5 h-1.5 rotate-45 bg-[#d89b18] shadow-[0_0_5px_rgba(216,155,24,0.6)] flex-shrink-0" />

      {/* Left Metallic Gold Line (Full span) */}
      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d89b18] via-[#f4d58d] to-[#c88712] shadow-[0_0_6px_rgba(216,155,24,0.4)]" />

      {/* Center Sacred Golden Lotus Flower & Diamond Ornaments */}
      <div className="h-4 sm:h-5 relative flex-shrink-0 px-1 -my-1">
        <Image
          src="/lotus-motif.png"
          alt="Sacred Golden Lotus Motif"
          width={130}
          height={42}
          className="h-full w-auto object-contain drop-shadow-[0_0_6px_rgba(216,155,24,0.5)]"
          priority
        />
      </div>

      {/* Right Metallic Gold Line (Full span) */}
      <div className="h-[2px] flex-1 bg-gradient-to-l from-[#d89b18] via-[#f4d58d] to-[#c88712] shadow-[0_0_6px_rgba(216,155,24,0.4)]" />

      {/* Right Terminal Diamond End-Cap */}
      <span className="w-1.5 h-1.5 rotate-45 bg-[#d89b18] shadow-[0_0_5px_rgba(216,155,24,0.6)] flex-shrink-0" />
    </div>
  );
}
