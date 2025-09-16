// src/app/property/[id]/loading.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Spinner } from '@/components/Spinner'; // 1. Import our new Spinner component

// This file is now a pure Server Component again, which is correct.
export default function PropertyLoading() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '40px' }}>
        {/* Skeleton for the image gallery */}
        <div style={{
          height: '500px',
          width: '100%',
          backgroundColor: '#E6E9EC',
          borderRadius: '8px',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* 2. Use the imported Spinner component */}
          <Spinner />
        </div>

        {/* Skeleton for the header section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ height: '38px', width: '400px', backgroundColor: '#E6E9EC', borderRadius: '4px', marginBottom: '10px' }}></div>
            <div style={{ height: '26px', width: '300px', backgroundColor: '#E6E9EC', borderRadius: '4px' }}></div>
          </div>
          <div style={{ height: '48px', width: '200px', backgroundColor: '#E6E9EC', borderRadius: '4px' }}></div>
        </div>

        {/* Skeleton for the main layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <div className="property-main">
            <div style={{ height: '32px', width: '150px', backgroundColor: '#E6E9EC', borderRadius: '4px', marginBottom: '15px' }}></div>
            <div style={{ height: '20px', width: '100%', backgroundColor: '#E6E9EC', borderRadius: '4px', marginBottom: '10px' }}></div>
            <div style={{ height: '20px', width: '90%', backgroundColor: '#E6E9EC', borderRadius: '4px', marginBottom: '10px' }}></div>
            <div style={{ height: '20px', width: '95%', backgroundColor: '#E6E9EC', borderRadius: '4px' }}></div>
          </div>
          <div className="property-sidebar">
            <div style={{ height: '300px', width: '100%', backgroundColor: '#F5F7FA', borderRadius: '8px' }}></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}