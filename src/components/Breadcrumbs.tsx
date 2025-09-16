// src/components/Breadcrumbs.tsx

import Link from 'next/link';
import { FC } from 'react';

// Define the shape of a single breadcrumb link
interface Breadcrumb {
  label: string;
  href: string;
}

// The component will accept an array of these links as a prop
interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs-container">
      <ol className="breadcrumbs-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {/* If it's not the last item, it's a link */}
            {index < items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              // The last item is the current page, so it's not a link
              <span aria-current="page">{item.label}</span>
            )}
            {/* Add a separator if it's not the last item */}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">&gt;</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;