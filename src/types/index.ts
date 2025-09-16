// src/types/index.ts

export interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  badge?: string;
  status: 'For Sale' | 'For Rent'; // New: To filter Buy/Rent
  propertyType: 'Apartment' | 'House' | 'Commercial'; // New: To filter by type
}