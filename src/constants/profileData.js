export const profileData = {
  en: {
    name: "Daffa Fauzi",
    role: "Fullstack Web Developer",
    tagline: "Engineering End-to-End Enterprise Web Systems, Modern Backends, and Reactive User Interfaces",
    shortDescription: "Fullstack Web Developer with over 1 year and 9 months of professional experience in designing, developing, and managing enterprise-scale web applications (B2B Core Systems) end-to-end. Deep expertise in modern backend architectures using Laravel (v11/v12/v13), PHP 8+, Express.js, Golang, and MySQL/PostgreSQL, seamlessly integrated with reactive frontends built on Inertia.js, React.js (v18/v19), Next.js, Vue.js (v3), TypeScript, and Tailwind CSS (v3/v4). Proven track record executing mission-critical core systems across financial surety (DWP Core & BPR Core), HR Tech (APG HRIS), and sports club operations (Prada BC). Skilled in scheduled workers, real-time WebSockets, standardized RESTful APIs, relational database modeling, and complex interactive UI components.",
    aboutMe: {
      title: "About Me",
      description1: "I am a Fullstack Web Developer with over 1 year and 9 months of professional experience in designing, developing, and maintaining enterprise web applications (B2B Core Systems) end-to-end. I hold a Bachelor's degree in Informatics Engineering / Computer Science (S.Kom. / S1) from Sekolah Tinggi Teknologi Wastukancana Purwakarta (Class of 2025).",
      description2: "My expertise centers on modern backend architecture with Laravel (v11/v12/v13), PHP 8+, Express.js, Golang, and MySQL/PostgreSQL, seamlessly coupled with reactive interfaces using Inertia.js, React.js (v18/v19), Next.js, Vue.js (v3), TypeScript, and Tailwind CSS (v3/v4). I have proven hands-on success engineering core systems for financial guarantee platforms (DWP Core & BPR Core), HR Tech (APG HRIS with drag-and-drop interactive org charts & WebAuthn biometrics), and sports operations (Prada BC). From relational database modeling (ERD) and scheduled background workers to real-time WebSockets with Laravel Reverb, I deliver scalable, stable, and high-performance digital ecosystems."
    },
    education: {
      degree: "Sarjana Komputer (S.Kom.) / Bachelor of Computer Science (S1)",
      institution: "Sekolah Tinggi Teknologi Wastukancana",
      location: "Purwakarta, West Java, Indonesia",
      year: "Graduated 2025",
      description: "Concentrations: Software Engineering, Web & Mobile Systems Architecture, Relational Database Modeling, and Human-Computer Interaction."
    },
    experience: [
      {
        role: "Fullstack Web Developer",
        company: "PT Ardana Perkasa Group (APG)",
        period: "October 2024 – Present",
        type: "Financial & Guarantee Services Holding • Full-time",
        location: "Jakarta, Indonesia",
        summary: "Responsible for designing and developing end-to-end enterprise core platforms, automated financial invoice engines, integrated HRIS, and corporate web ecosystems.",
        responsibilities: [
          "Core Guarantee Architecture (DWP Core & BPR Core): Engineered surety bond and counter bank guarantee systems from relational database schema design, REST API integration, to reactive UI implementation using Laravel 11, Inertia.js (React), TypeScript, TanStack Query, and Tailwind CSS.",
          "Invoice Calculation & Monitoring Engine (BPR Core): Built automated backend calculation engines for premium invoices and principal monitoring, eliminating manual errors and accelerating administrative verification by up to 40%.",
          "Integrated HRIS System (APG HRIS): Designed an Interactive Organizational Chart (Org Chart) featuring drag-and-drop hierarchy adjustments, dynamic card positioning, and real-time two-way synchronization with the database.",
          "Geolocation & Biometric Attendance: Developed employee attendance modules utilizing spatial map geolocation (Leaflet GIS) and modern biometric authentication (WebAuthn) for anti-spoofing validation.",
          "Real-time Broadcasting & UI Systems: Integrated real-time event broadcasting using Laravel Reverb (WebSockets) and engineered dynamic circular-reveal dark/light theme systems across critical modules (KPI, Performance Appraisal, Approval, Training).",
          "Reporting Service & Data Export: Built service-layer PDF guarantee certificate generators (DomPDF/jsPDF) and multi-sheet automated Excel exports (Maatwebsite) for organizational analytics.",
          "Multi-Step Wizard Refactoring (Caraka): Re-engineered Counter Bank Guarantee (KBG) submission workflows using Vue 3, Pinia, TanStack Table, Vee-Validate, and Zod connected directly to backend APIs.",
          "Modular CMS & Corporate Web: Developed modular Content Management Systems (CMS) and interactive corporate portals for holding group PT Ardana Perkasa Group and its operating subsidiaries."
        ],
        technologies: [
          "Laravel 11/12", "PHP 8+", "Inertia.js", "React.js", "Vue.js 3", "TypeScript",
          "MySQL", "PostgreSQL", "Laravel Reverb (WebSockets)", "TanStack Query",
          "Tailwind CSS", "REST API", "WebAuthn", "Leaflet GIS", "DomPDF"
        ]
      }
    ],
    skills: {
      backend: ["Laravel (v11/v12/v13)", "PHP 8+", "Express.js", "Golang", "MySQL", "PostgreSQL", "SQLite", "RESTful API Architecture", "Laravel Reverb (WebSockets)", "Scheduled Jobs & Queues", "Eloquent ORM", "WebAuthn"],
      frontend: ["Inertia.js (React/Vue)", "React.js (v18/v19)", "Next.js", "Vue.js (v3)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS (v3/v4)", "HTML5 & CSS3", "Radix UI / Shadcn", "Framer Motion"],
      tools: ["Zustand", "Pinia", "TanStack Query & Table", "Vite", "Git & GitHub", "Postman", "Figma", "Leaflet (Maps GIS)", "DomPDF", "jsPDF", "Maatwebsite Excel"],
      hardSkills: [
        "Laravel (v11/v12/v13)", "PHP 8+", "React.js (v18/v19)", "Inertia.js", "TypeScript",
        "MySQL", "PostgreSQL", "RESTful API", "Vue.js (v3)", "Tailwind CSS (v3/v4)",
        "Laravel Reverb (WebSockets)", "Express.js", "Golang", "Scheduled Jobs & Queues",
        "Database Modeling (ERD)", "WebAuthn Biometrics"
      ],
      competencies: [
        "End-to-End Application Development", "Relational Database Modeling (ERD)",
        "Clean Architecture", "API Integration", "System Stability & Performance", "Agile/Scrum"
      ],
      softSkills: [
        "Problem Solving", "Systems Thinking", "Cross-Functional Collaboration",
        "Adaptability", "Fast Learner", "Ownership & Accountability"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Prada Badminton Club Management System (Prada BC Core & Report)",
        category: "Fullstack Sports Management System",
        period: "2026",
        shortDescription: "Comprehensive badminton club management platform with relational database, automated daily billing scheduler, FullCalendar, and PDF performance reporting.",
        description: "Built an end-to-end badminton club management platform: relational database modeling for athletes and coaches, private and weekly curriculum scheduling, and tournament registration with payment validation. Implemented daily scheduler services (Artisan command) for automated fee billing reminders, cash flow reconciliation, interactive FullCalendar scheduling, physical evaluation reporting, and automated PDF award certificates.",
        tech: ["Laravel 12/13", "Inertia.js (React 19)", "TypeScript", "Tailwind CSS v4", "FullCalendar", "DomPDF"],
        image: "/projects/prada-bc.svg",
        link: "https://github.com/DaffaFauzi",
        github: "https://github.com/DaffaFauzi",
        linkType: "github",
        features: [
          "End-to-end athlete & coach management with relational data modeling",
          "Automated daily scheduler (Artisan command) for fee billing & cash flow reconciliation",
          "Interactive training curriculum calendar powered by FullCalendar",
          "Automated physical evaluation performance reports and award certificates via DomPDF"
        ]
      },
      {
        id: 2,
        title: "APG Enterprise Surety & HR Tech Ecosystem (DWP Core, BPR Core & APG HRIS)",
        category: "Enterprise Core B2B Platform (Fullstack)",
        period: "October 2024 – Present",
        shortDescription: "Enterprise financial surety bond platform and integrated HRIS with automated invoice engine, interactive drag-and-drop org chart, and biometric attendance.",
        description: "Developed core B2B financial surety bond and counter bank guarantee systems along with an integrated corporate HRIS for holding group PT Ardana Perkasa Group. Engineered an automated invoice calculation engine accelerating administrative verification by 40%, built an interactive organizational hierarchy chart with drag-and-drop dynamic positioning and real-time two-way synchronization, and integrated anti-spoofing spatial map (Leaflet) and biometric (WebAuthn) employee attendance with real-time WebSockets broadcasting.",
        tech: ["Laravel 11", "Inertia.js (React)", "TypeScript", "MySQL", "WebSockets (Reverb)", "Tailwind CSS", "WebAuthn", "Leaflet GIS"],
        image: "/projects/enterprise-core.svg",
        link: null,
        github: "Private",
        linkType: "internal",
        features: [
          "Automated premium invoice calculation engine accelerating validation by up to 40%",
          "Interactive drag-and-drop Org Chart with real-time two-way database synchronization",
          "Anti-spoofing attendance system combining Leaflet spatial geofencing & WebAuthn biometrics",
          "Real-time event broadcasting via Laravel Reverb and automated multi-sheet Excel/PDF exports"
        ]
      },
      {
        id: 3,
        title: "UMKM Jaya Berkah Web Cashier (POS) & Inventory",
        category: "Fullstack Point of Sale & Retail",
        period: "2024",
        shortDescription: "Retail POS and inventory management system with rapid checkout, real-time stock deduction, and automated PDF receipt printing.",
        description: "Developed a complete retail Point of Sale (POS) and inventory web application using Laravel for UMKM Toko Jaya Berkah. Features rapid checkout transactions, relational product catalog and inventory data modeling, real-time automated stock deduction, instant PDF receipt generation, and analytical dashboards for daily and monthly revenue reconciliation.",
        tech: ["Laravel", "Blade", "PHP", "MySQL", "Tailwind CSS", "DomPDF"],
        image: "/projects/web-kasir.svg",
        link: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        github: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        linkType: "github",
        features: [
          "Rapid checkout workflow with automated real-time inventory deduction",
          "Instant automated PDF receipt generator and download via DomPDF",
          "Comprehensive product master data, categories, and stock monitoring",
          "Daily and monthly financial revenue tracking analytics dashboard"
        ]
      },
      {
        id: 4,
        title: "Cloud-Based Posyandu Healthcare Information System",
        category: "Fullstack Cloud Healthcare Platform",
        period: "2024",
        shortDescription: "Cloud-deployed public healthcare system for toddler growth monitoring, nutritional evaluation algorithms, and immunization tracking.",
        description: "Designed and deployed a community healthcare information system on Railway Cloud. Architected database schemas for maternal and child records, nutritional evaluation algorithms for toddler height and weight development metrics, periodic immunization schedule logs, and automated monthly health recap reporting.",
        tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Railway Cloud"],
        image: "/projects/posyandu.svg",
        link: "https://posyandu.up.railway.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Toddler growth tracking and nutritional status evaluation algorithms",
          "Periodic immunization schedules and vaccination dose tracking",
          "Maternal and child master healthcare record management",
          "Automated monthly structured healthcare report recaps"
        ]
      },
      {
        id: 5,
        title: "Sundanese-Indonesian Digital Dictionary (Android Native)",
        category: "Mobile Application (Academic / Thesis)",
        period: "February 2025 – July 2025",
        shortDescription: "Native Android digital dictionary app featuring 500+ verified Sundanese vocabularies, sub-second search, and language register classification.",
        description: "Designed and architected a native mobile dictionary app backed by a local SQLite database containing 500+ verified Sundanese vocabularies with accurate Indonesian translations. Optimized search query algorithms achieving sub-second response times (<1s) and validated through direct user testing across 20 respondents with an 85% satisfaction rating.",
        tech: ["Kotlin", "Android Studio", "SQLite", "Material Design"],
        image: "/projects/sundanese-dict.svg",
        link: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        github: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        linkType: "github",
        features: [
          "500+ verified Sundanese vocabularies with Indonesian translations",
          "Sub-second instant search query latency (< 1s)",
          "Language register classification (Loma & Lemes registers)",
          "Field-tested with 20 respondents achieving 85% satisfaction"
        ]
      },
      {
        id: 6,
        title: "Barbershop Nankatsu Online Appointment Platform",
        category: "Modern Web Application & Booking",
        period: "October 2024 – December 2024",
        shortDescription: "Online haircut appointment booking platform featuring 12 responsive pages, 15 service menus, and dual client/admin management flows.",
        description: "Built a modern online haircut appointment booking platform comprising 12 responsive pages and 15 service menus. Implemented 2 distinct user flows (customer appointment booking and admin scheduling management), fulfilling client business specifications 100% on schedule.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        image: "/projects/nankatsu.svg",
        link: "https://barber-nankatsu.vercel.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Online haircut appointment scheduling and booking calendar",
          "12 responsive pages with smooth interactive micro-animations",
          "Dual user workflows: customer self-service booking & admin dashboard",
          "15 service catalog menus and hairstyle showcase"
        ]
      }
    ],
    contact: {
      github: "https://github.com/DaffaFauzi",
      linkedin: "https://linkedin.com/in/daffafauzi",
      email: "daffafauzi303@gmail.com",
      phone: "+62 821-4645-9692",
      location: "Karawang, Indonesia"
    }
  },
  id: {
    name: "Daffa Fauzi",
    role: "Fullstack Web Developer",
    tagline: "Merancang Arsitektur Backend Modern & Aplikasi Web Enterprise End-to-End yang Skalabel",
    shortDescription: "Fullstack Web Developer dengan pengalaman profesional lebih dari 1 tahun 9 bulan dalam merancang, mengembangkan, dan mengelola aplikasi web berskala enterprise (B2B Core Systems) secara end-to-end. Memiliki keahlian mendalam pada pengembangan arsitektur backend modern menggunakan Laravel (v11/v12/v13), PHP 8+, Express.js, Golang, dan MySQL/PostgreSQL, yang diintegrasikan secara presisi dengan antarmuka reaktif berbasis Inertia.js, React.js (v18/v19), Next.js, Vue.js (v3), TypeScript, dan Tailwind CSS (v3/v4). Terbukti sukses mengeksekusi sistem inti pada industri penjaminan finansial (DWP Core & BPR Core), HR Tech (HRIS APG), serta platform operasional olahraga (Prada BC). Berpengalaman mengonfigurasi scheduled worker, WebSockets real-time, RESTful API terstandarisasi, pemodelan database relasional, serta komponen UI interaktif yang kompleks.",
    aboutMe: {
      title: "Tentang Saya",
      description1: "Saya adalah seorang Fullstack Web Developer dengan pengalaman profesional lebih dari 1 tahun 9 bulan dalam merancang, mengembangkan, dan mengelola aplikasi web berskala enterprise (B2B Core Systems) secara end-to-end. Saya lulusan Sarjana Komputer (S.Kom.) / Sarjana Teknik Informatika (S1) dari Sekolah Tinggi Teknologi Wastukancana Purwakarta (Lulusan 2025).",
      description2: "Keahlian mendalam saya berfokus pada pengembangan arsitektur backend modern menggunakan Laravel (v11/v12/v13), PHP 8+, Express.js, Golang, dan MySQL/PostgreSQL, yang diintegrasikan secara presisi dengan antarmuka reaktif berbasis Inertia.js, React.js (v18/v19), Next.js, Vue.js (v3), TypeScript, dan Tailwind CSS (v3/v4). Terbukti sukses mengeksekusi sistem inti pada industri penjaminan finansial (DWP Core & BPR Core), HR Tech (HRIS APG dengan Interactive Org Chart drag-and-drop & biometrik WebAuthn), serta platform operasional olahraga (Prada BC). Berpengalaman mengonfigurasi scheduled worker, WebSockets real-time (Laravel Reverb), arsitektur RESTful API terstandarisasi, dan pemodelan basis data relasional."
    },
    education: {
      degree: "Sarjana Komputer (S.Kom.) / Sarjana Teknik Informatika (S1)",
      institution: "Sekolah Tinggi Teknologi Wastukancana",
      location: "Purwakarta, Jawa Barat, Indonesia",
      year: "Lulusan 2025",
      description: "Konsentrasi: Rekayasa Perangkat Lunak, Arsitektur Sistem Web & Mobile, Perancangan Basis Data, dan Interaksi Manusia-Komputer."
    },
    experience: [
      {
        role: "Fullstack Web Developer",
        company: "PT Ardana Perkasa Group (APG)",
        period: "Oktober 2024 – Sekarang",
        type: "Holding Penjaminan & Layanan Keuangan • Penuh Waktu",
        location: "Jakarta, Indonesia",
        summary: "Bertanggung jawab merancang dan mengembangkan sistem inti enterprise end-to-end, engine kalkulasi finansial, platform HRIS terintegrasi, serta website korporasi.",
        responsibilities: [
          "Arsitektur Core Penjaminan (DWP Core & BPR Core): Mengembangkan sistem penjaminan surety bond dan kontra bank garansi dari perancangan skema database, integrasi REST API, hingga implementasi antarmuka berbasis Laravel 11, Inertia.js (React), TypeScript, TanStack Query, dan Tailwind CSS.",
          "Engine Kalkulasi Invoice & Monitoring (BPR Core): Membangun logika backend otomatis untuk perhitungan invoice premi dan monitoring principal penjaminan, mengeliminasi risiko kesalahan perhitungan manual serta mempercepat validasi administrasi hingga 40%.",
          "Sistem HRIS Terintegrasi (APG HRIS): Merancang fitur Interactive Organizational Chart (Org Chart) dengan fungsionalitas drag-and-drop, posisi kartu dinamis, dan sinkronisasi hierarki dua arah (two-way sync) ke database secara real-time.",
          "Presensi Geolocation & Biometrik: Mengembangkan modul presensi karyawan terintegrasi berbasis geolokasi peta (Spatial / Leaflet) dan autentikasi biometrik modern (WebAuthn) untuk memvalidasi presensi anti-spoofing.",
          "Broadcasting Real-time & UI System: Mengintegrasikan event broadcasting menggunakan Laravel Reverb (WebSockets) serta membangun sistem tema dinamis (Dark/Light Mode circular reveal) di seluruh modul kritis (KPI, Performance Appraisal, Approval, Training).",
          "Service Pelaporan & Data Export: Membangun service layer generator sertifikat penjaminan berformat PDF (DomPDF/jsPDF) serta automasi ekspor data multi-sheet Excel (Maatwebsite) untuk analisis riwayat karyawan.",
          "Refactor Multi-Step Wizard (Caraka): Merekayasa ulang formulir pengajuan Kontra Bank Garansi (KBG) menggunakan Vue 3, Pinia, TanStack Table, Vee-Validate, dan Zod yang terhubung langsung ke backend API.",
          "CMS & Web Korporasi: Mengembangkan Content Management System (CMS) modular dan website profil perusahaan interaktif untuk holding PT Ardana Perkasa Group beserta entitas anak usahanya."
        ],
        technologies: [
          "Laravel 11/12", "PHP 8+", "Inertia.js", "React.js", "Vue.js 3", "TypeScript",
          "MySQL", "PostgreSQL", "Laravel Reverb (WebSockets)", "TanStack Query",
          "Tailwind CSS", "REST API", "WebAuthn", "Leaflet GIS", "DomPDF"
        ]
      }
    ],
    skills: {
      backend: ["Laravel (v11/v12/v13)", "PHP 8+", "Express.js", "Golang", "MySQL", "PostgreSQL", "SQLite", "RESTful API Architecture", "Laravel Reverb (WebSockets)", "Scheduled Jobs & Queues", "Eloquent ORM", "WebAuthn"],
      frontend: ["Inertia.js (React/Vue)", "React.js (v18/v19)", "Next.js", "Vue.js (v3)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS (v3/v4)", "HTML5 & CSS3", "Radix UI / Shadcn", "Framer Motion"],
      tools: ["Zustand", "Pinia", "TanStack Query & Table", "Vite", "Git & GitHub", "Postman", "Figma", "Leaflet (Maps GIS)", "DomPDF", "jsPDF", "Maatwebsite Excel"],
      hardSkills: [
        "Laravel (v11/v12/v13)", "PHP 8+", "React.js (v18/v19)", "Inertia.js", "TypeScript",
        "MySQL", "PostgreSQL", "RESTful API", "Vue.js (v3)", "Tailwind CSS (v3/v4)",
        "Laravel Reverb (WebSockets)", "Express.js", "Golang", "Scheduled Jobs & Queues",
        "Pemodelan Database (ERD)", "Biometrik WebAuthn"
      ],
      competencies: [
        "Pengembangan Aplikasi End-to-End", "Pemodelan Database Relasional (ERD)",
        "Clean Architecture", "Integrasi REST API", "Stabilitas & Performa Sistem", "Agile/Scrum"
      ],
      softSkills: [
        "Pemecahan Masalah", "Berpikir Sistematis", "Kolaborasi Tim Lintas Fungsi",
        "Kemampuan Beradaptasi", "Cepat Belajar", "Tanggung Jawab & Kepemilikan Sistem"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Prada Badminton Club Management System (Prada BC Core & Report)",
        category: "Sistem Manajemen Klub Olahraga (Fullstack)",
        period: "2026",
        shortDescription: "Platform manajemen klub bulutangkis komprehensif: database relasional, scheduler tagihan SPP harian, FullCalendar, dan cetak sertifikat & evaluasi PDF.",
        description: "Membangun platform manajemen klub bulutangkis komprehensif dari hulu ke hilir: perancangan database relasional atlet & pelatih, manajemen kurikulum privat/mingguan, hingga sistem pendaftaran dan konfirmasi pembayaran turnamen. Mengimplementasikan scheduler service harian (Artisan command) untuk automasi penagihan dan notifikasi reminder SPP bulanan, rekonsiliasi arus kas (cash flow), serta kalender jadwal interaktif (FullCalendar). Membangun modul cetak laporan evaluasi performa fisik atlet serta generator sertifikat penghargaan otomatis berbasis PDF.",
        tech: ["Laravel 12/13", "Inertia.js (React 19)", "TypeScript", "Tailwind CSS v4", "FullCalendar", "DomPDF"],
        image: "/projects/prada-bc.svg",
        link: "https://github.com/DaffaFauzi",
        github: "https://github.com/DaffaFauzi",
        linkType: "github",
        features: [
          "Manajemen atlet & pelatih komprehensif dengan perancangan database relasional",
          "Automasi scheduler service harian (Artisan command) reminder tagihan SPP & rekonsiliasi kas",
          "Kalender jadwal interaktif kurikulum latihan privat/mingguan (FullCalendar)",
          "Cetak otomatis laporan evaluasi fisik atlet & generator sertifikat penghargaan (DomPDF)"
        ]
      },
      {
        id: 2,
        title: "Ekosistem B2B Core Penjaminan & HR Tech APG (DWP Core, BPR Core & HRIS)",
        category: "Sistem Inti Enterprise B2B (Fullstack)",
        period: "Oktober 2024 – Sekarang",
        shortDescription: "Sistem enterprise penjaminan surety bond dan HRIS dengan engine invoice otomatis, org chart hierarki interaktif drag-and-drop, dan presensi biometrik.",
        description: "Mengembangkan platform inti penjaminan surety bond & kontra bank garansi serta HRIS korporasi terintegrasi untuk holding PT Ardana Perkasa Group. Membangun engine kalkulasi invoice otomatis yang mempercepat validasi administrasi hingga 40%, merancang bagan hierarki organisasi (Org Chart) interaktif drag-and-drop dengan sinkronisasi database dua arah secara real-time, serta presensi peta geolokasi (Leaflet) dan biometrik WebAuthn anti-spoofing terintegrasi broadcasting Laravel Reverb.",
        tech: ["Laravel 11", "Inertia.js (React)", "TypeScript", "MySQL", "WebSockets (Reverb)", "Tailwind CSS", "WebAuthn", "Leaflet GIS"],
        image: "/projects/enterprise-core.svg",
        link: null,
        github: "Privat",
        linkType: "internal",
        features: [
          "Engine kalkulasi invoice premi & monitoring penjaminan mempercepat validasi hingga 40%",
          "Interactive Org Chart drag-and-drop dengan two-way sync ke database secara real-time",
          "Presensi geolokasi peta Leaflet & autentikasi biometrik modern WebAuthn anti-spoofing",
          "Event broadcasting real-time berbasis Laravel Reverb WebSockets & generator ekspor multi-sheet"
        ]
      },
      {
        id: 3,
        title: "Web Kasir (POS) & Inventaris UMKM Toko Jaya Berkah",
        category: "Sistem Kasir & POS Retail UMKM (Fullstack)",
        period: "2024",
        shortDescription: "Sistem Point of Sale (POS) retail lengkap dengan pemotongan stok otomatis real-time, struk belanja PDF otomatis, dan rekapitulasi omzet.",
        description: "Mengembangkan sistem Point of Sale (POS) retail lengkap: pemodelan data inventaris produk, alur checkout pembayaran cepat, pemotongan stok otomatis real-time, dan cetak struk belanja PDF otomatis. Menyediakan dashboard pemantauan transaksi serta rekapitulasi laporan pendapatan harian dan bulanan.",
        tech: ["Laravel", "Blade", "PHP", "MySQL", "Tailwind CSS", "DomPDF"],
        image: "/projects/web-kasir.svg",
        link: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        github: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        linkType: "github",
        features: [
          "Alur checkout transaksi kasir cepat dengan pemotongan stok otomatis real-time",
          "Pembuatan & unduh otomatis struk belanja digital format PDF via DomPDF",
          "Manajemen data master inventaris produk, kategori barang, dan persediaan",
          "Dashboard rekapitulasi laporan omzet dan pendapatan berkala harian/bulanan"
        ]
      },
      {
        id: 4,
        title: "Sistem Informasi Posyandu Berbasis Cloud",
        category: "Platform Web Kesehatan Berbasis Cloud (Fullstack)",
        period: "2024",
        shortDescription: "Sistem posyandu digital berbasis cloud Railway untuk evaluasi status gizi balita, rekam imunisasi, dan rekapitulasi data bulanan.",
        description: "Merancang sistem informasi kesehatan masyarakat: database master data ibu dan anak, algoritma evaluasi status gizi dan pertumbuhan balita (tinggi/berat badan), riwayat imunisasi berkala, serta rekapitulasi data bulanan yang di-deploy di cloud Railway.",
        tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Railway Cloud Deployment"],
        image: "/projects/posyandu.svg",
        link: "https://posyandu.up.railway.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Pemantauan tumbuh kembang dan algoritma evaluasi status gizi balita",
          "Penjadwalan imunisasi berkala dan pencatatan riwayat dosis vaksin",
          "Pengelolaan pangkalan data ibu, anak, dan rekam medis posyandu",
          "Ekspor rekapitulasi laporan kesehatan bulanan terstruktur otomatis"
        ]
      },
      {
        id: 5,
        title: "Aplikasi Kamus Bahasa Sunda Digital (Android Native)",
        category: "Aplikasi Seluler (Akademik / Skripsi)",
        period: "Februari 2025 – Juli 2025",
        shortDescription: "Aplikasi kamus digital Android dengan basis data lokal SQLite 500+ kosakata, waktu respon sub-detik, dan klasifikasi undak-usuk basa.",
        description: "Merancang arsitektur aplikasi kamus mobile berbasis basis data lokal SQLite dengan 500+ kosakata terverifikasi beserta klasifikasi undak-usuk basa (Loma & Lemes). Mengoptimalkan algoritma query pencarian dengan waktu respon sub-detik (<1 detik), teruji langsung pada 20 responden dengan tingkat kepuasan mencapai 85%.",
        tech: ["Kotlin", "Android Studio", "SQLite", "Material Design"],
        image: "/projects/sundanese-dict.svg",
        link: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        github: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        linkType: "github",
        features: [
          "500+ kosakata terverifikasi bahasa Sunda beserta terjemahan bahasa Indonesia",
          "Pencarian instan berlatensi sub-detik (< 1 detik) dengan SQLite",
          "Klasifikasi ragam undak-usuk basa (Kategori Loma & Lemes)",
          "Teruji pada 20 responden langsung dengan tingkat kepuasan 85%"
        ]
      },
      {
        id: 6,
        title: "Website Barbershop Nankatsu",
        category: "Aplikasi Web Pemesanan Layanan",
        period: "Oktober 2024 – Desember 2024",
        shortDescription: "Platform pemesanan jadwal cukur online modern dengan 12 halaman responsif, 15 fitur layanan, dan 2 alur pengguna (pelanggan & admin).",
        description: "Membangun platform pemesanan jadwal cukur online modern dengan 12 halaman responsif dan 15 fitur layanan. Mengimplementasikan 2 user flow terpisah (antarmuka booking pelanggan & panel manajemen admin) yang diselesaikan 100% tepat waktu sesuai spesifikasi bisnis klien.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        image: "/projects/nankatsu.svg",
        link: "https://barber-nankatsu.vercel.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Sistem kalender pemesanan janji temu & jadwal cukur rambut online",
          "12 halaman responsif dengan navigasi bersih dan mikro-animasi dinamis",
          "2 user flow terpisah: alur booking pelanggan & panel dashboard admin",
          "15 menu katalog layanan dan etalase model potongan rambut"
        ]
      }
    ],
    contact: {
      github: "https://github.com/DaffaFauzi",
      linkedin: "https://linkedin.com/in/daffafauzi",
      email: "daffafauzi303@gmail.com",
      phone: "+62 821-4645-9692",
      location: "Karawang, Indonesia"
    }
  }
};
