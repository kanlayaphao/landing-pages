import React from 'react';
import { AncLogo } from './AncLogo';
import { Lightbulb, Moon } from 'lucide-react';
import { imageUrls } from '../config/imageUrls';

interface BannerProps {
  onNavClick?: (link: string) => void;
  onButtonClick?: (action: string) => void;
  bannerRef?: React.RefObject<HTMLDivElement | null>;
  showGridOverlay?: boolean;
  customHeading1?: string;
  customHeading2?: string;
  customSubheading?: string;
  isLightMode?: boolean;
  onToggleTheme?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  onNavClick = (_link: string) => {},
  onButtonClick = (_action: string) => {},
  bannerRef,
  showGridOverlay = false,
  customHeading1 = "ระบบให้บริการสืบค้นอาคารชุด",
  customHeading2 = "ห้องชุด Condomaps",
  customSubheading = "",
  isLightMode = false,
  onToggleTheme = () => {},
}) => {
  return (
    <div
      ref={bannerRef}
      className={`relative w-full min-h-screen font-sans flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 transition-colors duration-300 selection:bg-neutral-800 selection:text-white overflow-hidden ${
        isLightMode ? 'bg-white text-black' : 'bg-black text-white'
      }`}
      style={{
        fontFamily: "'DM Sans', 'Prompt', sans-serif",
        backgroundImage: `url(${imageUrls.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background image overlay keeps the text readable in both themes. */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLightMode ? 'bg-white/70' : 'bg-black/60'
        }`}
        aria-hidden="true"
      />

      {/* Optional Debug Layout Alignment Grid */}
      {showGridOverlay && (
        <div className={`absolute inset-0 pointer-events-none border grid grid-cols-12 gap-4 p-6 sm:p-10 md:p-12 lg:p-16 opacity-20 z-50 ${
          isLightMode ? 'border-black/20 bg-black/5' : 'border-white/20 bg-white/5'
        }`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`h-full border-x ${isLightMode ? 'border-black/20' : 'border-white/20'}`} />
          ))}
        </div>
      )}

      {/* TOP NAVIGATION BAR */}
      <header className="relative z-10 w-full flex items-center justify-between py-2">
        {/* Left: Brand Logo (Condomaps) */}
        <div 
          onClick={() => onNavClick('หน้าหลัก')}
          className="cursor-pointer flex items-center transition-opacity hover:opacity-80"
        >
          <AncLogo isLightMode={isLightMode} className="h-7 sm:h-8 md:h-9" />
        </div>

        {/* Center / Right: Navigation Links & Top Action */}
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-10">
          <nav className={`hidden md:flex items-center space-x-8 lg:space-x-10 text-sm md:text-base font-medium tracking-wide ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            <button 
              onClick={() => onNavClick('หน้าหลัก')} 
              className="hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
            >
              หน้าหลัก
            </button>
            <button 
              onClick={() => onNavClick('แหล่งข้อมูล')} 
              className="hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
            >
              แหล่งข้อมูล
            </button>
            <button 
              onClick={() => onNavClick('แผนที่ 3 มิติ')} 
              className="hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
            >
              แผนที่ 3 มิติ
            </button>
          </nav>

          {/* Lightbulb / Dark Mode Toggle Icon */}
          <button
            onClick={onToggleTheme}
            title={isLightMode ? "สลับเป็นโหมดมืด" : "สลับเป็นโหมดสว่าง"}
            className={`p-2.5 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center ${
              isLightMode 
                ? 'bg-neutral-100 text-amber-600 hover:bg-neutral-200 border border-neutral-200' 
                : 'bg-neutral-900 text-amber-300 hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            {isLightMode ? (
              <Moon className="w-5 h-5 fill-amber-500/20" />
            ) : (
              <Lightbulb className="w-5 h-5 fill-amber-300/30 text-amber-300 animate-pulse" />
            )}
          </button>

          {/* Top Right "เข้าสู่ระบบ" Button */}
          <button
            onClick={() => onButtonClick('เข้าสู่ระบบ')}
            className={`text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer shadow-sm active:scale-95 ${
              isLightMode 
                ? 'bg-black text-white hover:bg-neutral-800' 
                : 'bg-white text-black hover:bg-neutral-200'
            }`}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </header>

      {/* MAIN HERO / BANNER CONTENT - POSITIONED FURTHER DOWN IN BOTTOM-LEFT CORNER */}
      <main className="relative z-10 mt-auto pb-2 sm:pb-4 pt-12 flex flex-col justify-end items-start text-left">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          {/* Main Title - Scaled down */}
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.18] ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            {customHeading1} <br className="hidden sm:inline" />
            {customHeading2}
          </h1>

          {/* Subheading (if any) */}
          {customSubheading && (
            <p className={`text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed ${
              isLightMode ? 'text-neutral-700' : 'text-white/90'
            }`}>
              {customSubheading}
            </p>
          )}

          {/* Bottom Left Action Button */}
          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onButtonClick('เข้าสู่ระบบ ดูแผนที่ 3 มิติ')}
              className={`text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                isLightMode 
                  ? 'bg-black text-white hover:bg-neutral-800' 
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
            >
              เข้าสู่ระบบ ดูแผนที่ 3 มิติ
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER (Mobile nav links only if on small screen, copyright removed) */}
      <footer className="relative z-10 w-full flex md:hidden flex-wrap gap-5 text-sm pt-4 font-medium">
        <div className={`flex flex-wrap gap-5 text-sm font-medium ${
          isLightMode ? 'text-neutral-600' : 'text-white/80'
        }`}>
          <button onClick={() => onNavClick('หน้าหลัก')} className="hover:opacity-100">หน้าหลัก</button>
          <button onClick={() => onNavClick('แหล่งข้อมูล')} className="hover:opacity-100">แหล่งข้อมูล</button>
          <button onClick={() => onNavClick('แผนที่ 3 มิติ')} className="hover:opacity-100">แผนที่ 3 มิติ</button>
        </div>
      </footer>
    </div>
  );
};
