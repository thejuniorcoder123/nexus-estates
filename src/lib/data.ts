// src/lib/data.ts

import { Property } from '@/types';

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    price: '$350,000',
    address: '123 Main St, New York',
    beds: 3,
    baths: 2,
    sqft: 1200,
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    badge: 'Featured',
    status: 'For Sale',
    propertyType: 'Apartment'
  },
  {
    id: 2,
    title: 'Spacious Family House',
    price: '$475,000',
    address: '456 Oak Ave, Los Angeles',
    beds: 4,
    baths: 3,
    sqft: 1800,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1613553474179-4158495454a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    ],
    status: 'For Sale',
    propertyType: 'House'
  },
  {
    id: 3,
    title: 'Cozy Suburban House',
    price: '$275,000',
    address: '789 Pine Rd, Chicago',
    beds: 3,
    baths: 2,
    sqft: 1400,
    images: [
      'https://images.unsplash.com/photo-1605146769289-413cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    status: 'For Sale',
    propertyType: 'House'
  },
   {
    id: 4,
    title: 'Downtown Studio Loft',
    price: '$1,200/mo',
    address: '321 Elm St, New York',
    beds: 1,
    baths: 1,
    sqft: 800,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
    ],
    badge: 'New',
    status: 'For Rent',
    propertyType: 'Apartment'
  },
  {
    id: 5,
    title: 'Modern Chicago Apartment',
    price: '$2,200/mo',
    address: '101 Sky St, Chicago',
    beds: 2,
    baths: 2,
    sqft: 1100,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    badge: 'New',
    status: 'For Rent',
    propertyType: 'Apartment'
  },
  {
    id: 6,
    title: 'Classic LA Home',
    price: '$950,000',
    address: '789 Palm Rd, Los Angeles',
    beds: 5,
    baths: 4,
    sqft: 3200,
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    status: 'For Sale',
    propertyType: 'House'
  },
  {
    id: 7,
    title: 'Sunny Apartment for Rent',
    price: '$1,800/mo',
    address: '555 Sun Blvd, New York',
    beds: 2,
    baths: 1,
    sqft: 950,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
    ],
    status: 'For Rent',
    propertyType: 'Apartment'
  },
  {
    id: 8,
    title: 'Large Commercial Space',
    price: '$5,000/mo',
    address: '1 Commerce Way, Chicago',
    beds: 0,
    baths: 2,
    sqft: 5000,
    images: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format&fit=crop&w=1170&q=80'
    ],
    badge: 'New',
    status: 'For Rent',
    propertyType: 'Commercial'
  },
];

export interface PropertyFilters {
  status?: string;
  location?: string;
  propertyType?: string;
  page?: string;
}

export const getProperties = async (filters: PropertyFilters = {}) => {
  const { status, location, propertyType, page = '1' } = filters;
  const currentPage = parseInt(page, 10);
  const limit = 4;
  const offset = (currentPage - 1) * limit;

  let filteredProperties = properties;

  if (status) {
    const desiredStatus = status === 'Buy' ? 'For Sale' : 'For Rent';
    filteredProperties = filteredProperties.filter(p => p.status === desiredStatus);
  }
  if (location) {
    filteredProperties = filteredProperties.filter(p => p.address.toLowerCase().includes(location.toLowerCase()));
  }
  if (propertyType) {
    filteredProperties = filteredProperties.filter(p => p.propertyType === propertyType);
  }

  const totalProperties = filteredProperties.length;
  const paginatedProperties = filteredProperties.slice(offset, offset + limit);

  return {
    properties: paginatedProperties,
    total: totalProperties,
  };
};

export const getPropertyById = async (id: number): Promise<Property | undefined> => {
  return properties.find(p => p.id === id);
};

// --- THIS IS THE NEW FUNCTION ---
export const getSimilarProperties = async ({ currentPropertyId, propertyType }: { currentPropertyId: number; propertyType: Property['propertyType']; }): Promise<Property[]> => {
  // Find all properties of the same type, excluding the current one
  const similar = properties.filter(p =>
    p.propertyType === propertyType && p.id !== currentPropertyId
  );

  // Return the first 3 matches
  return similar.slice(0, 3);
};