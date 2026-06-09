import React, { useState } from 'react';
import { X, Lock, User as UserIcon, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Lang, User } from '../types';
import { DICTIONARY } from '../data/initialData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
  lang: Lang;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess, lang }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const dict = DICTIONARY[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      // Setup demo accounts
      if (username === 'admin' && password === 'muhammadiyah123') {
        const adminUser: User = {
          id: 'usr-admin',
          username: 'admin',
          name: 'Administrator Utama',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
        };
        onLoginSuccess(adminUser);
        onClose();
        // Clear fields
        setUsername('');
        setPassword('');
      } else if (username === 'staff' && password === 'pasmusa') {
        const staffUser: User = {
          id: 'usr-staff',
          username: 'staff',
          name: 'Staf Kurikulum',
          role: 'staff',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
        };
        onLoginSuccess(staffUser);
        onClose();
        // Clear fields
        setUsername('');
        setPassword('');
      } else if (username === 'bkk' && password === 'bkk123') {
        const bkkUser: User = {
          id: 'usr-bkk',
          username: 'bkk',
          name: 'Ketua BKK (Suharianto, S.Pd.)',
          role: 'bkk',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150'
        };
        onLoginSuccess(bkkUser);
        onClose();
        // Clear fields
        setUsername('');
        setPassword('');
      } else {
        setError(
          lang === 'id' 
            ? 'Username atau password salah! (Tips: bkk/bkk123 atau admin/muhammadiyah123)' 
            : 'Invalid username or password! (Hint: bkk/bkk123 or admin/muhammadiyah123)'
        );
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div id="login-modal-overlay" className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div 
        id="login-card"
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative border border-neutral-100 flex flex-col"
      >
        {/* Header */}
        <div className="bg-blue-800 p-6 text-white relative">
          <button 
            id="close-login-modal"
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-100 hover:text-white hover:bg-blue-700/50 p-1.5 rounded-full transition-all"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 p-2 rounded-xl text-blue-950">
              <Lock size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg tracking-tight">Portal Sistem Informasi</h3>
              <p className="text-blue-200 text-xs mt-0.5">SMK Muhammadiyah Randublatung</p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 flex-1">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg flex items-start gap-2.5 text-xs text-red-800">
              <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-neutral-700 text-xs font-semibold block">{dict.username}</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                <UserIcon size={16} />
              </span>
              <input
                id="login-username-input"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                className="w-full pl-9 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-neutral-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-neutral-700 text-xs font-semibold block">{dict.password}</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                <Lock size={16} />
              </span>
              <input
                id="login-password-input"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-neutral-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/70 text-[11px] text-blue-800 leading-relaxed">
            <p className="font-semibold mb-0.5">💡 Demo Accounts Credentials:</p>
            <p>• BKK (Ketua): <code className="font-mono bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded font-extrabold">bkk</code> & pass: <code className="font-mono bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded font-extrabold">bkk123</code></p>
            <p className="mt-1">• Admin: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">admin</code> & pass: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">muhammadiyah123</code></p>
            <p className="mt-1">• Staff: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">staff</code> & pass: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">pasmusa</code></p>
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-blue-700 hover:bg-blue-850 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-700/10 active:scale-98 transition-all hover:shadow-lg hover:shadow-blue-700/15 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? 'Processing...' : dict.login}
          </button>
        </form>
      </div>
    </div>
  );
}
