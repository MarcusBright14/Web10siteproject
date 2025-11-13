import React from 'react';

interface ContentBlockProps {
  label: string;
  children: React.ReactNode;
  height?: string;
}

export function ContentBlock({ label, children, height = 'auto' }: ContentBlockProps) {
  return (
    <div 
      className="border-2 border-dashed border-[#BA0C2F] p-6 bg-white mb-4"
      style={{ minHeight: height }}
    >
      <p className="text-[#BA0C2F] text-xs uppercase tracking-wide mb-3 pb-2 border-b border-[#BA0C2F]">
        {label}
      </p>
      <div className="text-black">
        {children}
      </div>
    </div>
  );
}
