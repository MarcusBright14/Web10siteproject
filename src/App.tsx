import React, { useState } from 'react';
import { WireframeLayout } from './components/WireframeLayout';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { InventoryPage } from './components/pages/InventoryPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Inventory':
        return <InventoryPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <WireframeLayout
      navigation={
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      }
    >
      {renderPage()}
    </WireframeLayout>
  );
}
