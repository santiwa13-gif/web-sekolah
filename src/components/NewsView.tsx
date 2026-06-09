import React, { useState } from 'react';
import { Search, Calendar, ChevronRight, Eye, ArrowLeft, BookOpen } from 'lucide-react';
import { Lang, NewsItem } from '../types';
import { DICTIONARY } from '../data/initialData';

interface NewsViewProps {
  lang: Lang;
  news: NewsItem[];
}

export default function NewsView({ lang, news }: NewsViewProps) {
  const dict = DICTIONARY[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(news.map(n => n.category)))];

  // Filtering news
  const filteredNews = news.filter((item) => {
    const titleMatch = (lang === 'id' ? item.title : item.titleEn)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    return titleMatch && categoryMatch;
  });

  if (selectedNews) {
    return (
      <div id="news-detail-view" className="space-y-6 pb-12 animate-fade-in">
        <button
          onClick={() => setSelectedNews(null)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all cursor-pointer border border-blue-100"
        >
          <ArrowLeft size={16} /> {lang === 'id' ? 'Kembali ke Daftar Berita' : 'Back to News List'}
        </button>

        <div className="bg-white border border-neutral-150 rounded-3xl overflow-hidden shadow-xs">
          {/* Main Cover Illustration */}
          <div className="h-64 md:h-96 relative bg-neutral-100">
            <img 
              src={selectedNews.image} 
              alt={selectedNews.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="bg-blue-600/95 text-[10px] font-bold px-2.5 py-1 rounded-md text-white border border-blue-500 uppercase tracking-widest">
                {lang === 'id' ? selectedNews.category : selectedNews.categoryEn}
              </span>
              <h1 className="text-xl md:text-3xl font-sans font-extrabold leading-tight tracking-tight mt-1">
                {lang === 'id' ? selectedNews.title : selectedNews.titleEn}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-400 border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{selectedNews.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye size={14} />
                <span>{selectedNews.views} {lang === 'id' ? 'pembaca' : 'views'}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="prose max-w-none text-neutral-700 text-sm md:text-base leading-relaxed space-y-4">
              {lang === 'id' 
                ? selectedNews.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                : selectedNews.contentEn.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="news-list-view" className="space-y-8 pb-12">
      {/* Search & Filter Header bar */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
            <BookOpen className="text-blue-700" /> {dict.menuNews}
          </h1>
          <p className="text-neutral-500 text-xs">Pusat dokumentasi agenda kegiatan, pengumuman reguler, dan pencapaian prestasi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search box */}
          <div className="md:col-span-6 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <Search size={16} />
            </span>
            <input
              id="news-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={dict.search}
              className="w-full pl-9 pr-4 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white text-neutral-800 transition-all"
            />
          </div>

          {/* Category Tabs list */}
          <div className="md:col-span-6 flex flex-wrap gap-2 items-center justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${activeCategory === cat ? 'bg-blue-800 border-blue-800 text-white shadow-xs' : 'bg-transparent border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
              >
                {cat === 'all' 
                  ? 'Semua' 
                  : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid List */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full group"
            >
              <div className="h-44 bg-neutral-100 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-neutral-800 px-2.5 py-1 rounded-lg border border-neutral-200 uppercase">
                  {lang === 'id' ? item.category : item.categoryEn}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-neutral-900 group-hover:text-blue-800 leading-snug line-clamp-2">
                    {lang === 'id' ? item.title : item.titleEn}
                  </h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-3">
                    {lang === 'id' ? item.summary : item.summaryEn}
                  </p>
                </div>

                <div className="text-[11px] font-bold text-blue-800 border-t border-neutral-100 pt-3 flex items-center gap-1">
                  {lang === 'id' ? 'Selengkapnya' : 'Read Article'} <ChevronRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-neutral-150 rounded-3xl space-y-2">
          <BookOpen className="mx-auto text-neutral-300" size={48} />
          <p className="text-neutral-500 font-bold block">{lang === 'id' ? 'Berita tidak ditemukan' : 'No articles found'}</p>
          <p className="text-neutral-400 text-xs">Coba ubah kata kunci pencarian atau kategori Anda.</p>
        </div>
      )}
    </div>
  );
}
