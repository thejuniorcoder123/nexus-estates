// src/components/Navbar.tsx

"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // State to manage whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          Nexus Estates
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="nav-menu-desktop">
          <ul className="nav-links">
            <li><Link href="/search?status=Buy">Buy</Link></li>
            <li><Link href="/search?status=Rent">Rent</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link href="#" className="login-btn">Login</Link>
            <Link href="#" className="post-property-btn">Post Property</Link>
          </div>
        </div>

        {/* --- Hamburger Icon for Mobile --- */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {/* --- Mobile Menu Panel --- */}
      {/* This menu slides in or appears when the hamburger is clicked */}
      <div className={`nav-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
          <li><Link href="/search?status=Buy" onClick={() => setIsMenuOpen(false)}>Buy</Link></li>
          <li><Link href="/search?status=Rent" onClick={() => setIsMenuOpen(false)}>Rent</Link></li>
          <li><Link href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <div className="auth-buttons-mobile">
          <Link href="#" className="login-btn" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link href="#" className="post-property-btn" onClick={() => setIsMenuOpen(false)}>Post Property</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;