import { 
  NewsItem, 
  GalleryItem, 
  StudentData, 
  AlumniData, 
  JobVacancy, 
  Partner, 
  TefaProduct, 
  Announcement,
  SpmbRegistration,
  TeacherStaff
} from '../types';

export const DICTIONARY = {
  id: {
    title: "SMK Muhammadiyah Randublatung",
    subtitle: "Sekolah Unggul, Berkarakter, Islami, & Berdaya Saing",
    heroTitle: "Membentuk Generasi Berprestasi, Berkarakter Islami, dan Siap Kerja",
    heroDesc: "SMK Muhammadiyah Randublatung, Blora berkomitmen memberikan pendidikan kejuruan bermutu tinggi yang diintegrasikan dengan nilai-nilai luhur keislaman Muhammadiyah dan didukung kerja sama industri luas.",
    exploreMore: "Jelajahi Lebih Lanjut",
    registerNow: "Daftar SPMB Online",
    viewAll: "Lihat Semua",
    backToHome: "Kembali ke Beranda",
    language: "Bahasa",
    
    // Menu
    menuHome: "Beranda",
    menuProfile: "Profil",
    menuNews: "Berita",
    menuPrograms: "Kompetensi Keahlian",
    menuEkskul: "Ekstrakurikuler",
    menuSpmb: "SPMB (Pendaftaran)",
    menuBkk: "BKK & Alumni",
    menuTefa: "Teaching Factory",
    menuAbout: "Tentang Kami",
    menuLogin: "Login Staff",
    menuDashboard: "Dashboard Admin",

    // Submenu Programs
    tkr: "Teknik Kendaraan Ringan (TKR)",
    tab: "Teknik Alat Berat (TAB)",
    tsm: "Teknik Sepeda Motor (TSM)",
    tkj: "Teknik Komputer & Jaringan (TKJ)",

    // Submenu BKK
    bkkVacancies: "Lowongan Pekerjaan",
    bkkTracer: "Tracer Study (Alumni)",
    bkkPartners: "Mitra Industri",

    // Profil Page
    profileHistory: "Sejarah Singkat",
    profileVision: "Visi & Misi",
    profileStructure: "Struktur Organisasi",
    profileIdentity: "Identitas Sekolah",
    welcomeTitle: "Sambutan Kepala Sekolah",
    welcomeText: "Assalamu'alaikum Wr. Wb. Selamat datang di portal SMK Muhammadiyah Randublatung. Melalui platform digital ini, kami bertekad mempercepat akses informasi sekolah untuk seluruh civitas akademika, orang tua, alumni, dan masyarakat luas, khususnya di wilayah Randublatung, Blora, dan sekitarnya. Kami memadukan keterampilan vokasi dunia industri modern dengan landasan tauhid Muhammadiyah yang kukuh.",

    // Interactive details
    statsSiswa: "Jumlah Siswa",
    statsGuru: "Staff & Pengajar",
    teachersTitle: "Direktori Guru & Karyawan",
    teachersSubtitle: "Pendidik Kompeten & Tenaga Kependidikan Profesional",
    statsMitra: "Mitra Industri",
    statsLulus: "Tingkat Keterserapan Lulusan",

    // Spmb
    spmbTitle: "Penerimaan Siswa Baru (SPMB)",
    spmbDesc: "Pendaftaran siswa baru tahun ajaran 2026/2027 telah dibuka secara daring. Pilih jurusan terbaikmu dan raih masa depan gilang-gemilang bersama kami.",
    spmbSteps: "Alur Pendaftaran",
    spmbRegisterForm: "Formulir Pendaftaran SPMB",
    spmbCheckStatus: "Cek Status Pendaftaran",
    personalData: "Data Pribadi",
    academicChoice: "Pilihan Kompetensi",
    registerSuccess: "Pendaftaran berhasil dikirim! Silakan catat nomor pendaftaran Anda:",

    // BKK & Alumni
    bkkTitle: "Bursa Kerja Khusus & Tracer Study",
    bkkDesc: "Kami memfasilitasi penyaluran industri secara intensif bagi alumni dan menjalin kemitraan erat dengan puluhan perusahaan terkemuka.",
    tracerFormTitle: "Pengisian Tracer Study Alumni",
    tracerFormDesc: "Bagi para alumni SMK Muhammadiyah Randublatung, mohon luangkan waktu 2 menit untuk mengisi tracer study ini untuk akreditasi dan pemetaan sekolah.",

    // Teaching Factory
    tefaTitle: "Teaching Factory (TEFA)",
    tefaDesc: "Model pembelajaran berbasis produksi riil sesuai standar industri. Siswa kami memproduksi barang dan jasa berkualitas tinggi yang dapat dipesan oleh publik luas.",

    // Common labels
    search: "Cari...",
    filter: "Saring",
    login: "Masuk",
    logout: "Keluar",
    username: "Nama Pengguna",
    password: "Kata Sandi",
    address: "Alamat",
    phone: "No. Telepon",
    email: "Email",
    subject: "Subjek",
    message: "Pesan",
    submit: "Kirim",
    saveChange: "Simpan Perubahan",
    cancel: "Batal",
    alertNewNotification: "Pengumuman Penting Terbaru",
    verified: "Diverifikasi",
    pending: "Menunggu",
    rejected: "Ditolak",
    male: "Laki-laki",
    female: "Perempuan",
  },
  en: {
    title: "SMK Muhammadiyah Randublatung",
    subtitle: "Outstanding, Character-Driven, Islamic, & Competitive School",
    heroTitle: "Developing Inspiring Graduates with Islamic Character & Career Readiness",
    heroDesc: "SMK Muhammadiyah Randublatung, Blora is committed to delivering premium vocational education integrated with noble Islamic Muhammadiyah virtues, supported by extensive industrial linkages.",
    exploreMore: "Explore More",
    registerNow: "Register Online",
    viewAll: "View All",
    backToHome: "Back to Home",
    language: "Language",

    // Menu
    menuHome: "Home",
    menuProfile: "Profile",
    menuNews: "News",
    menuPrograms: "Vocational Majors",
    menuEkskul: "Extracurriculars",
    menuSpmb: "Admissions (SPMB)",
    menuBkk: "BKK & Alumni",
    menuTefa: "Teaching Factory",
    menuAbout: "About Us",
    menuLogin: "Staff Login",
    menuDashboard: "Admin Dashboard",

    // Submenu Programs
    tkr: "Light Vehicle Automotive Engineering (TKR)",
    tab: "Heavy Equipment Engineering (TAB)",
    tsm: "Motorcycle Engineering (TSM)",
    tkj: "Computer & Network Engineering (TKJ)",

    // Submenu BKK
    bkkVacancies: "Job Vacancies",
    bkkTracer: "Tracer Study (Alumni)",
    bkkPartners: "Industry Partners",

    // Profil Page
    profileHistory: "Brief History",
    profileVision: "Vision & Mission",
    profileStructure: "Organization Chart",
    profileIdentity: "School Identity",
    welcomeTitle: "Principal's Welcome Speech",
    welcomeText: "Greetings and peace be upon you. Welcome to the official SMK Muhammadiyah Randublatung website. Through this digital ecosystem, we wish to facilitate real-time info access for all teachers, parents, students, alumni, and the public, especially in Blora Regency. We integrate cutting-edge industrial machinery skills with strong Muhammadiyah theology.",

    // Interactive details
    statsSiswa: "Total Students",
    statsGuru: "Teachers & Staff",
    teachersTitle: "Teachers & Staff Directory",
    teachersSubtitle: "Competent Educators & Professional Academic Officers",
    statsMitra: "Industry Partners",
    statsLulus: "Graduate Employment Rate",

    // Spmb
    spmbTitle: "New Student Admission (SPMB)",
    spmbDesc: "New student enrollment for 2026/2027 is now open. Pick your best major and build a brilliant future with us.",
    spmbSteps: "Admission Flow",
    spmbRegisterForm: "SPMB Registration Form",
    spmbCheckStatus: "Check Admission Status",
    personalData: "Personal Information",
    academicChoice: "Major Preference",
    registerSuccess: "Registration successfully submitted! Please record your registration number:",

    // BKK & Alumni
    bkkTitle: "Special Job Portal & Tracer Study",
    bkkDesc: "We facilitate active job matchings for our graduates and cooperate tightly with dozens of elite manufacturing and technology companies.",
    tracerFormTitle: "Alumni Tracer Study Form",
    tracerFormDesc: "For SMK Muhammadiyah Randublatung alumni, please spend 2 minutes filling out this tracker for school evaluation and accreditation optimization.",

    // Teaching Factory
    tefaTitle: "Teaching Factory (TEFA)",
    tefaDesc: "Industrial-grade production learning model. Our senior students manufacture excellent products and technical services orderable by the general public.",

    // Common labels
    search: "Search...",
    filter: "Filter",
    login: "Sign In",
    logout: "Sign Out",
    username: "Username",
    password: "Password",
    address: "Address",
    phone: "Phone Number",
    email: "Email Address",
    subject: "Subject",
    message: "Message",
    submit: "Submit",
    saveChange: "Save Changes",
    cancel: "Cancel",
    alertNewNotification: "Latest Important Announcements",
    verified: "Verified",
    pending: "Pending",
    rejected: "Rejected",
    male: "Male",
    female: "Female",
  },
  ja: {
    title: "SMKムハマディヤ・ランドゥブラトゥン",
    subtitle: "卓越、個の育成、イスラム精神、精神的な強さと競争力のある学校",
    heroTitle: "卓越した実績、イスラムの人格、そして就業準備の整った世代の育成",
    heroDesc: "SMKムハマディヤ・ランドゥブラトゥン（ブローラ）は、ムハマディヤの崇高なイスラムの価値観と融合し、広範な産業連携に支えられた卓越した職業教育を提供することに取り組んでいます。",
    exploreMore: "詳細を見る",
    registerNow: "オンライン入学登録",
    viewAll: "すべて表示",
    backToHome: "ホームに戻る",
    language: "言語",
    menuHome: "ホーム",
    menuProfile: "プロフィール",
    menuNews: "ニュース",
    menuPrograms: "専攻プログラム",
    menuEkskul: "部活動・課外活動",
    menuSpmb: "新入生募集 (SPMB)",
    menuBkk: "求人・卒業生",
    menuTefa: "教育工場 (TEFA)",
    menuAbout: "お問い合わせ",
    menuLogin: "教職員ログイン",
    menuDashboard: "管理者ダッシュボード",
    tkr: "自動車整備工学科 (TKR)",
    tab: "建設重機整備工学科 (TAB)",
    tsm: "二輪自動車整備工学科 (TSM)",
    tkj: "コンピュータネットワーク工学科 (TKJ)",
    bkkVacancies: "求人情報",
    bkkTracer: "卒業生追跡調査",
    bkkPartners: "提携先企業",
    profileHistory: "沿革",
    profileVision: "ビジョン＆ミッション",
    profileStructure: "組織図",
    profileIdentity: "学校概要",
    welcomeTitle: "校長挨拶",
    welcomeText: "アッサラーム・アライクム・ワ・ラフマトゥッラーヒ・ワ・バラカートゥフ。SMKムハマディヤ・ランドゥブラトゥンの公式ウェブサイトへようこそ。このデジタルプラットフォームを通じて、全教職員、保護者、学生、卒業生、そして地域社会の皆様に最新かつ迅速な情報へのアクセスを提供します。私たちは、先端技術に基づく実用的な技術教育と、ムハマディヤの確固たる一神教の精神を調和させています。",
    statsSiswa: "学生数",
    statsGuru: "教職員数",
    teachersTitle: "教職員・職員ディレクトリ",
    teachersSubtitle: "専門的で有能な教員と熱心なスタッフ",
    statsMitra: "業界パートナー数",
    statsLulus: "卒業生の就職率",
    spmbTitle: "新入生入学手続き (SPMB)",
    spmbDesc: "2026/2027年度の新入生登録を受け付けています。あなたに最適な専攻を選び、輝かしい未来を築きましょう。",
    spmbSteps: "入学手順",
    spmbRegisterForm: "SPMB 入学登録書",
    spmbCheckStatus: "合否結果の確認",
    personalData: "個人情報",
    academicChoice: "第一希望・第二希望の学科",
    registerSuccess: "登録が正常に送信されました！あなたの登録番号を控えておいてください：",
    bkkTitle: "就職支援室 & 卒業生調査",
    bkkDesc: "私たちは意欲的な求人マッチングを促進し、主要な製造業および技術関連企業数十社と緊密に連携しています。",
    tracerFormTitle: "卒業生トラウザースタディフォーム",
    tracerFormDesc: "学校の評価や認定プログラムの向上のため、卒業生の皆様は2分間ほどでのご回答にご協力をお願いいたします。",
    tefaTitle: "ティーチング・ファクトリー (TEFA)",
    tefaDesc: "産業基準に準拠した最新の実践的な教育モデルです。当校の最上級生は高品質な製品や技術サービスを製造し、広く一般に販売・提供しています。",
    search: "検索...",
    filter: "フィルター",
    login: "ログイン",
    logout: "ログアウト",
    username: "ユーザー名",
    password: "パスワード",
    address: "住所",
    phone: "電話番号",
    email: "メールアドレス",
    subject: "件名",
    message: "メッセージ",
    submit: "送信",
    saveChange: "変更を保存",
    cancel: "キャンセル",
    alertNewNotification: "重大なお知らせ",
    verified: "確認済み",
    pending: "保留中",
    rejected: "却下",
    male: "男子",
    female: "女子",
  },
  ar: {
    title: "المدرسة الثانوية المهنية المحمدية براندوبلاتونغ",
    subtitle: "مدرسة متميزة، ذات طابع أخلاقي، إسلامية، ومنافسة",
    heroTitle: "تطوير جيل متميز ذو شخصية إسلامية وجاهزية مهنية",
    heroDesc: "تلتزم المدرسة الثانوية المهنية المحمدية براندوبلاتونغ، بلورا بتقديم تعليم مهني متميز مدمج مع القيم الإسلامية السامية لجمعية المحمدية، بدعم من شراكات صناعية واسعة.",
    exploreMore: "استكشف المزيد",
    registerNow: "التسجيل الإلكتروني",
    viewAll: "عرض الكل",
    backToHome: "العودة للرئيسية",
    language: "اللغة",
    menuHome: "الرئيسية",
    menuProfile: "الملف التعريفي",
    menuNews: "الأخبار",
    menuPrograms: "الأقسام المهنية",
    menuEkskul: "الأنشطة المنهجية",
    menuSpmb: "القبول والتسجيل (SPMB)",
    menuBkk: "التوظيف والخريجين",
    menuTefa: "مصنع التعليم (TEFA)",
    menuAbout: "اتصل بنا",
    menuLogin: "دخول الموظفين",
    menuDashboard: "لوحة التحكم",
    tkr: "هندسة السيارات والمركبات الخفيفة (TKR)",
    tab: "هندسة المعدات الثقيلة (TAB)",
    tsm: "هندسة الدراجات النارية (TSM)",
    tkj: "هندسة الكمبيوتر وتكنولوجيا الشبكات (TKJ)",
    bkkVacancies: "فرص العمل المتاحة",
    bkkTracer: "دراسة تتبع الخريجين",
    bkkPartners: "الشركاء الصناعيين",
    profileHistory: "لمحة تاريخية",
    profileVision: "الرؤية والرسالة",
    profileStructure: "الهيكل التنظيمي",
    profileIdentity: "هوية المدرسة",
    welcomeTitle: "كلمة مدير المدرسة",
    welcomeText: "السلام عليكم ورحمة الله وبركاته. مرحبًا بكم في الموقع الرسمي للمدرسة المهنية المحمدية براندوبلاتونغ. نهدف من خلال هذه المنصة الرقمية إلى تسهيل الوصول الفوري للمعلومات لجميع المعلمين والطلاب وأولياء الأمور والمجتمع، خاصة في منطقة بلورا وجاوة الوسطى. نحن ندمج المهارات الصناعية الحديثة مع العقيدة والتوحيد الراسخ للمحمدية.",
    statsSiswa: "إجمالي الطلاب",
    statsGuru: "المعلمون والموظفون",
    teachersTitle: "دليل المعلمين والموظفين",
    teachersSubtitle: "معلمون ذوو كفاءة عالية وكادر أكاديمي محترف",
    statsMitra: "شركاء الصناعة",
    statsLulus: "معدل توظيف الخريجين",
    spmbTitle: "قبول الطلاب الجدد (SPMB)",
    spmbDesc: "تم فتح باب التسجيل للطلاب الجدد للعام الدراسي 2026/2027 عبر الإنترنت. اختر تخصصك المفضل وابنِ مستقبلك المشرق معنا.",
    spmbSteps: "خطوات التسجيل",
    spmbRegisterForm: "استمارة طلب التسجيل",
    spmbCheckStatus: "التحقق من حالة القبول",
    personalData: "المعلومات الشخصية",
    academicChoice: "التخصص المفضل",
    registerSuccess: "تم تقديم الطلب بنجاح! يرجى حفظ رقم التسجيل الخاص بك:",
    bkkTitle: "مركز التوظيف ودراسة التتبع",
    bkkDesc: "نحن نسهل ربط الخريجين بسوق العمل بالشراكة والتعاون الوثيق مع العشرات من الشركات الصناعية والتكنولوجية الرائدة.",
    tracerFormTitle: "استبيان تتبع الخريجين",
    tracerFormDesc: "بالنسبة لخريجينا الأعزاء، يرجى قضاء دقيقتين لملء استبيان تتبع الخريجين لتحسين تقييم المدرسة واعتمادها.",
    tefaTitle: "مصنع التعليم (TEFA)",
    tefaDesc: "نموذج تعليمي قائم على الإنتاج الفعلي المتوافق مع المعايير الصناعية. يقوم طلابنا بإنتاج سلع وخدمات عالية الجودة متاحة للطلب العام.",
    search: "بحث...",
    filter: "تصفية",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    address: "العنوان",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    submit: "إرسال",
    saveChange: "حفظ التغييرات",
    cancel: "إلغاء",
    alertNewNotification: "آخر الإعلانات الهامة",
    verified: "تم التحقق",
    pending: "قيد الانتظار",
    rejected: "مرفوض",
    male: "ذكر",
    female: "أنثى",
  }
};

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Siswa SMK Muhammadiyah Randublatung Raih Juara 1 LKS Otomotif Tingkat Kabupaten Blora",
    titleEn: "SMK Muhammadiyah Randublatung Students Win 1st Place in Blora Regency Automotive LKS Competition",
    category: "Prestasi",
    categoryEn: "Achievement",
    summary: "Prestasi gemilang diraih siswa jurusan TKR yang berhasil membawa pulang piala utama dalam Lomba Kompetensi Siswa (LKS) Otomotif tahun ini.",
    summaryEn: "Brilliant achievement gained by TKR engineering student who successfully brought home the main cup in the recent Automotive Student Competence Competition.",
    content: "SMK Muhammadiyah Randublatung kembali membuktikan kualitas pendidikannya di bidang otomotif. Yudha Prasetya, siswa kelas XII Teknik Kendaraan Ringan (TKR), berhasil menyabet Juara 1 dalam ajang Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten Blora. Ujian praktik meliputi diagnosis kelistrikan mesin efi modern serta overhaul sistem rem ABS. Persiapan matang yang didampingi oleh instruktur dari Mitsubishi Motor menjadi kunci kesuksesan Yudha dalam mengungguli belasan peserta dari sekolah negeri dan swasta lainnya.",
    contentEn: "SMK Muhammadiyah Randublatung again certified its vocational quality. Yudha Prasetya, a senior student of Light Vehicle Automotive (TKR), earned the 1st prize in the annual Blora Regency Student Skill Competition. The practical exam covered engine EFI diagnostics and ABS braking overhaul tasks. Rigorous preparation with Mitsubishi certified coaches was key to defeating other rivals across private and state schools.",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800",
    date: "2026-06-05",
    views: 142
  },
  {
    id: "news-2",
    title: "Kurikulum Link and Match: Kerja Sama Baru dengan Astra Daihatsu Motor Resmi Ditandatangani",
    titleEn: "Link and Match Curriculum: New Venture with Astra Daihatsu Motor Officially Inked",
    category: "Kerjasama",
    categoryEn: "Partnership",
    summary: "Langkah strategis dilakukan sekolah dengan mengadopsi Kurikulum Pintar Bersama Daihatsu guna memastikan lulusan TKR & TSM langsung terserap.",
    summaryEn: "A strategic milestone in adopting Daihatsu's Pintar Program curriculum to secure instantaneous career placement for TKR & TSM graduates.",
    content: "Dalam upaya meningkatkan keselarasan kompetensi lulusan dengan kebutuhan industri mutakhir, SMK Muhammadiyah Randublatung menandatangani memorandum kerja sama (MoU) komprehensif dengan PT Astra Daihatsu Motor (ADM). Kerja sama ini meliputi penyelarasan modul ajar, magang guru bersertifikasi, penyediaan unit mobil praktik terbaru, serta hak rekrutmen prioritas bagi alumni yang lulus standar kompetensi Daihatsu.",
    contentEn: "To bridge the competence Gap, SMK Muhammadiyah Randublatung formalised a comprehensive MoU with PT Astra Daihatsu Motor (ADM). The scope of work encompasses curriculums customisation, industrial placements for teachers, latest car trainer kits supply, and priority hiring channels for high-score certified alumni.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    date: "2026-05-28",
    views: 98
  },
  {
    id: "news-3",
    title: "Tim Tapak Suci SMK Muhammadiyah Randublatung Sabet 3 Medali Emas Kejuaraan Pencak Silat Jawa Tengah",
    titleEn: "Tapak Suci Martial Arts Squad Clinches 3 Gold Medals in Central Java Tournament",
    category: "Ekstrakurikuler",
    categoryEn: "Extracurricular",
    summary: "Kontingen Tapak Suci Putera Muhammadiyah sekolah tampil dominan dalam ajang turnamen silat daerah dengan membawa pulang emas dan perunggu.",
    summaryEn: "The school's Tapak Suci team performed dominantly in the provincial martial arts battle, capturing gold and bronze medals.",
    content: "Semangat juang pesilat muda Tapak Suci SMK Muhammadiyah Randublatung menyala di GOR Jatidiri Semarang. Tiga atlet andalan sekolah berhasil menaklukkan babak final tanding kelas A, B, dan Seni Tunggal Putra dalam Kejuaraan Daerah Pencak Silat Remaja se-Jawa Tengah. Pelatih mengapresiasi latihan fisik intensif serta ketahanan mental bertarung yang murni bersumber dari nilai bela diri Tapak Suci: Dengan Iman dan Akhlak, Saya Menjadi Kuat.",
    contentEn: "Unyielding spirit of Tapak Suci martial arts artists representing SMK Muhammadiyah Randublatung blazed in Semarang Arena. Three of our prime athletes triumphed in class A, B, and Solo Art Finals during the Central Java Pencak Silat Championship. Coaches praised the physical drill coupled with high spiritual stamina stemming from the Tapak Suci ideal: With Faith and Ethics, I am Strong.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800",
    date: "2026-05-15",
    views: 110
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lab Praktik Komputer & Jaringan Berstandar Industri",
    titleEn: "Industry-Standard Computer & Network Practicum Lab",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    category: "Fasilitas",
    date: "2026-04-10"
  },
  {
    id: "gal-2",
    title: "Instalasi Mesin Alat Berat Volvo - Pembelajaran TAB",
    titleEn: "Volvo Heavy Machinery Unit Setup - TAB Practicum",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800",
    category: "Pembelajaran",
    date: "2026-04-22"
  },
  {
    id: "gal-3",
    title: "Pelepasan Alumni Angkatan 2025 Terserap Kerja",
    titleEn: "Job Placement Ceremony for 2025 Alumni Cohort",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    category: "Kegiatan",
    date: "2026-05-10"
  },
  {
    id: "gal-4",
    title: "Pentas Drumband Hizbul Wathan Randublatung",
    titleEn: "Hizbul Wathan Drumband Display at Town Parade",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    category: "Ekstrakurikuler",
    date: "2026-05-20"
  }
];

export const INITIAL_STUDENTS: StudentData[] = [
  { id: "std-1", name: "Ahmad Zainurrohman", nisn: "0082736182", programId: "tkj", class: "XII TKJ 1", status: "aktif", yearEntered: 2024, phone: "081234567810" },
  { id: "std-2", name: "Bambang Pamungkas", nisn: "0081263481", programId: "tkr", class: "XII TKR 2", status: "aktif", yearEntered: 2024, phone: "081234567811" },
  { id: "std-3", name: "Citra Kirana", nisn: "0091273982", programId: "tkj", class: "XI TKJ 2", status: "aktif", yearEntered: 2025, phone: "081234567812" },
  { id: "std-4", name: "Dimas Anggara", nisn: "0089271632", programId: "tab", class: "XII TAB 1", status: "aktif", yearEntered: 2024, phone: "081234567813" },
  { id: "std-5", name: "Eko Prasetyo", nisn: "0098273611", programId: "tsm", class: "XI TSM 1", status: "aktif", yearEntered: 2025, phone: "081234567814" },
  { id: "std-6", name: "Fatimah Azzahra", nisn: "0102198273", programId: "tkj", class: "X TKJ 1", status: "aktif", yearEntered: 2026, phone: "081234567815" },
];

export const INITIAL_ALUMNI: AlumniData[] = [
  { id: "alm-1", name: "Yuda Pradana", nisn: "0052731839", programId: "tkr", graduationYear: 2024, currentStatus: "bekerja", workPlace: "PT Astra Daihatsu Motor, Karawang", salaryRange: "Rp 5.500.000 - Rp 7.000.000", phone: "082348119273" },
  { id: "alm-2", name: "Heri Susanto", nisn: "0051187263", programId: "tab", graduationYear: 2024, currentStatus: "bekerja", workPlace: "PT United Tractors, Balikpapan", salaryRange: "Rp 7.500.000 - Rp 10.000.000", phone: "081123485721" },
  { id: "alm-3", name: "Siti Rahmawati", nisn: "0061273911", programId: "tkj", graduationYear: 2025, currentStatus: "kuliah", workPlace: "Teknik Informatika, Universitas Muhammadiyah Surakarta", phone: "082381273821" },
  { id: "alm-4", name: "Rico Wijaya", nisn: "0058273611", programId: "tsm", graduationYear: 2024, currentStatus: "wirausaha", workPlace: "Bengkel Sepeda Motor Mandiri Jaya, Blora", salaryRange: "Rp 4.000.000 - Rp 6.000.000", phone: "085293817260" }
];

export const INITIAL_JOBS: JobVacancy[] = [
  {
    id: "job-1",
    title: "Junior Automotive Mechanic - Astra Auto 2000",
    titleEn: "Junior Automotive Mechanic - Astra Auto 2000",
    company: "PT Astra International Tbk (Auto2000)",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200",
    location: "Semarang, Jawa Tengah",
    requirements: [
      "Lulusan SMK Muhammadiyah Randublatung Jurusan TKR atau TSM",
      "Memahami dasar-dasar kelistrikan dan sistem injeksi modern",
      "Memiliki kepribadian disiplin, tekun, dan mau belajar",
      "Bersedia ditempatkan di seluruh cabang Auto2000 Jawa Tengah"
    ],
    requirementsEn: [
      "Graduate of SMK Muhammadiyah Randublatung majoring in TKR or TSM",
      "Good fundamental understanding of modern vehicle electrical wire and fuel injection",
      "Disciplined, persistent, and eager to master new technologies",
      "Willing to be allocated across Central Java Auto2000 dealerships"
    ],
    salary: "Standar UMK + Tunjangan Kesehatan & Karier",
    postedDate: "2026-06-01",
    closingDate: "2026-07-15",
    status: "open"
  },
  {
    id: "job-2",
    title: "Trainee Operator Alat Berat - PT Hexindo Adiperkasa",
    titleEn: "Heavy Machinery Operator Trainee - PT Hexindo Adiperkasa",
    company: "PT Hexindo Adiperkasa Tbk",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200",
    location: "Kalimantan Timur / Sumatera",
    requirements: [
      "Khusus lulusan Teknik Alat Berat (TAB) SMK Muhammadiyah Randublatung",
      "Memiliki kondisi fisik prima, tinggi badan minimal 165 cm",
      "Nilai rapor produktif minimal 80.0",
      "Bersedia menjalani ikatan dinas pelatihan selama 6 bulan"
    ],
    requirementsEn: [
      "Specially tailored for Heavy Equipment Engineering (TAB) graduates of SMK",
      "Superior physical stamina, minimal height of 165 cm",
      "Vocational score minimal average 80.0",
      "Willing to undergo a 6-month intensive training program"
    ],
    salary: "Uang Saku Trainee + Akomodasi Penuh + Kontrak Karyawan Tetap",
    postedDate: "2026-06-03",
    closingDate: "2026-07-30",
    status: "open"
  },
  {
    id: "job-3",
    title: "Network & IT Support Junior Specialist",
    titleEn: "Network & IT Support Junior Specialist",
    company: "PT Telkom Indonesia (Akses)",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    location: "Blora & Cepu, Jawa Tengah",
    requirements: [
      "Lulusan SMK Jurusan TKJ",
      "Memahami dasar routing Mikrotik/Cisco dan konfigurasi WiFi jaringan fiber-optik",
      "Memiliki SIM C dan kendaraan bermotor roda dua mandiri",
      "Mampu bekerja sama dalam tim lapangan"
    ],
    requirementsEn: [
      "Graduate of IT/Computer Network Engineering (TKJ)",
      "Understand basic Mikrotik/Cisco routing as well as Fiber-optic configuration",
      "Hold active motor vehicle license SIM C",
      "Capable of team coordinates on site"
    ],
    salary: "Gaji Pokok Kompetitif + Insentif Pasang Baru",
    postedDate: "2026-05-25",
    closingDate: "2026-06-25",
    status: "open"
  }
];

export const INITIAL_PARTNERS: Partner[] = [
  {
    id: "part-1",
    name: "PT Astra Daihatsu Motor",
    logo: "https://images.unsplash.com/photo-1627389955805-7281cff01ca1?auto=format&fit=crop&q=80&w=150",
    type: "nasional",
    description: "Kerja sama penyelarasan kurikulum otomotif TKR beserta donasi trainer mesin Daihatsu Xenia.",
    descriptionEn: "Cooperation in tuning TKR automotive curricula and providing modern Daihatsu engine modules."
  },
  {
    id: "part-2",
    name: "PT United Tractors Tbk",
    logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=150",
    type: "nasional",
    description: "Pendampingan khusus kompetensi Teknik Alat Berat (TAB), magang industri, dan sertifikasi keahlian.",
    descriptionEn: "Direct mentorship for Heavy Equipment Engineering (TAB), industrial internships, and professional certification."
  },
  {
    id: "part-3",
    name: "PT Yamaha Indonesia Motor Manufacturing",
    logo: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=150",
    type: "nasional",
    description: "Sertifikasi teknologi BlueCore Yamaha untuk siswa TSM & pembangunan ruang praktik standar bengkel resmi.",
    descriptionEn: "Fitted Yamaha BlueCore technology course for TSM students and specialized official workshop setup."
  },
  {
    id: "part-4",
    name: "MikroTik Academy & Cisco",
    logo: "https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&q=80&w=150",
    type: "internasional",
    description: "Penyedia sertifikasi internasional MTCNA dan CCNA langsung di lab komputer TKJ sekolah.",
    descriptionEn: "Issuer of global certification in networking (MTCNA / CCNA) integrated inside our local network laboratory."
  }
];

export const INITIAL_TEFA: TefaProduct[] = [
  {
    id: "tef-1",
    name: "Jasa Servis Ringan Mobil (TKR Care)",
    nameEn: "Light Car Maintenance Service (TKR Care)",
    description: "Meliputi tune-up mesin efi, ganti oli mesin, cek rem 4 roda, dan cek sistem kelistrikan. Dikerjakan siswa dipantau guru berpengalaman.",
    descriptionEn: "Encompasses engine tune-up, motor oil changes, 4-wheel brake tuning, and standard electrical checks. Handled by top students.",
    price: "Rp 150.000 - Rp 250.000",
    priceEn: "$10.00 - $18.00 (Standard Local Equivalent)",
    programId: "tkr",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400",
    status: "tersedia"
  },
  {
    id: "tef-2",
    name: "Servis Motor BlueCore & Karburator (TSM Clinic)",
    nameEn: "Motorcycle blueCore & Carburetor Servicing (TSM Clinic)",
    description: "Tune up motor bebek, matic, atau sport gratis cuci motor. Menggunakan komputer pemindai injeksi motor modern.",
    descriptionEn: "Tune up standard sports, automatic or manual bikes including a premium bike wash. Utilizes up-to-date injection code scanners.",
    price: "Rp 35.000 - Rp 60.000",
    priceEn: "$2.50 - $4.00 (Standard Local Equivalent)",
    programId: "tsm",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400",
    status: "tersedia"
  },
  {
    id: "tef-3",
    name: "Perakitan & Servis Laptop / PC (TKJ Tech)",
    nameEn: "Custom PC Assembly & Laptop Service (TKJ Tech)",
    description: "Instalasi OS berlisensi resmi, pembersihan hardware laptop, rakit PC gaming/kantor murah, serta instalasi kabel LAN / WiFi rumah.",
    descriptionEn: "Licensed software deployment, motherboard cleaning, custom budget office or gaming builds, and home internet copper setups.",
    price: "Rp 50.000 - Rp 100.000",
    priceEn: "$3.50 - $7.00",
    programId: "tkj",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=400",
    status: "tersedia"
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "Penerimaan Pendaftar Gelombang 1 Calon Siswa Baru SMK Muhammadiyah Randublatung 2026/2027",
    titleEn: "Early Admission Cohort 1 Now Active - SMK Muhammadiyah Randublatung 2026/2027",
    content: "Diinformasikan kepada calon pendaftar, batas pengembalian berkas fisik Gelombang 1 adalah Sabtu, 20 Juni 2026 pukul 12.00 WIB di Panitia SPMB Sekolah. Seleksi mencakup wawancara baca tulis Al-Qur'an dasar serta kesehatan umum fisik (khusus TAB & TKR bebas buta warna).",
    contentEn: "All prospect applicants must hand in physical papers for Cohort 1 by Saturday, June 20, 2026, 12:00 PM at Admissions office. Tests cover Quran fundamental literacy plus general fitness (color blindness checks for heavy machinery TAB).",
    date: "2026-06-08",
    target: "all",
    priority: "high"
  },
  {
    id: "ann-2",
    title: "Pelaksanaan Penilaian Akhir Semester (PAS) Genap Tahun Ajaran 2025/2026",
    titleEn: "Genap Semester End Assessment Schedule 2025/2026",
    content: "Penilaian Akhir Semester akan diselenggarakan secara online di laboratorium komputer terintegrasi mulai tanggal 15 hingga 22 Juni 2026. Seluruh siswa diharapkan memastikan kehadiran tepat waktu, memakai seragam lengkap IPM/Muhammadiyah, dan membawa kartu ujian.",
    contentEn: "Sessional End Assessments are scheduled online inside the school interactive computer labs from June 15 to June 22, 2026. Wear your full IPM/Muhammadiyah uniforms and carry physical exam tickets.",
    date: "2026-06-07",
    target: "siswa",
    priority: "medium"
  }
];

export const INITIAL_SPMB: SpmbRegistration[] = [
  {
    id: "spmb-1",
    registrationNumber: "SPMB-2026-001",
    fullName: "Rizky Dwi Saputra",
    nisn: "0109283712",
    birthPlace: "Blora",
    birthDate: "2010-08-14",
    gender: "L",
    phone: "081293817263",
    parentPhone: "081293817264",
    email: "rizky@gmail.com",
    address: "Desa Randublatung RT 03/RW 01, Blora",
    programChoice1: "tkr",
    programChoice2: "tsm",
    status: "diverifikasi",
    createdDate: "2026-06-01"
  },
  {
    id: "spmb-2",
    registrationNumber: "SPMB-2026-002",
    fullName: "Amalia Syafira",
    nisn: "0108273618",
    birthPlace: "Blora",
    birthDate: "2011-02-19",
    gender: "P",
    phone: "085381726388",
    parentPhone: "085381726389",
    email: "amalia@gmail.com",
    address: "Kradenan, Blora",
    programChoice1: "tkj",
    programChoice2: "tkj",
    status: "pending",
    createdDate: "2026-06-07"
  }
];

export const INITIAL_TEACHERS: TeacherStaff[] = [
  {
    id: "tch-1",
    name: "Suwito, S.Pd., M.T.",
    nip: "19750814 200312 1 002",
    role: "Kepala Sekolah & Guru Teknik",
    roleEn: "School Principal & Engineering Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    phone: "081234567801"
  },
  {
    id: "tch-2",
    name: "Muryanto, S.Pd.",
    nip: "19800311 200810 1 005",
    role: "Waka Kurikulum & Guru Matematika",
    roleEn: "VP Curriculum & Mathematics Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    phone: "081234567802"
  },
  {
    id: "tch-3",
    name: "Suhartono, S.T.",
    nip: "19830722 201104 1 012",
    role: "Waka Kesiswaan & Guru TKR",
    roleEn: "VP Student Affairs & TKR Automotive Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    phone: "081234567803"
  },
  {
    id: "tch-4",
    name: "Sri Wahyuni, S.Pd.",
    nip: "19850228 201509 2 008",
    role: "Guru Bahasa Inggris Utama",
    roleEn: "Senior English Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    phone: "081234567804"
  },
  {
    id: "tch-5",
    name: "Ahmad Faisal, S.Kom.",
    nip: "19881115 201803 1 015",
    role: "Kepala Lab Komputer & Guru TKJ",
    roleEn: "Computer Lab Head & TKJ Networking Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    phone: "081234567805"
  },
  {
    id: "tch-6",
    name: "Budi Santoso, S.Pd.",
    nip: "19840420 201208 1 010",
    role: "Kepala Bengkel & Guru TSM",
    roleEn: "Workshop Head & TSM Motorcycle Teacher",
    type: "guru",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    phone: "081234567806"
  },
  {
    id: "tch-7",
    name: "Suharianto, S.Pd.",
    nip: "19780918 200504 1 003",
    role: "Ketua Bursa Kerja Khusus (BKK)",
    roleEn: "Special Job Market (BKK) Coordinator",
    type: "guru",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
    phone: "081234567807"
  },
  {
    id: "tch-8",
    name: "Rina Wijayanti, S.E.",
    nip: "19870505 201610 2 004",
    role: "Bendahara Sekolah & Administrasi",
    roleEn: "School Treasurer & Senior Administrator",
    type: "staf",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    phone: "081234567808"
  },
  {
    id: "tch-9",
    name: "Joko Prasetyo",
    nip: "-",
    role: "Staf Tata Usaha & Karyawan IT Support",
    roleEn: "Administration Staff & IT Support Staff",
    type: "staf",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    phone: "081234567809"
  }
];

