// src/components/PropertyCard.tsx

import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { FC } from 'react';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    // Wrap the div with a Link component pointing to the dynamic route
    <Link href={`/property/${property.id}`} className="property-card">
      <div className="property-image">
        <Image
          src={property.image}
          alt={property.title}
          fill={true}
          style={{ objectFit: 'cover' }}
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
  );
};

export default PropertyCard;