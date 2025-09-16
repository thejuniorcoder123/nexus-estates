// src/components/PropertyCard.tsx

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FC, MouseEvent } from 'react';
import { Property } from '@/types';
import { useFavorites } from '@/context/FavoritesContext';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const { isFavorited, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property.id);
  };

  // Ensure property.images is an array and has at least one image
  const displayImage = (property.images && property.images.length > 0)
    ? property.images[0]
    : 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'; // A fallback image

  return (
    <div className="property-card-container">
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorited(property.id) ? 'var(--accent)' : 'rgba(255,255,255,0.8)'} stroke="var(--secondary)" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21.818l-7.682-7.136a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>

      <Link href={`/property/${property.id}`} className="property-card">
        <div className="property-image">
          <Image
            src={displayImage} // <-- THE FIX IS HERE
            alt={property.title}
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {property.badge && <div className="property-badge">{property.badge}</div>}
        </div>
        <div className="property-content">
          <div className="property-price">{property.price}</div>
          <h3 className="property-title">{property.title}</h3>
          <div className="property-address">
            <i style={{ marginRight: '5px' }}>📍</i> {property.address}
          </div>
          <div className="property-features">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.sqft} sq.ft</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;