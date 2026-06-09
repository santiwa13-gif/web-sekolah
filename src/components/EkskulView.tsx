import React, { useState } from 'react';
import { Award, ChevronRight, Gift, CircleDot, Shield, Sparkles } from 'lucide-react';
import { Lang } from '../types';

interface EkskulViewProps {
  lang: Lang;
  initialActiveEkskul?: string;
}

export default function EkskulView({ lang, initialActiveEkskul = 'marching_band' }: EkskulViewProps) {
  const [activeTab, setActiveTab] = useState<string>(initialActiveEkskul);

  const activities = {
    marching_band: {
      title: 'Marching Band Gema Sang Surya',
      titleEn: 'Gema Sang Surya Marching Band March',
      desc: lang === 'id' 
        ? 'Marching Band kebanggaan sekolah yang melatih keselarasan nada, kekompakan baris-berbaris, dan rasa seni bernuansa Islami. Sering mengisi seremoni kabupaten & pawai syiar Muhammadiyah.'
        : 'The proud school marching squad training brass acoustics, alignment drills and sessional drumming. Prominently featured in town parades and official Muhammadiyah events.',
      schedule: lang === 'id' ? 'Selasa & Kamis, 15.30 - 17.00 WIB' : 'Tuesdays & Thursdays, 03:30 PM',
      coach: 'Yoppie Andrean, S.Sn.',
      achievements: [
        lang === 'id' ? 'Juara 2 Parade Drumband Piala Bupati Blora 2024' : 'Runner-up at Blora Drumband Festival 2024',
        lang === 'id' ? 'Pengisi Utama Pawai Ta\'aruf Musyda Muhammadiyah' : 'Main act in Muhammadiyah Regional Congress Parade'
      ],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
    },
    hizbul_wathan: {
      title: 'Gerakan Kepanduan Hizbul Wathan (HW)',
      titleEn: 'Hizbul Wathan Scout Association (HW)',
      desc: lang === 'id'
        ? 'Ekstrakurikuler wajib kepanduan Muhammadiyah yang menekankan kepemimpinan Islami, kemandirian rimbawan, pertolongan pertama, kesamaptaan fisik, dan cinta tanah air tanpa batas.'
        : 'The obligatory Muhammadiyah student scout association centering leadership, camping tactics, forest survivals, physical discipline, and intense patriotic dedication.',
      schedule: lang === 'id' ? 'Jumat, 14.00 - 16.30 WIB' : 'Fridays, 02:00 PM',
      coach: 'Drs. Subhan Wardoyo',
      achievements: [
        lang === 'id' ? 'Juara Umum Kemah Bakti Pengenal Se-Kabupaten Blora' : 'Grand Champions at Blora Regency Joint Scout Camp',
        lang === 'id' ? 'Tim Penyelamat Pertama Bencana Banjir Bengawan Solo (Blora)' : 'Active rescue team deployed during Bengawan Solo floods'
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
    },
    tapak_suci: {
      title: 'Seni Bela Diri Tapak Suci Putera Muhammadiyah',
      titleEn: 'Tapak Suci Martial Arts Association',
      desc: lang === 'id'
        ? 'Seni bela diri asli Indonesia di bawah Muhammadiyah dengan moto: "Dengan Iman dan Akhlak saya menjadi kuat, tanpa Iman dan Akhlak saya menjadi lemah." Melatih ketangkasan silat olahraga dan prestasi.'
        : 'Indonesian authentic martial arts under Muhammadiyah with the motto: "With Faith and Ethics, I am Strong; without Faith and Ethics, I am Weak." Outfitting athletic agility and competitive championships.',
      schedule: lang === 'id' ? 'Senin & Rabu, 16.00 - 17.30 WIB' : 'Mondays & Wednesdays, 04:00 PM',
      coach: 'Pendekar Utama Joko Susilo',
      achievements: [
        lang === 'id' ? '3 Medali Emas Kejuaraan Daerah Remaja Jawa Tengah' : '3 Gold Medals in Central Java Junior Silat Tournament',
        lang === 'id' ? 'Juara Umum Kejuaraan Tapak Suci Antar Pelajar Blora-Cepu' : 'Grand Champions at Regional Student Tapak Suci Battle'
      ],
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800'
    },
    bola_voli: {
      title: 'Klub Bola Voli SMK Muhammadiyah',
      titleEn: 'SMK Muhammadiyah Volleyball Club',
      desc: lang === 'id'
        ? 'Tempat pembibitan atlet voli berbakat yang menekankan kerja sama tim di lapangan, latihan fisik kekuatan tangan-kaki, serta taktik serangan smash tajam.'
        : 'Volleyball training ground enhancing high-speed tactical teamwork, physical leg and arm drill, and precise smash strategies.',
      schedule: lang === 'id' ? 'Rabu & Sabtu, 15.30 - 17.30 WIB' : 'Wednesdays & Saturdays, 03:30 PM',
      coach: 'Sujono, S.Pd.Jas',
      achievements: [
        lang === 'id' ? 'Juara 3 Turnamen Voli Pelajar HUT RI Blora' : '3rd Place in Annual Town Anniversary Volleyball Cup',
        lang === 'id' ? 'Penyelenggar Cup Voli "Musa Randublatung" Tahunan' : 'Host of the annual Musa Randublatung Open Cup'
      ],
      image: 'https://images.unsplash.com/photo-1592656094267-764a45068526?auto=format&fit=crop&q=80&w=800'
    },
    futsal: {
      title: 'Musa Futsal Club',
      titleEn: 'Musa Futsal Club Elite Entity',
      desc: lang === 'id'
        ? 'Futsal melatih stamina kardio, penempatan ruang, kelincahan gerak, serta taktik penguasaan bola cepat. Salah satu olahraga paling difavoritkan siswa dan alumni.'
        : 'Futsal clinic boosting cardio, space pacing, footwork agility, and lightning-fast playmaking. Among the most popular sports inside the campus.',
      schedule: lang === 'id' ? 'Senin & Jumat, 16.00 - 18.00 WIB' : 'Mondays & Fridays, 04:00 PM',
      coach: 'Andi Setiawan, S.Pd.',
      achievements: [
        lang === 'id' ? 'Juara 1 Liga Futsal Pelajar Muhammadiyah Blora' : 'Champion of Muhammadiyah Youth Student Futsal Matches',
        lang === 'id' ? 'Top Scorer Piala Kemerdekaan Kabupaten Blora 2025' : 'Golden Boot Winner in 2025 Independence Blora Cup'
      ],
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800'
    }
  };

  const currentActivity = activities[activeTab as keyof typeof activities];

  return (
    <div id="ekskul-view" className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <Sparkles size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">
            {lang === 'id' ? 'Ekstrakurikuler & Pengembangan Bakat' : 'Extracurricular Activities'}
          </h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {lang === 'id'
              ? 'Wadah resmi pembinaan bakat olahraga, kepanduan, beladiri, dan kesenian yang menyeimbangkan kecerdasan akademis & motorik.'
              : 'Our official platform for grooming athletic talents, spiritual martial arts, scoutings, and music ensembles.'}
          </p>
        </div>
      </div>

      {/* Selector Grid */}
      <div className="flex border-b border-neutral-200 overflow-x-auto gap-2 p-1 bg-neutral-50 rounded-xl">
        {Object.entries(activities).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === key ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
          >
            {key === 'marching_band' && '🎺'}
            {key === 'hizbul_wathan' && '🏕️'}
            {key === 'tapak_suci' && '🥋'}
            {key === 'bola_voli' && '🏐'}
            {key === 'futsal' && '⚽'}
            <span>{key.toUpperCase().replace('_', ' ')}</span>
          </button>
        ))}
      </div>

      {/* Display Board */}
      <div className="bg-white border border-neutral-150 rounded-3xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
        {/* Left media block */}
        <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[300px] bg-neutral-100">
          <img 
            src={currentActivity.image} 
            alt={currentActivity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-blue-800 text-white border border-blue-700 select-none text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider block mb-1">
              {activeTab.replace('_', ' ')}
            </span>
            <p className="text-amber-400 font-sans font-bold text-xs tracking-wide">SMK Muhammadiyah Randublatung</p>
          </div>
        </div>

        {/* Right facts block */}
        <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
          <div className="space-y-2 border-b border-neutral-100 pb-5">
            <h2 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">
              {lang === 'id' ? currentActivity.title : currentActivity.titleEn}
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <p className="text-neutral-600 text-sm leading-relaxed pt-2">
              {currentActivity.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coach & Schedule */}
            <div className="space-y-4">
              <div className="space-y-1.5 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-150">
                <span className="text-[10px] font-bold text-blue-800 block uppercase tracking-widest">{lang === 'id' ? 'Jadwal Latihan' : 'Schedule'}</span>
                <span className="text-neutral-800 font-sans font-bold text-xs md:text-sm block">{currentActivity.schedule}</span>
              </div>
              <div className="space-y-1.5 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-150">
                <span className="text-[10px] font-bold text-blue-800 block uppercase tracking-widest">{lang === 'id' ? 'Instruktur / Pembina' : 'Mentor / Coach'}</span>
                <span className="text-neutral-800 font-sans font-bold text-xs md:text-sm block">🧑‍🏫 {currentActivity.coach}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                <Award size={16} className="text-blue-700" />
                {lang === 'id' ? 'Prestasi Unggulan' : 'Major Honors'}
              </span>
              <div className="space-y-2.5">
                {currentActivity.achievements.map((item, id) => (
                  <div key={id} className="flex gap-2 text-neutral-600 text-xs leading-normal">
                    <CircleDot size={12} className="text-blue-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
