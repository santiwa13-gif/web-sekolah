import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LoginModal from './components/LoginModal';

// Views
import HomeView from './components/HomeView';
import ProfileView from './components/ProfileView';
import NewsView from './components/NewsView';
import ProgramsView from './components/ProgramsView';
import EkskulView from './components/EkskulView';
import SpmbView from './components/SpmbView';
import BkkView from './components/BkkView';
import TefaView from './components/TefaView';
import ContactView from './components/ContactView';
import AdminDashboard from './components/AdminDashboard';

import { Lang, User, NewsItem, GalleryItem, StudentData, AlumniData, Announcement, ContactMessage, SpmbRegistration, TeacherStaff } from './types';
import { 
  INITIAL_NEWS, INITIAL_GALLERY, INITIAL_STUDENTS, INITIAL_ALUMNI, 
  INITIAL_JOBS, INITIAL_PARTNERS, INITIAL_TEFA, INITIAL_ANNOUNCEMENTS, INITIAL_SPMB,
  INITIAL_TEACHERS
} from './data/initialData';

export default function App() {
  // Lang Toggle State
  const [lang, setLang] = useState<Lang>(() => {
    const cached = localStorage.getItem('musa_lang');
    return (cached === 'en' || cached === 'id' || cached === 'ja' || cached === 'ar') ? cached as Lang : 'id';
  });

  // Navigation state
  const [activeView, setActiveView] = useState<string>(() => {
    const cached = localStorage.getItem('musa_active_view');
    return cached || 'beranda';
  });
  const [subItemNav, setSubItemNav] = useState<string | undefined>(undefined);

  // Auth User Session state
  const [activeUser, setActiveUser] = useState<User | null>(() => {
    const cached = localStorage.getItem('musa_user');
    return cached ? JSON.parse(cached) : null;
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Primary CMS/Database lists states (persisted via local storages)
  const [news, setNews] = useState<NewsItem[]>(() => {
    const cached = localStorage.getItem('musa_news');
    return cached ? JSON.parse(cached) : INITIAL_NEWS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const cached = localStorage.getItem('musa_gallery');
    return cached ? JSON.parse(cached) : INITIAL_GALLERY;
  });

  const [students, setStudents] = useState<StudentData[]>(() => {
    const cached = localStorage.getItem('musa_students');
    return cached ? JSON.parse(cached) : INITIAL_STUDENTS;
  });

  const [alumni, setAlumni] = useState<AlumniData[]>(() => {
    const cached = localStorage.getItem('musa_alumni');
    return cached ? JSON.parse(cached) : INITIAL_ALUMNI;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const cached = localStorage.getItem('musa_announcements');
    return cached ? JSON.parse(cached) : INITIAL_ANNOUNCEMENTS;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const cached = localStorage.getItem('musa_messages');
    return cached ? JSON.parse(cached) : [];
  });

  const [registrations, setRegistrations] = useState<SpmbRegistration[]>(() => {
    const cached = localStorage.getItem('musa_registrations');
    return cached ? JSON.parse(cached) : INITIAL_SPMB;
  });

  const [jobs, setJobs] = useState<any[]>(() => {
    const cached = localStorage.getItem('musa_jobs');
    return cached ? JSON.parse(cached) : INITIAL_JOBS;
  });

  const [teachers, setTeachers] = useState<TeacherStaff[]>(() => {
    const cached = localStorage.getItem('musa_teachers');
    return cached ? JSON.parse(cached) : INITIAL_TEACHERS;
  });

  // Syncing to local storage to persist admin modifications
  useEffect(() => {
    localStorage.setItem('musa_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('musa_active_view', activeView);
  }, [activeView]);

  useEffect(() => {
    if (activeUser) {
      localStorage.setItem('musa_user', JSON.stringify(activeUser));
    } else {
      localStorage.removeItem('musa_user');
    }
  }, [activeUser]);

  useEffect(() => {
    localStorage.setItem('musa_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('musa_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('musa_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('musa_alumni', JSON.stringify(alumni));
  }, [alumni]);

  useEffect(() => {
    localStorage.setItem('musa_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('musa_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('musa_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('musa_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('musa_teachers', JSON.stringify(teachers));
  }, [teachers]);

  // Helpers
  const handleLanguageToggle = () => {
    setLang(prev => {
      if (prev === 'id') return 'en';
      if (prev === 'en') return 'ja';
      if (prev === 'ja') return 'ar';
      return 'id';
    });
  };

  const handleLoginSuccess = (user: User) => {
    setActiveUser(user);
    // Auto shift to dashboard once logged in successfully
    setActiveView('admin');
  };

  const handleLogout = () => {
    setActiveUser(null);
    if (activeView === 'admin') {
      setActiveView('beranda');
    }
  };

  const handleNavigation = (viewId: string, itemSubId?: string) => {
    setActiveView(viewId);
    setSubItemNav(itemSubId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State log append mechanisms
  const handleAddNewRegistration = (reg: SpmbRegistration) => {
    setRegistrations(prev => [reg, ...prev]);
  };

  const handleAddNewAlumni = (alm: AlumniData) => {
    setAlumni(prev => [alm, ...prev]);
  };

  const handleAddNewMessage = (msg: ContactMessage) => {
    setMessages(prev => [msg, ...prev]);
  };

  return (
    <Layout
      lang={lang}
      onLanguageToggle={handleLanguageToggle}
      activeUser={activeUser}
      onLogout={handleLogout}
      onOpenLogin={() => setIsLoginOpen(true)}
      activeView={activeView}
      onNavigate={handleNavigation}
    >
      {/* RENDER DECIDER */}
      <div id="school-view-canvas" className="animate-fade-in">
        
        {activeView === 'beranda' && (
          <HomeView 
            lang={lang} 
            news={news} 
            announcements={announcements} 
            onNavigate={handleNavigation} 
            teachers={teachers}
          />
        )}

        {activeView === 'profil' && (
          <ProfileView lang={lang} />
        )}

        {activeView === 'berita' && (
          <NewsView lang={lang} news={news} />
        )}

        {activeView === 'kompetensi' && (
          <ProgramsView lang={lang} initialActiveProgram={subItemNav || 'tkr'} />
        )}

        {activeView === 'ekstrakurikuler' && (
          <EkskulView lang={lang} initialActiveEkskul={subItemNav || 'marching_band'} />
        )}

        {activeView === 'spmb' && (
          <SpmbView 
            lang={lang} 
            registrations={registrations} 
            onAddRegistration={handleAddNewRegistration} 
          />
        )}

        {activeView === 'bkk' && (
          <BkkView 
            lang={lang} 
            jobs={jobs} 
            partners={INITIAL_PARTNERS} 
            alumni={alumni} 
            onAddAlumni={handleAddNewAlumni} 
          />
        )}

        {activeView === 'tefa' && (
          <TefaView lang={lang} tefaProducts={INITIAL_TEFA} />
        )}

        {activeView === 'tentang-kami' && (
          <ContactView lang={lang} onAddMessage={handleAddNewMessage} />
        )}

        {activeUser && activeView === 'admin' && (
          <AdminDashboard
            lang={lang}
            activeUser={activeUser}
            news={news}
            gallery={gallery}
            students={students}
            alumni={alumni}
            announcements={announcements}
            messages={messages}
            registrations={registrations}
            jobs={jobs}
            teachers={teachers}
            
            // Setters
            onSetNews={setNews}
            onSetGallery={setGallery}
            onSetStudents={setStudents}
            onSetAlumni={setAlumni}
            onSetAnnouncements={setAnnouncements}
            onSetMessages={setMessages}
            onSetRegistrations={setRegistrations}
            onSetJobs={setJobs}
            onSetTeachers={setTeachers}
          />
        )}

      </div>

      {/* Auxiliary auth modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
        lang={lang}
      />
    </Layout>
  );
}
