import React, { useState } from 'react';
import { Award, BookOpen, Clock, ShieldCheck, HeartHandshake, Eye, Target, MapPin, Building, Calendar } from 'lucide-react';
import { Lang } from '../types';
import { DICTIONARY } from '../data/initialData';

interface ProfileViewProps {
  lang: Lang;
}

export default function ProfileView({ lang }: ProfileViewProps) {
  const dict = DICTIONARY[lang];
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visi_misi' | 'struktur' | 'identitas'>('sejarah');

  const identityRows = [
    { label: 'Nama Sekolah', value: 'SMK Muhammadiyah Randublatung' },
    { label: 'NPSN', value: '20314923' },
    { label: 'Akreditasi', value: 'A (Sangat Baik)' },
    { label: 'Status Sekolah', value: 'Swasta / Dibawah Perserikatan Muhammadiyah' },
    { label: 'Tahun Berdiri', value: '1995' },
    { label: 'SK Bediri', value: '112/I03/I/1995' },
    { label: 'Alamat Lengkap', value: 'Jl. Raya Randublatung - Cepu No. 17, Blora, Jawa Tengah' },
    { label: 'Kode Pos', value: '58382' },
    { label: 'No. Telepon / Fax', value: '(0296) 810173' },
    { label: 'Email Resmi', value: 'smkmuh_rbl@yahoo.co.id' },
  ];

  const organizationStaff = [
    { name: 'Suwito, S.Pd., M.T.', role: lang === 'id' ? 'Kepala Sekolah' : 'School Principal', phone: '+6281xxxxxx' },
    { name: 'Muryanto, S.Pd.', role: lang === 'id' ? 'Waka Kurikulum' : 'VP Curriculum', phone: '+6281xxxxxx' },
    { name: 'Suhartono, S.T.', role: lang === 'id' ? 'Waka Kesiswaan' : 'VP Student Affairs', phone: '+6281xxxxxx' },
    { name: 'Rina Wijayanti, S.E.', role: lang === 'id' ? 'Bendahara Sekolah' : 'School Treasurer', phone: '+6281xxxxxx' },
    { name: 'Ir. Agus Setyawan', role: lang === 'id' ? 'Koordinator BKK & Hubungan Industri' : 'Industry Link Coordinator', phone: '+6281xxxxxx' },
  ];

  return (
    <div id="profile-view" className="space-y-8 pb-12">
      {/* Title Header banner */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <BookOpen size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">{dict.menuProfile}</h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {lang === 'id' 
              ? 'Mengenal lebih dekat sejarah berdiri, struktur manajemen, mimpi luhur, dan identitas resmi sekolah kami.' 
              : 'Discover our brief history, organizational framework, Islamic vision and official identity.'}
          </p>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex border-b border-neutral-200 overflow-x-auto gap-2 p-1 bg-neutral-50/50 rounded-xl">
        <button 
          onClick={() => setActiveTab('sejarah')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'sejarah' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <Clock size={15} /> {dict.profileHistory}
        </button>
        <button 
          onClick={() => setActiveTab('visi_misi')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'visi_misi' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <ShieldCheck size={15} /> {dict.profileVision}
        </button>
        <button 
          onClick={() => setActiveTab('struktur')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'struktur' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <HeartHandshake size={15} /> {dict.profileStructure}
        </button>
        <button 
          onClick={() => setActiveTab('identitas')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'identitas' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <Building size={15} /> {dict.profileIdentity}
        </button>
      </div>

      {/* Detail Contents */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-6 md:p-8 min-h-[300px]">
        {activeTab === 'sejarah' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
              <Clock className="text-blue-700" /> {dict.profileHistory}
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4 text-neutral-600 text-sm leading-relaxed">
                <p>
                  {lang === 'id' 
                    ? 'SMK Muhammadiyah Randublatung didirikan pada tahun 1995 di bawah naungan Pimpinan Cabang Muhammadiyah Randublatung, Kabupaten Blora. Pendirian ini dipicu oleh terbatasnya lembaga pendidikan kejuruan bermutu di daerah Blora bagian selatan pada era tersebut, sedangkan kebutuhan pasar tenaga kerja industri manufaktur dan agro-industri terus bertambah tinggi.'
                    : 'SMK Muhammadiyah Randublatung was established in 1995 under the direct administration of the Muhammadiyah Branch in Randublatung, Blora Regency. The venture arose due to the shortage of premier vocational institutions in southern Blora at that time, contrasted by high market demands for skilled industrial workers.'}
                </p>
                <p>
                  {lang === 'id'
                    ? 'Pada awal perjalanannya, sekolah ini hanya berfokus pada keahlian mesin otomotif umum. Seiring perkembangan teknologi nasional, sekolah mendirikan program unggulan khusus teknik alat berat, disusul oleh teknik komputer & jaringan guna memandu revolusi telekomunikasi digital.'
                    : 'In the embryonic phases, the training only focused on basic vehicle repairs. Along with national tech enhancements, a state-of-the-art heavy machinery path was appended, followed by computer network configurations to anchor digital networks.'}
                </p>
                <p>
                  {lang === 'id'
                    ? 'Hari ini, SMK Muhammadiyah Randublatung diakui sebagai salah satu sekolah rujukan nasional di Blora yang memadukan keunggulan kompetensi sains dengan pembentukan akhlak mulia kepanduan Hizbul Wathan dan Tapak Suci putera Muhammadiyah.'
                    : 'Today, the institution stands as one of Blora\'s reference schools, successfully fusing outstanding industrial skills with the solid ethical foundations nurtured via Hizbul Wathan scouting and Tapak Suci martial arts.'}
                </p>
              </div>
              <div className="lg:col-span-4 bg-blue-50 border border-blue-150 rounded-2xl p-5 space-y-4">
                <h4 className="font-sans font-bold text-blue-900 text-sm">{lang === 'id' ? 'Milestones Utama' : 'Milestones'}</h4>
                <div className="space-y-3.5 relative pl-4 border-l border-blue-300">
                  <div className="relative">
                    <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-blue-700" />
                    <span className="font-mono font-bold text-xs text-blue-800 block">1995</span>
                    <span className="text-[11px] text-neutral-600 block leading-tight">{lang === 'id' ? 'Sekolah Resmi Berdiri' : 'Official Grounding'}</span>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-blue-700" />
                    <span className="font-mono font-bold text-xs text-blue-800 block">2010</span>
                    <span className="text-[11px] text-neutral-600 block leading-tight">{lang === 'id' ? 'Pendirian Teknik Alat Berat (TAB) pertama di Blora' : 'Heavy machinery engineering setup'}</span>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-blue-700" />
                    <span className="font-mono font-bold text-xs text-blue-800 block">2018</span>
                    <span className="text-[11px] text-neutral-600 block leading-tight">{lang === 'id' ? 'Peringkat Akreditasi A Berstandar ISO' : 'ISO Compliance & A Accreditation'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visi_misi' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="bg-blue-900/5 border border-blue-900/10 rounded-2xl p-6 space-y-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                  <Eye size={20} />
                </div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">Visi Sekolah</h2>
                <div className="w-10 h-1 bg-blue-600 rounded-full" />
                <p className="text-neutral-700 text-sm md:text-base italic leading-relaxed font-sans font-medium">
                  {lang === 'id'
                    ? '"Mewujudkan lembaga pendidikan vokasional Islam yang unggul, menghasilkan lulusan berakhlak mulia, berkarakter disiplin Muhammadiyah, serta kompeten bersaing di pasar global."'
                    : '"To establish a premier Islamic vocational institution producing highly disciplined Muhammadiyah alumni holding noble ethics, globally competent in advanced engineering markets."'}
                </p>
              </div>

              {/* Misi */}
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 space-y-4">
                <div className="bg-amber-500 text-neutral-950 w-10 h-10 rounded-xl flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">Misi Sekolah</h2>
                <div className="w-10 h-1 bg-amber-500 rounded-full" />
                <ul className="space-y-3.5 text-neutral-700 text-xs md:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded text-[10px] mt-0.5">1</span>
                    <span>{lang === 'id' ? 'Menyelenggarakan sistem pengajaran Islam tajwid & akhlak guna membentuk karakter keimanan tinggi.' : 'Running detailed Islamic sessional modules to structure excellent ethical standards.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded text-[10px] mt-0.5">2</span>
                    <span>{lang === 'id' ? 'Menerapkan kurikulum berbasis link and match industri manufaktur nasional modern.' : 'Partnering directly with modern national manufacturing companies to implement joint curriculum.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded text-[10px] mt-0.5">3</span>
                    <span>{lang === 'id' ? 'Mengakselerasi penyaluran karir alumni langsung setelah lulus lewat BKK (Bursa Kerja Khusus).' : 'Securing instant recruitment channels for graduates via BKK job centers.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'struktur' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
              <Building className="text-blue-700" /> {dict.profileStructure}
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <p className="text-neutral-500 text-xs">
              {lang === 'id' 
                ? 'Struktur manajemen operasional SMK Muhammadiyah Randublatung yang bersinergi mendukung kelancaran administrasi.' 
                : 'Operational management directory of SMK Muhammadiyah Randublatung working hand in hand.'}
            </p>

            {/* Hierarchical tree visualization */}
            <div className="space-y-4 max-w-2xl mx-auto pt-4">
              {organizationStaff.map((staff, i) => (
                <div 
                  key={staff.name}
                  className={`border rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:bg-neutral-50 ${i === 0 ? 'bg-blue-550 border-blue-600 text-white bg-blue-800' : 'bg-white border-neutral-150 text-neutral-800'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm ${i === 0 ? 'bg-amber-400 text-blue-950' : 'bg-blue-50 text-blue-700'}`}>
                      {staff.name.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm">{staff.name}</h4>
                      <p className={`text-[11px] font-semibold tracking-wider uppercase ${i === 0 ? 'text-blue-150' : 'text-blue-700'}`}>{staff.role}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] px-3 py-1 rounded-full ${i === 0 ? 'bg-blue-700 text-blue-250 border border-blue-600' : 'bg-neutral-100 text-neutral-500'}`}>
                    Active Level Staff
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'identitas' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
              <Award className="text-blue-700" /> {dict.profileIdentity}
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl pt-2">
              {identityRows.map((row) => (
                <div 
                  key={row.label}
                  className="p-4 bg-neutral-50 border border-neutral-150 rounded-2xl space-y-1 hover:border-blue-200 transition-colors"
                >
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">{row.label}</span>
                  <span className="text-neutral-800 font-sans font-medium text-xs md:text-sm block leading-normal">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
