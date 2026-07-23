import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Banner } from './components/Banner';
import { StatsSection } from './components/StatsSection';
import { FeatureSection } from './components/FeatureSection';
import { Toolbar } from './components/Toolbar';
import { CodeModal } from './components/CodeModal';

export default function App() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // Banner text states initialized to user requested Thai text
  const [heading1, setHeading1] = useState('ระบบให้บริการสืบค้นอาคารชุด');
  const [heading2, setHeading2] = useState('ห้องชุด Condomaps');
  const [subheading, setSubheading] = useState('');

  // UI state
  const [isLightMode, setIsLightMode] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleNavClick = (link: string) => {
    showToast(`ไปยังหน้า: ${link}`);
  };

  const handleButtonClick = (action: string) => {
    showToast(`คลิก: ${action}`);
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    showToast(!isLightMode ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด');
  };

  const handleExportPng = async () => {
    if (!bannerRef.current) return;
    try {
      showToast('กำลังส่งออกรูปภาพ PNG ความละเอียดสูง...');
      const dataUrl = await toPng(bannerRef.current, {
        cacheBust: true,
        quality: 1.0,
        pixelRatio: 2, // crisp high resolution export
        backgroundColor: isLightMode ? '#ffffff' : '#000000'
      });

      const link = document.createElement('a');
      link.download = 'Condomaps-Banner.png';
      link.href = dataUrl;
      link.click();
      showToast('ดาวน์โหลดแบนเนอร์เรียบร้อยแล้ว!');
    } catch (err) {
      console.error('PNG export error:', err);
      showToast('เกิดข้อผิดพลาดในการส่งออกรูปภาพ กรุณาลองใหม่อีกครั้ง');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`min-h-screen relative font-sans overflow-x-hidden selection:bg-neutral-800 selection:text-white ${
      isLightMode ? 'bg-white text-black' : 'bg-black text-white'
    }`}>
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white text-black text-xs font-semibold px-4 py-2 rounded-full shadow-2xl animate-in fade-in slide-in-from-top-2 border border-neutral-300">
          {notification}
        </div>
      )}

      {/* Main Banner Component */}
      <Banner
        bannerRef={bannerRef}
        showGridOverlay={showGrid}
        customHeading1={heading1}
        customHeading2={heading2}
        customSubheading={subheading}
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
        onNavClick={handleNavClick}
        onButtonClick={handleButtonClick}
      />

      {/* Second Section: 3-Card Stats Grid */}
      <StatsSection isLightMode={isLightMode} />

      {/* Third Section: Split Lime Card & Landscape Feature */}
      <FeatureSection isLightMode={isLightMode} onActionClick={handleButtonClick} />

      {/* Toolbar Controls */}
      <Toolbar
        onExportPng={handleExportPng}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showGrid={showGrid}
        onToggleGrid={() => setShowGrid(!showGrid)}
        isEditable={isEditable}
        onToggleEditable={() => setIsEditable(!isEditable)}
        heading1={heading1}
        setHeading1={setHeading1}
        heading2={heading2}
        setHeading2={setHeading2}
        subheading={subheading}
        setSubheading={setSubheading}
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
      />

      {/* Code Export Modal */}
      <CodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        heading1={heading1}
        heading2={heading2}
        subheading={subheading}
      />
    </div>
  );
}
