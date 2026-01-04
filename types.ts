export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  features: string[];
  price?: string;
}