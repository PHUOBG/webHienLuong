export type PageRoute = 
  | 'home' 
  | 'gioi-thieu' 
  | 'quy-trinh-nghe' 
  | 'nghe-nhan' 
  | 'di-tich' 
  | 'thu-vien-anh' 
  | 'cac-dong-ho' 
  | 'tin-tuc-chi-tiet' 
  | 'lien-he';

export interface CraftStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  details: string[];
  subCaption?: string;
}

export interface Artisan {
  id: string;
  name: string;
  title: string;
  age: number;
  badge: string;
  experience: string;
  workshop: string;
  bio: string;
  specialty: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  hardness: string;
  description: string;
  specs: {
    dimensions: string;
    weight: string;
    material: string;
  };
}

export interface GalleryItem {
  id: string;
  code: string;
  title: string;
  category: 'quy-trinh' | 'di-tich' | 'nghe-nhan' | 'san-pham' | 'phong-canh';
  categoryLabel: string;
  image: string;
  caption: string;
  meta: string;
  attribution: string;
}

export interface HistoricSiteGalleryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  desc: string;
}

export interface HistoricSite {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  image: string;
  imageCaption: string;
  gallery?: HistoricSiteGalleryItem[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  views: number;
  author: string;
  coverImage: string;
  coverCaption: string;
  summary: string;
  contentParagraphs: string[];
}

export interface TourBookingRequest {
  fullName: string;
  phone: string;
  email: string;
  visitorCount: string;
  visitDate: string;
  experienceType: string;
  message: string;
}
