// src/components/Footer.tsx

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        {/* You can add the full footer content from your HTML here if you want */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} Nexus Estates. All rights reserved-Harendra Yadav 
        </div>
      </div>
    </footer>
  );
};

export default Footer;