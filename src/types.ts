export type Lang = 'id' | 'en' | 'ja' | 'ar';

export type UserRole = 'admin' | 'staff' | 'bkk';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  image: string;
  date: string;
  views: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  category: string;
  date: string;
}

export interface StudentData {
  id: string;
  name: string;
  nisn: string;
  programId: 'tkr' | 'tab' | 'tsm' | 'tkj';
  class: string;
  status: 'aktif' | 'pindahan' | 'tinggal' | 'alumni';
  yearEntered: number;
  phone?: string;
  parentPhone?: string;
}

export interface AlumniData {
  id: string;
  name: string;
  nisn: string;
  programId: 'tkr' | 'tab' | 'tsm' | 'tkj';
  graduationYear: number;
  currentStatus: 'bekerja' | 'kuliah' | 'wirausaha' | 'mencari_kerja';
  workPlace?: string; // Company / University name
  salaryRange?: string;
  phone?: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  titleEn: string;
  company: string;
  logo: string;
  location: string;
  requirements: string[];
  requirementsEn: string[];
  salary: string;
  postedDate: string;
  closingDate: string;
  status: 'open' | 'closed';
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'nasional' | 'internasional' | 'lokal';
  description: string;
  descriptionEn: string;
}

export interface TefaProduct {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  programId: 'tkr' | 'tab' | 'tsm' | 'tkj';
  image: string;
  status: 'tersedia' | 'pre-order';
}

export interface Announcement {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  date: string;
  target: 'all' | 'siswa' | 'ortu' | 'guru';
  priority: 'low' | 'medium' | 'high';
}

export interface VisitorLog {
  id: string;
  ip: string;
  device: 'mobile' | 'desktop' | 'tablet';
  page: string;
  timestamp: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'read' | 'unread';
}

export interface SpmbRegistration {
  id: string;
  registrationNumber: string;
  fullName: string;
  nisn: string;
  birthPlace: string;
  birthDate: string;
  gender: 'L' | 'P';
  phone: string;
  parentPhone: string;
  email: string;
  address: string;
  programChoice1: 'tkr' | 'tab' | 'tsm' | 'tkj';
  programChoice2: 'tkr' | 'tab' | 'tsm' | 'tkj';
  status: 'pending' | 'diverifikasi' | 'diterima' | 'ditolak';
  createdDate: string;
}

export interface TeacherStaff {
  id: string;
  name: string;
  nip?: string;
  role: string;      // e.g. 'Guru TKR', 'Kepala Tata Usaha'
  roleEn: string;
  type: 'guru' | 'staf';
  image: string;     // Profile URL
  phone?: string;
}

