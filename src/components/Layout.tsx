import React, { useState } from 'react';
import { Menu, X, ChevronDown, LogIn, LogOut, Globe, ShieldAlert, Award, ArrowUp } from 'lucide-react';
import { Lang, User } from '../types';
import { DICTIONARY } from '../data/initialData';

interface LayoutProps {
  children: React.ReactNode;
  lang: Lang;
  onLanguageToggle: () => void;
  activeUser: User | null;
  onLogout: () => void;
  onOpenLogin: () => void;
  activeView: string;
  onNavigate: (viewId: string, itemSubId?: string) => void;
}

export default function Layout({
  children,
  lang,
  onLanguageToggle,
  activeUser,
  onLogout,
  onOpenLogin,
  activeView,
  onNavigate,
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dict = DICTIONARY[lang];

  // Primary navigation arrays
  const navItems = [
    { id: 'beranda', label: dict.menuHome },
    { id: 'profil', label: dict.menuProfile },
    { id: 'berita', label: dict.menuNews },
    { 
      id: 'kompetensi', 
      label: dict.menuPrograms,
      sub: [
        { id: 'tkr', label: 'TKR (Teknik Kendaraan Ringan)' },
        { id: 'tab', label: 'TAB (Teknik Alat Berat)' },
        { id: 'tsm', label: 'TSM (Teknik Sepeda Motor)' },
        { id: 'tkj', label: 'TKJ (Teknik Komputer Jaringan)' },
      ]
    },
    { 
      id: 'ekstrakurikuler', 
      label: dict.menuEkskul,
      sub: [
        { id: 'marching_band', label: 'Marching Band' },
        { id: 'hizbul_wathan', label: 'Hizbul Wathan' },
        { id: 'tapak_suci', label: 'Tapak Suci' },
        { id: 'bola_voli', label: 'Bola Voli' },
        { id: 'futsal', label: 'Futsal' },
      ]
    },
    { id: 'spmb', label: 'SPMB' },
    { 
      id: 'bkk', 
      label: 'BKK & Alumni',
      sub: [
        { id: 'vacancies', label: dict.bkkVacancies },
        { id: 'tracer', label: 'Tracer Study' },
        { id: 'partners', label: dict.bkkPartners },
      ]
    },
    { id: 'tefa', label: 'Teaching Factory' },
    { id: 'tentang-kami', label: dict.menuAbout },
  ];

  const handleDropdownClick = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleSubItemClick = (parentId: string, subId: string) => {
    onNavigate(parentId, subId);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleParentItemClick = (itemId: string) => {
    onNavigate(itemId);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Scroll to top assist
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="school-app-layout" className="min-h-screen bg-neutral-50/70 text-neutral-800 flex flex-col font-sans relative selection:bg-blue-800 selection:text-white">
      
      {/* Upper tiny micro-header bar (Brandings / Slogan fast check speed) */}
      <div id="school-micro-bar" className="bg-blue-900 text-blue-100 py-2.5 px-4 md:px-6 flex justify-between items-center text-[10px] md:text-xs border-b border-blue-800/45 relative z-40 bg-blue-950 text-blue-100">
        <div className="flex items-center gap-2.5 font-sans font-medium">
          <span className="font-bold tracking-widest text-amber-400">FASTA BIQUL KHAIRAT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 hidden md:inline" />
          <span className="opacity-90 hidden md:inline">Randublatung, Blora, Jawa Tengah</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span>{lang === 'id' ? 'Kontak Sekolah: (0296) 810173' : 'Tel: (0296) 810173'}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span>Accreditation: A</span>
        </div>
      </div>

      {/* Main Header Sticky Bar */}
      <header id="main-navigation-header" className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 z-30 py-3.5 px-4 md:px-6 shadow-xs leading-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo brand combinations */}
          <div 
            id="brand-logo-trigger"
            onClick={() => handleParentItemClick('beranda')}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* Minimalist Sunburst Logo */}
            <div className="bg-blue-800 p-2 rounded-xl text-white shadow-xs">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-amber-400">
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.1" />
                <path d="M50 8 L50 20 M50 80 L50 92 M8 50 L20 50 M80 50 L92 50 M50 14 C30 14 14 30 14 50 C14 70 30 86 50 86 C70 86 86 70 86 50 C86 30 70 14 50 14 Z" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="10" fill="#005b96" />
              </svg>
            </div>
            <div>
              <h1 className="font-sans font-extrabold text-neutral-900 text-sm md:text-base leading-tight">SMK MUHAMMADIYAH</h1>
              <p className="text-[10px] md:text-[11px] font-bold text-blue-800 leading-none">RANDUBLATUNG</p>
            </div>
          </div>

          {/* Desktop Navigation list menu */}
          <nav id="desktop-links" className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-neutral-600">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.sub ? (
                  <div>
                    <button
                      onClick={(e) => handleDropdownClick(item.id, e)}
                      className={`px-3 py-2 rounded-xl flex items-center gap-1 hover:bg-neutral-50 hover:text-neutral-900 transition-all ${activeView === item.id ? 'bg-blue-50 text-blue-800' : ''}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`stroke-[2.5] transition-transform duration-250 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Submenu Dropdown Container */}
                    {activeDropdown === item.id && (
                      <div className="absolute top-10 left-0 bg-white border border-neutral-150 p-2 rounded-2xl shadow-xl w-60 flex flex-col gap-1 z-55 animate-fade-in">
                        {item.sub.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleSubItemClick(item.id, subItem.id)}
                            className="px-3.5 py-2 hover:bg-neutral-50 hover:text-blue-800 rounded-lg text-left text-neutral-600 transition-colors cursor-pointer text-xs font-bold block"
                          >
                            • {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleParentItemClick(item.id)}
                    className={`px-3 py-2 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-all ${activeView === item.id ? 'bg-blue-50 text-blue-800' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Actions & Buttons section */}
          <div className="flex items-center gap-2.5">
            {/* Language Switch */}
            <button
              id="language-switcher-btn"
              onClick={onLanguageToggle}
              className="p-2 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-neutral-600 hover:text-neutral-950 transition-all flex items-center gap-1 cursor-pointer"
              title={dict.language}
            >
              <Globe size={15} />
              <span className="text-[10px] font-bold font-mono tracking-wider uppercase block">{lang}</span>
            </button>

            {/* Admin Console indicator if logged */}
            {activeUser && (
              <button
                id="admin-dashboard-pointer"
                onClick={() => handleParentItemClick('admin')}
                className={`p-2 hidden md:flex items-center gap-1 border border-amber-300 bg-amber-50 rounded-xl text-amber-900 hover:bg-amber-100 transition-all text-xs font-bold ${activeView === 'admin' ? 'ring-2 ring-amber-400' : ''}`}
              >
                <ShieldAlert size={15} />
                <span>Dashboard</span>
              </button>
            )}

            {/* Login / Logout button */}
            {activeUser ? (
              <button
                id="logout-action-btn"
                onClick={onLogout}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-98"
              >
                <LogOut size={14} />
                <span className="hidden md:inline">{dict.logout}</span>
              </button>
            ) : (
              <button
                id="login-action-btn"
                onClick={onOpenLogin}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-905 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-blue-800/10 active:scale-98 cursor-pointer transition-all"
              >
                <LogIn size={15} />
                <span>{dict.menuLogin.split(' ')[0]}</span>
              </button>
            )}

            {/* Hamburger trigger on Mobile */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 border border-neutral-200"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu Navigation list */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="xl:hidden bg-white border-b border-neutral-200 py-4 px-4 space-y-4 shadow-lg absolute top-20 left-0 right-0 z-50 animate-fade-in text-xs font-bold leading-normal">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-neutral-100 pb-1.5 last:border-none">
                {item.sub ? (
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{item.label}</span>
                    <div className="grid grid-cols-2 gap-2 pl-2">
                      {item.sub.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick(item.id, subItem.id)}
                          className={`text-left text-neutral-700 hover:text-blue-800 p-1.5 rounded-lg text-xs leading-none ${activeView === item.id ? 'bg-blue-50/50' : ''}`}
                        >
                          • {subItem.label.split(' (')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleParentItemClick(item.id)}
                    className="w-full text-left text-neutral-800 font-sans font-bold py-1 px-1 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-neutral-300">→</span>
                  </button>
                )}
              </div>
            ))}

            {activeUser && (
              <button
                onClick={() => handleParentItemClick('admin')}
                className="w-full p-2.5 bg-amber-50 text-amber-950 font-bold border border-amber-300 rounded-xl flex items-center justify-center gap-1"
              >
                ⚠️ Buka Dashboard Admin
              </button>
            )}
          </div>
        </div>
      )}

      {/* Page Body Wrapper */}
      <main id="app-content-body" className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        {children}
      </main>

      {/* Back to top assist */}
      <button 
        id="scroll-top-btn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-blue-800 text-white rounded-full shadow-lg border border-blue-700 hover:bg-blue-900 transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 z-40 hidden md:flex cursor-pointer"
        title="Scroll to top"
      >
        <ArrowUp size={18} className="stroke-[2.5]" />
      </button>

      {/* Footer block */}
      <footer id="school-global-footer" className="bg-neutral-900 text-neutral-400 py-12 px-4 md:px-12 border-t border-neutral-800 mt-20 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-blue-900 p-2 rounded-xl text-white border border-blue-800">
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-amber-400">
                  <path d="M50 8 L50 20 M50 80 L50 92 M8 50 L20 50 M80 50 L92 50" stroke="currentColor" strokeWidth="4" />
                  <circle cx="50" cy="50" r="12" fill="#005b96" />
                </svg>
              </div>
              <h2 className="font-sans font-black text-sm tracking-tight text-white">SMK Muhammadiyah Randublatung</h2>
            </div>
            
            <p className="text-xs leading-relaxed text-neutral-500 max-w-md">
              Sekolah Menengah Kejuruan modern di Randublatung, Blora. Kami bersinergi melatih kehandalan siswa otomotif, alat berat, motor dan jaringan komputer berlandaskan iman Muhammadiyah yang tangguh.
            </p>

            <span className="text-[10px] font-bold text-amber-400 block tracking-widest font-sans uppercase">
              NAŞRUN MINALLĀH WA FAT-HUN QARĪB • FASTABIQUL KHAIRĀT
            </span>
          </div>

          <div className="md:col-span-3 space-y-3 font-sans text-xs">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">{lang === 'id' ? 'Tautan Navigasi' : 'Quick Navigation'}</h4>
            <div className="grid grid-cols-2 gap-2 text-neutral-500">
              <button onClick={() => onNavigate('beranda')} className="text-left hover:text-white">Beranda</button>
              <button onClick={() => onNavigate('profil')} className="text-left hover:text-white">Profil</button>
              <button onClick={() => onNavigate('berita')} className="text-left hover:text-white">Berita</button>
              <button onClick={() => onNavigate('spmb')} className="text-left hover:text-white">SPMB</button>
              <button onClick={() => onNavigate('bkk')} className="text-left hover:text-white">BKK</button>
              <button onClick={() => onNavigate('tefa')} className="text-left hover:text-white">TEFA</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3 font-sans text-xs">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Randublatung Campus</h4>
            <p className="text-neutral-550 leading-relaxed text-[11px] text-neutral-500">
              Jl. Raya Randublatung - Cepu No. 17, Sambongwangan, Randublatung, Kabupaten Blora, Jawa Tengah 58382
            </p>
            <p className="text-neutral-500 text-[10px] block font-medium">BKK Hotline: +62 812-3490-8777</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-neutral-800/80 mt-10 pt-6 flex flex-col md:flex-row justify-between text-[11px] text-neutral-600 font-mono">
          <span>&copy; {new Date().getFullYear()} SMK Muhammadiyah Randublatung. All rights reserved.</span>
          <span className="mt-2 md:mt-0 font-sans font-bold">Crafted for Quality & High Speed Connection</span>
        </div>
      </footer>

    </div>
  );
}
