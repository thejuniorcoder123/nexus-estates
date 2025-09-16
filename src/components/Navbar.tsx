// src/components/Navbar.tsx

"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // IMPORT our new Auth hook

const Navbar = () => {
  const { user, login, logout } = useAuth(); // Get user state and functions
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
            <li><Link href="/favorites">Favorites</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
          <div className="auth-buttons">
            {user ? (
              // If user is logged in
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: 500 }}>Welcome, {user.name}</span>
                <button onClick={logout} className="login-btn">Logout</button>
              </div>
            ) : (
              // If user is logged out
              <>
                <button onClick={login} className="login-btn">Login</button>
                <Link href="#" className="post-property-btn">Post Property</Link>
              </>
            )}
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
      <div className={`nav-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
            <li><Link href="/search?status=Buy" onClick={() => setIsMenuOpen(false)}>Buy</Link></li>
            <li><Link href="/search?status=Rent" onClick={() => setIsMenuOpen(false)}>Rent</Link></li>
            <li><Link href="/favorites" onClick={() => setIsMenuOpen(false)}>Favorites</Link></li>
            <li><Link href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <div className="auth-buttons-mobile">
            {user ? (
              <button onClick={() => { logout(); setIsMenuOpen(false); }} className="login-btn" style={{ fontSize: '1.2rem'}}>Logout</button>
            ) : (
              <>
                <button onClick={() => { login(); setIsMenuOpen(false); }} className="login-btn" style={{ fontSize: '1.2rem'}}>Login</button>
                <Link href="#" className="post-property-btn" onClick={() => setIsMenuOpen(false)}>Post Property</Link>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;