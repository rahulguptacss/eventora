export interface MenuItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export interface ButtonData {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  logoImage?: string;
  menu: MenuItem[];
  buttons?: ButtonData[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  logoImage: string;
  logoImageTitle: string;
  desc: string;
  footerColumns: FooterColumn[];
  footerContact: {
    location: string;
    email: string;
    phone: string;
    website: string;
  };
  footerLegalLinks: { label: string; href: string }[];
  newsletter?: {
    title: string;
    desc: string;
    placeholder: string;
  };
  copyrightText: string;
  followUsTitle?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
  href?: string;
}

export interface ServiceData {
  id: number;
  title: string;
  desc: string;
  img?: string;
  image?: string;
  subtitle?: string;
  shortDesc?: string;
  overviewSubtitle?: string;
  overviewTitle?: string;
  overviewDesc?: string[];
  features?: any[];
  sidebar?: any;
  featuredImage?: string;
  icon?: string;
}

export interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  biography?: string;
  description?: string;
  socials?: any;
  details?: { icon: string; label: string; value: string }[];
  coreSkills?: any[];
  experienceJourney?: { years: string; role: string; description: string }[];
}

export interface TestimonialData {
  id: number | string;
  name: string;
  role?: string;
  location?: string;
  quote: string;
  image: string;
  rating?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogSection {
  title?: string;
  desc?: string;
  image?: string;
  content?: string | string[];
}

export interface BlogData {
  id?: number | string;
  title: string;
  desc?: string;
  description?: string;
  date: string;
  image: string;
  category?: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  contentIntro?: string;
  sections?: BlogSection[];
  content?: string;
}

export interface AwardData {
  id: number | string;
  title: string;
  year: string;
  organization?: string;
  description?: string;
  image?: string;
}

export interface JobData {
  id?: number | string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience?: string;
  salary?: string;
  description?: string;
  desc?: string;
  requirements?: string[];
  responsibilities?: string[];
  icon?: string;
  bgClass?: string;
  textClass?: string;
  isNew?: boolean;
}

export interface CoreValue {
  id?: number | string;
  title: string;
  description?: string;
  desc?: string;
  icon?: string;
}

export interface GalleryItem {
  id: number | string;
  image?: string;
  title?: string;
  category?: string;
  src: string;
  videoSrc?: string;
}

export interface PartnerData {
  id?: number | string;
  name: string;
  logo?: string;
  html?: string;
}

export interface SitemapLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface SitemapCategory {
  category: string;
  color: string;
  colSpan: string;
  innerCols: string;
  columns: (SitemapLink[] | string)[];
}

export interface StatData {
  icon?: any;
  value: number;
  suffix: string;
  label: string;
}

export interface WhyChooseUsCard {
  title: string;
  desc: string;
  icon: string;
}

export interface PolicyData {
  title: string;
  lastUpdated: string;
  desc?: string;
  sections: { title: string; content: string[] }[];
}

export interface FormFieldData {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  icon?: string;
}

export interface PageBreadcrumbData {
  breadcrumbTitle: string;
  metaTitle?: string;
  metaDesc?: string;
}

export interface EventData {
  id: number | string;
  title: string;
  category: string;
  image: string;
  about: string[];
  features: string[];
  date?: string;
  location?: string;
  seats?: string | number;
  schedule: { time: string; title: string; desc: string }[];
  details: {
    date: string;
    time: string;
    location: string;
    organizer: string;
    eventType: string;
  };
  contact: {
    text: string;
    phone: string;
    email: string;
  };
}

export interface AboutFeature {
  title: string;
  icon: string;
  desc?: string;
}

export interface CareerBenefit {
  icon: string;
  text: string;
}
