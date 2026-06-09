import React, { useState } from 'react';
import { ShoppingBag, ChevronRight, CheckCircle2, Clock, Calendar, ShieldCheck, Tag, Info } from 'lucide-react';
import { Lang, TefaProduct } from '../types';
import { DICTIONARY } from '../data/initialData';

interface TefaViewProps {
  lang: Lang;
  tefaProducts: TefaProduct[];
}

export default function TefaView({ lang, tefaProducts }: TefaViewProps) {
  const dict = DICTIONARY[lang];
  const [selectedProduct, setSelectedProduct] = useState<TefaProduct | null>(null);

  // Booking fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [notes, setNotes] = useState('');
  
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !bookingDate) {
      alert(lang === 'id' ? 'Harap lengkapi semua isian wajib!' : 'Please complete all required fields!');
      return;
    }

    const bookingCode = `MUSA-TEFA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingSuccess(bookingCode);
  };

  const handleCloseSuccess = () => {
    setBookingSuccess(null);
    setSelectedProduct(null);
    // Reset inputs
    setCustomerName('');
    setCustomerPhone('');
    setBookingDate('');
    setNotes('');
  };

  return (
    <div id="tefa-view" className="space-y-8 pb-12">
      {/* Title block */}
      <div className="bg-blue-800 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <ShoppingBag size={200} />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-sans font-extrabold tracking-tight">{dict.menuTefa}</h1>
          <p className="text-blue-150 text-xs md:text-sm max-w-xl">
            {dict.tefaDesc}
          </p>
        </div>
      </div>

      {bookingSuccess ? (
        <div className="bg-white border border-neutral-150 rounded-3xl p-6 md:p-10 max-w-md mx-auto text-center space-y-5 shadow-xs">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto animate-bounce shadow-md">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <h3 className="font-sans font-extrabold text-neutral-900 text-lg leading-tight">
              {lang === 'id' ? 'Booking / Pesanan Berhasil!' : 'Booking Service Scheduled!'}
            </h3>
            <p className="text-neutral-500 text-xs mt-1">
              {lang === 'id' 
                ? 'Terima kasih, konfirmasi booking teknis anda berhasil digenerate dalam antrean sekolah:' 
                : 'Your custom technical production slot has been scheduled successfully:'}
            </p>
            <p className="font-mono font-bold text-lg bg-blue-50 border border-blue-200 py-3 rounded-xl text-blue-800 tracking-wider mt-4">
              {bookingSuccess}
            </p>
          </div>

          <div className="border border-neutral-150 p-4 rounded-2xl bg-neutral-50 text-neutral-600 text-[11px] leading-relaxed text-left space-y-1.5">
            <span className="font-bold text-neutral-800 uppercase block">{lang === 'id' ? 'Instruksi Kedatangan:' : 'Check-in Instructions:'}</span>
            <p>1. {lang === 'id' ? 'Silakan bawa motor/mobil/perangkat laptop ke bengkel vokasi SMK MUSA sesuai tanggal booking.' : 'Bring your vehicle / personal computer to MUSA workshops on your selected day.'}</p>
            <p>2. {lang === 'id' ? 'Infokan kode booking ke siswa penjaga frontdesk TEFA untuk prioritas pelayanan cepat.' : 'Present booking serial to the frontdesk reception for rapid lane processing.'}</p>
            <p>3. {lang === 'id' ? 'Konsultasikan langsung keluhan teknis dengan teknisi pendamping kami.' : 'Consult requirements with our engineering supervisors.'}</p>
          </div>

          <button 
            id="close-booking-success"
            onClick={handleCloseSuccess}
            className="w-full py-2.5 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
          >
            {lang === 'id' ? 'Selesai & Tutup' : 'Done & Close'}
          </button>
        </div>
      ) : selectedProduct ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
          {/* Product details panel */}
          <div className="lg:col-span-5 bg-white border border-neutral-150 rounded-3xl overflow-hidden shadow-xs space-y-4">
            <div className="h-48 bg-neutral-150 overflow-hidden">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded border border-blue-200 uppercase w-max block">
                  {selectedProduct.programId.toUpperCase()} MAJOR PROJECT
                </span>
                <h3 className="font-sans font-extrabold text-neutral-900 text-base">{lang === 'id' ? selectedProduct.name : selectedProduct.nameEn}</h3>
                <span className="text-blue-800 hover:text-blue-900 font-bold text-sm block">🏷️ {lang === 'id' ? selectedProduct.price : selectedProduct.priceEn}</span>
              </div>
              <p className="text-neutral-500 text-xs leading-relaxed">
                {lang === 'id' ? selectedProduct.description : selectedProduct.descriptionEn}
              </p>
              
              <div className="flex gap-2.5 items-center p-3.5 bg-neutral-50 rounded-xl leading-snug">
                <ShieldCheck size={18} className="text-blue-700 shrink-0" />
                <span className="text-[11px] text-neutral-500 font-medium">
                  {lang === 'id' 
                    ? 'Layanan dikerjakan oleh siswa berprestasi yang lulus sertifikasi dan diawasi guru kompeten.' 
                    : 'Rendered under supervisor mentorship using calibrated machinery.'}
                </span>
              </div>
            </div>
          </div>

          {/* Form Booking Panel */}
          <div className="lg:col-span-7 bg-white border border-neutral-150 rounded-3xl p-6 md:p-8 space-y-5 shadow-xs">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
              <h3 className="font-sans font-extrabold text-neutral-900 text-base">
                {lang === 'id' ? 'Formulir Booking Slot' : 'Reserve Service Appointment'}
              </h3>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="text-xs text-neutral-500 hover:text-neutral-800 bg-neutral-50 border px-3 py-1.5 rounded-lg font-bold"
              >
                {dict.cancel}
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Nama Pemesan' : 'Your Net Name'}</label>
                <input 
                  type="text" 
                  required 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Budi Hartono" 
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'No. WhatsApp' : 'Mobile Active WhatsApp'}</label>
                  <input 
                    type="tel" 
                    required 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="0813xxxx" 
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Rencana Tanggal Servis' : 'Target Schedule Date'}</label>
                  <input 
                    type="date" 
                    required 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-600 text-xs font-semibold block">{lang === 'id' ? 'Catatan Tambahan (Keluhan Kerusakan)' : 'Specification Notes (Symptoms)'}</label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Mesin laptop lambat bising, ganti oli mobil, etc." 
                  rows={2}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-850"
                />
              </div>

              <button 
                id="sumbit-tefa-booking-btn"
                type="submit"
                className="w-full py-3 bg-blue-800 hover:bg-blue-950 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-98"
              >
                🛒 {lang === 'id' ? 'Konfirmasi & Simpan Booking' : 'Confirm Technical Slot'}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Katalog Jasa & Layanan TEFA' : 'TEFA Production Catalogue'}</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-1.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tefaProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition-all hover:border-blue-500 group"
              >
                <div>
                  <div className="h-44 bg-neutral-100 overflow-hidden relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs font-mono font-bold text-[9px] text-neutral-800 border border-neutral-200 px-2 py-0.5 rounded-md">
                      {p.programId.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="font-sans font-bold text-neutral-905 text-sm group-hover:text-blue-700 leading-snug line-clamp-1">{lang === 'id' ? p.name : p.nameEn}</h4>
                    <p className="text-neutral-550 text-[11px] leading-relaxed line-clamp-2">{lang === 'id' ? p.description : p.descriptionEn}</p>
                  </div>
                </div>
                
                <div className="p-4 pt-0 space-y-3">
                  <div className="flex justify-between items-center border-t border-neutral-100 pt-3">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">{lang === 'id' ? 'Estimasi Biaya' : 'Incurred Cost'}</span>
                    <span className="text-xs font-black text-blue-800 block">{lang === 'id' ? p.price : p.priceEn}</span>
                  </div>

                  <button 
                    id={`order-tefa-${p.id}`}
                    onClick={() => setSelectedProduct(p)}
                    className="w-full py-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1 shadow-xs transition-all active:scale-97 cursor-pointer"
                  >
                    Booking Slot <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
