import React, { useState } from 'react';
import { 
  BarChart3, FileText, Users, Bell, Image as ImageIcon, MessageSquare, 
  Plus, Trash2, Edit2, Check, RefreshCw, AlertCircle, ShieldAlert, HeartHandshake, Eye, GraduationCap
} from 'lucide-react';
import { 
  Lang, User, NewsItem, GalleryItem, StudentData, AlumniData, Announcement, ContactMessage, SpmbRegistration, TeacherStaff
} from '../types';

interface AdminDashboardProps {
  lang: Lang;
  activeUser: User | null;
  news: NewsItem[];
  gallery: GalleryItem[];
  students: StudentData[];
  alumni: AlumniData[];
  announcements: Announcement[];
  messages: ContactMessage[];
  registrations: SpmbRegistration[];
  jobs: any[];
  teachers: TeacherStaff[];
  
  // Setters
  onSetNews: React.Dispatch<React.SetStateAction<NewsItem[]>>;
  onSetGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  onSetStudents: React.Dispatch<React.SetStateAction<StudentData[]>>;
  onSetAlumni: React.Dispatch<React.SetStateAction<AlumniData[]>>;
  onSetAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>;
  onSetMessages: React.Dispatch<React.SetStateAction<ContactMessage[]>>;
  onSetRegistrations: React.Dispatch<React.SetStateAction<SpmbRegistration[]>>;
  onSetJobs: React.Dispatch<React.SetStateAction<any[]>>;
  onSetTeachers: React.Dispatch<React.SetStateAction<TeacherStaff[]>>;
}

export default function AdminDashboard({
  lang,
  activeUser,
  news,
  gallery,
  students,
  alumni,
  announcements,
  messages,
  registrations,
  jobs,
  teachers = [],
  onSetNews,
  onSetGallery,
  onSetStudents,
  onSetAlumni,
  onSetAnnouncements,
  onSetMessages,
  onSetRegistrations,
  onSetJobs,
  onSetTeachers
}: AdminDashboardProps) {
  
  const [activeMenu, setActiveMenu] = useState<'analytics' | 'news' | 'gallery' | 'students' | 'announcements' | 'messages' | 'registrations' | 'vacancies' | 'teachers'>(
    activeUser?.role === 'bkk' ? 'vacancies' : 'analytics'
  );
  
  // Checking admin level
  const isAdmin = activeUser?.role === 'admin';

  // Analytics Logs Mockup
  const visitorLogs = [
    { ip: '182.1.203.41', device: 'mobile', page: '/Home', timestamp: '09:42:01' },
    { ip: '110.136.21.9', device: 'desktop', page: '/Kompetensi/TAB', timestamp: '09:41:45' },
    { ip: '36.80.127.182', device: 'mobile', page: '/SPMB/Daftar', timestamp: '09:41:10' },
    { ip: '114.122.9.220', device: 'tablet', page: '/BKK/Tracer', timestamp: '09:39:50' },
    { ip: '182.1.203.41', device: 'mobile', page: '/Berita/Prestasi', timestamp: '09:38:12' },
  ];

  // News Manager forms state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsTitleEn, setNewsTitleEn] = useState('');
  const [newsCategory, setNewsCategory] = useState('Prestasi');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsSummaryEn, setNewsSummaryEn] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsContentEn, setNewsContentEn] = useState('');
  const [newsImage, setNewsImage] = useState('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800');

  // Photo gallery state
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryTitleEn, setGalleryTitleEn] = useState('');
  const [galleryImage, setGalleryImage] = useState('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800');
  const [galleryCat, setGalleryCat] = useState('Kegiatan');

  // Student Manager state
  const [stdName, setStdName] = useState('');
  const [stdNisn, setStdNisn] = useState('');
  const [stdProgram, setStdProgram] = useState<'tkr' | 'tab' | 'tsm' | 'tkj'>('tkj');
  const [stdClass, setStdClass] = useState('X TKJ 1');

  // Announcement state
  const [annTitle, setAnnTitle] = useState('');
  const [annTitleEn, setAnnTitleEn] = useState('');
  const [annContent, setAnnContent] = useState('');
  const [annContentEn, setAnnContentEn] = useState('');
  const [annTarget, setAnnTarget] = useState<'all' | 'siswa' | 'ortu' | 'guru'>('all');
  const [annPriority, setAnnPriority] = useState<'low' | 'medium' | 'high'>('medium');

  // Form toggles
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [isAddingGallery, setIsAddingGallery] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isAddingAnn, setIsAddingAnn] = useState(false);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [isAddingTeacher, setIsAddingTeacher] = useState(() => localStorage.getItem('musa_draft_isAddingTeacher') === 'true');

  // Sync isAddingTeacher to localStorage
  React.useEffect(() => {
    localStorage.setItem('musa_draft_isAddingTeacher', isAddingTeacher ? 'true' : 'false');
  }, [isAddingTeacher]);

  // Teacher/Employee form state
  const [tchName, setTchName] = useState(() => localStorage.getItem('musa_draft_tchName') || '');
  const [tchNip, setTchNip] = useState(() => localStorage.getItem('musa_draft_tchNip') || '');
  const [tchRole, setTchRole] = useState(() => localStorage.getItem('musa_draft_tchRole') || '');
  const [tchRoleEn, setTchRoleEn] = useState(() => localStorage.getItem('musa_draft_tchRoleEn') || '');
  const [tchType, setTchType] = useState<'guru' | 'staf'>(() => (localStorage.getItem('musa_draft_tchType') as 'guru' | 'staf') || 'guru');
  const [tchImage, setTchImage] = useState(() => localStorage.getItem('musa_draft_tchImage') || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150');
  const [tchPhone, setTchPhone] = useState(() => localStorage.getItem('musa_draft_tchPhone') || '');
  const [editingTeacherId, setEditingTeacherId] = useState<string | null>(() => localStorage.getItem('musa_draft_editingTeacherId') || null);

  // Sync Teacher fields to localStorage
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchName', tchName);
  }, [tchName]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchNip', tchNip);
  }, [tchNip]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchRole', tchRole);
  }, [tchRole]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchRoleEn', tchRoleEn);
  }, [tchRoleEn]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchType', tchType);
  }, [tchType]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchImage', tchImage);
  }, [tchImage]);
  React.useEffect(() => {
    localStorage.setItem('musa_draft_tchPhone', tchPhone);
  }, [tchPhone]);
  React.useEffect(() => {
    if (editingTeacherId) {
      localStorage.setItem('musa_draft_editingTeacherId', editingTeacherId);
    } else {
      localStorage.removeItem('musa_draft_editingTeacherId');
    }
  }, [editingTeacherId]);

  // Vacancies manager form state
  const [jobTitle, setJobTitle] = useState('');
  const [jobTitleEn, setJobTitleEn] = useState('');
  const [jobCompany, setJobCompany] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');
  const [jobRequirementsEn, setJobRequirementsEn] = useState('');
  const [jobLogo, setJobLogo] = useState('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=150');
  const [jobClosingDate, setJobClosingDate] = useState('2026-12-31');

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle || !jobCompany || !jobLocation) {
      alert(lang === 'id' ? 'Mohon lengkapi seluruh kolom yang wajib diisi!' : 'Please fill all required fields!');
      return;
    }
    const newJob = {
      id: `job-${Date.now()}`,
      title: jobTitle,
      titleEn: jobTitleEn || jobTitle,
      company: jobCompany,
      logo: jobLogo || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=150',
      location: jobLocation,
      requirements: jobRequirements.split('\n').filter(line => line.trim() !== ''),
      requirementsEn: jobRequirementsEn ? jobRequirementsEn.split('\n').filter(line => line.trim() !== '') : [jobRequirements],
      salary: jobSalary || 'Negosiasi',
      postedDate: new Date().toISOString().split('T')[0],
      closingDate: jobClosingDate,
      status: 'open' as const
    };
    onSetJobs([newJob, ...jobs]);
    setIsAddingJob(false);
    
    // reset form fields
    setJobTitle('');
    setJobTitleEn('');
    setJobCompany('');
    setJobLocation('');
    setJobSalary('');
    setJobRequirements('');
    setJobRequirementsEn('');
  };

  const handleToggleJobStatus = (id: string) => {
    onSetJobs(prev => prev.map(job => {
      if (job.id === id) {
        return { ...job, status: job.status === 'open' ? 'closed' : 'open' };
      }
      return job;
    }));
  };

  const handleDeleteJob = (id: string) => {
    onSetJobs(prev => prev.filter(job => job.id !== id));
  };

  // Core triggers
  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    const newArt: NewsItem = {
      id: `news-${Date.now()}`,
      title: newsTitle,
      titleEn: newsTitleEn || newsTitle,
      category: newsCategory,
      categoryEn: newsCategory === 'Prestasi' ? 'Achievement' : newsCategory === 'Kerjasama' ? 'Partnership' : 'Activity',
      summary: newsSummary,
      summaryEn: newsSummaryEn || newsSummary,
      content: newsContent,
      contentEn: newsContentEn || newsContent,
      image: newsImage,
      date: new Date().toISOString().split('T')[0],
      views: 12
    };

    onSetNews([newArt, ...news]);
    setIsAddingNews(false);
    // clear fields
    setNewsTitle('');
    setNewsTitleEn('');
    setNewsSummary('');
    setNewsSummaryEn('');
    setNewsContent('');
    setNewsContentEn('');
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    const newGal: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: galleryTitle,
      titleEn: galleryTitleEn || galleryTitle,
      image: galleryImage,
      category: galleryCat,
      date: new Date().toISOString().split('T')[0]
    };

    onSetGallery([newGal, ...gallery]);
    setIsAddingGallery(false);
    setGalleryTitle('');
    setGalleryTitleEn('');
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (stdNisn.length !== 10 || isNaN(Number(stdNisn))) {
      alert('NISN must be exactly 10 digits!');
      return;
    }

    const newStd: StudentData = {
      id: `std-${Date.now()}`,
      name: stdName,
      nisn: stdNisn,
      programId: stdProgram,
      class: stdClass,
      status: 'aktif',
      yearEntered: new Date().getFullYear()
    };

    onSetStudents([newStd, ...students]);
    setIsAddingStudent(false);
    setStdName('');
    setStdNisn('');
  };

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnn: Announcement = {
      id: `ann-${Date.now()}`,
      title: annTitle,
      titleEn: annTitleEn || annTitle,
      content: annContent,
      contentEn: annContentEn || annContent,
      date: new Date().toISOString().split('T')[0],
      target: annTarget,
      priority: annPriority
    };

    onSetAnnouncements([newAnn, ...announcements]);
    setIsAddingAnn(false);
    setAnnTitle('');
    setAnnTitleEn('');
    setAnnContent('');
    setAnnContentEn('');
  };

  // Convert active student to Alumni and trigger Tracer logs
  const handlePromoteToAlumni = (student: StudentData) => {
    if (!isAdmin) {
      alert('Unauthorized! Staff level role cannot delete or convert primary database rosters.');
      return;
    }

    const conf = window.confirm(`Apakah Anda yakin ingin memindahkan siswa "${student.name}" ke basis data ALUMNI?`);
    if (!conf) return;

    // 1. Remove from active students
    onSetStudents(students.filter(s => s.id !== student.id));

    // 2. Append into alumni database
    const newAlum: AlumniData = {
      id: `alm-promoted-${Date.now()}`,
      name: student.name,
      nisn: student.nisn,
      programId: student.programId,
      graduationYear: new Date().getFullYear(),
      currentStatus: 'mencari_kerja'
    };
    onSetAlumni([newAlum, ...alumni]);
    alert(`Siswa "${student.name}" berhasil dipromosikan ke data alumni dan database tracer.`);
  };

  // Status updates for SPMB Admissions
  const handleUpdateSpmbStatus = (regId: string, nextStatus: 'pending' | 'diverifikasi' | 'diterima' | 'ditolak') => {
    onSetRegistrations(registrations.map(r => r.id === regId ? { ...r, status: nextStatus } : r));
  };

  // Helper Handlers for Teachers & Staff Management
  const handleSaveTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tchName.trim() || !tchRole.trim()) {
      alert('Nama dan Jabatan wajib diisi!');
      return;
    }

    if (editingTeacherId) {
      // Editing Mode
      onSetTeachers(prev => prev.map(t => t.id === editingTeacherId ? {
        ...t,
        name: tchName,
        nip: tchNip || '-',
        role: tchRole,
        roleEn: tchRoleEn || tchRole,
        type: tchType,
        image: tchImage,
        phone: tchPhone
      } : t));
      alert('Informasi Guru / Karyawan berhasil diperbarui!');
    } else {
      // Add Mode
      const newTeacher: TeacherStaff = {
        id: `tch-${Date.now()}`,
        name: tchName,
        nip: tchNip || '-',
        role: tchRole,
        roleEn: tchRoleEn || tchRole,
        type: tchType,
        image: tchImage || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
        phone: tchPhone
      };
      onSetTeachers(prev => [newTeacher, ...prev]);
      alert('Guru / Karyawan baru berhasil ditambahkan!');
    }

    // Reset Form
    setTchName('');
    setTchNip('');
    setTchRole('');
    setTchRoleEn('');
    setTchType('guru');
    setTchImage('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150');
    setTchPhone('');
    setEditingTeacherId(null);
    setIsAddingTeacher(false);
  };

  const handleEditTeacherClick = (teacher: TeacherStaff) => {
    setTchName(teacher.name);
    setTchNip(teacher.nip === '-' ? '' : (teacher.nip || ''));
    setTchRole(teacher.role);
    setTchRoleEn(teacher.roleEn || '');
    setTchType(teacher.type);
    setTchImage(teacher.image);
    setTchPhone(teacher.phone || '');
    setEditingTeacherId(teacher.id);
    setIsAddingTeacher(true);
  };

  const handleDeleteTeacher = (teacherId: string) => {
    const confirmDel = window.confirm('Apakah Anda yakin ingin menghapus data Guru / Karyawan ini secara permanen?');
    if (!confirmDel) return;

    onSetTeachers(prev => prev.filter(t => t.id !== teacherId));
  };

  // Generic Deletion protected by Role permission check block
  const handleDeleteItem = (targetId: string, dType: 'news' | 'gallery' | 'student' | 'ann' | 'msg') => {
    if (!isAdmin) {
      alert('🔒 Akes Terbatas! Hak akses sebagai STAFF tidak dapat menghapus konten atau database primer sekolah. Silakan kontak Administrator Utama.');
      return;
    }

    const confirmDel = window.confirm('Apakah Anda yakin ingin menghapus data ini secara permanen dari server?');
    if (!confirmDel) return;

    if (dType === 'news') onSetNews(news.filter(n => n.id !== targetId));
    if (dType === 'gallery') onSetGallery(gallery.filter(g => g.id !== targetId));
    if (dType === 'student') onSetStudents(students.filter(s => s.id !== targetId));
    if (dType === 'ann') onSetAnnouncements(announcements.filter(a => a.id !== targetId));
    if (dType === 'msg') onSetMessages(messages.filter(m => m.id !== targetId));
  };

  return (
    <div id="admin-dashboard-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
      
      {/* Side Menu Navigation panel */}
      <div className="lg:col-span-3 bg-white border border-neutral-150 p-5 rounded-3xl space-y-5">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
          <img src={activeUser?.avatar} alt={activeUser?.name} className="w-10 h-10 object-cover rounded-full border" />
          <div>
            <h4 className="font-sans font-bold text-neutral-900 text-sm">{activeUser?.name}</h4>
            <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-widest leading-none mt-0.5 block w-max">
              Role: {activeUser?.role}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-xs font-bold text-neutral-600">
          {activeUser?.role !== 'bkk' && (
            <button 
              onClick={() => setActiveMenu('analytics')}
              className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'analytics' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
            >
              <BarChart3 size={16} /> {lang === 'id' ? 'Dashboard Analitik' : 'Analytics Center'}
            </button>
          )}
          
          <button 
            onClick={() => setActiveMenu('students')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'students' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
          >
            <Users size={16} /> {lang === 'id' ? 'Siswa & Alumni (Tracer)' : 'Students & Alumni'}
          </button>

          <button 
            onClick={() => setActiveMenu('vacancies')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'vacancies' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
          >
            <HeartHandshake size={16} className="text-amber-500" /> {lang === 'id' ? 'Kelola Lowongan Kerja BKK' : 'BKK Job Postings'}
          </button>

          {activeUser?.role !== 'bkk' && (
            <>
              <button 
                onClick={() => setActiveMenu('teachers')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'teachers' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <GraduationCap size={16} /> {lang === 'id' ? 'Kelola Guru & Karyawan' : 'Manage Teachers & Staff'}
              </button>

              <button 
                onClick={() => setActiveMenu('registrations')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'registrations' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <Check size={16} /> {lang === 'id' ? 'Verifikasi SPMB' : 'SPMB Admissions'}
              </button>

              <button 
                onClick={() => setActiveMenu('news')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'news' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <FileText size={16} /> {lang === 'id' ? 'Kelola Konten Berita' : 'Update School News'}
              </button>

              <button 
                onClick={() => setActiveMenu('gallery')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'gallery' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <ImageIcon size={16} /> {lang === 'id' ? 'Galeri Foto Sekolah' : 'Photo Gallery'}
              </button>

              <button 
                onClick={() => setActiveMenu('announcements')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left ${activeMenu === 'announcements' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <Bell size={16} /> {lang === 'id' ? 'Broadcast Pengumuman' : 'Announcements Board'}
              </button>

              <button 
                onClick={() => setActiveMenu('messages')}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 text-left relative ${activeMenu === 'messages' ? 'bg-blue-800 text-white shadow-xs' : 'hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <MessageSquare size={16} /> {lang === 'id' ? 'Pesan Wali / Tamu' : 'Form Queries'}
                <span className="absolute right-4 bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                  {messages.filter(m => m.status === 'unread').length}
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Primary Management views */}
      <div className="lg:col-span-9 bg-white border border-neutral-150 p-6 md:p-8 rounded-3xl min-h-[500px]">

        {/* 1. VIEW ANALYTICS */}
        {activeMenu === 'analytics' && (
          <div className="space-y-8 animate-fade-in">
            {/* Header section with safety roles alerts */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Laporan Perkembangan Sekolah & Analitika' : 'Analytics & Performance Metrics'}</h2>
                <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Data pengunjung portal, tingkat keterserapan industri, dan status registrasi.' : 'Real-time telemetry, student metrics, and industry alignment reports.'}</p>
              </div>
              <div className="flex gap-2.5 shrink-0 bg-neutral-100 p-1.5 rounded-xl text-[10px] items-center font-bold text-neutral-500">
                <span>⏱️ Live Telemetry Active</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              </div>
            </div>

            {/* School Growth Indicators Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-neutral-50 border border-neutral-150 rounded-2xl space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Registrasi Siswa Baru</span>
                <span className="text-xl md:text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">{registrations.length} Siswa</span>
                <span className="text-[10px] text-neutral-400 font-medium block">Peminat SPMB Gelombang 1</span>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-150 rounded-2xl space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Tracer Alumni Logged</span>
                <span className="text-xl md:text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">{alumni.length} Profil</span>
                <span className="text-[10px] text-blue-700 font-bold block">📈 88% Link & Match Index</span>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-150 rounded-2xl space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Total Inbox Masuk</span>
                <span className="text-xl md:text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">{messages.length} Tiket</span>
                <span className="text-[10px] text-neutral-400 font-medium block">Pesan masukan & pengaduan wali</span>
              </div>
            </div>

            {/* Pure SVG Animated Linear Graph representing Visitors Activity Trend */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                <BarChart3 className="text-blue-700" />
                {lang === 'id' ? 'Statistik Kunjungan Server (Mingguan)' : 'HTTP Request Traffic (Weekly)'}
              </span>
              <div className="p-5 bg-neutral-50 border border-neutral-150 rounded-3xl">
                {/* SVG Graph */}
                <svg viewBox="0 0 500 150" className="w-full h-36">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="480" y2="20" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="40" y1="70" x2="480" y2="70" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="40" y1="120" x2="480" y2="120" stroke="#E5E7EB" strokeWidth="1" />

                  {/* Trend Line (Blue) */}
                  <path 
                    d="M 50 110 L 115 80 L 180 115 L 245 40 L 310 90 L 375 30 L 440 45" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Points circles */}
                  <circle cx="50" cy="110" r="4.5" fill="#3b82f6" />
                  <circle cx="115" cy="80" r="4.5" fill="#3b82f6" />
                  <circle cx="180" cy="115" r="4.5" fill="#3b82f6" />
                  <circle cx="245" cy="40" r="4.5" fill="#3b82f6" />
                  <circle cx="310" cy="90" r="4.5" fill="#3b82f6" />
                  <circle cx="375" cy="30" r="4.5" fill="#3b82f6" />
                  <circle cx="440" cy="45" r="4.5" fill="#3b82f6" />

                  {/* Labels Day */}
                  <text x="50" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Senin</text>
                  <text x="115" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Selasa</text>
                  <text x="180" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Rabu</text>
                  <text x="245" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Kamis</text>
                  <text x="310" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Jumat</text>
                  <text x="375" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Sabtu</text>
                  <text x="440" y="140" fill="#9CA3AF" fontSize="7" textAnchor="middle">Minggu</text>

                  {/* Count markings */}
                  <text x="30" y="122" fill="#9CA3AF" fontSize="7" textAnchor="end">200</text>
                  <text x="30" y="72" fill="#9CA3AF" fontSize="7" textAnchor="end">500</text>
                  <text x="30" y="22" fill="#9CA3AF" fontSize="7" textAnchor="end">900 Req</text>
                </svg>
              </div>
            </div>

            {/* Live Requests logs */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-900 block">⚡ Live Visitor Logs</span>
              <div className="border border-neutral-200 rounded-2xl overflow-hidden text-[11px]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-100 font-bold text-neutral-500 uppercase tracking-wider">
                      <th className="p-3.5 pl-4">IP Address</th>
                      <th className="p-3.5">Device</th>
                      <th className="p-3.5">Assigned Target Page</th>
                      <th className="p-3.5 text-right pr-4">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-600 font-mono">
                    {visitorLogs.map((log, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/55 transition-colors">
                        <td className="p-3.5 pl-4 font-bold text-neutral-700">{log.ip}</td>
                        <td className="p-3.5 font-sans capitalize">{log.device}</td>
                        <td className="p-3.5 text-blue-700">{log.page}</td>
                        <td className="p-3.5 text-right pr-4 text-neutral-400">{log.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. VIEW STUDENTS & ALUMNI ROSTERS */}
        {activeMenu === 'students' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Database Siswa & Alumni' : 'Integrated Student Databases'}</h2>
                <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Form pengisian data registrasi siswa aktif, edit status, serta promosi alumni.' : 'Roster tracking, active status logs, and career tracer tracking.'}</p>
              </div>
              <button 
                onClick={() => setIsAddingStudent(!isAddingStudent)}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-950 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-98"
              >
                <Plus size={15} /> {isAddingStudent ? 'Batal' : 'Tambah Rencana Siswa'}
              </button>
            </div>

            {isAddingStudent && (
              <form onSubmit={handleCreateStudent} className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-1.5 col-span-2">
                  <h4 className="font-bold text-neutral-800 text-xs">{lang === 'id' ? 'Pendaftaran Siswa Baru' : 'New student profile'}</h4>
                  <div className="w-10 h-0.5 bg-blue-600 rounded-full" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Nama Lengkap</label>
                  <input type="text" required value={stdName} onChange={e => setStdName(e.target.value)} placeholder="Ahmad Yulian" className="w-full px-3 py-2 bg-white border rounded-xl text-xs" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">NISN (10 Digit)</label>
                  <input type="text" maxLength={10} required value={stdNisn} onChange={e => setStdNisn(e.target.value)} placeholder="010xxxx" className="w-full px-3 py-2 bg-white border rounded-xl text-xs" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Jurusan</label>
                  <select value={stdProgram} onChange={e => setStdProgram(e.target.value as any)} className="w-full px-3 py-2 bg-white border rounded-xl text-xs">
                    <option value="tkj">TKJ</option>
                    <option value="tkr">TKR</option>
                    <option value="tab">TAB</option>
                    <option value="tsm">TSM</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Kelas</label>
                  <input type="text" required value={stdClass} onChange={e => setStdClass(e.target.value)} placeholder="X TKJ 1" className="w-full px-3 py-2 bg-white border rounded-xl text-xs" />
                </div>
                <button type="submit" className="col-span-2 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow-xs">
                  {lang === 'id' ? 'Simpan Data Siswa' : 'Save Student'}
                </button>
              </form>
            )}

            {/* Student list roster */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-900 block">🧑‍🎓 Siswa Aktif Terdaftar ({students.length} Siswa)</span>
              <div className="border border-neutral-150 rounded-2xl overflow-hidden text-[11px]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-100 font-bold text-neutral-500 uppercase">
                      <th className="p-3 pl-4">Nama Siswa</th>
                      <th className="p-3">NISN</th>
                      <th className="p-3">Majors</th>
                      <th className="p-2">Kelas</th>
                      <th className="p-3 text-right pr-4">Opsi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-700">
                    {students.map((std) => (
                      <tr key={std.id} className="hover:bg-neutral-50">
                        <td className="p-3 pl-4 font-bold text-neutral-900">{std.name}</td>
                        <td className="p-3 font-mono text-neutral-400">{std.nisn}</td>
                        <td className="p-3 font-sans uppercase font-bold text-blue-800">{std.programId}</td>
                        <td className="p-2">{std.class}</td>
                        <td className="p-3 text-right pr-4 flex justify-end gap-1.5">
                          <button 
                            onClick={() => handlePromoteToAlumni(std)}
                            className="bg-purple-50 text-purple-800 border border-purple-100 font-bold text-[9px] px-2.5 py-1 rounded"
                            title="Luluskan menjadi Alumni & Tracer"
                          >
                            🎓 Luluskan
                          </button>
                          <button 
                            onClick={() => handleDeleteItem(std.id, 'student')}
                            className="bg-red-50 text-red-505 text-red-650 hover:bg-red-100 p-1 rounded"
                          >
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alumni lists roster */}
            <div className="space-y-3 pt-4 border-t border-neutral-100">
              <span className="text-xs font-bold text-neutral-900 block">🎓 database Tracer Alumni ({alumni.length} Profil)</span>
              <div className="border border-neutral-150 rounded-2xl overflow-hidden text-[11px]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-100 font-bold text-neutral-500 uppercase">
                      <th className="p-3 pl-4 font-bold">Nama Alumni</th>
                      <th className="p-3">Tahun Lulus</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Tempat Kerja / Kuliah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-600">
                    {alumni.map((alm) => (
                      <tr key={alm.id} className="hover:bg-neutral-50">
                        <td className="p-3 pl-4 font-bold text-neutral-800">{alm.name}</td>
                        <td className="p-3 font-bold text-neutral-400 font-mono">{alm.graduationYear}</td>
                        <td className="p-3 text-blue-700 capitalize font-semibold">{alm.currentStatus}</td>
                        <td className="p-3 text-neutral-500 font-medium">{alm.workPlace || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. VIEW NEWS MANAGEMENT */}
        {activeMenu === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Kelola Konten Berita Sekolah' : 'Manage News Articles'}</h2>
                <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Tambahkan berita atau artikel terbaru seputar kegiatan di SMK.' : 'Add or modify active school newsletters.'}</p>
              </div>
              <button 
                onClick={() => setIsAddingNews(!isAddingNews)}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md active:scale-97 transition-all leading-none"
              >
                <Plus size={15} /> {isAddingNews ? 'Batal' : 'Tulis Berita Baru'}
              </button>
            </div>

            {isAddingNews && (
              <form onSubmit={handleCreateNews} className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Judul Berita (Bahasa Indonesia)</label>
                    <input type="text" required value={newsTitle} onChange={e => setNewsTitle(e.target.value)} placeholder="Tulis judul..." className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Judul Berita (English)</label>
                    <input type="text" value={newsTitleEn} onChange={e => setNewsTitleEn(e.target.value)} placeholder="Title in English..." className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Kategori</label>
                    <select value={newsCategory} onChange={e => setNewsCategory(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg">
                      <option value="Prestasi">Prestasi</option>
                      <option value="Kerjasama">Kerjasama</option>
                      <option value="Kegiatan">Kegiatan</option>
                      <option value="Penerimaan">Penerimaan</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Image URL Cover</label>
                    <input type="text" value={newsImage} onChange={e => setNewsImage(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Ringkasan Singkat (Bahasa Indonesia)</label>
                  <input type="text" required value={newsSummary} onChange={e => setNewsSummary(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Isi Isi Lengkap Berita (Bahasa Indonesia)</label>
                  <textarea required value={newsContent} onChange={e => setNewsContent(e.target.value)} rows={4} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                </div>

                <button type="submit" className="w-full py-2 bg-blue-800 hover:bg-blue-950 text-white text-xs font-bold rounded-xl transition-all shadow-xs">
                  {lang === 'id' ? 'Simpan & Publikasikan Berita' : 'Publish Article'}
                </button>
              </form>
            )}

            {/* List entries */}
            <div className="space-y-2">
              {news.map((item) => (
                <div key={item.id} className="border border-neutral-150 p-4 rounded-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-lg border shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-neutral-900 text-xs md:text-sm line-clamp-1">{lang === 'id' ? item.title : item.titleEn}</h4>
                      <span className="text-[10px] text-neutral-400 font-mono">{item.date} • {item.category}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleDeleteItem(item.id, 'news')}
                    className="p-1 px-2.5 text-neutral-500 bg-neutral-100 hover:bg-red-50 hover:text-red-500 text-[11px] font-bold rounded-lg transition-all"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PHOTO GALLERY MANAGEMENT */}
        {activeMenu === 'gallery' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Album Galeri Dokumentasi Sekolah' : 'Photo Gallery Setup'}</h2>
                <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Unggah tautan foto infrastruktur atau kemah bakti siswa.' : 'Publish high definition facility or camping activity photos.'}</p>
              </div>
              <button 
                onClick={() => setIsAddingGallery(!isAddingGallery)}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md active:scale-97 transition-all leading-none"
              >
                <Plus size={15} /> {isAddingGallery ? 'Batal' : 'Tambah Foto'}
              </button>
            </div>

            {isAddingGallery && (
              <form onSubmit={handleCreateGallery} className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Judul Foto Label (ID)</label>
                    <input type="text" required value={galleryTitle} onChange={e => setGalleryTitle(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase">Tautan Gambar (URL Link)</label>
                    <input type="text" required value={galleryImage} onChange={e => setGalleryImage(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                </div>
                <button type="submit" className="w-full py-2 bg-blue-800 hover:bg-blue-955 text-white text-xs font-bold rounded-xl shadow-xs transition-all">
                  Upload Gambar
                </button>
              </form>
            )}

            {/* Gallery grids */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((g) => (
                <div key={g.id} className="relative rounded-xl border border-neutral-100 overflow-hidden group">
                  <img src={g.image} alt={g.title} className="w-full h-32 object-cover" />
                  <div className="p-2 bg-neutral-50 flex items-center justify-between border-t border-neutral-100">
                    <span className="text-[10px] text-neutral-800 font-bold truncate pr-2">{lang === 'id' ? g.title : g.titleEn}</span>
                    <button 
                      onClick={() => handleDeleteItem(g.id, 'gallery')}
                      className="text-red-650 hover:text-red-900"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. BROADCAST ANNOUNCEMENTS */}
        {activeMenu === 'announcements' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Broadcast Pengumuman & Alert' : 'System Announcements Broadcaster'}</h2>
                <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Posting memo libur atau jadwal ujian yang akan langsung muncul di home.' : 'Broadcast parent meetings, exams alerts or holiday declarations.'}</p>
              </div>
              <button 
                onClick={() => setIsAddingAnn(!isAddingAnn)}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md active:scale-97 transition-all leading-none"
              >
                <Plus size={15} /> {isAddingAnn ? 'Batal' : 'Buat Broadcast'}
              </button>
            </div>

            {isAddingAnn && (
              <form onSubmit={handleCreateAnnouncement} className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400">Judul Pengumuman (Indonesian)</label>
                    <input type="text" required value={annTitle} onChange={e => setAnnTitle(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400">Title (English)</label>
                    <input type="text" value={annTitleEn} onChange={e => setAnnTitleEn(e.target.value)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400">Target Audiens</label>
                    <select value={annTarget} onChange={e => setAnnTarget(e.target.value as any)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg">
                      <option value="all">Semua (Siswa, Guru, Orangtua)</option>
                      <option value="siswa">Khusus Siswa</option>
                      <option value="ortu">Khusus Orangtua / Wali</option>
                      <option value="guru">Khusus Guru / Staf</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400">Prioritas Level</label>
                    <select value={annPriority} onChange={e => setAnnPriority(e.target.value as any)} className="w-full px-3 py-2 text-xs border bg-white rounded-lg">
                      <option value="low">Rendah (Low)</option>
                      <option value="medium">Sedang (Medium)</option>
                      <option value="high">Tinggi (High - Red Banner Alert)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-400">Isi Pesan Surat Broadcaster</label>
                  <textarea required value={annContent} onChange={e => setAnnContent(e.target.value)} rows={3} className="w-full px-3 py-2 text-xs border bg-white rounded-lg" />
                </div>

                <button type="submit" className="w-full py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow-xs font-sans">
                  Kirim Broadcast Sekarang
                </button>
              </form>
            )}

            {/* Announcements stack */}
            <div className="space-y-3">
              {announcements.map((ann) => (
                <div key={ann.id} className="border border-neutral-150 p-4 rounded-xl flex justify-between items-start bg-neutral-50/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded leading-none ${
                        ann.priority === 'high' ? 'bg-red-100 text-red-700' :
                        ann.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-neutral-100 text-neutral-700'
                      }`}>
                        Priority: {ann.priority}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold text-[9px]">{ann.target} target</span>
                    </div>
                    <h4 className="font-sans font-bold text-neutral-900 text-xs md:text-sm mt-1">{lang === 'id' ? ann.title : ann.titleEn}</h4>
                    <p className="text-neutral-500 text-xs font-medium pr-8">{lang === 'id' ? ann.content : ann.contentEn}</p>
                  </div>

                  <button 
                    onClick={() => handleDeleteItem(ann.id, 'ann')}
                    className="text-neutral-400 hover:text-red-500 p-1 rounded transition-colors shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. VIEW SPMB VERIFIER LIST */}
        {activeMenu === 'registrations' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Verifikasi Pendaftar Sekolah Baru SPMB' : 'Admissions Verification'}</h2>
              <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Review berkas online siswa baru yang mendaftar via portal.' : 'Review online admission logs, and update credentials.'}</p>
            </div>

            <div className="border border-neutral-150 rounded-2xl overflow-hidden text-[11px]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-100 font-bold text-neutral-500 uppercase">
                    <th className="p-3 pl-4">No. Pendaftaran</th>
                    <th className="p-3">Nama Lengkap</th>
                    <th className="p-3">NISN</th>
                    <th className="p-3">Minat Utama</th>
                    <th className="p-3">Status Berkas</th>
                    <th className="p-3 text-right pr-4">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-600">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-neutral-50">
                      <td className="p-3 pl-4 font-mono font-bold text-neutral-800">{reg.registrationNumber}</td>
                      <td className="p-3 font-sans font-extrabold text-neutral-900">{reg.fullName}</td>
                      <td className="p-3 font-mono text-neutral-400">{reg.nisn}</td>
                      <td className="p-3 uppercase font-bold text-blue-800">{reg.programChoice1}</td>
                      <td className="p-3 font-semibold">
                        <span className={`px-2 py-0.5 rounded uppercase text-[9px] ${
                          reg.status === 'diverifikasi' ? 'bg-blue-100 text-blue-700' :
                          reg.status === 'diterima' ? 'bg-blue-100 text-blue-800' :
                          reg.status === 'ditolak' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {reg.status}
                        </span>
                      </td>
                      <td className="p-3 text-right pr-4 flex justify-end gap-1 font-sans">
                        <button 
                          onClick={() => handleUpdateSpmbStatus(reg.id, 'diverifikasi')}
                          className="bg-blue-50 text-blue-800 border border-blue-100 font-extrabold text-[9px] px-2 py-1 rounded cursor-pointer"
                        >
                          Verify
                        </button>
                        <button 
                          onClick={() => handleUpdateSpmbStatus(reg.id, 'diterima')}
                          className="bg-blue-50 text-blue-800 border border-blue-100 font-extrabold text-[9px] px-2 py-1 rounded cursor-pointer"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleUpdateSpmbStatus(reg.id, 'ditolak')}
                          className="bg-red-50 text-red-800 border border-red-100 font-extrabold text-[9px] px-2 py-1 rounded cursor-pointer"
                        >
                          Decline
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 7. VIEW MESSAGES LOGS */}
        {activeMenu === 'messages' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">{lang === 'id' ? 'Inbox Pengaduan & Tanya Jawab Wali' : 'Incoming Form Queries'}</h2>
              <p className="text-neutral-500 text-xs mt-0.5">{lang === 'id' ? 'Data pengaduan saran yang masuk melalui input form kontak Kami.' : 'Inbox of questions, feedback, and parental concerns.'}</p>
            </div>

            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`border p-5 rounded-2xl space-y-3 ${msg.status === 'unread' ? 'bg-blue-50/40 border-blue-200 border-blue-300' : 'bg-white border-neutral-150'}`}>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-3">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 block">{msg.date} • Sent by {msg.email}</span>
                      <h4 className="font-sans font-bold text-neutral-900 text-sm mt-0.5">{msg.name}</h4>
                      <p className="text-blue-800 text-[11px] font-bold">Subjek (Topic): {msg.subject}</p>
                    </div>

                    <div className="flex gap-1">
                      {msg.status === 'unread' && (
                        <button 
                          onClick={() => onSetMessages(messages.map(m => m.id === msg.id ? { ...m, status: 'read' } : m))}
                          className="bg-blue-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg hover:bg-blue-700"
                        >
                          Mark Read
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleDeleteItem(msg.id, 'msg')}
                        className="text-neutral-400 hover:text-red-500 p-1.5 rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs leading-relaxed italic font-medium font-sans">
                    "{msg.message}"
                  </p>
                </div>
              ))}

              {messages.length === 0 && (
                <div className="text-center py-12 text-neutral-400">
                  <MessageSquare size={36} className="mx-auto" />
                  <p className="text-xs font-bold mt-1">Inbox kosong saat ini.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 8. MANAGER LOWONGAN PEKERJAAN (BKK) */}
        {activeMenu === 'vacancies' && (
          <div className="space-y-6 animate-fade-in text-neutral-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">
                  {lang === 'id' ? 'Pengelolaan Lowongan Kerja BKK' : 'BKK Career Postings Manager'}
                </h2>
                <p className="text-neutral-500 text-xs mt-0.5 animate-pulse bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md inline-block font-sans font-bold">
                  {lang === 'id' ? 'Akses Khusus: Ketua BKK & Administrator' : 'Authorized Access: BKK Chairman & Admin'}
                </p>
              </div>

              {!isAddingJob && (
                <button
                  onClick={() => setIsAddingJob(true)}
                  className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm shadow-blue-800/10 active:scale-98 transition-all cursor-pointer"
                >
                  <Plus size={15} /> 
                  {lang === 'id' ? 'Tambah Lowongan Baru' : 'Add New Job Post'}
                </button>
              )}
            </div>

            {isAddingJob && (
              <form onSubmit={handleCreateJob} className="bg-neutral-50 border border-neutral-150 p-6 rounded-3xl space-y-4 max-w-2xl animate-fade-in">
                <div className="flex justify-between items-center border-b border-neutral-200 pb-3 mb-2">
                  <h3 className="font-sans font-bold text-sm text-neutral-800 flex items-center gap-1.5 text-blue-800">
                    <HeartHandshake size={18} />
                    {lang === 'id' ? 'Form Upload Lowongan Baru' : 'New Career Opportunity Card'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsAddingJob(false)}
                    className="text-neutral-500 hover:text-neutral-700 text-xs font-bold"
                  >
                    {lang === 'id' ? 'Batal' : 'Cancel'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Nama Pekerjaan (ID)' : 'Job Title (ID)'}</label>
                    <input
                      type="text"
                      required
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g. Mekanik Motor Yamaha"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Nama Pekerjaan (EN)' : 'Job Title (EN)'}</label>
                    <input
                      type="text"
                      value={jobTitleEn}
                      onChange={(e) => setJobTitleEn(e.target.value)}
                      placeholder="e.g. Yamaha Motorcycle Mechanic"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Nama Perusahaan*' : 'Company Name*'}</label>
                    <input
                      type="text"
                      required
                      value={jobCompany}
                      onChange={(e) => setJobCompany(e.target.value)}
                      placeholder="e.g. PT Yamaha Indonesia Motor Mfg."
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Lokasi Penempatan*' : 'Location / Placement*'}</label>
                    <input
                      type="text"
                      required
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      placeholder="e.g. Karawang, Jawa Barat"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Kompensasi / Gaji' : 'Compensation / Salary'}</label>
                    <input
                      type="text"
                      value={jobSalary}
                      onChange={(e) => setJobSalary(e.target.value)}
                      placeholder="e.g. Rp 5.000.000 - Rp 6.500.000"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Batas Tanggal Pengetatan' : 'Closing Date'}</label>
                    <input
                      type="date"
                      value={jobClosingDate}
                      onChange={(e) => setJobClosingDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Link Logo Perusahaan (Opsional)' : 'Corporate Logo URL (Optional)'}</label>
                  <input
                    type="text"
                    value={jobLogo}
                    onChange={(e) => setJobLogo(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">
                      {lang === 'id' ? 'Persyaratan / Requirements (Satu baris per poin)*' : 'Requirements (One per line)*'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={jobRequirements}
                      onChange={(e) => setJobRequirements(e.target.value)}
                      placeholder="Laki-laki maks 23 tahun&#10;Lulusan SMK Jurusan TSM / Otomotif&#10;Sehat jasmani & bebas narkoba"
                      className="w-full p-3 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">
                      {lang === 'id' ? 'Persyaratan dalam Bahasa Inggris' : 'Requirements in English (One per line)'}
                    </label>
                    <textarea
                      rows={4}
                      value={jobRequirementsEn}
                      onChange={(e) => setJobRequirementsEn(e.target.value)}
                      placeholder="Male max 23 years old&#10;SMK Vocational Graduates (Automotive)&#10;Physical fit & drug-free"
                      className="w-full p-3 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-800 hover:bg-blue-900 border border-blue-900 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus size={14} />
                  {lang === 'id' ? 'Publikasikan Lowongan Kerja' : 'Publish Career Posting'}
                </button>
              </form>
            )}

            {/* List of current Active Vacancies */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
              <div className="p-4 bg-neutral-50/70 border-b border-neutral-200 flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-700">
                  {lang === 'id' ? 'Daftar Lowongan Aktif' : 'Active Career Postings'} ({jobs.length})
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Real-time DB Sync</span>
              </div>

              <div className="divide-y divide-neutral-150">
                {jobs.map((job) => (
                  <div key={job.id} className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50/40 transition-colors">
                    <div className="flex gap-4 items-start">
                      <img src={job.logo} alt={job.company} className="w-12 h-12 object-cover rounded-xl border shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-sans font-bold text-neutral-900 text-sm leading-tight">
                            {lang === 'id' ? job.title : job.titleEn}
                          </h4>
                          <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded ${job.status === 'open' ? 'bg-emerald-50 text-emerald-800 border border-emerald-150' : 'bg-red-50 text-red-800 border border-red-150'}`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-blue-800 text-xs font-bold">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-[10px] text-neutral-400 font-medium">
                          <span>📍 Location: {job.location}</span>
                          <span>💰 Salary: {job.salary}</span>
                          <span>📅 Closing: {job.closingDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => handleToggleJobStatus(job.id)}
                        className="px-3 py-1.5 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-[10px] font-bold rounded-lg cursor-pointer"
                        title="Ubah Status Lowongan"
                      >
                        {job.status === 'open' 
                          ? (lang === 'id' ? 'Tutup Lowongan' : 'Close Posting') 
                          : (lang === 'id' ? 'Buka Lowongan' : 'Open Posting')}
                      </button>

                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="p-1.5 border border-red-100 hover:bg-red-50 text-red-600 rounded-lg cursor-pointer"
                        title="Hapus Lowongan"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}

                {jobs.length === 0 && (
                  <div className="text-center py-12 text-neutral-400">
                    <HeartHandshake size={36} className="mx-auto text-neutral-300" />
                    <p className="text-xs font-bold mt-1">Belum ada lowongan pekerjaan.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 9. PENGELOLAAN GURU & KARYAWAN (ADMIN/STAFF VIEW) */}
        {activeMenu === 'teachers' && (
          <div className="space-y-6 animate-fade-in text-neutral-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">
                  {lang === 'id' ? 'Pengelolaan Direktori Guru & Karyawan' : 'Teachers & Staff Directory Manager'}
                </h2>
                <p className="text-neutral-500 text-xs mt-0.5 animate-pulse bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md inline-block font-sans font-bold">
                  {lang === 'id' ? 'Akses Terbuka: Administrator & Staff' : 'Authorized Access: Admin & Staff'}
                </p>
              </div>

              {!isAddingTeacher && (
                <button
                  onClick={() => {
                    setEditingTeacherId(null);
                    setTchName('');
                    setTchNip('');
                    setTchRole('');
                    setTchRoleEn('');
                    setTchType('guru');
                    setTchImage('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150');
                    setTchPhone('');
                    setIsAddingTeacher(true);
                  }}
                  className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm active:scale-98 transition-all cursor-pointer"
                >
                  <Plus size={15} /> 
                  {lang === 'id' ? 'Tambah Guru / Staf Baru' : 'Add New Teacher / Staff'}
                </button>
              )}
            </div>

            {isAddingTeacher && (
              <form onSubmit={handleSaveTeacher} className="bg-neutral-50 border border-neutral-150 p-6 rounded-3xl space-y-4 max-w-2xl animate-fade-in">
                <div className="flex justify-between items-center border-b border-neutral-200 pb-3 mb-2">
                  <h3 className="font-sans font-bold text-sm text-neutral-800 flex items-center gap-1.5 text-blue-800">
                    <GraduationCap size={18} />
                    {editingTeacherId 
                      ? (lang === 'id' ? 'Edit Profil Guru / Karyawan' : 'Edit Teacher / Staff Profile') 
                      : (lang === 'id' ? 'Form Tambah Guru / Karyawan baru' : 'New Teacher / Staff Profile')}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingTeacher(false);
                      setEditingTeacherId(null);
                    }}
                    className="text-neutral-500 hover:text-neutral-700 text-xs font-bold cursor-pointer"
                  >
                    {lang === 'id' ? 'Batal' : 'Cancel'}
                  </button>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Nama Lengkap & Gelar*' : 'Full Name & Degree*'}</label>
                    <input
                      type="text"
                      required
                      value={tchName}
                      onChange={(e) => setTchName(e.target.value)}
                      placeholder="e.g. Suwito, S.Pd., M.T."
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'NIP (Nomor Induk Pegawai)' : 'NIP (Government ID)'}</label>
                    <input
                      type="text"
                      value={tchNip}
                      onChange={(e) => setTchNip(e.target.value)}
                      placeholder="e.g. 19750814 200312 1 002"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Kategori Kepegawaian*' : 'Employment Category*'}</label>
                    <select
                      value={tchType}
                      onChange={(e) => setTchType(e.target.value as 'guru' | 'staf')}
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    >
                      <option value="guru">{lang === 'id' ? 'Guru / Pengajar' : 'Educator / Teacher'}</option>
                      <option value="staf">{lang === 'id' ? 'Staf Kependidikan / Karyawan' : 'Administrative / Staff'}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'No. HP / WhatsApp (Aktif)' : 'WhatsApp Phone Number'}</label>
                    <input
                      type="text"
                      value={tchPhone}
                      onChange={(e) => setTchPhone(e.target.value)}
                      placeholder="e.g. 08123456789"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Jabatan / Mata Pelajaran (ID)*' : 'Role / Subject (ID)*'}</label>
                    <input
                      type="text"
                      required
                      value={tchRole}
                      onChange={(e) => setTchRole(e.target.value)}
                      placeholder="e.g. Guru Produktif TKJ"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-700 text-xs font-semibold block">{lang === 'id' ? 'Jabatan / Mata Pelajaran (EN)' : 'Role / Subject (EN)'}</label>
                    <input
                      type="text"
                      value={tchRoleEn}
                      onChange={(e) => setTchRoleEn(e.target.value)}
                      placeholder="e.g. Vocational TKJ Teacher"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                {/* Upload Foto Guru / Staf */}
                <div className="p-4 bg-white border border-neutral-200 rounded-2xl space-y-3">
                  <span className="text-neutral-700 text-xs font-bold block">{lang === 'id' ? 'Foto Profil Guru / Staf' : 'Profile Photo Selection'}</span>
                  <div className="flex items-center gap-4">
                    <img
                      src={tchImage}
                      alt="Review"
                      className="w-14 h-14 rounded-full object-cover border border-neutral-200 bg-neutral-50 shrink-0 animate-fade-in"
                    />
                    <div className="space-y-1.5 flex-1 w-full">
                      <p className="text-[10px] text-neutral-500 font-sans leading-snug">
                        {lang === 'id' 
                          ? 'Silakan unggah foto dari komputer Anda atau tempel link gambar eksternal di bawah ini.' 
                          : 'You can upload direct files from disk or fill in an image URL link below.'}
                      </p>
                      
                      {/* Real File Uploader */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              if (typeof reader.result === 'string') {
                                setTchImage(reader.result);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="block w-full text-[11px] text-neutral-500
                          file:mr-2.5 file:py-1 file:px-2.5
                          file:rounded-lg file:border-0
                          file:text-[10px] file:font-semibold
                          file:bg-blue-50 file:text-blue-800
                          hover:file:bg-blue-100 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 pt-1.5 border-t border-neutral-100">
                    <label className="text-neutral-600 text-[10px] font-bold block">{lang === 'id' ? 'Atau paste URL Foto Profil (Opsional)' : 'Or enter profile image URL (Optional)'}</label>
                    <input
                      type="text"
                      value={tchImage}
                      onChange={(e) => setTchImage(e.target.value)}
                      placeholder="e.g. https://images.unsplash.com/..."
                      className="w-full px-3 py-2 bg-neutral-55 border border-neutral-200 rounded-xl text-[10px] focus:ring-2 focus:ring-blue-600 text-neutral-800 outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-blue-805 hover:bg-blue-900 border border-blue-900 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer bg-blue-800"
                  >
                    <Check size={14} />
                    {editingTeacherId 
                      ? (lang === 'id' ? 'Simpan Perubahan Profil' : 'Save Profile Changes') 
                      : (lang === 'id' ? 'Tambahkan ke Direktori' : 'Add to Faculty Directory')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingTeacher(false);
                      setEditingTeacherId(null);
                    }}
                    className="px-4 py-2.5 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl active:scale-98 transition-all cursor-pointer"
                  >
                    {lang === 'id' ? 'Batal' : 'Cancel'}
                  </button>
                </div>
              </form>
            )}

            {/* List of current Active Teachers */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
              <div className="p-4 bg-neutral-50/70 border-b border-neutral-200 flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-700">
                  {lang === 'id' ? 'Daftar Guru & Karyawan Terdaftar' : 'Active Registered Teachers & Staff'} ({teachers.length})
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Synced Offline Storage</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 animate-fade-in">
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="p-4 bg-neutral-50/50 border border-neutral-150 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex gap-3.5 items-center overflow-hidden">
                      <img src={teacher.image} alt={teacher.name} className="w-12 h-12 object-cover rounded-full border shrink-0 bg-neutral-100" />
                      <div className="space-y-1 overflow-hidden">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-sans font-bold text-neutral-900 text-xs truncate leading-tight" title={teacher.name}>
                            {teacher.name}
                          </h4>
                          <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded ${teacher.type === 'guru' ? 'bg-emerald-50 text-emerald-850 border border-emerald-100' : 'bg-blue-50 text-blue-850 border border-blue-100'}`}>
                            {teacher.type === 'guru' ? 'GURU' : 'STAF'}
                          </span>
                        </div>
                        <p className="text-neutral-500 text-[11px] truncate leading-none">{lang === 'id' ? teacher.role : teacher.roleEn}</p>
                        {teacher.nip && teacher.nip !== '-' && (
                          <p className="text-[9px] text-neutral-400 font-mono leading-none">NIP. {teacher.nip}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleEditTeacherClick(teacher)}
                        className="p-1.5 border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-770 rounded-lg cursor-pointer transition-colors"
                        title="Edit Profil"
                      >
                        <Edit2 size={12} />
                      </button>

                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="p-1.5 border border-red-105 bg-white hover:bg-red-50 text-red-600 rounded-lg cursor-pointer transition-colors"
                        title="Hapus Profil"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}

                {teachers.length === 0 && (
                  <div className="col-span-2 text-center py-12 text-neutral-400">
                    <GraduationCap size={36} className="mx-auto text-neutral-300 pointer-events-none" />
                    <p className="text-xs font-bold mt-1">Belum ada Guru / Karyawan terdaftar.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
