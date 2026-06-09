import React, { useState } from 'react';
import { Briefcase, MapPin, Users, HeartHandshake, FileText, Send, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';
import { Lang, JobVacancy, Partner, AlumniData } from '../types';
import { DICTIONARY } from '../data/initialData';

interface BkkViewProps {
  lang: Lang;
  jobs: JobVacancy[];
  partners: Partner[];
  alumni: AlumniData[];
  onAddAlumni: (alumni: AlumniData) => void;
}

export default function BkkView({ lang, jobs, partners, alumni, onAddAlumni }: BkkViewProps) {
  const dict = DICTIONARY[lang];
  const [activeTab, setActiveTab] = useState<'vacancies' | 'tracer' | 'partners'>('vacancies');

  // Job detail selection
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  // Tracer Study Form fields
  const [alumniName, setAlumniName] = useState('');
  const [alumniNisn, setAlumniNisn] = useState('');
  const [alumniYear, setAlumniYear] = useState('2025');
  const [alumniStatus, setAlumniStatus] = useState<'bekerja' | 'kuliah' | 'wirausaha' | 'mencari_kerja'>('bekerja');
  const [workPlace, setWorkPlace] = useState('');
  const [salary, setSalary] = useState('');
  const [phone, setPhone] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Calculate tracer statistics based on dynamic student database
  const totalAlumniNum = alumni.length;
  const bekerjaNum = alumni.filter(a => a.currentStatus === 'bekerja').length;
  const kuliahNum = alumni.filter(a => a.currentStatus === 'kuliah').length;
  const wirausahaNum = alumni.filter(a => a.currentStatus === 'wirausaha').length;
  const mencariNum = alumni.filter(a => a.currentStatus === 'mencari_kerja').length;

  const bekerjaPct = totalAlumniNum ? Math.round((bekerjaNum / totalAlumniNum) * 100) : 0;
  const kuliahPct = totalAlumniNum ? Math.round((kuliahNum / totalAlumniNum) * 100) : 0;
  const wirausahaPct = totalAlumniNum ? Math.round((wirausahaNum / totalAlumniNum) * 100) : 0;
  const mencariPct = totalAlumniNum ? Math.round((mencariNum / totalAlumniNum) * 100) : 0;

  const handleTracerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alumniNisn.length !== 10 || isNaN(Number(alumniNisn))) {
      alert(lang === 'id' ? 'NISN harus bertipe angka dengan panjang 10 digit!' : 'NISN must be exactly 10 digit numbers!');
      return;
    }

    const newAlumni: AlumniData = {
      id: `alm-${Date.now()}`,
      name: alumniName,
      nisn: alumniNisn,
      programId: 'tkj', // Default
      graduationYear: Number(alumniYear),
      currentStatus: alumniStatus,
      workPlace: workPlace || undefined,
      salaryRange: salary || undefined,
      phone: phone || undefined
    };

    onAddAlumni(newAlumni);
    setFormSuccess(true);
    // Reset forms
    setAlumniName('');
    setAlumniNisn('');
    setWorkPlace('');
    setSalary('');
    setPhone('');
  };

  return (
    <div id="bkk-view" className="space-y-8 pb-12">
      {/* Title Header block */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <Briefcase size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">Bursa Kerja Khusus (BKK) & Alumni Portal</h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {dict.bkkDesc}
          </p>
        </div>
      </div>

      {/* Internal Menu row */}
      <div className="flex border-b border-neutral-200 overflow-x-auto gap-2 p-1 bg-neutral-50 rounded-xl">
        <button 
          onClick={() => { setActiveTab('vacancies'); setSelectedJob(null); }}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'vacancies' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <Briefcase size={15} /> {dict.bkkVacancies}
        </button>
        <button 
          onClick={() => setActiveTab('tracer')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'tracer' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <Users size={15} /> {lang === 'id' ? 'Tracer Study Alumni' : 'Tracer Study Indicator'}
        </button>
        <button 
          onClick={() => setActiveTab('partners')}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeTab === 'partners' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <HeartHandshake size={15} /> {dict.bkkPartners}
        </button>
      </div>

      {/* CORE DISPLAY DECIDER */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-6 md:p-8">
        
        {/* TAB 1: LOWONGAN PEKERJAAN */}
        {activeTab === 'vacancies' && (
          <div className="space-y-6">
            {!selectedJob ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Informasi Lowongan Pekerjaan BKK' : 'Active Career Postings'}</h2>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mt-1.5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jobs.map((job) => (
                    <div 
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="border border-neutral-150 p-5 rounded-2xl flex flex-col md:flex-row items-start gap-4 hover:border-blue-500 cursor-pointer transition-all hover:bg-neutral-50/50"
                    >
                      <img src={job.logo} alt={job.company} className="w-12 h-12 object-cover rounded-xl border border-neutral-100/75 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div>
                          <span className="text-[10px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded uppercase">{job.status}</span>
                          <h4 className="font-sans font-bold text-neural-900 text-sm mt-1 leading-snug">{lang === 'id' ? job.title : job.titleEn}</h4>
                          <span className="text-[11px] text-neutral-500 block font-medium mt-0.5">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-medium">
                          <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                          <span>💰 {job.salary.split(' + ')[0]}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-2xl animate-fade-in mx-auto">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-neutral-200 text-xs text-neutral-700 font-bold hover:bg-neutral-50 rounded-xl cursor-pointer"
                >
                  ← {lang === 'id' ? 'Kembali' : 'Back'}
                </button>

                <div className="border border-neutral-150 p-6 rounded-3xl bg-neutral-50 space-y-5">
                  <div className="flex gap-4 items-start border-b border-neutral-200 pb-4">
                    <img src={selectedJob.logo} alt={selectedJob.company} className="w-14 h-14 object-cover rounded-xl border" />
                    <div>
                      <h3 className="font-sans font-bold text-neutral-900 text-base leading-snug">{lang === 'id' ? selectedJob.title : selectedJob.titleEn}</h3>
                      <p className="text-blue-800 text-xs font-bold mt-0.5">{selectedJob.company}</p>
                      <span className="text-[11px] text-neutral-400 font-mono mt-1 block">Posted: {selectedJob.postedDate}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">{lang === 'id' ? 'Persyaratan Pelamar' : 'Job Requirements'}</span>
                      <ul className="list-disc pl-5 text-neutral-700 text-xs md:text-sm space-y-1.5">
                        {lang === 'id' 
                          ? selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)
                          : selectedJob.requirementsEn.map((req, i) => <li key={i}>{req}</li>)
                        }
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4">
                      <div>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">{lang === 'id' ? 'Penempatan' : 'Location'}</span>
                        <span className="text-neutral-800 text-xs font-bold block">📍 {selectedJob.location}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">{lang === 'id' ? 'Kompensasi / Gaji' : 'Compensation'}</span>
                        <span className="text-neutral-800 text-xs font-bold block">💼 {selectedJob.salary}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => alert(lang === 'id' ? 'Lamaran Anda berhasil dikirim ke BKK SMK Muhammadiyah Randublatung!' : 'Application directly submitted to school BKK database!')}
                    className="w-full py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all active:scale-98"
                  >
                    🚀 {lang === 'id' ? 'Kirim Lamaran Kerja via BKK' : 'Apply for this Job'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TRACER STUDY ALUMNI */}
        {activeTab === 'tracer' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Input */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-sans font-extrabold text-neutral-900 tracking-tight">{dict.tracerFormTitle}</h3>
                  <p className="text-neutral-500 text-xs">{dict.tracerFormDesc}</p>
                </div>

                {formSuccess ? (
                  <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl text-center space-y-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="font-sans font-bold text-neutral-900 text-sm">{lang === 'id' ? 'Data Tracer Berhasil Dikirim!' : 'Tracer Data Logged!'}</p>
                    <p className="text-neutral-500 text-[11px] leading-relaxed">{lang === 'id' ? 'Terima kasih atas kontribusi Anda mendukung pengembangan kualitas akreditasi sekolah.' : 'Thanks for contributing to our alumni tracker and statistics database.'}</p>
                    <button 
                      onClick={() => setFormSuccess(false)}
                      className="px-4 py-1.5 bg-blue-800 hover:bg-blue-950 text-white text-xs font-bold rounded-lg transition-all"
                    >
                      {lang === 'id' ? 'Isi Lagi' : 'Input Another'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleTracerSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'Nama Alumni' : 'Alumni Name'}</label>
                        <input 
                          type="text" 
                          required 
                          value={alumniName}
                          onChange={(e) => setAlumniName(e.target.value)}
                          placeholder="e.g. Suharianto"
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'NISN (10 Digit)' : 'NISN (10 Digits)'}</label>
                        <input 
                          type="text" 
                          maxLength={10} 
                          required 
                          value={alumniNisn}
                          onChange={(e) => setAlumniNisn(e.target.value)}
                          placeholder="005xxxx"
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'Tahun Kelulusan' : 'Graduation Year'}</label>
                        <select 
                          value={alumniYear}
                          onChange={(e) => setAlumniYear(e.target.value)}
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        >
                          <option value="2026">2026</option>
                          <option value="2025">2025</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'Status Keterserapan' : 'Current Employment'}</label>
                        <select 
                          value={alumniStatus}
                          onChange={(e) => setAlumniStatus(e.target.value as any)}
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        >
                          <option value="bekerja">{lang === 'id' ? 'Bekerja' : 'Working'}</option>
                          <option value="kuliah">{lang === 'id' ? 'Kuliah' : 'College University'}</option>
                          <option value="wirausaha">{lang === 'id' ? 'Wirausaha' : 'Entrepreneur'}</option>
                          <option value="mencari_kerja">{lang === 'id' ? 'Mencari Kerja' : 'Jobseeking'}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'Nama instansi Tempat Kerja / Kuliah / Usaha' : 'Workplace / University / Business Name'}</label>
                      <input 
                        type="text" 
                        value={workPlace}
                        onChange={(e) => setWorkPlace(e.target.value)}
                        placeholder="PT Astra / Universitas Gadjah Mada"
                        className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'Kisaran Gaji per Bulan' : 'Monthly Salary Range'}</label>
                        <input 
                          type="text" 
                          value={salary}
                          onChange={(e) => setSalary(e.target.value)}
                          placeholder="Rp 4.000.000 - Rp 6.000.000"
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-neutral-600 text-[11px] font-semibold block">{lang === 'id' ? 'No. WhatsApp' : 'WA Phone'}</label>
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0812xxxxx"
                          className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-98"
                    >
                      <Send size={14} /> {lang === 'id' ? 'Kirim Data Tracer' : 'Save Tracer Study Log'}
                    </button>
                  </form>
                )}
              </div>

              {/* Data Visualization Pure SVG Chart */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-lg font-sans font-extrabold text-neutral-900 tracking-tight flex items-center gap-1.5">
                    <TrendingUp className="text-blue-700" />
                    {lang === 'id' ? 'Statistik Distribusi Alumni' : 'Alumni Placement Metrics'}
                  </h3>
                  <p className="text-neutral-500 text-xs">{lang === 'id' ? 'Presentase sebaran karir alumni berdasarkan database tracer saat ini.' : 'Percentage of overall alumni employment distribution across categories.'}</p>
                </div>

                <div className="border border-neutral-150 p-6 rounded-3xl bg-neutral-50/70 space-y-6">
                  {/* Visual SVG Chart Doughnut Mockup (Pure SVG, very fast load!) */}
                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                    <svg viewBox="0 0 100 100" className="w-36 h-36">
                      {/* Circle 1 - Mencari Kerja (Orange) */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#F59E0B" strokeWidth="15" strokeDasharray={`${mencariPct} 100`} strokeDashoffset="0" />
                      {/* Circle 2 - Wirausaha (Blue) */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#3B82F6" strokeWidth="15" strokeDasharray={`${wirausahaPct} 100`} strokeDashoffset={`-${mencariPct}`} />
                      {/* Circle 3 - Kuliah (Purple) */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#8B5CF6" strokeWidth="15" strokeDasharray={`${kuliahPct} 100`} strokeDashoffset={`-${mencariPct + wirausahaPct}`} />
                      {/* Circle 4 - Bekerja (Blue-600) */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#2563EB" strokeWidth="15" strokeDasharray={`${bekerjaPct} 100`} strokeDashoffset={`-${mencariPct + wirausahaPct + kuliahPct}`} />
                      
                      <circle cx="50" cy="50" r="22" fill="#F9FAFB" />
                      <text x="50" y="52" fontSize="5.5" fontWeight="extrabold" fill="#0F172A" textAnchor="middle" fontFamily="sans-serif">{bekerjaPct}%</text>
                      <text x="50" y="58" fontSize="3" fontWeight="bold" fill="#64748B" textAnchor="middle" fontFamily="sans-serif">BEKERJA</text>
                    </svg>

                    {/* Legends info details with dynamic count percentage numbers */}
                    <div className="space-y-3 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-blue-600 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-neutral-800 leading-none block">{lang === 'id' ? 'Bekerja' : 'Working'}</span>
                          <span className="text-[10px] text-neutral-400 font-medium block">{bekerjaNum} Alumni ({bekerjaPct}%)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-purple-500 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-neutral-800 leading-none block">{lang === 'id' ? 'Kuliah' : 'College / Uni'}</span>
                          <span className="text-[10px] text-neutral-400 font-medium block">{kuliahNum} Alumni ({kuliahPct}%)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-blue-500 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-neutral-800 leading-none block">{lang === 'id' ? 'Wirausaha' : 'Entrepreneur'}</span>
                          <span className="text-[10px] text-neutral-400 font-medium block">{wirausahaNum} Alumni ({wirausahaPct}%)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-amber-500 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-neutral-800 leading-none block">{lang === 'id' ? 'Mencari Kerja' : 'Jobseeking'}</span>
                          <span className="text-[10px] text-neutral-400 font-medium block">{mencariNum} Alumni ({mencariPct}%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/95 border border-neutral-100 rounded-2xl text-[11px] text-neutral-500 leading-relaxed text-center">
                    {lang === 'id' 
                      ? 'Total data alumni terkumpul secara sukarela saat ini: ' 
                      : 'Accumulated secure alumni records: ' }
                    <strong className="text-neutral-850">{totalAlumniNum} Alumni</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: MITRA SEKOLAH */}
        {activeTab === 'partners' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Mitra Industri SMK MUSA' : 'Our Industry Partners Network'}</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-1.5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="border border-neutral-150 p-5 bg-neutral-50/70 border border-neutral-200/60 rounded-2xl flex items-start gap-4 transition-all hover:bg-white hover:border-blue-500 hover:shadow-xs"
                >
                  <img src={partner.logo} alt={partner.name} className="w-14 h-14 object-cover rounded-xl border border-neutral-200 shrink-0" />
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-[9px] bg-blue-50 text-blue-800 border border-blue-100 font-bold px-2 py-0.5 rounded uppercase tracking-wider block w-max">{partner.type}</span>
                      <h4 className="font-sans font-bold text-neutral-900 text-sm mt-1">{partner.name}</h4>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      {lang === 'id' ? partner.description : partner.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
