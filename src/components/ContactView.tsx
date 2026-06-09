import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Lang, ContactMessage } from '../types';
import { DICTIONARY } from '../data/initialData';

interface ContactViewProps {
  lang: Lang;
  onAddMessage: (msg: ContactMessage) => void;
}

export default function ContactView({ lang, onAddMessage }: ContactViewProps) {
  const dict = DICTIONARY[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      phone,
      subject: subject || (lang === 'id' ? 'Tanya Umum' : 'General Inquiry'),
      message,
      date: new Date().toISOString().split('T')[0],
      status: 'unread'
    };

    onAddMessage(newMsg);
    setSuccess(true);
    
    // reset
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id="contact-view" className="space-y-8 pb-12">
      {/* Title block */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <MessageSquare size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">
            {lang === 'id' ? 'Tentang Kami & Layanan Kontak' : 'Contact Us & Location Info'}
          </h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {lang === 'id'
              ? 'Layanan penanganan pesan saran, pengaduan wali murid, kontak darurat darat, dan letak maps geografis sekolah.'
              : 'Submit suggestions, parental support tickets, direct help contacts, and review campus maps.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact details and Maps */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-neutral-150 p-6 rounded-3xl space-y-4">
            <h3 className="font-sans font-extrabold text-neutral-900 text-base">{lang === 'id' ? 'Informasi Kontak Resmi' : 'School Contacts Directory'}</h3>
            <div className="space-y-4 text-xs md:text-sm text-neutral-600">
              <div className="flex gap-3 items-start">
                <MapPin className="text-blue-700 shrink-0" size={18} />
                <div>
                  <span className="font-bold text-neutral-800 uppercase text-[10px] block">Alamat Kampus</span>
                  <p className="leading-relaxed">Jl. Raya Randublatung - Cepu No. 17, Sambongwangan, Randublatung, Blora Regency, Jawa Tengah 58382</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <Phone className="text-blue-700 shrink-0" size={18} />
                <div>
                  <span className="font-bold text-neutral-800 uppercase text-[10px] block">No. Telepon Sekretariat</span>
                  <p>(0296) 810173 / Telp / WA: 0812-3490-8777</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="text-blue-700 shrink-0" size={18} />
                <div>
                  <span className="font-bold text-neutral-800 uppercase text-[10px] block">Alamat Email</span>
                  <p>smkmuh_rbl@yahoo.co.id</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="text-blue-700 shrink-0" size={18} />
                <div>
                  <span className="font-bold text-neutral-800 uppercase text-[10px] block">Jam Pelayanan Kantor</span>
                  <p>Senin - Sabtu: 07.00 - 13.30 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Mockup container */}
          <div className="bg-white border border-neutral-150 rounded-3xl p-4 space-y-3 shadow-xs">
            <span className="font-sans font-bold text-neutral-900 text-xs block">📍 Lokasi Peta Sekolah</span>
            <div className="h-44 bg-neutral-100 rounded-2xl relative overflow-hidden border border-neutral-200">
              {/* Custom SVG Maps styling representing Randublatung roads */}
              <svg viewBox="0 0 400 200" className="w-full h-full bg-neutral-100 text-neutral-400">
                <rect width="100%" height="100%" fill="#E5E7EB" />
                <path d="M0 80 Q 200 40 400 130" stroke="#FFFFFF" strokeWidth="15" fill="none" />
                <text x="310" y="110" fill="#9CA3AF" fontSize="7" transform="rotate(13, 310, 110)">Jl. Randublatung - Cepu</text>
                
                <path d="M120 0 L 170 200" stroke="#FFFFFF" strokeWidth="10" fill="none" />
                <circle cx="150" cy="70" r="10" fill="#E11D48" className="animate-pulse" />
                <circle cx="150" cy="70" r="4" fill="#FFFFFF" />
                
                {/* school outline label */}
                <rect x="90" y="45" width="120" height="20" rx="4" fill="#005b96" opacity="0.95" />
                <text x="150" y="58" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SMK MUHAMMADIYHER RBL</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Messaging input portal */}
        <div className="lg:col-span-7 bg-white border border-neutral-150 p-6 md:p-8 rounded-3xl space-y-5">
          <div>
            <h3 className="font-sans font-extrabold text-neutral-900 text-base">{lang === 'id' ? 'Saran & Pesan Pengaduan' : 'Parental Hotline Inbox'}</h3>
            <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Tulis kendala anda disini, admin kami akan membalas via email atau WhatsApp.' : 'Our staff answers your messages of inquiries promptly.'}</p>
          </div>

          {success ? (
            <div className="bg-blue-50 border border-blue-250 p-5 rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={20} />
              </div>
              <p className="font-sans font-bold text-neutral-900 text-sm">{lang === 'id' ? 'Pesan Terkirim!' : 'Message Relayed!'}</p>
              <p className="text-neutral-500 text-[11px] leading-relaxed">{lang === 'id' ? 'Pesan sukses dikirim. Kami akan mengontak Anda kembali secepatnya jika diperlukan.' : 'Form log successfully logged. We will reach back matching your details.'}</p>
              <button 
                onClick={() => setSuccess(false)}
                className="px-5 py-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs rounded-lg transition-all"
              >
                {lang === 'id' ? 'Tulis Baru' : 'New Ticket'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Nama Anda' : 'Your Net Name'}</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Suharianto" 
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850 focus:ring-2 focus:ring-blue-600"
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
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850 focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-600 text-xs font-semibold block">{dict.phone}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812xxxx" 
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850 focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Judul Subjek' : 'Subject Topic'}</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Biaya Gedung / Beasiswa" 
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850 focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-600 text-xs font-semibold block">{dict.message}</label>
                <textarea 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan lengkap saran / pengaduan Anda di sini..." 
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850 focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button 
                id="sumbit-message-contact-btn"
                type="submit"
                className="w-full py-3 bg-blue-800 hover:bg-blue-950 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                <Send size={15} /> {lang === 'id' ? 'Kirim Pesan Ke Sekolah' : 'Relay Ticket Form'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
