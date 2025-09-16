// src/lib/data.ts

import { Property } from '@/types';

const properties: Property[] = [
  // ... your existing properties array is here, no changes needed to it ...
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    price: '$350,000',
    address: '123 Main St, New York',
    beds: 3,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
    badge: 'Featured',
    status: 'For Sale',
    propertyType: 'Apartment',
  },
  {
    id: 2,
    title: 'Spacious Family House',
    price: '$475,000',
    address: '456 Oak Ave, Los Angeles',
    beds: 4,
    baths: 3,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format&fit=crop&w=1170&q=80',
    status: 'For Sale',
    propertyType: 'House',
  },
  {
    id: 3,
    title: 'Cozy Suburban House',
    price: '$275,000',
    address: '789 Pine Rd, Chicago',
    beds: 3,
    baths: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format&fit=crop&w=1170&q=80',
    status: 'For Sale',
    propertyType: 'House',
  },
   {
    id: 4,
    title: 'Downtown Studio Loft',
    price: '$1,200/mo',
    address: '321 Elm St, New York',
    beds: 1,
    baths: 1,
    sqft: 800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format&fit=crop&w=1153&q=80',
    badge: 'New',
    status: 'For Rent',
    propertyType: 'Apartment',
  },
  {
    id: 5,
    title: 'Modern Chicago Apartment',
    price: '$2,200/mo',
    address: '101 Sky St, Chicago',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format&fit=crop&w=1170&q=80',
    badge: 'New',
    status: 'For Rent',
    propertyType: 'Apartment',
  }
];

export interface PropertyFilters {
  status?: string;
  location?: string;
  propertyType?: string;
}

export const getProperties = async (filters: PropertyFilters = {}): Promise<Property[]> => {
  let filteredProperties = properties;

  if (filters.status) {
    const desiredStatus = filters.status === 'Buy' ? 'For Sale' : 'For Rent';
    filteredProperties = filteredProperties.filter(p => p.status === desiredStatus);
  }
  if (filters.location) {
    filteredProperties = filteredProperties.filter(p => p.address.toLowerCase().includes(filters.location!.toLowerCase()));
  }
  if (filters.propertyType) {
    filteredProperties = filteredProperties.filter(p => p.propertyType === filters.propertyType);
  }

  return filteredProperties;
};

export const getPropertyById = async (id: number): Promise<Property | undefined> => {
  return properties.find(p => p.id === id);
};

// --- NEW FUNCTION ADDED BELOW ---

export const getSimilarProperties = async ({ currentPropertyId, propertyType }: { currentPropertyId: number; propertyType: Property['propertyType']; }): Promise<Property[]> => {
  // Find properties of the same type, but exclude the current one
  const similar = properties.filter(p => p.propertyType === propertyType && p.id !== currentPropertyId);
  // Return the first 3 results
  return similar.slice(0, 3);
};