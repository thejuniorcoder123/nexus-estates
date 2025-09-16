"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';

// Define the props, which will be the array of properties to display
interface FeaturedCarouselProps {
  properties: Property[];
}

export default function FeaturedCarousel({ properties }: FeaturedCarouselProps) {
  // The main hook from the library
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Allows the carousel to loop back to the beginning
    align: 'start',
    containScroll: 'trimSnaps',
  });

  // Functions to scroll to the previous or next slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {properties.map(property => (
            <div className="embla__slide" key={property.id}>
              {/* We reuse our existing PropertyCard component! */}
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button className="embla__prev" onClick={scrollPrev}>
        &lt;
      </button>
      <button className="embla__next" onClick={scrollNext}>
        &gt;
      </button>
    </div>
  );
}