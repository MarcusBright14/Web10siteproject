import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { siteContent } from '../../content/siteContent';

export function HomePage() {
  return (
    <div>
      <ContentBlock label={siteContent.labels.home.hero} height="200px">
        <h2 className="mb-2">{siteContent.home.hero.title}</h2>
        <p className="text-sm">
          {siteContent.home.hero.description}
        </p>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <ContentBlock label={siteContent.labels.home.feature1}>
          <h3 className="text-sm mb-1">{siteContent.home.features[0].title}</h3>
          <p className="text-xs">{siteContent.home.features[0].description}</p>
        </ContentBlock>
        <ContentBlock label={siteContent.labels.home.feature2}>
          <h3 className="text-sm mb-1">{siteContent.home.features[1].title}</h3>
          <p className="text-xs">{siteContent.home.features[1].description}</p>
        </ContentBlock>
        <ContentBlock label={siteContent.labels.home.feature3}>
          <h3 className="text-sm mb-1">{siteContent.home.features[2].title}</h3>
          <p className="text-xs">{siteContent.home.features[2].description}</p>
        </ContentBlock>
      </div>

      <ContentBlock label={siteContent.labels.home.introduction} height="150px">
        <h2 className="mb-2">{siteContent.home.introduction.title}</h2>
        <p className="text-sm">
          {siteContent.home.introduction.description}
        </p>
      </ContentBlock>

      <ContentBlock label={siteContent.labels.home.callToAction}>
        <h2 className="mb-2">{siteContent.home.callToAction.title}</h2>
        <p className="text-sm mb-3">
          {siteContent.home.callToAction.description}
        </p>
        <div className="border-2 border-[#BA0C2F] bg-[#BA0C2F] text-white px-6 py-2 inline-block">
          <span className="text-sm">{siteContent.home.callToAction.buttonText}</span>
        </div>
      </ContentBlock>
    </div>
  );
}
