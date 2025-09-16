// src/components/SimilarProperties.tsx

import { getSimilarProperties } from '@/lib/data';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';

interface SimilarPropertiesProps {
  currentPropertyId: number;
  propertyType: Property['propertyType'];
}

// This is a Server Component that fetches its own data
export default async function SimilarProperties({
  currentPropertyId,
  propertyType,
}: SimilarPropertiesProps) {
  const similarProperties = await getSimilarProperties({
    currentPropertyId,
    propertyType,
  });

  // If no similar properties are found, don't render anything
  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <div className="similar-properties" style={{ marginTop: '60px', borderTop: '1px solid #E6E9EC', paddingTop: '40px' }}>
      <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Similar Properties</h2>
      <div className="property-grid">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}