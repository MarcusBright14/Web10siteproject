import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { siteContent } from '../../content/siteContent';

export function AboutPage() {
  return (
    <div>
      <ContentBlock label={siteContent.labels.about.header}>
        <h1>{siteContent.about.header.title}</h1>
        <p className="text-sm mt-2">{siteContent.about.header.subtitle}</p>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ContentBlock label={siteContent.labels.about.image} height="250px">
          <div className="flex items-center justify-center h-full text-[#BA0C2F]">
            {siteContent.about.imageText}
          </div>
        </ContentBlock>
        <ContentBlock label={siteContent.labels.about.mission} height="250px">
          <h2 className="mb-2">{siteContent.about.mission.title}</h2>
          <p className="text-sm mb-3">
            {siteContent.about.mission.paragraph1}
          </p>
          <p className="text-sm">
            {siteContent.about.mission.paragraph2}
          </p>
        </ContentBlock>
      </div>

      <ContentBlock label={siteContent.labels.about.history}>
        <h2 className="mb-2">{siteContent.about.history.title}</h2>
        <p className="text-sm mb-3">
          {siteContent.about.history.paragraph1}
        </p>
        <p className="text-sm">
          {siteContent.about.history.paragraph2}
        </p>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContentBlock label={siteContent.labels.about.team1}>
          <div className="text-center">
            <div className="w-20 h-20 border-2 border-[#BA0C2F] rounded-full mx-auto mb-2 bg-white"></div>
            <h3 className="text-sm">{siteContent.about.teamMembers[0].name}</h3>
            <p className="text-xs text-black">{siteContent.about.teamMembers[0].position}</p>
          </div>
        </ContentBlock>
        <ContentBlock label={siteContent.labels.about.team2}>
          <div className="text-center">
            <div className="w-20 h-20 border-2 border-[#BA0C2F] rounded-full mx-auto mb-2 bg-white"></div>
            <h3 className="text-sm">{siteContent.about.teamMembers[1].name}</h3>
            <p className="text-xs text-black">{siteContent.about.teamMembers[1].position}</p>
          </div>
        </ContentBlock>
        <ContentBlock label={siteContent.labels.about.team3}>
          <div className="text-center">
            <div className="w-20 h-20 border-2 border-[#BA0C2F] rounded-full mx-auto mb-2 bg-white"></div>
            <h3 className="text-sm">{siteContent.about.teamMembers[2].name}</h3>
            <p className="text-xs text-black">{siteContent.about.teamMembers[2].position}</p>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
}
