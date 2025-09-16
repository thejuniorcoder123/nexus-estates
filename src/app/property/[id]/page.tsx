// src/app/property/[id]/page.tsx

import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPropertyById } from '@/lib/data';
import type { Metadata } from 'next';
import SimilarProperties from '@/components/SimilarProperties';
import ContactAgentForm from '@/components/ContactAgentForm';
import PropertyGallery from '@/components/PropertyGallery';
import Breadcrumbs from '@/components/Breadcrumbs'; // <-- NEW IMPORT

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PropertyDetailsPageProps): Promise<Metadata> {
  const propertyId = parseInt(params.id, 10);
  const property = await getPropertyById(propertyId);

  if (!property) {
    return { title: 'Property Not Found' };
  }
  return {
    title: property.title,
    description: `Details for ${property.title}. A beautiful ${property.propertyType.toLowerCase()} with ${property.beds} bedrooms located at ${property.address}.`,
  };
}

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const propertyId = parseInt(params.id, 10);
  const property = await getPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  // A helper function to truncate long property titles for the breadcrumb
  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        {/* --- NEW BREADCRUMBS COMPONENT ADDED HERE --- */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Properties', href: '/search' }, // This links back to the main search results page
            {
              label: truncate(property.title, 30), // The current page, not a link
              href: `/property/${property.id}`,
            },
          ]}
        />

        <div style={{ marginBottom: '30px' }}>
          <PropertyGallery images={property.images} />
        </div>

        <div className="property-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>{property.title}</h1>
            <p className="property-address" style={{ fontSize: '1.1rem' }}>📍 {property.address}</p>
          </div>
          <div className="property-price" style={{ fontSize: '2.5rem' }}>
            {property.price}
          </div>
        </div>

        <div className="property-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <div className="property-main">
            <h2>Overview</h2>
            <p>A beautiful {property.propertyType.toLowerCase()} located in a prime area. This property features {property.beds} bedrooms and {property.baths} bathrooms across {property.sqft} square feet of living space. Perfect for anyone looking for comfort and convenience.</p>

            <h2 style={{ marginTop: '30px' }}>Key Specifications</h2>
            <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
              <div className="spec-item"><strong>Type:</strong> {property.propertyType}</div>
              <div className="spec-item"><strong>Area:</strong> {property.sqft} sq.ft</div>
              <div className="spec-item"><strong>Bedrooms:</strong> {property.beds}</div>
              <div className="spec-item"><strong>Bathrooms:</strong> {property.baths}</div>
              <div className="spec-item"><strong>Status:</strong> {property.status}</div>
            </div>
          </div>

          <div className="property-sidebar">
            <ContactAgentForm />
          </div>
        </div>

        <SimilarProperties
          currentPropertyId={property.id}
          propertyType={property.propertyType}
        />
      </main>
      <Footer />
    </>
  );
}