// src/components/SimilarProperties.tsx

import { getSimilarProperties } from '@/lib/data';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';

interface SimilarPropertiesProps {
  currentPropertyId: number;
  propertyType: Property['propertyType'];
}

// This is an async Server Component that fetches its own data
export default async function SimilarProperties({ currentPropertyId, propertyType }: SimilarPropertiesProps) {
  const similarProperties = await getSimilarProperties({ currentPropertyId, propertyType });

  // If no similar properties are found, don't render anything
  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <div className="similar-properties-section" style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--border)' }}>
      <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Similar Properties</h2>
      <div className="property-grid">
        {similarProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}