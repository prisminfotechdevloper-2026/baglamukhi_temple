export interface NavLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ContactInfo {
  phone: string;
  displayPhone: string;
  label?: string;
  subtitle?: string;
}

export interface NavbarProps {
  links?: NavLinkItem[];
  contact?: ContactInfo;
  className?: string;
}
