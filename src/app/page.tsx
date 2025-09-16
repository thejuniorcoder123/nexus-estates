// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchWidget from '@/components/SearchWidget';
import { getProperties } from '@/lib/data';
import FeaturedCarousel from '@/components/FeaturedCarousel'; // 1. IMPORT THE NEW CAROUSEL

export default async function Home() {
  // We fetch all properties, and the carousel will display them.
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

          {/* 2. REPLACE the old property-grid with our new Carousel component */}
          <FeaturedCarousel properties={properties} />

        </div>
      </main>
      <Footer />
    </>
  );
}