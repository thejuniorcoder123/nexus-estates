// src/types/index.ts

export interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[]; // CHANGED from 'image: string'
  badge?: string;
  status: 'For Sale' | 'For Rent';
  propertyType: 'Apartment' | 'House' | 'Commercial';
}