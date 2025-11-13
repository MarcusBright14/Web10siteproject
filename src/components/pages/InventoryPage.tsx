import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { siteContent } from '../../content/siteContent';

export function InventoryPage() {
  return (
    <div>
      <ContentBlock label={siteContent.labels.inventory.header}>
        <h1>{siteContent.inventory.header.title}</h1>
        <p className="text-sm mt-2">{siteContent.inventory.header.subtitle}</p>
      </ContentBlock>

      <ContentBlock label={siteContent.labels.inventory.introduction}>
        <p className="text-sm">
          {siteContent.inventory.introduction}
        </p>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {siteContent.inventory.books.map((book, index) => (
          <ContentBlock 
            key={index} 
            label={siteContent.labels.inventory[`book${index + 1}` as keyof typeof siteContent.labels.inventory] as string} 
            height="220px"
          >
            <div className="space-y-2">
              <div>
                <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F]">
                  {siteContent.labels.inventory.bookTitleLabel}
                </h3>
                <h2 className="mb-1">{book.title}</h2>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F]">
                  {siteContent.labels.inventory.genreLabel}
                </h3>
                <p className="text-sm">{book.genre}</p>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F]">
                  {siteContent.labels.inventory.priceLabel}
                </h3>
                <p className="text-sm">{book.price}</p>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F]">
                  {siteContent.labels.inventory.descriptionLabel}
                </h3>
                <p className="text-xs text-black">
                  {book.description}
                </p>
              </div>
            </div>
          </ContentBlock>
        ))}
      </div>

      <ContentBlock label={siteContent.labels.inventory.additionalInfo}>
        <h2 className="mb-2">{siteContent.inventory.additionalInfo.title}</h2>
        <p className="text-sm">
          {siteContent.inventory.additionalInfo.description}
        </p>
      </ContentBlock>
    </div>
  );
}
