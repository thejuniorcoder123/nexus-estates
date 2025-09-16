// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import SearchWidget from '@/components/SearchWidget';
import { getProperties } from '@/lib/data';

export default async function Home() {
  // --- THIS IS THE FIX ---
  // We now expect an object, so we destructure `properties` from the result.
  // We don't need the 'total' count here, so we can ignore it.
  const { properties } = await getProperties();

  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <div className="container">
            <h1>Find Your Dream Home</h1>
            <p>Discover the perfect property from thousands of listings, updated daily</p>
            <SearchWidget />
          </div>
        </div>

        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="property-grid">
            {/*
              This line now works correctly because `properties` is the array again.
            */}
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}