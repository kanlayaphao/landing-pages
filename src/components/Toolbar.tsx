import React, { useState } from 'react';
import { Download, Code, Grid, Edit3, Check, Copy, Maximize2, Minimize2, Lightbulb, Moon } from 'lucide-react';

interface ToolbarProps {
  onExportPng: () => void;
  onOpenCodeModal: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showGrid: boolean;
  onToggleGrid: () => void;
  isEditable: boolean;
  onToggleEditable: () => void;
  heading1: string;
  setHeading1: (v: string) => void;
  heading2: string;
  setHeading2: (v: string) => void;
  subheading: string;
  setSubheading: (v: string) => void;
  isLightMode?: boolean;
  onToggleTheme?: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onExportPng,
  onOpenCodeModal,
  isFullscreen,
  onToggleFullscreen,
  showGrid,
  onToggleGrid,
  isEditable,
  onToggleEditable,
  heading1,
  setHeading1,
  heading2,
  setHeading2,
  subheading,
  setSubheading,
  isLightMode = false,
  onToggleTheme = () => {},
}) => {
  const [copied, setCopied] = useState(false);

  const handleQuickCopyText = () => {
    const fullText = `Condomaps\n\n${heading1} ${heading2}\n\nNavigation: หน้าหลัก | แหล่งข้อมูล | แผนที่ 3 มิติ`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Editor drawer if editing is active */}
      {isEditable && (
        <div className="bg-neutral-900 border border-neutral-700 text-white p-5 rounded-2xl shadow-2xl w-80 sm:w-96 mb-2 space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-emerald-400" /> แก้ไขข้อความแบนเนอร์ (Editor)
            </h3>
            <button
              onClick={onToggleEditable}
              className="text-xs text-neutral-400 hover:text-white"
            >
              ปิด
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1">หัวข้อบรรทัด 1</label>
              <input
                type="text"
                value={heading1}
                onChange={(e) => setHeading1(e.target.value)}
                className="w-full bg-black border border-neutral-700 rounded-lg px-3 py-2 text-white focus:border-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">หัวข้อบรรทัด 2</label>
              <input
                type="text"
                value={heading2}
                onChange={(e) => setHeading2(e.target.value)}
                className="w-full bg-black border border-neutral-700 rounded-lg px-3 py-2 text-white focus:border-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">คำอธิบายเพิ่มเติม (Subheading)</label>
              <textarea
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
                rows={2}
                placeholder="เว้นว่างได้หากไม่ต้องการแสดง"
                className="w-full bg-black border border-neutral-700 rounded-lg px-3 py-2 text-white focus:border-white focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Control Bar */}
      <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 p-2 rounded-2xl shadow-2xl flex items-center gap-1.5 text-white">
        {/* Export PNG */}
        <button
          onClick={onExportPng}
          title="ส่งออกรูปภาพ PNG"
          className="flex items-center gap-1.5 px-3 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:bg-neutral-200 transition-all cursor-pointer active:scale-95 shadow-md"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export PNG</span>
        </button>

        {/* View / Copy Code */}
        <button
          onClick={onOpenCodeModal}
          title="ดูโค้ด HTML / React"
          className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium rounded-xl transition-all cursor-pointer active:scale-95"
        >
          <Code className="w-3.5 h-3.5 text-indigo-400" />
          <span>Code</span>
        </button>

        {/* Lightbulb Theme Toggle Icon */}
        <button
          onClick={onToggleTheme}
          title={isLightMode ? "สลับเป็นโหมดมืด" : "สลับเป็นโหมดสว่าง (หลอดไฟ)"}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            isLightMode ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-neutral-800 hover:bg-neutral-700 text-amber-300'
          }`}
        >
          {isLightMode ? <Moon className="w-4 h-4" /> : <Lightbulb className="w-4 h-4 fill-amber-300/20" />}
        </button>

        {/* Edit Text Toggle */}
        <button
          onClick={onToggleEditable}
          title="แก้ไขข้อความ"
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            isEditable ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
          }`}
        >
          <Edit3 className="w-4 h-4" />
        </button>

        {/* Alignment Grid Toggle */}
        <button
          onClick={onToggleGrid}
          title="แสดงเส้น Grid จัดตำแหน่ง"
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            showGrid ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
          }`}
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Copy Text Summary */}
        <button
          onClick={handleQuickCopyText}
          title="คัดลอกข้อความ"
          className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'ออกจากเต็มหน้าจอ' : 'แสดงเต็มหน้าจอ'}
          className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
