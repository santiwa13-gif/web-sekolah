import React, { useState } from 'react';
import { Award, ShieldCheck, Heart, Terminal, BookOpen, Layers, CheckCircle2, Building, Flame } from 'lucide-react';
import { Lang } from '../types';

interface ProgramsViewProps {
  lang: Lang;
  initialActiveProgram?: string;
}

export default function ProgramsView({ lang, initialActiveProgram = 'tkr' }: ProgramsViewProps) {
  const [activeTab, setActiveTab] = useState<string>(initialActiveProgram);

  const programs = {
    tkr: {
      title: 'Teknik Kendaraan Ringan (TKR)',
      titleEn: 'Light Vehicle Automotive Engineering (TKR)',
      slogan: lang === 'id' ? 'Keahlian Otomotif Mobil yang Mumpuni' : 'Fitted Passenger Car Technical Skills',
      desc: lang === 'id' 
        ? 'Membekali siswa dengan kompetensi perawatan, perbaikan kelistrikan, chasis, pemindah tenaga, manajemen mesin EFI (Injeksi elektronik) mobil penumpang, serta diagnosis kerusakan digital berstandar Astra Daihatsu.'
        : 'Equipping students with inspection, electronic wiring alignments, chassis overhauls, manual transmissions, EFI engine diagnostics and computerized troubleshooting following Astra Daihatsu benchmarks.',
      icon: Layers,
      color: 'border-blue-500 text-blue-700',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
      image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800',
      facilities: [
        { name: 'Lab Mesin Engine Trainer EFI (Toyota/Daihatsu)', desc: lang === 'id' ? 'Unit simulasi kelistrikan & pembakaran mesin bensin injeksi.' : 'EFI injection simulations unit' },
        { name: 'Unit Praktik Mobil Daihatsu Xenia & Mitsubishi Pajero', desc: lang === 'id' ? 'Mobil asli untuk latihan perbaikan total.' : 'Genuine vehicles for full overhaul practices.' },
        { name: 'Car Lift & Wheel Alignment Balancer', desc: lang === 'id' ? 'Alat pengangkat & penyelarasan roda mobil modern.' : 'Specialist lift and wheel alignment kits.' },
      ],
      careers: [
        'Junior Automotive Service Technician',
        'Service Advisor & Estimator Bengkel Resmi',
        'Wirausaha Bengkel Mobil Mandiri Partner Astra',
        'Sales Service Executive Brand Otomotif Terkemuka'
      ],
      partners: ['PT Astra Daihatsu Motor', 'PT Mitsubishi Motors', 'Toyota Astra Motor']
    },
    tab: {
      title: 'Teknik Alat Berat (TAB)',
      titleEn: 'Heavy Equipment Engineering (TAB)',
      slogan: lang === 'id' ? 'Spesialis Industri Alat Berat Terbesar di Blora' : 'Unique Heavy Equipment Path in Blora Regency',
      desc: lang === 'id'
        ? 'Satu-satunya di Blora dan sekitarnya! Menyiapkan tenaga ahli yang menguasai sistem hidrolik suspensi berat, overhaul mesin diesel berkapasitas besar, kelistrikan excavator, loader, serta bulldozer standar United Tractors.'
        : 'The sole provider in Southern Blora! Outfitting experts handling massive diesel overhauls, high-pressure hydraulics, wiring on excavators, front-end loaders and bulldozers obeying United Tractors sessional modules.',
      icon: Flame,
      color: 'border-amber-505 text-amber-700 border-amber-500',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800',
      facilities: [
        { name: 'Mesin Diesel Komatsu & Volvo Standar Industri', desc: lang === 'id' ? 'Mesin diesel berkapasitas 8000cc+ untuk dekonstruksi mekanik.' : '8000cc+ industrial grade engines for mechanical disassemble.' },
        { name: 'Lab Hidrolik & Pneumatik Bertekanan Tinggi', desc: lang === 'id' ? 'Instalasi sirkuit tekanan oli kontrol katup.' : 'Circuit assemblies of high pressure valve oils.' },
        { name: 'Alat Angkat Forklift Heavy Duty & Crane Simulasi', desc: lang === 'id' ? 'Peralatan pendukung manuver suku cadang logam jumbo.' : 'Supporting tools for giant metal part maneuvers.' },
      ],
      careers: [
        'Heavy Equipment Mechanic / Technician',
        'Hydraulic System Overhaul Specialist',
        'Fleet Service Supervisor on Coal Mining Co.',
        'Technical Maintenance on National Infrastructure Projects'
      ],
      partners: ['PT United Tractors Tbk', 'PT Trakindo Utama', 'PT Hexindo Adiperkasa']
    },
    tsm: {
      title: 'Teknik Sepeda Motor (TSM)',
      titleEn: 'Motorcycle Engineering (TSM)',
      slogan: lang === 'id' ? 'Teknologi Presisi Roda Dua' : 'Advanced Motorcycle Diagnostic Precision',
      desc: lang === 'id'
        ? 'Fokus pada keahlian merawat berbagai jenis sepeda motor (transmisi kopling, matic CVT). Kurikulum tersinkronisasi murni dengan teknologi BlueCore Yamaha Motor Indonesia, lengkap dengan diagnostik ECU komputer tablet.'
        : 'Focussed on comprehensive bike tuning (CVT, manual clutches). The modules align with Yamaha Indonesia standards, using PC-interfaced FI Diagnostic tools.',
      icon: ShieldCheck,
      color: 'border-red-500 text-red-700',
      tagColor: 'bg-red-550 text-red-800 border-red-200',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
      facilities: [
        { name: 'Lab Handal standard Bengkel Resmi Yamaha (YTA)', desc: lang === 'id' ? 'Layout persis seperti bengkel resmi lengkap dengan 8 panggung angkat.' : 'Exact layout replica of official service points with 8 bike lifts.' },
        { name: 'Alat Diagnostik Komputer FI Diagnostic Tool', desc: lang === 'id' ? 'Pemindai eror kelistrikan ECU terbaru Yamaha.' : 'Yamaha electronic ECU diagnostics module' },
        { name: 'Ruang Uji Emisi Gas Buang Roda Dua', desc: lang === 'id' ? 'Fasilitas saringan karbondioksida dan efisiensi bensin.' : 'CO2 emissions and fuel optimization metrics tool.' },
      ],
      careers: [
        'Mekanik Resmi Dealer Yamaha / Honda',
        'Senior Diagnostic Specialist Tune-up Gas',
        'Wirausaha Bengkel Motor & Toko Suku Cadang',
        'Quality Control Production Staff on Assembly Plants'
      ],
      partners: ['PT Yamaha Indonesia Motor Manufacturing', 'Astra Honda Motor Dealers']
    },
    tkj: {
      title: 'Teknik Komputer & Jaringan (TKJ)',
      titleEn: 'Computer & Network Engineering (TKJ)',
      slogan: lang === 'id' ? 'Menembus Batas Jaringan Dunia Digital' : 'Architecting Connected Global Frameworks',
      desc: lang === 'id'
        ? 'Membentuk administrator jaringan tangguh bersertifikat global. Siswa menguasai desain topologi WAN/LAN, keamanan cyber, instalasi serat optik (Fiber Optic), perakitan server Linux, sertifikasi MTCNA MikroTik Academy.'
        : 'Shaping network administrators holding global honors. Students master WAN designs, fiber-optic splicing, cybersecurity firewalls, operating custom Cloud services, and get certified with MTCNA MikroTik.',
      icon: Terminal,
      color: 'border-purple-500 text-purple-700',
      tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      facilities: [
        { name: 'Lab Komputer MikroTik & Cisco Academy', desc: lang === 'id' ? 'Dilengkapi puluhan RouterBoard MikroTik RB951 & switch Cisco.' : 'Fitted with dozens of MikroTik RB951 RouterBoards and Cisco switches.' },
        { name: 'Alat Splicing Fiber Optic & OTDR Meter', desc: lang === 'id' ? 'Peralatan sambung kaca optik berakurasi laser.' : 'Optical glass fiber welding laser tools.' },
        { name: 'Server Lab hosting Mandiri', desc: lang === 'id' ? 'Unit komputer multi-core Linux untuk latihan cloud-hosting.' : 'Multi-core local Linux machine hosting internal cloud servers.' },
      ],
      careers: [
        'Junior Network Engineer & Cisco Admin',
        'Fiber-optic Field Engineer / Splicer',
        'IT Technical Support Supervisor in Gov/Private',
        'System & Server Administrator'
      ],
      partners: ['MikroTik Academy (Latvia)', 'PT Telkom Indonesia', 'Lintasarta Broadband']
    }
  };

  // Switch tabs
  const programData = programs[activeTab as keyof typeof programs];

  return (
    <div id="programs-view" className="space-y-8 pb-12">
      {/* Title block */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <BookOpen size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">
            {lang === 'id' ? 'Kompetensi Keahlian' : 'Vocational Programs'}
          </h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {lang === 'id'
              ? 'Menawarkan 4 program kejuruan modern berkualitas unggul yang membekali siswa dengan keterampilan relevan dengan masa kini.'
              : 'Offering 4 premium vocational programs equipping students with solid expertise needed by global factories.'}
          </p>
        </div>
      </div>

      {/* Tabs Selector list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(programs).map(([key, value]) => {
          const IconComponent = value.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col space-y-2 h-full ${activeTab === key ? 'bg-blue-800 border-blue-800 text-white shadow-md' : 'bg-white border-neutral-200 text-neutral-800 hover:border-blue-500'}`}
            >
              <div className={`p-2 rounded-xl w-10 h-10 flex items-center justify-center ${activeTab === key ? 'bg-blue-700/60 text-amber-300' : 'bg-blue-5/80 text-blue-800'}`}>
                <IconComponent size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono font-bold text-xs tracking-wider block">{key.toUpperCase()}</span>
                <span className="text-[11px] font-semibold leading-relaxed line-clamp-1 block opacity-90">{lang === 'id' ? value.title.split(' ')[0] : 'Engineering'}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* active content display */}
      <div className="bg-white border border-neutral-150 rounded-3xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* program card image left */}
        <div className="lg:col-span-4 relative h-64 lg:h-full min-h-[250px] bg-neutral-150">
          <img 
            src={programData.image} 
            alt={programData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <span className="bg-amber-400 text-blue-950 font-sans font-extrabold text-xs px-2.5 py-1 rounded-lg uppercase">
              {activeTab.toUpperCase()}
            </span>
            <p className="text-white font-sans font-bold text-sm tracking-tight">{programData.slogan}</p>
          </div>
        </div>

        {/* program specifications details */}
        <div className="lg:col-span-8 p-6 md:p-8 space-y-6">
          <div className="space-y-2 border-b border-neutral-100 pb-5">
            <h2 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">
              {lang === 'id' ? programData.title : programData.titleEn}
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <p className="text-neutral-600 text-sm leading-relaxed pt-2">
              {programData.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Fasilitas */}
            <div className="space-y-3.5">
              <h4 className="font-sans font-bold text-neutral-900 text-sm flex items-center gap-2">
                <Building size={16} className="text-blue-700" />
                {lang === 'id' ? 'Fasilitas & Bengkel Praktik' : 'Practice Facilities'}
              </h4>
              <div className="space-y-3">
                {programData.facilities.map((fac, idx) => (
                  <div key={idx} className="flex gap-2.5">
                    <span className="w-5 h-5 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center font-sans font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="font-sans font-bold text-neutral-800 text-xs">{fac.name}</h5>
                      <span className="text-[11px] text-neutral-500">{fac.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Karir */}
            <div className="space-y-3.5">
              <h4 className="font-sans font-bold text-neutral-900 text-sm flex items-center gap-2">
                <Award size={16} className="text-blue-700" />
                {lang === 'id' ? 'Peluang Karir Lulusan' : 'Graduate Career Paths'}
              </h4>
              <div className="space-y-2">
                {programData.careers.map((career, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-neutral-600 text-xs">
                    <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Industry partner row */}
          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-150 space-y-2 mt-4">
            <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest block">
              {lang === 'id' ? 'Mitra Industri Kurikulum & Penempatan' : 'Industry Partners for Career & Curriculum'}
            </span>
            <div className="flex flex-wrap gap-3">
              {programData.partners.map((partner) => (
                <span 
                  key={partner}
                  className="bg-white border border-neutral-200 px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-700"
                >
                  🤝 {partner}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
