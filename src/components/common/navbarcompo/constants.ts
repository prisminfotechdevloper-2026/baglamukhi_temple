import { NavLinkItem, ContactInfo } from "./types";

export const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Mandir", href: "/#mandir" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const DEFAULT_CONTACT: ContactInfo = {
  phone: "+919340605235",
  displayPhone: "+91 93406 05235",
  label: "पूजा, अनुष्ठान एवं दर्शन सम्बन्धी जानकारी हेतु",
  subtitle: "नलखेड़ा धाम • आगर मालवा (म.प्र.)",
};
