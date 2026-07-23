import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

interface FeatureSectionProps {
  isLightMode?: boolean;
  onActionClick?: (action: string) => void;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  isLightMode = false,
  onActionClick = (_action: string) => {} 
}) => {
  return (
    <section 
      className={`relative w-full min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 transition-colors duration-300 font-sans ${
        isLightMode 
          ? 'bg-white text-black' 
          : 'bg-black text-white'
      }`}
      style={{ fontFamily: "'DM Sans', 'Prompt', sans-serif" }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col items-start text-left my-auto">
        {/* Left half container (does not cross past center of screen on desktop) */}
        <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-start text-left">
          {/* Top Icon Badge */}
          <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-6 border transition-colors ${
            isLightMode 
              ? 'bg-black text-white border-black' 
              : 'bg-white text-black border-white'
          }`}>
            <Zap className="w-5 h-5" />
          </div>

          {/* Left-Aligned Heading & Subtitle */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] ${
              isLightMode ? 'text-black' : 'text-white'
            }`}>
              Power up with smart, clean condomaps, because searching properties should feel as good as it looks.
            </h2>
            
            <p className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed opacity-80 ${
              isLightMode ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              ยกระดับการสืบค้นข้อมูลอาคารชุดและห้องชุด 3 มิติ ด้วยระบบบริหารจัดการอสังหาริมทรัพย์อัจฉริยะ
            </p>
          </div>

          {/* Left-Aligned Button */}
          <div className="pt-6 sm:pt-8 flex justify-start">
            <button
              onClick={() => onActionClick('Let\'s see Condomaps')}
              className={`group flex items-center gap-3 pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                isLightMode
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
            >
              <span>Let's see Condomaps</span>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 ${
                isLightMode ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
