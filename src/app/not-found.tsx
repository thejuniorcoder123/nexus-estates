// src/app/not-found.tsx

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{
          textAlign: 'center',
          paddingTop: '80px',
          paddingBottom: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 200px)'
        }}
      >
        <h1 style={{ fontSize: '6rem', color: '#0D263B', margin: 0 }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#0D263B', marginTop: '10px' }}>Page Not Found</h2>
        {/*
          THE FIX IS HERE: "We're" is now "We&apos;re"
        */}
        <p style={{ color: '#696969', marginTop: '20px', maxWidth: '400px' }}>
          We&apos;re sorry, the page you requested could not be found. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="post-property-btn"
          style={{ marginTop: '30px', textDecoration: 'none' }}
        >
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}