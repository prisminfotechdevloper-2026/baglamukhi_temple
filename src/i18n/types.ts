export type Language = "hi" | "en";

export interface NavTranslations {
  home: string;
  solutions: string;
  allSolutions: string;
  services: string;
  gallery: string;
  mandir: string;
  contact: string;
  faq: string;
  brandTitle: string;
  brandName: string;
  brandLocation: string;
  callNow: string;
}

export interface HeroTranslations {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  subtitle: string;
  mantraBoxTitle: string;
  mantraText: string;
  tagStambhan: string;
  tagCourt: string;
  tagBusiness: string;
  tagPeace: string;
  callNow: string;
  callSubtitle: string;
  whatsapp: string;
  whatsappSubtitle: string;
  trustGuarantee: string;
  darshanAlt: string;
}

export interface SacredServiceItem {
  id: string;
  title: string;
  subtitle: string;
  seoDescription: string;
}

export interface SacredStripTranslations {
  srTitle: string;
  locationLine: string;
  services: SacredServiceItem[];
}

export interface ServiceGridItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  cta: string;
}

export interface TrustPillarItem {
  label: string;
  sub: string;
}

export interface ServicesGridTranslations {
  leftBadgeTitle: string;
  leftBadgeSub: string;
  rightBadge: string;
  pillTag: string;
  heading: string;
  subtitle: string;
  badge12: string;
  services: ServiceGridItem[];
  trustPillars: TrustPillarItem[];
}

export interface GurujiBioTranslations {
  peethBadge: string;
  omDevanagari: string;
  titleSalutation: string;
  name: string;
  subtitle: string;
  bioText: string;
  stat1Num: string;
  stat1Label: string;
  stat2Num: string;
  stat2Label: string;
  stat3Num: string;
  stat3Label: string;
  features: string[];
  rotatingWheelText: string;
  circleRibbon: string;
  liveBadge: string;
}

export interface FooterTranslations {
  brandName: string;
  priestName: string;
  description: string;
  trustVedic: string;
  trustOnline: string;
  servicesHeading: string;
  servicesList: string[];
  timingsHeading: string;
  morningAarti: string;
  morningTime: string;
  eveningAarti: string;
  eveningTime: string;
  hawanInfo: string;
  hawanTiming: string;
  locationHeading: string;
  address: string;
  railTransit: string;
  airTransit: string;
  roadTransit: string;
  mantra: string;
  peethTag: string;
  copyright: string;
  linksServices: string;
  linksDarshan: string;
  linksContact: string;
}

export interface FloatingContactTranslations {
  callTooltip: string;
  whatsappTooltip: string;
  whatsappMessage: string;
}

export interface ContactPageTranslations {
  breadcrumbHome: string;
  breadcrumbContact: string;
  activeTiming: string;
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  statLocation: string;
  statLocationVal: string;
  statTimings: string;
  statTimingsVal: string;
  statStation: string;
  statStationVal: string;
  statVidhi: string;
  statVidhiVal: string;
  btnForm: string;
  btnRoutes: string;
  transitQuickTitleTrain: string;
  transitQuickDetailTrain: string;
  transitQuickTitleRoad: string;
  transitQuickDetailRoad: string;
  transitQuickTitleAir: string;
  transitQuickDetailAir: string;
  transitQuickTitleDarshan: string;
  transitQuickDetailDarshan: string;
  cardEmailTitle: string;
  cardEmailBadge: string;
  cardEmailDesc: string;
  cardEmailAction: string;
  cardPhoneTitle: string;
  cardPhoneSubtitle: string;
  cardPhoneBadge: string;
  cardPhoneDesc: string;
  cardPhoneAction: string;
  cardLocationTitle: string;
  cardLocationSubtitle: string;
  cardLocationBadge: string;
  cardLocationDesc: string;
  cardLocationAction: string;
  reachBadge: string;
  reachTitlePart1: string;
  reachTitleHighlight: string;
  reachSubtitle: string;
  trainTitle: string;
  trainSubtitle: string;
  trainTag: string;
  trainDesc: string;
  roadTitle: string;
  roadSubtitle: string;
  roadTag: string;
  roadDesc: string;
  airTitle: string;
  airSubtitle: string;
  airTag: string;
  airDesc: string;
  gpsBadge: string;
  gpsTitle: string;
  gpsSubtitle: string;
  gpsButton: string;
  formBadge: string;
  formTitle: string;
  formSubtitle: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  formSuccessBtn: string;
  labelName: string;
  placeholderName: string;
  labelPhone: string;
  placeholderPhone: string;
  labelCity: string;
  placeholderCity: string;
  labelDate: string;
  labelService: string;
  labelMessage: string;
  placeholderMessage: string;
  btnSubmit: string;
  privacyNotice: string;
  mapTitle: string;
  mapSubtitle: string;
  timingsTitle: string;
  morningAarti: string;
  morningTime: string;
  eveningAarti: string;
  eveningTime: string;
  hawanInfo: string;
  stayInfo: string;
  factsBadge: string;
  factsTitle: string;
  factsHighlight: string;
  factsSubtitle: string;
  factsMantraBanner: string;
  factsMantraSub: string;
}

export interface GalleryPageTranslations {
  breadcrumbHome: string;
  breadcrumbGallery: string;
  slideCounterLabel: string;
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  statDarshan: string;
  statDarshanVal: string;
  statJyoti: string;
  statJyotiVal: string;
  statSangam: string;
  statSangamVal: string;
  statVidhi: string;
  statVidhiVal: string;
  btnExplore: string;
  gurujiBadge: string;
  gurujiTitle: string;
  gurujiHighlight: string;
  gurujiSubtitle: string;
  gurujiViewDetails: string;
  gurujiStat1Num: string;
  gurujiStat1Label: string;
  gurujiStat2Num: string;
  gurujiStat2Label: string;
  gurujiStat3Num: string;
  gurujiStat3Label: string;
  gurujiStat4Num: string;
  gurujiStat4Label: string;
  viewDarshanBtn: string;
  lightboxClose: string;
  lightboxMantraTitle: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  sacredStrip: SacredStripTranslations;
  servicesGrid: ServicesGridTranslations;
  gurujiBio: GurujiBioTranslations;
  footer: FooterTranslations;
  floatingContact: FloatingContactTranslations;
  contact: ContactPageTranslations;
  gallery: GalleryPageTranslations;
}
