import React, { useEffect, memo, useMemo } from "react"
import { Code, Award, Globe, ArrowUpRight, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLanguage } from "../context/LanguageContext"
import { profileData } from "../constants/profileData"

const SectionHeader = memo(({ label, title, subtitle }) => (
  <div className="text-center lg:mb-12 mb-6 px-[5%]">
    <p className="text-[#6366f1] text-xs uppercase tracking-widest mb-3 font-medium">{label}</p>
    <h2
      className="text-4xl md:text-5xl font-bold text-white"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className="mt-3 text-gray-600 max-w-xl mx-auto text-sm"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {subtitle}
      </p>
    )}
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-left" data-aos-duration="900">
      {/* Single subtle ambient glow */}
      <div className="absolute -inset-4 opacity-[0.18] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/50">
          <img
            src="/fotodaffa.png"
            alt="Daffa Fauzi"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* Status dot */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D0D20]/90 border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-gray-400 font-medium">Available</span>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration="900" className="group">
    <div className="bg-[#0D0D20] rounded-xl p-6 border border-white/[0.06] transition-all duration-300 hover:border-[#6366f1]/25 hover:-translate-y-0.5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-5">
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${color} bg-opacity-10 group-hover:bg-opacity-15 transition-all`}>
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-700">{description}</p>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-indigo-400 transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const { language } = useLanguage();
  const data = profileData[language];

  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const projectsCount = data.projects.length;
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");

    const startDate = new Date("2025-10-01");
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    const experienceText = diffMonths >= 12
      ? `${Math.floor(diffMonths / 12)}+ ${language === 'en' ? 'Years' : 'Tahun'}`
      : `${diffMonths} ${language === 'en' ? 'Months' : 'Bulan'}`;

    return {
      totalProjects: projectsCount,
      totalCertificates: storedCertificates.length,
      YearExperience: experienceText
    };
  }, [data.projects.length, language]);

  useEffect(() => {
    const initAOS = () => AOS.init({ once: true });
    initAOS();
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(initAOS, 250); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(t); };
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "bg-[#6366f1]",
      value: totalProjects,
      label: language === 'en' ? "Total Projects" : "Total Proyek",
      description: language === 'en' ? "Innovative web solutions crafted" : "Solusi web inovatif yang dibuat",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "bg-[#a855f7]",
      value: totalCertificates,
      label: language === 'en' ? "Certificates" : "Sertifikat",
      description: language === 'en' ? "Professional skills validated" : "Keahlian profesional tervalidasi",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "bg-[#6366f1]",
      value: YearExperience,
      label: language === 'en' ? "Experience" : "Pengalaman",
      description: language === 'en' ? "Professional journey" : "Perjalanan profesional",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience, language]);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-0 bg-[#060614]"
      id="About"
      itemScope
      itemType="https://schema.org/Person"
    >
      <SectionHeader
        label={language === 'en' ? "Who I Am" : "Tentang Saya"}
        title={data.aboutMe.title}
        subtitle={language === 'en' ? "Transforming ideas into digital experiences" : "Mengubah ide menjadi pengalaman digital"}
      />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <span className="text-[#6366f1]">
                {language === 'en' ? "Hello, I'm" : "Halo, Saya"}
              </span>
              <span
                className="block mt-2 text-gray-100"
                data-aos="fade-right"
                data-aos-duration="1000"
                itemProp="name"
              >
                {data.name}
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-gray-500 leading-relaxed text-justify font-light"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {data.aboutMe.description1}
            </p>

            <p
              className="text-base sm:text-lg text-gray-500 leading-relaxed text-justify font-light"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              {data.aboutMe.description2}
            </p>

            {/* Quote */}
            <div
              className="border-l-2 border-[#6366f1]/35 pl-4 py-1"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <blockquote className="text-gray-500 italic text-sm leading-relaxed">
                &ldquo;Building high-quality digital solutions with modern web technologies.&rdquo;
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 w-full">
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="flex items-center justify-center gap-2 px-7 py-3 w-full lg:w-auto rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>{language === 'en' ? "View Projects" : "Lihat Proyek"}</span>
                </button>
              </a>
              <a href="#Contact" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="flex items-center justify-center gap-2 px-7 py-3 w-full lg:w-auto rounded-lg border border-white/10 text-gray-400 text-sm font-medium transition-all duration-200 hover:border-white/20 hover:text-gray-100 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? "Contact Me" : "Hubungi Saya"}</span>
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {statsData.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
