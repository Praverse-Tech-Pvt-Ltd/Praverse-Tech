
import React from 'react';

export const Logo = ({ className, imgClassName }: { className?: string; imgClassName?: string }) => (
  <div className={`flex items-center ${className ?? ''}`}>
    <img
      src="/Logo%20Design%20for%20Praverse%20Tech%20Pvt.%20Ltd..png"
      alt="Praverse"
      className={imgClassName ?? 'h-8 w-8 object-contain'}
    />
  </div>
);
