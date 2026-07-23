import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Code2 } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading1: string;
  heading2: string;
  subheading: string;
}

export const CodeModal: React.FC<CodeModalProps> = ({
  isOpen,
  onClose,
  heading1,
  heading2,
  subheading,
}) => {
  const [activeTab, setActiveTab] = useState<'react' | 'html'>('react');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const reactCode = `import React from 'react';

export default function CondomapsBanner() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16">
      {/* Header Navigation */}
      <header className="w-full flex items-center justify-between py-2">
        {/* Brand Logo */}
        <div className="flex items-center text-2xl font-bold tracking-tight">
          Condomaps
        </div>

        {/* Links & Login CTA */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          <nav className="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium">
            <a href="#home" className="hover:opacity-75">หน้าหลัก</a>
            <a href="#resources" className="hover:opacity-75">แหล่งข้อมูล</a>
            <a href="#map3d" className="hover:opacity-75">แผนที่ 3 มิติ</a>
          </nav>

          <button className="bg-white text-black text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 rounded-xl hover:bg-neutral-200 transition-colors">
            เข้าสู่ระบบ
          </button>
        </div>
      </header>

      {/* Main Hero Banner */}
      <main className="mt-auto pb-2 sm:pb-4 pt-12 flex flex-col justify-end items-start text-left">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.18] text-white">
            ${heading1} <br className="hidden sm:inline" />
            ${heading2}
          </h1>

          ${subheading ? `<p className="text-sm sm:text-base md:text-lg font-normal text-white/90 max-w-xl leading-relaxed">
            ${subheading}
          </p>` : ''}

          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
            <button className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
              เข้าสู่ระบบ ดูแผนที่ 3 มิติ
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}`;

  const htmlCode = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Condomaps - ระบบให้บริการสืบค้นอาคารชุด ห้องชุด</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'DM Sans', 'Prompt', sans-serif; background-color: #000000; color: #ffffff; }
  </style>
</head>
<body class="bg-black text-white antialiased">
  <div class="relative w-full min-h-screen bg-black text-white font-sans flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16">
    <!-- Header -->
    <header class="w-full flex items-center justify-between py-2">
      <div class="flex items-center text-2xl font-bold tracking-tight">
        Condomaps
      </div>
      <div class="flex items-center space-x-6 sm:space-x-8">
        <nav class="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium">
          <a href="#" class="hover:opacity-75">หน้าหลัก</a>
          <a href="#" class="hover:opacity-75">แหล่งข้อมูล</a>
          <a href="#" class="hover:opacity-75">แผนที่ 3 มิติ</a>
        </nav>
        <button class="bg-white text-black text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 rounded-xl hover:bg-neutral-200">
          เข้าสู่ระบบ
        </button>
      </div>
    </header>

    <!-- Main -->
    <main class="mt-auto pb-2 sm:pb-4 pt-12 flex flex-col justify-end items-start text-left">
      <div class="max-w-3xl space-y-3 sm:space-y-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.18] text-white">
          ${heading1} <br class="hidden sm:inline" />
          ${heading2}
        </h1>
        ${subheading ? `<p class="text-sm sm:text-base md:text-lg font-normal text-white/90 max-w-xl leading-relaxed">${subheading}</p>` : ''}
        <div class="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
          <button class="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-xl hover:bg-neutral-200">
            เข้าสู่ระบบ ดูแผนที่ 3 มิติ
          </button>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`;

  const codeToDisplay = activeTab === 'react' ? reactCode : htmlCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-neutral-900 border border-neutral-700 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-neutral-800 rounded-xl text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-base">ส่งออกโค้ด Condomaps Banner</h2>
              <p className="text-neutral-400 text-xs">คัดลอกโค้ด HTML / React Tailwind CSS</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs & Actions Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-neutral-950 border-b border-neutral-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('react')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'react'
                  ? 'bg-neutral-800 text-white font-medium border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-blue-400" />
              <span>React JSX</span>
            </button>

            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-neutral-800 text-white font-medium border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Standalone HTML</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>คัดลอกเรียบร้อย!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>คัดลอกโค้ด</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="p-6 overflow-y-auto bg-black text-neutral-300 font-mono text-xs leading-relaxed">
          <pre className="whitespace-pre-wrap select-all">{codeToDisplay}</pre>
        </div>
      </div>
    </div>
  );
};
