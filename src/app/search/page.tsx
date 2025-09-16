// src/app/search/page.tsx

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { getProperties, PropertyFilters } from '@/lib/data';
import PaginationControls from '@/components/PaginationControls';

interface SearchPageProps {
  searchParams: PropertyFilters;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // Parse the page number from the URL search parameters, defaulting to 1
  const page = parseInt(searchParams.page ?? '1', 10);
  const limit = 4; // This must match the limit set in the getProperties function

  // Call our updated data function, which now returns an object
  const { properties, total } = await getProperties(searchParams);

  // Calculate the total number of pages needed
  const totalPages = Math.ceil(total / limit);

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
          Found <strong>{total}</strong> properties matching your criteria.
        </p>

        {properties.length > 0 ? (
          <div className="property-grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p>No properties found on this page. Try adjusting your search filters.</p>
        )}

        {/* Render the pagination controls, passing the necessary props */}
        <PaginationControls currentPage={page} totalPages={totalPages} />
      </main>
      <Footer />
    </>
  );
}