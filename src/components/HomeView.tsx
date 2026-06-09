import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Users,
  Handshake,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Search,
  Phone,
} from "lucide-react";
import { Lang, NewsItem, Announcement, TeacherStaff } from "../types";
import { DICTIONARY } from "../data/initialData";

interface HomeViewProps {
  lang: Lang;
  news: NewsItem[];
  announcements: Announcement[];
  onNavigate: (viewId: string, itemSubId?: string) => void;
  teachers: TeacherStaff[];
}

export default function HomeView({
  lang,
  news,
  announcements,
  onNavigate,
  teachers = [],
}: HomeViewProps) {
  const dict = DICTIONARY[lang];
  const activeAnnouncements = announcements.slice(0, 2);

  const [teachersSearch, setTeachersSearch] = useState("");
  const [teachersFilter, setTeachersFilter] = useState<"all" | "guru" | "staf">(
    "all",
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const filteredTeachers = (teachers || []).filter((t) => {
    const matchesFilter = teachersFilter === "all" || t.type === teachersFilter;
    const matchesSearch =
      t.name.toLowerCase().includes(teachersSearch.toLowerCase()) ||
      t.role.toLowerCase().includes(teachersSearch.toLowerCase()) ||
      (t.roleEn &&
        t.roleEn.toLowerCase().includes(teachersSearch.toLowerCase())) ||
      (t.nip && t.nip.includes(teachersSearch));
    return matchesFilter && matchesSearch;
  });

  // Stats Counters
  const stats = [
    { id: "siswa", icon: Users, value: "850+", label: dict.statsSiswa },
    { id: "guru", icon: GraduationCap, value: "45+", label: dict.statsGuru },
    { id: "mitra", icon: Handshake, value: "35+", label: dict.statsMitra },
    { id: "lulus", icon: Award, value: "92%", label: dict.statsLulus },
  ];

  // Majors quick look
  const quickMajors = [
    {
      id: "tkr",
      title: "TKR",
      sub: "Teknik Kendaraan Ringan",
      img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=400",
      desc:
        lang === "id"
          ? "Pemeliharaan kelistrikan & mesin mobil keluarga."
          : "Maintenance of general family automotive electronic engines.",
    },
    {
      id: "tab",
      title: "TAB",
      sub: "Teknik Alat Berat",
      img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400",
      desc:
        lang === "id"
          ? "Spesialisasi sistem hidrolik & mesin industri berat."
          : "Specialisation in hydraulic and massive industry machines.",
    },
    {
      id: "tsm",
      title: "TSM",
      sub: "Teknik Sepeda Motor",
      img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400",
      desc:
        lang === "id"
          ? "Diagnosis motor injeksi modern & transmisi otomatis."
          : "Diagnostic repairs of modern injection automatic motorbikes.",
    },
    {
      id: "tkj",
      title: "TKJ",
      sub: "Teknik Komputer Jaringan",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
      desc:
        lang === "id"
          ? "MTCNA MikroTik, cyber security & Fiber Optic."
          : "MicroTik certification, cyber networks and Fiber Optics.",
    },
  ];

  return (
    <div id="home-view" className="space-y-10 pb-12">
      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
        {/* Ticker / Announcement Bar: Full Width inside Bento Grid */}
        {activeAnnouncements.length > 0 && (
          <div
            id="school-announcement-ticker"
            className="col-span-12 bg-amber-50 border border-amber-200 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-white p-2 rounded-xl shrink-0 animate-bounce">
                <Volume2 size={18} />
              </div>
              <div>
                <span className="text-amber-800 text-[10px] font-bold tracking-wider uppercase block">
                  {dict.alertNewNotification}
                </span>
                <p className="text-neutral-900 font-sans font-bold text-xs sm:text-sm leading-snug">
                  {lang === "id"
                    ? activeAnnouncements[0].title
                    : activeAnnouncements[0].titleEn}
                </p>
              </div>
            </div>
            <button
              id="view-announcement-btn"
              onClick={() => onNavigate("spmb")}
              className="text-xs font-semibold text-amber-900 bg-amber-200/50 hover:bg-amber-200 px-4 py-2 rounded-xl transition-all flex items-center gap-1 shrink-0 cursor-pointer"
            >
              {lang === "id" ? "Lihat Pengumuman" : "View Announcements"}{" "}
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Panel 1: Elegant Brand Hero (col-span-12 lg:col-span-8) */}
        <div className="col-span-12 md:col-span-8 lg:col-span-8 bg-blue-900 rounded-3xl relative overflow-hidden group border border-blue-800/10 shadow-md p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[360px]">
          {/* Background Gradient & Light Play */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-850 z-0" />
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none" />

          {/* Glowing Animated Sun Ring */}
          <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-48 h-48 opacity-25 lg:opacity-35 pointer-events-none z-0 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-amber-400 animate-spin-slow"
            >
              <circle
                cx="50"
                cy="50"
                r="16"
                fill="currentColor"
                opacity="0.1"
              />
              <path
                d="M50 8 L50 20 M50 80 L50 92 M8 50 L20 50 M80 50 L92 50 M20 20 L29 29 M71 71 L80 80 M80 20 L71 29 M29 71 L20 80 M50 14 C30 14 14 30 14 50 C14 70 30 86 50 86 C70 86 86 70 86 50 C86 30 70 14 50 14 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                fill="currentColor"
                opacity="0.1"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800/80 text-blue-200 rounded-full border border-blue-700/50 text-[10px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                SMK Muhammadiyah Randublatung
              </div>
              <h1 className="text-2xl md:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
                {dict.heroTitle}
              </h1>
              <p className="text-blue-100/90 text-xs md:text-sm leading-relaxed max-w-lg">
                {dict.heroDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-register-btn"
                onClick={() => onNavigate("spmb")}
                className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-amber-400/20 cursor-pointer"
              >
                {dict.registerNow}
              </button>
              <button
                id="hero-explore-btn"
                onClick={() => onNavigate("profil")}
                className="px-5 py-3 border border-blue-600 hover:border-blue-500 text-white hover:bg-blue-800/40 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {dict.exploreMore} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Panel 2: SPMB / PPDB Registration High Impact Card (col-span-12 lg:col-span-4) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-amber-400 rounded-3xl p-6 flex flex-col justify-between shadow-sm text-blue-950 min-h-[360px] border border-amber-350">
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex py-1 px-2.5 bg-blue-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider mb-4">
                PPDB ONLINE
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-black tracking-tight leading-snug uppercase">
                {lang === "id" ? "PENERIMAAN SISWA BARU" : "NEW ENROLLMENTS"}
              </h3>
              <p className="text-xs font-semibold text-blue-950/85 leading-relaxed mt-2.5">
                {lang === "id"
                  ? "Penerimaan Peserta Didik Baru (PPDB) SMK MUSA Randublatung telah resmi dibuka secara online. Manfaatkan bimbingan keahlian terakreditasi!"
                  : "New Student Admission for the next Academic Year is officially open. Register today and explore vocational pathways!"}
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-950/10 p-2.5 rounded-xl border border-blue-950/15 text-center">
                <p className="text-[10px] font-bold text-blue-950 tracking-wider">
                  {lang === "id"
                    ? "DIREKOMENDASIKAN JALUR PRESTASI"
                    : "FAST-TRACK ADMISSION AVAILABLE"}
                </p>
              </div>
              <button
                onClick={() => onNavigate("spmb")}
                className="w-full py-3 bg-blue-900 hover:bg-blue-955 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-blue-900/10 cursor-pointer"
              >
                {dict.registerNow}
              </button>
            </div>
          </div>
        </div>

        {/* Panel 3: Live Analytics Portal stats block (col-span-12 md:col-span-6 lg:col-span-4) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 border border-slate-850 shadow-md flex flex-col justify-between min-h-[260px]">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[9px] text-blue-400 font-mono tracking-widest uppercase block">
                  Live Portal Analitik
                </span>
                <h4 className="font-sans font-bold text-xs text-slate-300">
                  Aktivitas & Laporan Sekolah
                </h4>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-3 bg-slate-850/50 rounded-2xl border border-slate-800/40 flex flex-col space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <IconComp size={13} className="stroke-[2.5]" />
                      <span className="text-[9px] font-bold tracking-wider uppercase block truncate">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-lg font-sans font-black text-amber-400">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-[9px] text-slate-400 leading-none font-mono bg-slate-950 p-2.5 rounded-xl border border-slate-800/60 flex items-center justify-between">
              <span>ALUMNI TRACKER: ACTIVE</span>
              <span className="text-blue-400 font-bold">ONLINE</span>
            </div>
          </div>
        </div>

        {/* Panel 4: Kompetensi Keahlian Grid Bento Block (col-span-12 md:col-span-6 lg:col-span-4) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between min-h-[260px]">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[9px] font-bold text-blue-800 uppercase tracking-wider block font-sans">
                  Program Kejuruan
                </span>
                <h4 className="font-sans font-extrabold text-sm text-neutral-900">
                  {lang === "id" ? "Kompetensi Keahlian" : "Vocational Majors"}
                </h4>
              </div>
              <button
                onClick={() => onNavigate("kompetensi")}
                className="text-[10px] font-bold text-blue-700 hover:text-blue-900 flex items-center gap-0.5 cursor-pointer uppercase tracking-wider font-sans"
              >
                {dict.viewAll} <ChevronRight size={12} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {quickMajors.map((major) => (
                <div
                  key={major.id}
                  onClick={() => onNavigate("kompetensi", major.id)}
                  className="p-3 bg-neutral-50/70 hover:bg-blue-50 rounded-2xl border border-neutral-150 hover:border-blue-300/60 transition-all cursor-pointer flex flex-col items-center justify-center text-center space-y-1 group"
                >
                  <span className="text-lg">
                    {major.id === "tkr" && "🚗"}
                    {major.id === "tab" && "🚜"}
                    {major.id === "tsm" && "🏍️"}
                    {major.id === "tkj" && "💻"}
                  </span>
                  <span className="font-sans font-extrabold text-xs text-neutral-800 group-hover:text-blue-950">
                    {major.title}
                  </span>
                  <span className="text-[8px] text-neutral-400 group-hover:text-blue-800 font-bold uppercase tracking-widest leading-none">
                    {major.id === "tkj"
                      ? "Jaringan"
                      : major.id === "tkr"
                        ? "Mobil"
                        : major.id === "tsm"
                          ? "Motor"
                          : "Alat Berat"}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-neutral-400 italic text-center">
              {lang === "id"
                ? "Kurikulum selaras dengan Dunia Usaha & Industri."
                : "Matching curriculum synced with active businesses."}
            </p>
          </div>
        </div>

        {/* Panel 5: Extracurricular Activities Bento Block (col-span-12 md:col-span-12 lg:col-span-4) */}
        <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between min-h-[260px]">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[9px] font-bold text-blue-800 uppercase tracking-wider block font-sans">
                  Karakter Siswa
                </span>
                <h4 className="font-sans font-extrabold text-sm text-neutral-900">
                  {lang === "id" ? "Ekstrakurikuler" : "Extracurricular"}
                </h4>
              </div>
              <button
                onClick={() => onNavigate("ekstrakurikuler")}
                className="text-[10px] font-bold text-blue-700 hover:text-blue-900 flex items-center gap-0.5 cursor-pointer uppercase tracking-wider font-sans"
              >
                {dict.viewAll} <ChevronRight size={12} />
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5 py-1">
              {[
                { id: "marching_band", label: "🎺 Marching" },
                { id: "hizbul_wathan", label: "🏕️ HW" },
                { id: "tapak_suci", label: "🥋 Tapak Suci" },
                { id: "bola_voli", label: "🏐 Voli" },
                { id: "futsal", label: "⚽ Futsal" },
              ].map((ekskul) => (
                <button
                  key={ekskul.id}
                  onClick={() => onNavigate("ekstrakurikuler", ekskul.id)}
                  className="px-2.5 py-1.5 bg-neutral-50 hover:bg-amber-100/75 border border-neutral-150 hover:border-amber-300 text-[11px] font-bold text-neutral-805 hover:text-amber-950 rounded-xl cursor-pointer transition-all active:scale-95"
                >
                  {ekskul.label}
                </button>
              ))}
            </div>

            <div className="text-[10px] text-neutral-500 bg-neutral-50 p-2.5 rounded-xl text-center leading-relaxed">
              {lang === "id"
                ? "Wadah pengembangan bakat, pembentukan karakter, kepemimpinan Islami."
                : "Nurture your potential, leadership, and discipline."}
            </div>
          </div>
        </div>

        {/* Panel 6: Bursa Kerja Khusus (BKK) (col-span-12 md:col-span-6 lg:col-span-6) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xs transition-all duration-300">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-amber-100 text-amber-800 p-2 rounded-xl">
                  <Award size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-amber-800 uppercase tracking-widest block font-sans">
                    Bursa Kerja Khusus
                  </span>
                  <h4 className="font-sans font-extrabold text-sm text-neutral-900">
                    {dict.bkkTitle}
                  </h4>
                </div>
              </div>
              <ArrowRight size={16} className="text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {dict.bkkDesc}
            </p>
            <div className="flex items-center justify-between text-[11px] font-bold text-blue-800 pt-2">
              <button
                onClick={() => onNavigate("bkk")}
                className="hover:underline cursor-pointer flex items-center gap-1 font-sans"
              >
                {lang === "id"
                  ? "Masuk Portal Karir & Alumni"
                  : "Open Career Portal"}{" "}
                <ChevronRight size={12} />
              </button>
              <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider font-bold">
                Mitra Industri Aktif
              </span>
            </div>
          </div>
        </div>

        {/* Panel 7: Teaching Factory (TEFA) (col-span-12 md:col-span-6 lg:col-span-6) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xs transition-all duration-300">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between border-b border-blue-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-blue-800 text-white p-2 rounded-xl">
                  <Handshake size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-blue-800 uppercase tracking-widest block font-sans">
                    Teaching Factory
                  </span>
                  <h4 className="font-sans font-extrabold text-sm text-blue-950">
                    {dict.tefaTitle}
                  </h4>
                </div>
              </div>
              <ArrowRight size={16} className="text-blue-800" />
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {dict.tefaDesc}
            </p>
            <div className="flex items-center justify-between text-[11px] font-bold text-blue-900 pt-2">
              <button
                onClick={() => onNavigate("tefa")}
                className="hover:underline cursor-pointer flex items-center gap-1 font-sans"
              >
                {lang === "id"
                  ? "Lihat Jasa & Unit Kreatif"
                  : "View Creative Services"}{" "}
                <ChevronRight size={12} />
              </button>
              <span className="bg-blue-800 text-white px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider font-bold">
                Produk Siswa
              </span>
            </div>
          </div>
        </div>

        {/* Panel 8: Sambutan Kepala Sekolah (Full Width Bento Row item) */}
        <div className="col-span-12 bg-white border border-neutral-150 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xs">
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-800 rounded-3xl transform rotate-3 z-0" />
              <img
                id="principal-photo"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=350"
                alt="Kepala Sekolah"
                className="relative w-28 h-28 md:w-32 md:h-36 object-cover rounded-2xl shadow-sm z-10 border border-neutral-100"
              />
            </div>
            <h4 className="mt-4 font-sans font-bold text-neutral-900 text-sm">
              Suwito, S.Pd., M.T.
            </h4>
            <p className="text-[10px] text-blue-700 font-bold tracking-wider uppercase mt-0.5">
              Kepala Sekolah
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-sans font-black tracking-tight text-neutral-900 flex items-center gap-2">
              <span>{dict.welcomeTitle}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
            </h3>
            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed italic border-l-2 border-blue-800 pl-4">
              "{dict.welcomeText}"
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-[10px] font-black text-blue-800">
              <span>Nashrun Minallah Wa Fathun Qarib</span>
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span>Fastabiqul Khairat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Berita Terbaru Segment (Bento Cards beneath the main Dashboard) */}
      <section id="recent-news" className="space-y-6 pt-5">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-blue-850 uppercase tracking-widest block font-sans">
              Kabar & Buletin
            </span>
            <h2 className="text-xl md:text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">
              {lang === "id"
                ? "Berita & Kegiatan Terkini"
                : "Latest School News"}
            </h2>
          </div>
          <button
            id="view-all-news"
            onClick={() => onNavigate("berita")}
            className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-98 cursor-pointer flex items-center gap-0.5"
          >
            {dict.viewAll} <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {news.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("berita")}
              className="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-sm hover:border-neutral-300 transition-all duration-300 cursor-pointer flex flex-col h-full group"
            >
              <div className="h-44 bg-neutral-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-350"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[9px] font-black tracking-wider uppercase text-neutral-850 px-2.5 py-1 rounded-lg border border-neutral-200">
                  {lang === "id" ? item.category : item.categoryEn}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono font-medium text-neutral-400 block">
                    {item.date}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-neutral-900 line-clamp-2 leading-snug group-hover:text-blue-850 transition-colors">
                    {lang === "id" ? item.title : item.titleEn}
                  </h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2">
                    {lang === "id" ? item.summary : item.summaryEn}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-blue-800 pt-2 flex items-center gap-1 border-t border-neutral-100">
                  {lang === "id" ? "Baca Selengkapnya" : "Read Article"}{" "}
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Direktori Guru & Karyawan Segment */}
      <section
        id="teachers-directory"
        className="space-y-6 pt-5 border-t border-neutral-150"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-blue-800 uppercase tracking-widest block font-sans">
              {lang === "id"
                ? "Profil Pendidik & Staf kependidikan"
                : "Educator & Staff Profile"}
            </span>
            <h2 className="text-xl md:text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">
              {dict.teachersTitle}
            </h2>
            <p className="text-neutral-500 text-xs">{dict.teachersSubtitle}</p>
          </div>

          {/* Search & Filter bar UI */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder={
                  lang === "id"
                    ? "Cari guru atau staf..."
                    : "Search teachers or staff..."
                }
                value={teachersSearch}
                onChange={(e) => setTeachersSearch(e.target.value)}
                className="w-full sm:w-64 pl-8 pr-3 py-1.5 text-xs bg-white border border-neutral-150 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-neutral-800"
              />
              <Search
                size={13}
                className="text-neutral-400 absolute left-2.5 top-1/2 transform -translate-y-1/2"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center bg-neutral-100 p-0.5 rounded-xl border border-neutral-200">
              <button
                onClick={() => setTeachersFilter("all")}
                className={`px-3 py-1 text-[10px] font-extrabold rounded-lg transition-all cursor-pointer ${teachersFilter === "all" ? "bg-blue-800 text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`}
              >
                {lang === "id" ? "Semua" : "All"}
              </button>
              <button
                onClick={() => setTeachersFilter("guru")}
                className={`px-3 py-1 text-[10px] font-extrabold rounded-lg transition-all cursor-pointer ${teachersFilter === "guru" ? "bg-blue-800 text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`}
              >
                {lang === "id" ? "Guru" : "Teachers"}
              </button>
              <button
                onClick={() => setTeachersFilter("staf")}
                className={`px-3 py-1 text-[10px] font-extrabold rounded-lg transition-all cursor-pointer ${teachersFilter === "staf" ? "bg-blue-800 text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`}
              >
                {lang === "id" ? "Staf" : "Staff"}
              </button>
            </div>
          </div>
        </div>

        {/* Teachers Catalog Slider Container */}
        <div className="relative group/slider">
          {/* Scroll viewport */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="w-44 sm:w-48 shrink-0 snap-start bg-white border border-neutral-150 rounded-2xl p-4 flex flex-col items-center text-center space-y-3 shadow-xs hover:shadow-sm hover:border-neutral-300 transition-all duration-300 overflow-hidden relative group"
              >
                {/* Profile Background Accent */}
                <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-r from-blue-50 to-amber-50 group-hover:from-blue-100 group-hover:to-amber-100 transition-colors pointer-events-none" />

                {/* image */}
                <div className="relative z-10">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 rounded-full object-cover border-2 border-white shadow-md bg-neutral-50 shrink-0 group-hover:scale-102 transition-transform duration-300"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center text-[7px] text-white font-black ${teacher.type === "guru" ? "bg-emerald-500" : "bg-blue-600"}`}
                    title={
                      teacher.type === "guru"
                        ? "Guru / Educator"
                        : "Staf / Administrator"
                    }
                  >
                    {teacher.type === "guru" ? "G" : "S"}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1 w-full text-center">
                  <h4
                    className="font-sans font-bold text-neutral-900 text-xs line-clamp-1 leading-tight group-hover:text-blue-800 transition-colors"
                    title={teacher.name}
                  >
                    {teacher.name}
                  </h4>
                  <p className="text-[10px] font-semibold text-neutral-500 line-clamp-1 leading-tight">
                    {lang === "id" ? teacher.role : teacher.roleEn}
                  </p>
                  {teacher.nip && teacher.nip !== "-" && (
                    <p className="text-[9px] font-mono text-neutral-400 tracking-wider">
                      NIP. {teacher.nip}
                    </p>
                  )}
                </div>

                {/* Action buttons (Phone / Chat / Details) */}
                {teacher.phone && (
                  <a
                    href={`https://wa.me/${teacher.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[9px] font-bold text-blue-800 hover:bg-blue-800 hover:text-white px-2.5 py-1.5 rounded-lg border border-blue-150 transition-colors flex items-center gap-1 w-full justify-center cursor-pointer"
                  >
                    <Phone size={10} />
                    <span>{lang === "id" ? "Hubungi" : "Contact"}</span>
                  </a>
                )}
              </div>
            ))}

            {filteredTeachers.length === 0 && (
              <div className="w-full text-center py-10 bg-neutral-50 rounded-2xl border border-neutral-100 text-neutral-400">
                <p className="text-xs font-bold leading-normal">
                  {lang === "id"
                    ? "Pendidik atau staf tidak ditemukan."
                    : "No educators or staff found."}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls overlay for desktop */}
          {filteredTeachers.length > 0 && (
            <>
              <button
                type="button"
                onClick={scrollLeft}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white border border-neutral-200 hover:border-blue-300 hover:bg-blue-50 text-neutral-700 hover:text-blue-800 rounded-full shadow-md active:scale-90 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 hidden sm:flex items-center justify-center transition-opacity"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white border border-neutral-200 hover:border-blue-300 hover:bg-blue-50 text-neutral-700 hover:text-blue-800 rounded-full shadow-md active:scale-90 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 hidden sm:flex items-center justify-center transition-opacity"
                aria-label="Next Slide"
              >
                <ChevronRight size={16} className="stroke-[2.5]" />
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
