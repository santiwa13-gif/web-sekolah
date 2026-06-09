import React, { useState, useEffect } from 'react';
import { BookOpen, UserCheck, Search, HelpCircle, FileText, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Lang, SpmbRegistration } from '../types';
import { DICTIONARY } from '../data/initialData';
import { supabase } from '../lib/supabaseClient';


interface SpmbViewProps {
  lang: Lang;
  registrations: SpmbRegistration[];
  onAddRegistration: (reg: SpmbRegistration) => void;
}

export default function SpmbView({ lang, registrations, onAddRegistration }: SpmbViewProps) {
  const dict = DICTIONARY[lang];
  const [activeFormTab, setActiveFormTab] = useState<'info' | 'daftar' | 'status'>('info');

  // Registration Form Fields
  const [fullName, setFullName] = useState(() => localStorage.getItem('musa_spmb_fullName') || '');
  const [nisn, setNisn] = useState(() => localStorage.getItem('musa_spmb_nisn') || '');
  const [birthPlace, setBirthPlace] = useState(() => localStorage.getItem('musa_spmb_birthPlace') || '');
  const [birthDate, setBirthDate] = useState(() => localStorage.getItem('musa_spmb_birthDate') || '');
  const [gender, setGender] = useState<'L' | 'P'>(() => (localStorage.getItem('musa_spmb_gender') as 'L' | 'P') || 'L');
  const [phone, setPhone] = useState(() => localStorage.getItem('musa_spmb_phone') || '');
  const [parentPhone, setParentPhone] = useState(() => localStorage.getItem('musa_spmb_parentPhone') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('musa_spmb_email') || '');
  const [address, setAddress] = useState(() => localStorage.getItem('musa_spmb_address') || '');
  const [programChoice1, setProgramChoice1] = useState<'tkr' | 'tab' | 'tsm' | 'tkj'>(() => (localStorage.getItem('musa_spmb_programChoice1') as 'tkr' | 'tab' | 'tsm' | 'tkj') || 'tkj');
  const [programChoice2, setProgramChoice2] = useState<'tkr' | 'tab' | 'tsm' | 'tkj'>(() => (localStorage.getItem('musa_spmb_programChoice2') as 'tkr' | 'tab' | 'tsm' | 'tkj') || 'tkj');

  // Sync Spmb form inputs to localStorage
  useEffect(() => {
    localStorage.setItem('musa_spmb_fullName', fullName);
  }, [fullName]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_nisn', nisn);
  }, [nisn]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_birthPlace', birthPlace);
  }, [birthPlace]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_birthDate', birthDate);
  }, [birthDate]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_gender', gender);
  }, [gender]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_phone', phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_parentPhone', parentPhone);
  }, [parentPhone]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_address', address);
  }, [address]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_programChoice1', programChoice1);
  }, [programChoice1]);

  useEffect(() => {
    localStorage.setItem('musa_spmb_programChoice2', programChoice2);
  }, [programChoice2]);

  // Form Submitting Feedback
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Status Check Field
  const [searchNisn, setSearchNisn] = useState('');
  const [foundStatus, setFoundStatus] = useState<SpmbRegistration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const majorOptions = [
    { key: 'tkj', label: 'Teknik Komputer & Jaringan (TKJ)' },
    { key: 'tkr', label: 'Teknik Kendaraan Ringan (TKR)' },
    { key: 'tab', label: 'Teknik Alat Berat (TAB)' },
    { key: 'tsm', label: 'Teknik Sepeda Motor (TSM)' },
  ];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setErrorMessage('');

    if (nisn.length !== 10 || isNaN(Number(nisn))) {
      setErrorMessage(lang === 'id' ? 'NISN harus bertipe angka dengan panjang 10 digit!' : 'NISN must be exactly 10 digits numeric values!');
      return;
    }

    // Check if NISN already registered
    const exists = registrations.find(r => r.nisn === nisn);
    if (exists) {
      setErrorMessage(lang === 'id' ? 'NISN ini sudah terdaftar dalam sistem!' : 'This NISN has already been registered in the system!');
      return;
    }

    const registrationNumber = `SPMB-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newReg: SpmbRegistration = {
      id: `reg-${Date.now()}`,
      registrationNumber,
      fullName,
      nisn,
      birthPlace,
      birthDate,
      gender,
      phone,
      parentPhone,
      email,
      address,
      programChoice1,
      programChoice2,
      status: 'pending',
      createdDate: new Date().toISOString().split('T')[0]
    };

    // Cek apakah konfigurasi Supabase aktif di file .env
    const isSupabaseConfigured = 
      (import.meta as any).env.VITE_SUPABASE_URL && 
      (import.meta as any).env.VITE_SUPABASE_ANON_KEY &&
      !(import.meta as any).env.VITE_SUPABASE_URL.includes('placeholder');

    if (isSupabaseConfigured) {
      // Data mapping menyesuaikan struktur kolom tabel SQL database
      const rowToInsert = {
        id: newReg.id,
        registration_number: newReg.registrationNumber,
        full_name: newReg.fullName,
        nisn: newReg.nisn,
        birth_place: newReg.birthPlace,
        birth_date: newReg.birthDate,
        gender: newReg.gender,
        phone: newReg.phone,
        parent_phone: newReg.parentPhone,
        email: newReg.email,
        address: newReg.address,
        program_choice_1: newReg.programChoice1,
        program_choice_2: newReg.programChoice2,
        status: newReg.status,
        created_date: newReg.createdDate
      };

      supabase
        .from('registrations')
        .insert([rowToInsert])
        .then(({ error }) => {
          if (error) {
            console.error('Supabase DB Insert Error:', error);
            setErrorMessage(lang === 'id' 
              ? `Gagal sinkronisasi data ke Supabase Cloud: ${error.message}` 
              : `Failed to insert record to Supabase database: ${error.message}`);
          } else {
            console.log('Successfully inserted SPMB registration row to database!');
            // Panggil callback state lokal agar UI tersinkronisasi
            onAddRegistration(newReg);
            setSubmitSuccess(registrationNumber);
            
            // Reset input form
            setFullName('');
            setNisn('');
            setBirthPlace('');
            setBirthDate('');
            setPhone('');
            setParentPhone('');
            setEmail('');
            setAddress('');
          }
        });
    } else {
      // Jika Supabase .env belum diisi lengkap, fallback otomatis ke offline state / localStorage agar web tidak crash
      console.log('Using offline state fallback (Supabase .env variables not defined)');
      onAddRegistration(newReg);
      setSubmitSuccess(registrationNumber);
      
      // Reset input form
      setFullName('');
      setNisn('');
      setBirthPlace('');
      setBirthDate('');
      setPhone('');
      setParentPhone('');
      setEmail('');
      setAddress('');
    }
  };

  const handleStatusSearch = () => {
    setHasSearched(true);
    const lookup = registrations.find(r => r.nisn.trim() === searchNisn.trim() || r.registrationNumber.toUpperCase().trim() === searchNisn.toUpperCase().trim());
    if (lookup) {
      setFoundStatus(lookup);
    } else {
      setFoundStatus(null);
    }
  };

  return (
    <div id="spmb-view" className="space-y-8 pb-12">
      {/* Upper info banner */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <UserCheck size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">{dict.spmbTitle}</h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {dict.spmbDesc}
          </p>
        </div>
      </div>

      {/* Internal Navigation tabs */}
      <div className="flex border-b border-neutral-200 overflow-x-auto gap-2 p-1 bg-neutral-50 rounded-xl">
        <button 
          onClick={() => { setActiveFormTab('info'); setSubmitSuccess(null); }}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeFormTab === 'info' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <HelpCircle size={15} /> {lang === 'id' ? 'Panduan & Alur' : 'Guidelines & Flow'}
        </button>
        <button 
          onClick={() => { setActiveFormTab('daftar'); setSubmitSuccess(null); }}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeFormTab === 'daftar' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <FileText size={15} /> {lang === 'id' ? 'Formulir Pendaftaran' : 'Registration Form'}
        </button>
        <button 
          onClick={() => { setActiveFormTab('status'); setSubmitSuccess(null); }}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeFormTab === 'status' ? 'bg-blue-800 text-white shadow-xs' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`}
        >
          <Search size={15} /> {dict.spmbCheckStatus}
        </button>
      </div>

      {/* Core Displays */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-6 md:p-8">
        
        {/* VIEW 1: INFO PANDUAN */}
        {activeFormTab === 'info' && (
          <div className="space-y-6">
            <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{dict.spmbSteps}</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 space-y-3">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-sans font-bold text-sm">1</span>
                <h4 className="font-sans font-bold text-neutral-800 text-sm">{lang === 'id' ? 'Isi Formulir Online' : 'Online Application'}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {lang === 'id' 
                    ? 'Lengkapi data identitas calon siswa, NISN dari Kemendikbud, serta nomor handphone wali murid aktif.' 
                    : 'Fill up your biodata details, state standard school code NISN, and primary mobile contacts.'}
                </p>
              </div>

              <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 space-y-3">
                <span className="w-8 h-8 rounded-xl bg-orange-50 text-orange-850 flex items-center justify-center font-sans font-bold text-sm">2</span>
                <h4 className="font-sans font-bold text-neutral-800 text-sm">{lang === 'id' ? 'Verifikasi Fisik & Tes Kesehatan' : 'Diagnostic Checkup'}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {lang === 'id' 
                    ? 'Bawa fotokopi rapor SMP ke panitia pendaftaran. Untuk program TKR, TSM, dan TAB menyertakan tes bebas buta warna.' 
                    : 'Submit physical transcripts. Heavy machinery candidates undergo a non-colorblind assessment.'}
                </p>
              </div>

              <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 space-y-3">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-sans font-bold text-sm">3</span>
                <h4 className="font-sans font-bold text-neutral-800 text-sm">{lang === 'id' ? 'Pengumuman Hasil Kelulusan' : 'Result Clearance'}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {lang === 'id' 
                    ? 'Hasil seleksi diumumkan berkala. Siswa dapat memantau status secara langsung di menu "Cek Status" menggunakan nomor NISN.' 
                    : 'Track results by searching your NISN code directly under "Check Status" anytime.'}
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 text-blue-850 rounded-2xl border border-blue-150 font-sans text-xs leading-relaxed space-y-1.5">
              <p className="font-bold">📝 {lang === 'id' ? 'Syarat Berkas Ulang (Setelah Diterima):' : 'Re-registration Checklist:'}</p>
              <p>• {lang === 'id' ? 'Fotokopi Ijazah SMP / Surat Keterangan Lulus (SKL)' : 'Copy of Middle School Certificates'}</p>
              <p>• {lang === 'id' ? 'Fotokopi Akta Kelahiran & Kartu Keluarga (KK)' : 'Copy of Birth Certificate & Family Census Paper'}</p>
              <p>• {lang === 'id' ? 'Pas foto terbaru ukuran 3x4 berwarna merah (3 lembar)' : '3 pieces of latest 3x4 formal photo with red backdrop'}</p>
            </div>
          </div>
        )}

        {/* VIEW 2: FORM REGISTRATION */}
        {activeFormTab === 'daftar' && (
          <div className="space-y-6">
            {submitSuccess ? (
              <div className="bg-blue-50 border border-blue-250 p-6 rounded-2xl space-y-4 max-w-md mx-auto text-center border-blue-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-neutral-900 text-lg">{lang === 'id' ? 'Pendaftaran Sukses!' : 'Registration Completed!'}</h3>
                  <p className="text-neutral-600 text-xs mt-1">{dict.registerSuccess}</p>
                  <p className="font-mono bg-white font-bold text-blue-800 text-lg border border-blue-200 py-2 rounded-xl mt-3 tracking-wider">{submitSuccess}</p>
                </div>
                <div className="flex gap-2.5 pt-2">
                  <button 
                    onClick={() => { setSearchNisn(nisn); setActiveFormTab('status'); handleStatusSearch(); }}
                    className="flex-1 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-all"
                  >
                    {lang === 'id' ? 'Cek Status Sekarang' : 'Cek Status Sekarang'}
                  </button>
                  <button 
                    onClick={() => setSubmitSuccess(null)}
                    className="flex-1 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-lg transition-all"
                  >
                    {lang === 'id' ? 'Daftar Baru Lagi' : 'Registry Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-6 max-w-3xl">
                <div>
                  <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{dict.spmbRegisterForm}</h2>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mt-1.5" />
                </div>

                {errorMessage && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg flex items-center gap-2.5 text-xs text-red-800">
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Sub-section: Personal Info */}
                <div className="space-y-4">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">{dict.personalData}</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Nama Lengkap Siswa' : 'Full Student Name'}</label>
                      <input 
                        type="text" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rizky Wijaya" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'NISN (10 Digit)' : 'NISN (10 Digits)'}</label>
                      <input 
                        type="text" 
                        maxLength={10}
                        required 
                        value={nisn}
                        onChange={(e) => setNisn(e.target.value)}
                        placeholder="e.g. 0109283712" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Tempat Lahir' : 'Birthplace'}</label>
                      <input 
                        type="text" 
                        required 
                        value={birthPlace}
                        onChange={(e) => setBirthPlace(e.target.value)}
                        placeholder="Blora" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Tanggal Lahir' : 'Birth Date'}</label>
                      <input 
                        type="date" 
                        required 
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Jenis Kelamin' : 'Gender'}</label>
                      <select 
                        value={gender}
                        onChange={(e) => setGender(e.target.value as 'L' | 'P')}
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      >
                        <option value="L">{lang === 'id' ? 'Laki-laki' : 'Male'}</option>
                        <option value="P">{lang === 'id' ? 'Perempuan' : 'Female'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'No. WhatsApp Siswa' : 'Wa Mobile Student'}</label>
                      <input 
                        type="tel" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0813xxxx" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'No. WhatsApp Wali / Orang Tua' : 'Wa Parent Mobile'}</label>
                      <input 
                        type="tel" 
                        required 
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        placeholder="0852xxxx" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{dict.email}</label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. user@gmail.com" 
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-600 text-xs font-semibold block">{dict.address}</label>
                    <textarea 
                      required 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Dukuh Randublatung Barat RT 02/01, Blora" 
                      rows={2}
                      className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                    />
                  </div>
                </div>

                {/* Sub-section: Major choices */}
                <div className="space-y-4 pt-2">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">{dict.academicChoice}</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Pilihan Jurusan Utama' : 'First Majoring Choice'}</label>
                      <select 
                        value={programChoice1}
                        onChange={(e) => setProgramChoice1(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      >
                        {majorOptions.map((opt) => (
                          <option key={opt.key} value={opt.key}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Pilihan Jurusan Cadangan' : 'Backup Majoring Choice'}</label>
                      <select 
                        value={programChoice2}
                        onChange={(e) => setProgramChoice2(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 bg-neutral-50/70 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white text-neutral-800"
                      >
                        {majorOptions.map((opt) => (
                          <option key={opt.key} value={opt.key}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  id="final-spmb-submit"
                  type="submit"
                  className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-sans font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-lg active:scale-98"
                >
                  <Send size={16} /> {lang === 'id' ? 'Kirim Pendaftaran SPMB' : 'Submit Admission Record'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* VIEW 3: CHECK STATUS */}
        {activeFormTab === 'status' && (
          <div className="space-y-6 max-w-md mx-auto">
            <div className="text-center space-y-1">
              <h2 className="text-lg font-sans font-extrabold text-neutral-900 tracking-tight">{dict.spmbCheckStatus}</h2>
              <p className="text-neutral-500 text-xs">{lang === 'id' ? 'Masukkan nomor NISN siswa yang telah didaftarkan sebelumnya.' : 'Enter registered NISN number to check admission verification progress.'}</p>
            </div>

            <div className="flex gap-2.5">
              <input 
                id="spmb-lookup-input"
                type="text" 
                value={searchNisn}
                onChange={(e) => setSearchNisn(e.target.value)}
                placeholder="e.g. 0109283712" 
                className="flex-grow px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:bg-white"
              />
              <button 
                id="spmb-lookup-btn"
                onClick={handleStatusSearch}
                className="px-5 py-2.5 bg-blue-800 hover:bg-blue-950 text-white font-bold text-xs rounded-xl transition-all"
              >
                {lang === 'id' ? 'Cari' : 'Search'}
              </button>
            </div>

            {hasSearched && (
              <div id="spmb-result-container" className="pt-4 animate-fade-in">
                {foundStatus ? (
                  <div className="border border-neutral-150 p-5 rounded-2xl bg-neutral-50 space-y-4">
                    <div className="flex justify-between items-start border-b border-neutral-200 pb-3">
                      <div>
                        <span className="text-[10px] text-neutral-400 font-mono block">{foundStatus.registrationNumber}</span>
                        <h4 className="font-sans font-bold text-neutral-900 text-sm">{foundStatus.fullName}</h4>
                      </div>
                      
                      {/* Interactive badge based on status code */}
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase ${
                        foundStatus.status === 'diverifikasi' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                        foundStatus.status === 'diterima' ? 'bg-blue-50 text-blue-800 border border-blue-100' :
                        foundStatus.status === 'ditolak' ? 'bg-red-50 text-red-800 border border-red-100' :
                        'bg-amber-50 text-amber-800 border border-amber-100'
                      }`}>
                        {foundStatus.status === 'diverifikasi' && (lang === 'id' ? 'Diverifikasi' : 'Verified')}
                        {foundStatus.status === 'diterima' && (lang === 'id' ? 'Diterima' : 'Accepted')}
                        {foundStatus.status === 'ditolak' && (lang === 'id' ? 'Ditolak' : 'Declined')}
                        {foundStatus.status === 'pending' && (lang === 'id' ? 'Menunggu Review' : 'Pending')}
                      </span>
                    </div>

                    <div className="space-y-3.5 text-xs text-neutral-600">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[10px] font-bold text-neutral-400 uppercase block">{lang === 'id' ? 'Pilihan 1' : 'Preference 1'}</span>
                          <span className="font-semibold text-neutral-800 block">{foundStatus.programChoice1.toUpperCase()}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-neutral-400 uppercase block">{lang === 'id' ? 'Tanggal Daftar' : 'Date Registered'}</span>
                          <span className="font-semibold text-neutral-800 block">{foundStatus.createdDate}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-neutral-100">
                        {foundStatus.status === 'pending' && (
                          <div className="flex gap-2 items-start text-[11px] text-amber-800">
                            <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                            <span>{lang === 'id' ? 'Pendaftaran Anda sedang di-review staf panitia. Harap siapkan berkas fisik rapor SMP Anda.' : 'Your paper reviews are currently active. Prepare your middle school documents.'}</span>
                          </div>
                        )}
                        {foundStatus.status === 'diverifikasi' && (
                          <div className="flex gap-2 items-start text-[11px] text-blue-800">
                            <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>{lang === 'id' ? 'Berkas online Anda valid! Silakan datang ke sekertariat SMK MUSA pada jam kerja untuk tes wawancara Al-Qur\'an.' : 'Online papers confirmed. Please report to the campus board for mandatory interviews details.'}</span>
                          </div>
                        )}
                        {foundStatus.status === 'diterima' && (
                          <div className="flex gap-2 items-start text-[11px] text-blue-850 bg-blue-50 border border-blue-200 p-3 rounded-lg">
                            <CheckCircle2 size={15} className="text-blue-700 shrink-0 mt-0.5" />
                            <span>🎉 {lang === 'id' ? 'Selamat! Anda dinyatakan LULUS SELEKSI sebagai siswa SMK Muhammadiyah Randublatung. Harap lakukan daftar ulang.' : 'Congratulations! You are officially ADMITTED to SMK. Prepare for re-registration.'}</span>
                          </div>
                        )}
                        {foundStatus.status === 'ditolak' && (
                          <div className="flex gap-2 items-start text-[11px] text-red-800">
                            <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                            <span>{lang === 'id' ? 'Maaf, pendaftaran Anda belum memenuhi kualifikasi sekolah.' : 'Sorry, you did not meet the school requirements.'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-red-50/50 border border-red-100 rounded-2xl">
                    <AlertCircle className="mx-auto text-red-500" size={32} />
                    <p className="text-red-800 font-bold block text-sm mt-1">{lang === 'id' ? 'Nomor NISN tidak ditemukan' : 'NISN not matching any records'}</p>
                    <p className="text-red-600 text-xs mt-0.5">{lang === 'id' ? 'Harap pastikan no NISN Anda benar, atau isi formulir pendaftaran terlebih dahulu.' : 'Double-check your credentials or complete the registration form first.'}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
