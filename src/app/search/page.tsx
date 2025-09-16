// src/app/search/page.tsx

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { getProperties, PropertyFilters } from '@/lib/data';

// Server Components in the App Router receive searchParams as a prop
interface SearchPageProps {
  searchParams: PropertyFilters;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // Fetch properties based on the URL query parameters
  const filteredProperties = await getProperties(searchParams);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/" style={{ textDecoration: 'underline' }}>
            &larr; Back to Home
          </Link>
        </div>

        <h1 style={{ marginBottom: '10px' }}>Search Results</h1>
        <p style={{ color: '#696969', marginBottom: '30px' }}>
          Found <strong>{filteredProperties.length}</strong> properties matching your criteria.
        </p>

        {filteredProperties.length > 0 ? (
          <div className="property-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p>No properties found. Try adjusting your search filters.</p>
        )}
      </main>
      <Footer />
    </>
  );
}