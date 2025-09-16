// src/app/favorites/page.tsx

"use client";

import { useFavorites } from '@/context/FavoritesContext';
import { getPropertyById } from '@/lib/data'; // We can reuse this function
import { Property } from '@/types';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function fetches the full details for each favorited property
    const fetchFavoriteProperties = async () => {
      setIsLoading(true);
      // Create an array of promises
      const propertyPromises = favoriteIds.map(id => getPropertyById(id));
      // Wait for all promises to resolve
      const properties = await Promise.all(propertyPromises);
      // Filter out any undefined results (if a property was deleted)
      setFavoriteProperties(properties.filter(p => p !== undefined) as Property[]);
      setIsLoading(false);
    };

    fetchFavoriteProperties();
  }, [favoriteIds]); // Rerun whenever the list of favorite IDs changes

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Favorites', href: '/favorites' },
          ]}
        />
        <h1 style={{ marginBottom: '30px' }}>Your Favorite Properties</h1>
        {isLoading ? (
          <p>Loading your favorites...</p>
        ) : favoriteProperties.length > 0 ? (
          <div className="property-grid">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p>You haven't saved any favorites yet. Click the heart icon on any property to add it here.</p>
        )}
      </main>
      <Footer />
    </>
  );
}