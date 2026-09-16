export type GalleryCategory =
  | "all"
  | "darshan"
  | "mandir"
  | "anushthan"
  | "pujan"
  | "ratrideep";

export type CardSpan = "normal" | "wide" | "tall" | "featured";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  aspect: "landscape" | "portrait" | "panoramic" | "square";
  spanType?: CardSpan;
  badge?: string;
  caption: string;
  mantra?: string;
  location?: string;
}

export interface CategoryFilter {
  id: GalleryCategory;
  label: string;
  subLabel: string;
  icon?: string;
  count?: number;
}
