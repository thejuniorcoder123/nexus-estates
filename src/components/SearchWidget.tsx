// src/components/SearchWidget.tsx

"use client";

import { useState, FC } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const SearchWidget: FC = () => {
  const router = useRouter(); // Initialize the router

  const [activeTab, setActiveTab] = useState('Buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  // We'll skip priceRange for now as the filtering logic isn't added yet

  const handleSearch = () => {
    // Create a URL query string from the state
    const params = new URLSearchParams();
    params.append('status', activeTab);
    if (location) params.append('location', location);
    if (propertyType) params.append('propertyType', propertyType);

    // Navigate to the search page with the query parameters
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="search-widget">
      <div className="search-tabs">
        <div
          className={`search-tab ${activeTab === 'Buy' ? 'active' : ''}`}
          onClick={() => setActiveTab('Buy')}
        >
          Buy
        </div>
        <div
          className={`search-tab ${activeTab === 'Rent' ? 'active' : ''}`}
          onClick={() => setActiveTab('Rent')}
        >
          Rent
        </div>
      </div>
      <div className="search-fields">
        <div className="search-field">
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
        <div className="search-field">
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">All Property Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div className="search-field">
          {/* Price Range is decorative for now */}
          <select disabled>
            <option>Price Range</option>
          </select>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;