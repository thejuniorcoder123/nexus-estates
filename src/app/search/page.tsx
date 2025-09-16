// src/app/search/page.tsx

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { getProperties, PropertyFilters } from '@/lib/data';
import PaginationControls from '@/components/PaginationControls';
import Breadcrumbs from '@/components/Breadcrumbs'; // 1. IMPORT

interface SearchPageProps {
  searchParams: PropertyFilters;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const page = parseInt(searchParams.page ?? '1', 10);
  const limit = 4;
  const { properties, total } = await getProperties(searchParams);
  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        {/* 2. ADD THE BREADCRUMBS COMPONENT */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Search', href: '/search' },
          ]}
        />

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

        <PaginationControls currentPage={page} totalPages={totalPages} />
      </main>
      <Footer />
    </>
  );
}