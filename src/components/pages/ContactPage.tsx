import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { siteContent } from '../../content/siteContent';

export function ContactPage() {
  return (
    <div>
      <ContentBlock label={siteContent.labels.contact.header}>
        <h1>{siteContent.contact.header.title}</h1>
        <p className="text-sm mt-2">{siteContent.contact.header.subtitle}</p>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ContentBlock label={siteContent.labels.contact.form} height="400px">
          <h2 className="mb-3">{siteContent.contact.form.title}</h2>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-black block mb-1">{siteContent.contact.form.fields.name}</label>
              <div className="border-2 border-black p-2 bg-white">
                <span className="text-xs text-[#BA0C2F]">{siteContent.contact.form.placeholders.name}</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-black block mb-1">{siteContent.contact.form.fields.email}</label>
              <div className="border-2 border-black p-2 bg-white">
                <span className="text-xs text-[#BA0C2F]">{siteContent.contact.form.placeholders.email}</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-black block mb-1">{siteContent.contact.form.fields.subject}</label>
              <div className="border-2 border-black p-2 bg-white">
                <span className="text-xs text-[#BA0C2F]">{siteContent.contact.form.placeholders.subject}</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-black block mb-1">{siteContent.contact.form.fields.message}</label>
              <div className="border-2 border-black p-2 bg-white h-24">
                <span className="text-xs text-[#BA0C2F]">{siteContent.contact.form.placeholders.message}</span>
              </div>
            </div>
            
            <div className="border-2 border-[#BA0C2F] bg-[#BA0C2F] text-white px-6 py-2 inline-block mt-2">
              <span className="text-sm">{siteContent.contact.form.buttonText}</span>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock label={siteContent.labels.contact.info} height="400px">
          <h2 className="mb-3">{siteContent.contact.info.title}</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F] mb-1">
                {siteContent.contact.info.address.label}
              </h3>
              <p>
                {siteContent.contact.info.address.line1}<br />
                {siteContent.contact.info.address.line2}<br />
                {siteContent.contact.info.address.line3}
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F] mb-1">
                {siteContent.contact.info.phone.label}
              </h3>
              <p>{siteContent.contact.info.phone.number}</p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F] mb-1">
                {siteContent.contact.info.email.label}
              </h3>
              <p>{siteContent.contact.info.email.address}</p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wide text-[#BA0C2F] mb-1">
                {siteContent.contact.info.hours.label}
              </h3>
              <p>
                {siteContent.contact.info.hours.line1}<br />
                {siteContent.contact.info.hours.line2}
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>

      <ContentBlock label={siteContent.labels.contact.map} height="250px">
        <div className="flex items-center justify-center h-full text-[#BA0C2F]">
          {siteContent.contact.mapText}
        </div>
      </ContentBlock>
    </div>
  );
}
