// Service type definition
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  stat: string;
  features: string[];
  image: string;
  delay?: number;
}

// Testimonial type definition
export interface Testimonial {
  id: number;
  image: string;
  industry: string;
  company: string;
  quote: string;
  rating: number;
  categories: string[];
  delay?: number;
}

// Blog post type definition
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  tags: string[];
}

// Contact form data type
export interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  businessType: string;
  message: string;
  createdAt?: string;
  status?: 'new' | 'contacted' | 'resolved';
}

// Newsletter subscription type
export interface NewsletterSubscription {
  id?: number;
  email: string;
  subscribedAt?: string;
  active?: boolean;
}

// Booking request type
export interface BookingRequest {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  message?: string;
  preferredDate?: string;
  createdAt?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

// API response type
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
