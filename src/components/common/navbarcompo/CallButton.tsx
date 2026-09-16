"use client";

import { Phone } from "lucide-react";
import { ContactInfo } from "./types";

interface CallButtonProps {
  contact: ContactInfo;
  className?: string;
  onClick?: () => void;
}

/**
 * CallButton - Client Component for Direct Phone CTA.
 * Handles click interactions, direct tel dialing, and dynamic props.
 */
export default function CallButton({
  contact,
  className = "",
  onClick,
}: CallButtonProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <a
      href={`tel:${contact.phone}`}
      onClick={handleClick}
      className={`temple-call-btn text-[0.92rem] lg:text-[0.98rem] py-2 px-4.5 lg:py-2.5 lg:px-6 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      aria-label={`Call Pandit Shubham Sharma at ${contact.displayPhone}`}
      itemProp="telephone"
    >
      <Phone className="w-4 h-4 fill-white flex-shrink-0" />
      <span className="font-bold tracking-wide">{contact.displayPhone}</span>
    </a>
  );
}
