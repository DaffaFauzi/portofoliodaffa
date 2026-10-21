import React, { memo } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Building2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../constants/profileData";

const WorkExperience = () => {
  const { language } = useLanguage();
  const data = profileData[language];
  const exp = data.experience?.[0];
  const edu = data.education;
  const skills = data.skills;

  return (
    <section
      className="relative w-full py-20 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#040112] text-white overflow-hidden"
      id="Experience"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/3 -left-48 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          <span>
            {language === "en" ? "Career & Education" : "Karir & Pendidikan"}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {language === "en" ? (
            <>
              Professional{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Experience &amp; Journey
              </span>
            </>
          ) : (
            <>
              Pengalaman &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Perjalanan Karir
              </span>
            </>
          )}
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
          {language === "en"
            ? "A snapshot of my professional work experience in enterprise web systems, academic background, and core technical proficiencies."
            : "Rekam jejak pengalaman kerja profesional dalam pengembangan sistem web enterprise, latar belakang pendidikan, serta keahlian teknis."}
        </p>
      </div>

      {/* Main Grid: Work Experience (Left) & Education + Skills (Right) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* WORK EXPERIENCE CARD (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#0B0B20]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 hover:border-indigo-400/50 transition-all duration-300">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-transparent rounded-t-3xl" />

            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-white/10">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-indigo-500/20 text-indigo-200 border border-indigo-500/35">
                  {exp?.type || (language === 'en' ? "Full-time" : "Penuh Waktu")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {exp?.role || "FrontEnd Developer"}
                </h3>
                <div className="flex items-center gap-2 text-sm text-indigo-300 font-semibold">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  <span>{exp?.company || "PT Ardana Perkasa Group"}</span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {exp?.period || (language === 'en' ? "October 2025 – Present" : "Oktober 2025 – Sekarang")}
                </span>
                <span className="text-xs text-gray-300 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {exp?.location || "Indonesia"}
                </span>
              </div>
            </div>

            {/* Responsibilities list matching CV */}
            <div className="py-5 space-y-3.5">
              <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === "en" ? "Key Responsibilities & Contributions" : "Tanggung Jawab & Kontribusi Utama"}
              </h4>

              <div className="space-y-3">
                {exp?.responsibilities?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0 shadow-sm shadow-indigo-400" />
                    <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies used */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-400" />
                {language === "en" ? "Technologies Used" : "Teknologi yang Diterapkan"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-500/15 text-indigo-200 border border-indigo-500/25 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: EDUCATION & SKILLS (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">

          {/* EDUCATION CARD */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#0B0B20]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/35 flex items-center justify-center text-purple-300 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-purple-300 uppercase tracking-widest">
                  {language === "en" ? "Education Background" : "Latar Belakang Pendidikan"}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {edu?.degree || (language === 'en' ? "Bachelor of Informatics Engineering (S1)" : "Sarjana Teknik Informatika (S1)")}
                </h3>
              </div>
            </div>

            <div className="space-y-2.5 text-sm text-gray-200 font-normal">
              <div className="flex items-center justify-between text-xs text-gray-300 pb-2.5 border-b border-white/10">
                <span className="font-semibold text-white text-sm">{edu?.institution}</span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 font-semibold text-xs">
                  {edu?.year || "2025"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1 font-normal">
                {edu?.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium pt-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{edu?.location || "Purwakarta, Jawa Barat"}</span>
              </div>
            </div>
          </div>

          {/* SKILLS SUMMARY CARD */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#0B0B20]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 hover:border-indigo-400/50 transition-all duration-300 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-500/35 flex items-center justify-center text-indigo-300 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest">
                  {language === "en" ? "Core Competencies" : "Kompetensi Utama"}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {language === "en" ? "Skills & Proficiencies" : "Keahlian Teknis & Interpersonal"}
                </h3>
              </div>
            </div>

            {/* Hard skills */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                {language === "en" ? "Technical Hard Skills:" : "Keahlian Teknis (Hard Skills):"}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills?.hardSkills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-500/15 text-indigo-200 border border-indigo-500/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="space-y-2 pt-3 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
                {language === "en" ? "Interpersonal Soft Skills:" : "Keahlian Interpersonal (Soft Skills):"}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills?.softSkills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-purple-500/15 text-purple-200 border border-purple-500/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(WorkExperience);
