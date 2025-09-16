// src/context/FavoritesContext.tsx

"use client"; // <-- THIS IS THE FIX. Add this directive to the very top.

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the shape of the context's value
interface FavoritesContextType {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorited: (id: number) => boolean;
}

// Create the context with a default undefined value
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Create the provider component
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // On initial load, get favorites from localStorage
  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem('nexus_favorites');
      if (storedFavorites) {
        setFavoriteIds(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  // When favorites change, save them to localStorage
  useEffect(() => {
    localStorage.setItem('nexus_favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prevIds => {
      if (prevIds.includes(id)) {
        // Remove from favorites
        return prevIds.filter(favId => favId !== id);
      } else {
        // Add to favorites
        return [...prevIds, id];
      }
    });
  };

  const isFavorited = (id: number) => {
    return favoriteIds.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};