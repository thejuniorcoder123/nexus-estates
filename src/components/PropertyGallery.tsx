// src/components/PropertyGallery.tsx

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  // Use state to keep track of the currently selected image index
  const [activeIndex, setActiveIndex] = useState(0);

  // If there are no images, render a placeholder
  if (!images || images.length === 0) {
    return <div className="gallery-placeholder">No Images Available</div>;
  }

  return (
    <div className="property-gallery-container">
      {/* Main Image Display */}
      <div className="gallery-main-image">
        <Image
          // Use the activeIndex to select the image from the array
          src={images[activeIndex]}
          alt={`Property image ${activeIndex + 1}`}
          fill
          style={{ objectFit: 'cover', borderRadius: '8px' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // The main image is important, so we give it priority
        />
      </div>

      {/* Thumbnails */}
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-image ${index === activeIndex ? 'active' : ''}`}
            // On click, update the activeIndex to this thumbnail's index
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              style={{ objectFit: 'cover', borderRadius: '4px' }}
              sizes="100px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;