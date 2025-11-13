import React from 'react';
import { siteContent } from '../content/siteContent';

interface WireframeLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
}

export function WireframeLayout({ children, navigation }: WireframeLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-[#BA0C2F] p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-dashed border-white p-4 mb-4 bg-[#BA0C2F]">
            <p className="text-white text-sm uppercase tracking-wide">{siteContent.site.logoText}</p>
            <h1 className="text-white mt-1">{siteContent.site.companyName}</h1>
          </div>
          {navigation}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-[#BA0C2F] p-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-dashed border-white p-4">
            <p className="text-white text-sm uppercase tracking-wide">{siteContent.site.footerLabel}</p>
            <p className="text-white text-sm mt-2">{siteContent.site.footerText}</p>
            <p className="text-white text-xs mt-1">{siteContent.site.footerLinks}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
