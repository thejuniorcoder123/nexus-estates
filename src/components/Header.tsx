// src/components/Header.tsx

import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <div className="container header-container">
        <Link href="/" className="logo">
          Nexus Estates
        </Link>
        <ul className="nav-menu">
          <li><Link href="#">Buy</Link></li>
          <li><Link href="#">Rent</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link href="#" className="login-btn">Login</Link>
          <Link href="#" className="post-property-btn">Post Property</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;