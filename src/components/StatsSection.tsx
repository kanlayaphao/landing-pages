import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { imageUrls } from '../config/imageUrls';

interface StatItem {
  id: number;
  stat: string;
  label: string;
  description: string;
}

interface FeatureCardItem {
  id: number;
  tag: string;
  time: string;
  title: string;
  image: string;
}

interface StatsSectionProps {
  isLightMode?: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ isLightMode = false }) => {
  const stats: StatItem[] = [
    {
      id: 1,
      stat: "68+",
      label: "จำนวนผู้เข้าใช้งาน",
      description: "จำนวนสถิติผู้ใช้งานที่เข้าถึงและสืบค้นข้อมูลในระบบ Condomaps"
    },
    {
      id: 2,
      stat: "978+",
      label: "ข้อมูลอาคารชุด",
      description: "ข้อมูลอาคารชุดรวบรวมครบถ้วนสำหรับการสืบค้นและวิเคราะห์ข้อมูลเชิงพื้นที่"
    },
    {
      id: 3,
      stat: "$5.4B",
      label: "ข้อมูลห้องชุด (ให้บริการบนระบบฯ)",
      description: "ข้อมูลยูนิตห้องชุดพร้อมระบบสืบค้นแผนที่ 3 มิติความละเอียดสูง"
    }
  ];

  const featureCards: FeatureCardItem[] = [
    {
      id: 1,
      tag: "การแสดงผล",
      time: "",
      title: "ปรับปรุงประสิทธิภาพการใช้งานและการแสดงผล",
      image: imageUrls.cards[0]
    },
    {
      id: 2,
      tag: "มลพิษ PM 2.5",
      time: "",
      title: "แสดงผลข้อมูล PM 2.5 ร่วมกับข้อมูลอาคารชุด",
      image: imageUrls.cards[1]
    },
    {
      id: 3,
      tag: "สัญชาติผู้ถือครอง",
      time: "",
      title: "แสดงผลข้อมูลสัดส่วนสัญชาติผู้ถือครองห้องชุด",
      image: imageUrls.cards[2]
    }
  ];

  return (
    <section 
      className={`relative w-full py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-12 lg:px-16 transition-colors duration-300 font-sans ${
        isLightMode 
          ? 'bg-white text-black' 
          : 'bg-black text-white'
      }`}
      style={{ fontFamily: "'DM Sans', 'Prompt', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* Top: 3-Column Clean Full-Width Stat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between space-y-4 w-full"
            >
              <div className="space-y-2 sm:space-y-3">
                {/* Stat Number */}
                <div className={`text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight ${
                  isLightMode ? 'text-black' : 'text-white'
                }`}>
                  {item.stat}
                </div>

                {/* Sub-label */}
                <h3 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-tight ${
                  isLightMode ? 'text-black' : 'text-white'
                }`}>
                  {item.label}
                </h3>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                  isLightMode ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Minimal Interactive Icon Button */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  aria-label="รายละเอียดเพิ่มเติม"
                  className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                    isLightMode 
                      ? 'text-black hover:text-neutral-600' 
                      : 'text-white hover:text-neutral-300'
                  }`}
                >
                  <span>รายละเอียด</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: 3 Vertical Rectangular Cards matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full pt-4">
          {featureCards.map((card, idx) => (
            <div 
              key={card.id}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                isLightMode 
                  ? 'bg-[#f5f4f0] text-black border border-neutral-200/80' 
                  : 'bg-neutral-900 text-white border border-neutral-800'
              }`}
            >
              {/* Card Top Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-6 relative min-h-[200px]">
                {/* Top thin accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200 dark:bg-neutral-800">
                  <div 
                    className={`h-full ${isLightMode ? 'bg-black' : 'bg-white'}`} 
                    style={{ width: idx === 0 ? '50%' : idx === 1 ? '75%' : '100%' }}
                  />
                </div>

                {/* Card Header (Icon badge + Brand Tag + Time) */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    {/* Hexagon Icon */}
                    <div className={`w-5 h-5 ${isLightMode ? 'bg-black text-white' : 'bg-white text-black'} rounded-sm flex items-center justify-center rotate-45 shadow-sm`}>
                      <div className={`w-2 h-2 ${isLightMode ? 'bg-white' : 'bg-black'} rounded-full`} />
                    </div>
                    <span className="font-semibold text-sm sm:text-base tracking-tight">
                      {card.tag}
                    </span>
                  </div>
                  {card.time && (
                    <span className={`text-xs sm:text-sm ${
                      isLightMode ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      {card.time}
                    </span>
                  )}
                </div>

                {/* Card Main Statement Title */}
                <h4 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
                  {card.title}
                </h4>
              </div>

              {/* Card Bottom Image Container with Hexagon Overlay */}
              <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />

                {/* Center White Hexagon Geometric Outline Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-28 h-28 sm:w-36 sm:h-36 text-white drop-shadow-xl transition-transform duration-500 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <polygon points="50 4, 92 26, 92 74, 50 96, 8 74, 8 26" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

