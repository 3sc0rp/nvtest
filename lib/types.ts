export type Language = 'en' | 'ckb';

export interface Translation {
  en: string;
  ckb: string;
}

export interface MenuItem {
  id: string;
  name: Translation;
  description: Translation;
  price: number;
  category: 'traditional' | 'vegan' | 'popular';
  tags: string[];
  popularity: number;
  image: string;
  allergens?: string[];
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
}

export interface MenuFilter {
  category: 'all' | 'traditional' | 'vegan' | 'popular';
  search: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: Translation;
  title: Translation;
}

export interface RestaurantInfo {
  name: Translation;
  description: Translation;
  address: Translation;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    [key: string]: Translation;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface HeroContent {
  title: Translation;
  subtitle: Translation;
  ctaPrimary: Translation;
  ctaSecondary: Translation;
}

export interface AboutContent {
  title: Translation;
  story: Translation;
  mission: Translation;
}

export interface NavItem {
  label: Translation;
  href: string;
}

export interface FooterContent {
  copyright: Translation;
  poweredBy: Translation;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
