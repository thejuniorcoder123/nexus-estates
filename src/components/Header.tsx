// src/components/Header.tsx

import { FC } from 'react';
import Navbar from './Navbar'; // Import our new Navbar

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;