import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { toSlug } from "../utils/slug";
import { useLanguage } from "../context/LanguageContext";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isGithubLink =
    project.linkType === "github" ||
    (project.link && project.link.includes("github.com"));
  const isLiveLink =
    project.linkType === "live" ||
    (project.link && !project.link.includes("github.com"));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0B0B1E] border border-white/20 text-white shadow-2xl shadow-indigo-950/70 z-10 my-auto transform transition-all duration-300 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-r from-[#6366f1]/30 via-[#a855f7]/30 to-[#ec4899]/30 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={language === "en" ? "Close modal" : "Tutup modal"}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#030014]/80 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#050512]">
          <img
            src={project.image || "/placeholder-project.png"}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1E] via-[#0B0B1E]/40 to-transparent" />

          {/* Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#030014]/95 text-indigo-200 border border-indigo-400/50 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {project.category || (language === "en" ? "Project" : "Proyek")}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              {language === "en" ? "Overview & Background" : "Ringkasan & Deskripsi Proyek"}
            </h4>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal text-justify">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === "en" ? "Key Features & Capabilities" : "Fitur Unggulan Proyek"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.05] border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200 font-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-400" />
                {language === "en" ? "Technologies Used" : "Teknologi yang Digunakan"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/35 text-indigo-200 text-xs font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Direct Destination Buttons */}
        <div className="p-5 sm:p-6 bg-[#070716] border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              to={`/project/${toSlug(project.title)}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <span>{language === "en" ? "Full Page View" : "Halaman Lengkap"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Project Link Button */}
            {isGithubLink && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5558e6] hover:to-[#9947e9] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-indigo-500/30 transition-all duration-200 active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span>{language === "en" ? "View GitHub Repo" : "Buka Repositori GitHub"}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}

            {isLiveLink && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-emerald-500/30 transition-all duration-200 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{language === "en" ? "Visit Website" : "Kunjungi Website"}</span>
              </a>
            )}

            {!project.link && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-600">
                <span>{language === "en" ? "Internal Project (Private)" : "Proyek Internal (Privat)"}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
