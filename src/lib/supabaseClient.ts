import { createClient } from '@supabase/supabase-js';

// Ambil URL dan Anon Key dari environment variable (.env)
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

// Kita pastikan inisialisasi aman jika variabel belum dikonfigurasi
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase Warning: VITE_SUPABASE_URL atau VITE_SUPABASE_ANON_KEY belum dikonfigurasi di file .env. Aplikasi akan berjalan dengan fallback data lokal.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url-for-supabase.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);
