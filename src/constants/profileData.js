export const profileData = {
  en: {
    name: "Daffa Fauzi",
    role: "Frontend Developer",
    tagline: "Building Responsive, Scalable, and User-Centered Web Applications",
    shortDescription: "Frontend Developer with over 1 year and 9 months of professional experience in developing and maintaining web applications, including enterprise core systems such as DWP Core, BPR Core, and Human Resource Information System (HRIS). Proficient in React.js, Next.js, Vue.js, JavaScript, TypeScript, and Tailwind CSS for crafting responsive, user-friendly interfaces, with backend exposure using Laravel, Express.js, Golang, PHP, and MySQL for end-to-end delivery.",
    aboutMe: {
      title: "About Me",
      description1: "I am a Frontend Developer with over 1 year and 9 months of professional experience in developing and maintaining web applications, including mission-critical enterprise core systems such as DWP Core, BPR Core, and Human Resource Information System (HRIS). I hold a Bachelor's degree in Informatics Engineering (S1) from Sekolah Tinggi Teknologi Wastukancana (Class of 2025).",
      description2: "I specialize in building responsive, interactive, and user-friendly web interfaces using React.js, Next.js, Vue.js, JavaScript, TypeScript, and Tailwind CSS. I also have solid backend understanding with Laravel, Express.js, Golang, PHP, and MySQL to support seamless end-to-end application development, API integrations, and system logic optimizations. Experienced in cross-functional team collaboration, implementing business features, and keeping enterprise systems stable even with lean teams."
    },
    education: {
      degree: "Bachelor of Informatics Engineering (S1)",
      institution: "Sekolah Tinggi Teknologi Wastukancana",
      location: "Purwakarta, West Java, Indonesia",
      year: "Graduated 2025",
      description: "Focused on Software Engineering, Web & Mobile Application Development, System Architecture, and Human-Computer Interaction."
    },
    experience: [
      {
        role: "Frontend Developer",
        company: "PT Ardana Perkasa Group",
        period: "October 2025 – Present",
        type: "Full-time",
        location: "Indonesia",
        summary: "Responsible for developing, optimizing, and maintaining enterprise core web platforms and corporate profile websites.",
        responsibilities: [
          "Develop and maintain enterprise core web systems: DWP Core and BPR Core to support operational business requirements.",
          "Lead user interface (UI) engineering using React.js, Next.js, Vue.js, PHP, JavaScript, TypeScript, and Tailwind CSS.",
          "Contribute to backend services using Laravel, Express.js, Golang, and MySQL, including REST API integration and system logic adjustments.",
          "Directly involved in developing and managing HRIS (Human Resource Information System) for employee data and attendance management.",
          "Maintain and optimize internal ecosystem systems including PradaBC Report and SIPBro Core.",
          "Designed and built interactive Company Profile websites for holding company PT Ardana Perkasa Group (APG) and its subsidiaries (BPR & DWP).",
          "Collaborate with cross-functional IT teams across requirements analysis, feature implementation, and system maintenance.",
          "Optimize and adjust system architecture to ensure high stability and reliability despite limited IT personnel."
        ],
        technologies: [
          "React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS",
          "Laravel", "PHP", "Express.js", "Golang", "MySQL", "REST API"
        ]
      }
    ],
    skills: {
      frontend: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "UI/UX Design"],
      backend: ["Laravel", "PHP", "Express.js", "Golang", "MySQL", "REST API Integration"],
      tools: ["Git & Version Control", "GitHub", "Figma", "Postman", "Vite", "VS Code"],
      hardSkills: [
        "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js",
        "Tailwind CSS", "UI/UX Design", "HTML5 & CSS3", "Laravel", "PHP",
        "MySQL", "Express.js", "Golang", "REST API Integration", "Figma", "Git & Version Control"
      ],
      softSkills: [
        "Problem Solving", "Adaptability", "Team Collaboration", "Effective Communication",
        "Time Management", "Fast Learner", "System Responsibility & Ownership"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Sundanese-Indonesian Digital Dictionary",
        category: "Mobile Application (Academic)",
        period: "February 2025 – July 2025",
        shortDescription: "Android digital dictionary app featuring 500+ Sundanese vocabularies with instant search and language register classification.",
        description: "Designed and developed an Android-based digital dictionary application containing 500+ Sundanese vocabularies with accurate Indonesian translations. Implemented sub-second fast search response times (< 1s), crafted a clean UI that enhanced readability by 90%, and conducted user testing with 20 participants achieving 85% satisfaction.",
        tech: ["Kotlin", "Android Studio", "Material Design", "SQLite"],
        image: "/projects/sundanese-dict.svg",
        link: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        github: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        linkType: "github",
        features: [
          "500+ Verified Sundanese Vocabularies with Indonesian Translations",
          "Sub-second Instant Search Latency (< 1s)",
          "Language Register Filters (Loma & Lemes categories)",
          "Clean UI Architecture Tested with 85% User Satisfaction"
        ]
      },
      {
        id: 2,
        title: "Barbershop Nankatsu Website",
        category: "Web Application",
        period: "October 2024 – December 2024",
        shortDescription: "Modern interactive barbershop website with online haircut booking, service catalog, and dual user flows.",
        description: "Designed 12 interactive UI pages with consistent navigation and created 2 user flows (admin & customer) supporting the business. Structured content with 15 core feature menus, gathered 20+ system requirements directly through client interviews, and delivered a fully functional web platform 100% on schedule.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        image: "/projects/nankatsu.svg",
        link: "https://barber-nankatsu.vercel.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Online Haircut Appointment Booking & Schedule System",
          "12 Interactive Pages with Clean Responsive Navigation",
          "Dual User Flows (Customer Booking & Admin Management)",
          "15 Core Feature Menus & Hairstyle Showcase"
        ]
      },
      {
        id: 3,
        title: "Posyandu Healthcare Information System",
        category: "Healthcare Web Platform",
        period: "2024",
        shortDescription: "Cloud-hosted digital Posyandu system for toddler growth tracking, immunization records, and automated reporting.",
        description: "A web-based community healthcare management system deployed on Railway Cloud. Enables Posyandu cadres to record toddler growth metrics (height/weight), monitor immunization history, manage maternal & child records, and automatically generate structured healthcare reports.",
        tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Railway"],
        image: "/projects/posyandu.svg",
        link: "https://posyandu.up.railway.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Toddler Growth Tracking & Nutritional Evaluation",
          "Immunization Scheduling & Periodic Dose Tracking",
          "Maternal & Child Health Master Records",
          "Structured Monthly Health Report Exports"
        ]
      },
      {
        id: 4,
        title: "Movie List Discovery App",
        category: "Mobile Application",
        period: "August 2023 – December 2023",
        shortDescription: "Interactive Android movie catalog application integrating 200+ movies with genre filters and personal watchlists.",
        description: "Collaborated in a 3-member team to develop a responsive Android movie application. Boosted user engagement by 80%, integrated a database of 200+ domestic and international movies (+20% data increase), and optimized application performance and interactivity by up to 45%.",
        tech: ["React Native", "Android", "REST API", "Context API"],
        image: "/projects/movie-list.svg",
        link: null,
        github: "Private",
        linkType: "none",
        features: [
          "Collaborative 3-Member Team Development",
          "Integrated 200+ Domestic & International Movies Dataset",
          "Responsive Dark Mode UI with 80% Higher Engagement",
          "Optimized Application Interactivity & Performance (+45%)"
        ]
      },
      {
        id: 5,
        title: "UMKM Jaya Berkah Web Cashier (POS)",
        category: "POS & Retail System",
        period: "2024",
        shortDescription: "Web-based Point of Sale (POS) and cashier system with automated PDF receipt generation and sales reporting.",
        description: "Point of Sale (POS) and inventory cashier web application developed with Laravel for UMKM Toko Jaya Berkah. Features rapid checkout transactions, product stock and category management, automatic PDF receipt generation, and real-time revenue analytics.",
        tech: ["Laravel", "Blade", "PHP", "MySQL", "Tailwind CSS", "DomPDF"],
        image: "/projects/web-kasir.svg",
        link: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        github: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        linkType: "github",
        features: [
          "Fast Point of Sale (POS) Checkout Workflows",
          "Instant PDF Receipt Generation & Download",
          "Product Inventory, Category & Stock Management",
          "Sales Revenue Tracking & Daily/Monthly Reporting"
        ]
      },
      {
        id: 6,
        title: "Modern Frontend Web Application",
        category: "Frontend Showcase",
        period: "2025",
        shortDescription: "Modern frontend showcase built with React 18, Vite, Tailwind CSS v4, and fluid Framer Motion animations.",
        description: "Modern frontend showcase web application built with React 18, Vite, Tailwind CSS v4, and Framer Motion animations. Highlights a modular, reusable component architecture, fluid micro-interactions, mobile-first responsiveness, and optimized performance.",
        tech: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"],
        image: "/projects/frontend-app.svg",
        link: "https://github.com/DaffaFauzi/my-frontend-app",
        github: "https://github.com/DaffaFauzi/my-frontend-app",
        linkType: "github",
        features: [
          "Fluid Micro-interactions with Framer Motion",
          "Responsive Modern Mobile-First Layout",
          "Reusable Clean Component Architecture",
          "Lightning-fast Vite Bundling & Tailwind v4 Integration"
        ]
      }
    ],
    contact: {
      github: "https://github.com/DaffaFauzi",
      linkedin: "https://linkedin.com/in/daffafauzi",
      email: "daffafauzi303@gmail.com",
      phone: "+62 821 4645 9692",
      location: "Indonesia"
    }
  },
  id: {
    name: "Daffa Fauzi",
    role: "Frontend Developer",
    tagline: "Membangun Aplikasi Web yang Responsif, Skalabel, dan Berpusat pada Pengguna",
    shortDescription: "Frontend Developer dengan pengalaman profesional lebih dari 1 tahun 9 bulan dalam pengembangan dan pemeliharaan aplikasi web, termasuk sistem inti (core) perusahaan seperti DWP Core, BPR Core, dan Sistem Informasi Sumber Daya Manusia (HRIS). Menguasai React.js, Next.js, Vue.js, JavaScript, TypeScript, dan Tailwind CSS untuk membangun antarmuka yang responsif dan ramah pengguna, serta memiliki pemahaman backend menggunakan Laravel, Express.js, Golang, PHP, dan MySQL untuk mendukung pengembangan aplikasi dari hulu ke hilir (end-to-end).",
    aboutMe: {
      title: "Tentang Saya",
      description1: "Saya adalah seorang Frontend Developer dengan pengalaman profesional lebih dari 1 tahun 9 bulan dalam pengembangan dan pemeliharaan aplikasi web, termasuk sistem inti perusahaan berskala enterprise seperti DWP Core, BPR Core, dan Sistem Informasi Sumber Daya Manusia (HRIS). Saya lulusan Sarjana Teknik Informatika (S1) dari Sekolah Tinggi Teknologi Wastukancana Purwakarta (Lulusan 2025).",
      description2: "Saya menguasai React.js, Next.js, Vue.js, JavaScript, TypeScript, dan Tailwind CSS untuk membangun antarmuka web yang responsif, interaktif, dan ramah pengguna. Saya juga memiliki pemahaman backend yang kuat dengan Laravel, Express.js, Golang, PHP, dan MySQL untuk mendukung integrasi API dan logika sistem secara menyeluruh. Berpengalaman bekerja dalam kolaborasi tim lintas fungsi, mengimplementasikan fitur bisnis, serta menjaga stabilitas dan performa sistem meskipun dengan tim yang ramping. Memiliki daya adaptasi yang tinggi, fokus pada pemecahan masalah, dan dedikasi penuh terhadap kualitas perangkat lunak."
    },
    education: {
      degree: "Sarjana Teknik Informatika (S1)",
      institution: "Sekolah Tinggi Teknologi Wastukancana",
      location: "Purwakarta, Jawa Barat, Indonesia",
      year: "Lulusan 2025",
      description: "Fokus keilmuan pada Rekayasa Perangkat Lunak, Pengembangan Aplikasi Web & Seluler, Arsitektur Sistem, dan Interaksi Manusia & Komputer."
    },
    experience: [
      {
        role: "Frontend Developer",
        company: "PT Ardana Perkasa Group",
        period: "Oktober 2025 – Sekarang",
        type: "Penuh Waktu",
        location: "Indonesia",
        summary: "Bertanggung jawab atas pengembangan, optimasi, dan pemeliharaan platform sistem web enterprise serta website profil perusahaan holding dan anak perusahaan.",
        responsibilities: [
          "Mengembangkan dan memelihara sistem web inti perusahaan: DWP Core dan BPR Core untuk mendukung operasional bisnis.",
          "Memimpin rekayasa antarmuka pengguna (UI) menggunakan React.js, Next.js, Vue.js, PHP, JavaScript, TypeScript, dan Tailwind CSS.",
          "Berkontribusi pada layanan backend menggunakan Laravel, Express.js, Golang, dan MySQL, termasuk integrasi REST API dan logika bisnis sistem.",
          "Terlibat langsung dalam perancangan dan pengelolaan HRIS (Human Resource Information System) untuk absensi dan manajemen data karyawan.",
          "Memelihara serta mengoptimalkan sistem ekosistem internal perusahaan seperti PradaBC Report dan SIPBro Core.",
          "Merancang dan membangun website Company Profile yang representatif dan interaktif untuk induk perusahaan PT Ardana Perkasa Group (APG) dan anak perusahaan (BPR & DWP).",
          "Berkolaborasi erat dengan tim IT lintas divisi dalam analisis kebutuhan, penerapan fitur baru, dan pemeliharaan berkala sistem.",
          "Mengoptimalkan arsitektur sistem agar selalu memiliki ketersediaan tinggi dan stabil."
        ],
        technologies: [
          "React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS",
          "Laravel", "PHP", "Express.js", "Golang", "MySQL", "REST API"
        ]
      }
    ],
    skills: {
      frontend: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Desain Antarmuka (UI/UX)"],
      backend: ["Laravel", "PHP", "Express.js", "Golang", "MySQL", "Integrasi REST API"],
      tools: ["Git & Kontrol Versi", "GitHub", "Figma", "Postman", "Vite", "VS Code"],
      hardSkills: [
        "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js",
        "Tailwind CSS", "Desain UI/UX", "HTML5 & CSS3", "Laravel", "PHP",
        "MySQL", "Express.js", "Golang", "Integrasi REST API", "Figma", "Git & Kontrol Versi"
      ],
      softSkills: [
        "Pemecahan Masalah", "Kemampuan Beradaptasi", "Kolaborasi Tim", "Komunikasi Efektif",
        "Manajemen Waktu", "Cepat Belajar", "Tanggung Jawab & Kepemilikan Sistem"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Aplikasi Kamus Bahasa Sunda-Indonesia",
        category: "Aplikasi Seluler (Akademik)",
        period: "Februari 2025 – Juli 2025",
        shortDescription: "Aplikasi kamus digital Android dengan 500+ kosakata bahasa Sunda beserta terjemahan bahasa Indonesia dan pencarian kilat.",
        description: "Merancang dan mengembangkan aplikasi kamus digital berbasis Android dengan 500+ kosakata bahasa Sunda beserta terjemahan bahasa Indonesia yang akurat. Mengimplementasikan fitur pencarian instan dengan latensi sub-detik (< 1 detik), mendesain tata letak antarmuka yang bersih untuk meningkatkan keterbacaan hingga 90%, serta melakukan pengujian terhadap 20 responden dengan tingkat kepuasan 85%.",
        tech: ["Kotlin", "Android Studio", "Material Design", "SQLite"],
        image: "/projects/sundanese-dict.svg",
        link: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        github: "https://github.com/DaffaFauzi/kamus-bahasa-sunda-app",
        linkType: "github",
        features: [
          "500+ Kosakata Terverifikasi Bahasa Sunda beserta Terjemahan Bahasa Indonesia",
          "Pencarian Instan Cepat dengan Waktu Respon Kurang dari 1 Detik",
          "Klasifikasi Ragam Bahasa (Kategori Loma & Lemes)",
          "Desain Antarmuka Bersih Teruji dengan Kepuasan Pengguna 85%"
        ]
      },
      {
        id: 2,
        title: "Website Barbershop Nankatsu",
        category: "Aplikasi Web",
        period: "Oktober 2024 – Desember 2024",
        shortDescription: "Website pangkas rambut modern dan interaktif dengan pemesanan jadwal online, katalog layanan, dan 2 alur pengguna.",
        description: "Merancang 12 halaman antarmuka interaktif dengan alur navigasi konsisten dan membangun 2 alur pengguna (admin dan pelanggan) untuk mendukung kelancaran bisnis. Menyusun 15 menu fitur unggulan, mengumpulkan 20+ kebutuhan sistem melalui wawancara langsung dengan klien, serta menuntaskan implementasi website secara tepat waktu.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        image: "/projects/nankatsu.svg",
        link: "https://barber-nankatsu.vercel.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Sistem Pemesanan Janji Temu & Jadwal Cukur Rambut Online",
          "12 Halaman Antarmuka Interaktif dengan Navigasi Bersih & Responsif",
          "2 Alur Pengguna Terpisah (Pemesanan Pelanggan & Manajemen Admin)",
          "15 Menu Fitur Lengkap & Showcase Model Rambut"
        ]
      },
      {
        id: 3,
        title: "Sistem Informasi Posyandu",
        category: "Platform Web Kesehatan",
        period: "2024",
        shortDescription: "Sistem posyandu digital berbasis komputasi awan (cloud) untuk pemantauan tumbuh kembang balita dan rekam imunisasi.",
        description: "Sistem informasi manajemen posyandu berbasis web yang di-deploy di cloud Railway. Membantu kader posyandu mencatat pengukuran tumbuh kembang balita (tinggi dan berat badan), memantau riwayat imunisasi berkala, mengelola data ibu dan anak, serta mengekspor laporan kesehatan bulanan secara otomatis.",
        tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Railway"],
        image: "/projects/posyandu.svg",
        link: "https://posyandu.up.railway.app/",
        github: "https://github.com/DaffaFauzi",
        linkType: "live",
        features: [
          "Pemantauan Tumbuh Kembang & Evaluasi Status Gizi Balita",
          "Jadwal Imunisasi Berkala & Riwayat Dosis Vaksin",
          "Manajemen Data Master Ibu, Balita, dan Wilayah Posyandu",
          "Ekspor Laporan Rekapitulasi Kesehatan Bulanan Terstruktur"
        ]
      },
      {
        id: 4,
        title: "Aplikasi Katalog Film (Movie List)",
        category: "Aplikasi Seluler",
        period: "Agustus 2023 – Desember 2023",
        shortDescription: "Aplikasi Android penjelajah film interaktif yang mengintegrasikan 200+ film dengan filter genre dan daftar tontonan pribadi.",
        description: "Berkolaborasi dalam tim beranggotakan 3 orang untuk membangun aplikasi katalog film Android yang responsif. Meningkatkan interaksi pengguna hingga 80%, mengintegrasikan pangkalan data 200+ film nasional dan internasional (penambahan data +20%), serta mengoptimalkan performa dan interaktivitas aplikasi hingga 45%.",
        tech: ["React Native", "Android", "REST API", "Context API"],
        image: "/projects/movie-list.svg",
        link: null,
        github: "Privat",
        linkType: "none",
        features: [
          "Pengembangan Kolaboratif Bersama Tim Beranggotakan 3 Pengembang",
          "Integrasi Kumpulan Data 200+ Film Nasional & Internasional",
          "Antarmuka Mode Gelap yang Responsif dengan Peningkatan Interaksi 80%",
          "Optimasi Performa Rendering & Interaktivitas Aplikasi (+45%)"
        ]
      },
      {
        id: 5,
        title: "Web Kasir UMKM Jaya Berkah",
        category: "Sistem Kasir & POS UMKM",
        period: "2024",
        shortDescription: "Aplikasi kasir Point of Sale (POS) berbasis web dengan cetak struk belanja otomatis format PDF dan laporan penjualan.",
        description: "Aplikasi web kasir dan persediaan barang Point of Sale (POS) yang dikembangkan dengan Laravel untuk UMKM Toko Jaya Berkah. Memiliki alur transaksi pembayaran kilat, manajemen stok dan kategori barang, pembuatan struk pembelian otomatis dalam format PDF, serta pelaporan omzet penjualan berkala.",
        tech: ["Laravel", "Blade", "PHP", "MySQL", "Tailwind CSS", "DomPDF"],
        image: "/projects/web-kasir.svg",
        link: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        github: "https://github.com/DaffaFauzi/web-kasir-umkm-jaya-berkah",
        linkType: "github",
        features: [
          "Alur Transaksi Kasir Point of Sale (POS) Cepat & Efisien",
          "Pembuatan & Unduh Struk Transaksi Digital Format PDF Otomatis",
          "Manajemen Stok Produk, Kategori Barang, dan Pelanggan",
          "Pemantauan Pendapatan Penjualan & Laporan Berkala Harian/Bulanan"
        ]
      },
      {
        id: 6,
        title: "Aplikasi Web Frontend Modern",
        category: "Showcase Antarmuka Web",
        period: "2025",
        shortDescription: "Aplikasi showcase frontend modern yang dibangun menggunakan React 18, Vite, Tailwind CSS v4, dan animasi Framer Motion.",
        description: "Aplikasi web showcase frontend modern yang dibangun menggunakan React 18, Vite, Tailwind CSS v4, dan animasi dinamis Framer Motion. Mengedepankan arsitektur komponen yang modular dan dapat digunakan kembali, mikro-interaksi yang halus, tata letak mobile-first yang responsif, serta performa bundling yang optimal.",
        tech: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"],
        image: "/projects/frontend-app.svg",
        link: "https://github.com/DaffaFauzi/my-frontend-app",
        github: "https://github.com/DaffaFauzi/my-frontend-app",
        linkType: "github",
        features: [
          "Mikro-interaksi & Transisi Halus Menggunakan Framer Motion",
          "Tata Letak Modern Responsif Berorientasi Mobile-First",
          "Arsitektur Komponen Bersih & Dapat Digunakan Kembali",
          "Proses Bundling Cepat dengan Integrasi Vite & Tailwind CSS v4"
        ]
      }
    ],
    contact: {
      github: "https://github.com/DaffaFauzi",
      linkedin: "https://linkedin.com/in/daffafauzi",
      email: "daffafauzi303@gmail.com",
      phone: "+62 821 4645 9692",
      location: "Indonesia"
    }
  }
};
