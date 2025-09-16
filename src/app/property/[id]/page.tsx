// src/app/property/[id]/page.tsx

import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPropertyById } from '@/lib/data';
import Image from 'next/image';
import type { Metadata } from 'next';
import SimilarProperties from '@/components/SimilarProperties'; // 1. IMPORT THE NEW COMPONENT

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

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        <div className="property-gallery" style={{ marginBottom: '30px', position: 'relative', width: '100%', height: '500px' }}>
          <Image
            src={property.image}
            alt={property.title}
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
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
            <div className="agent-card" style={{ backgroundColor: '#F5F7FA', padding: '25px', borderRadius: '8px' }}>
              <h3>Contact Agent</h3>
              <form className="contact-form" style={{ marginTop: '15px' }}>
                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px' }} />
                <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px' }} />
                <textarea placeholder="Message" style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px', minHeight: '100px' }}></textarea>
                <button className="submit-btn" style={{ width: '100%', padding: '12px', backgroundColor: '#0061DF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* 2. ADD THE COMPONENT HERE */}
        <SimilarProperties
          currentPropertyId={property.id}
          propertyType={property.propertyType}
        />
      </main>
      <Footer />
    </>
  );
}