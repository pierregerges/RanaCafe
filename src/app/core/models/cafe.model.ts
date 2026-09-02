export interface DayHours {
  day: string;
  hours: string;
}

export interface MenuItem {
  name: string;
  description: string;
  category: 'coffee' | 'pastry' | 'cake' | 'sweet';
  emoji: string;
}

export interface Review {
  name: string;
  rating: number; // 1-5
  date: string;
  source: 'Yelp' | 'Google' | 'Facebook' | 'Restaurantji';
  quote: string;
}

export interface RatingSource {
  source: string;
  rating: number;
  count: number;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  neighborhood: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  altPhone: string;
  email: string;
  facebookUrl: string;
  mapsUrl: string;
  hours: DayHours[];
  story: string;
}
