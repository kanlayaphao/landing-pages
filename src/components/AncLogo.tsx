import React from 'react';

interface AncLogoProps {
  className?: string;
  isLightMode?: boolean;
}

export const AncLogo: React.FC<AncLogoProps> = ({ className = "h-8", isLightMode = false }) => {
  return (
    <div className={`flex items-center space-x-2 select-none tracking-tight font-bold text-2xl sm:text-3xl ${className} ${isLightMode ? 'text-black' : 'text-white'}`}>
      <span className="font-extrabold tracking-tight">Condomaps</span>
    </div>
  );
};
