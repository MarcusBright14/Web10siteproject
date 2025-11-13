import React from 'react';
import { siteContent } from '../content/siteContent';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = ['Home', 'About', 'Inventory', 'Contact'];

  return (
    <nav className="border-2 border-dashed border-white p-4 bg-[#BA0C2F]">
      <p className="text-white text-xs uppercase tracking-wide mb-2">{siteContent.site.navigationLabel}</p>
      <div className="flex gap-2 flex-wrap">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`px-6 py-2 border-2 transition-colors ${
              currentPage === page
                ? 'border-white bg-white text-[#BA0C2F]'
                : 'border-white bg-transparent text-white hover:bg-white hover:text-[#BA0C2F]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}
