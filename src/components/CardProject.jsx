import React from "react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const CardProject = ({
  project,
  Img,
  Title,
  Description,
  onOpenDetail,
}) => {
  const { language } = useLanguage();

  const title = project?.title || Title;
  const description = project?.shortDescription || project?.description || Description;
  const image = project?.image || Img || "/placeholder-project.png";
  const techList = project?.tech || [];
  const category = project?.category || (language === 'en' ? "Project" : "Proyek");

  return (
    <div className="group relative w-full h-full flex flex-col">
      {/* Outer Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/0 via-[#a855f7]/0 to-[#ec4899]/0 group-hover:from-[#6366f1]/40 group-hover:via-[#a855f7]/30 group-hover:to-[#ec4899]/30 rounded-2xl blur-md transition-all duration-500 opacity-0 group-hover:opacity-100" />

      {/* Card Container */}
      <div className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-[#0D0D20]/95 backdrop-blur-xl border border-white/15 transition-all duration-300 group-hover:border-indigo-400/60 group-hover:-translate-y-1.5 shadow-2xl shadow-black/50">

        {/* Thumbnail Image */}
        <div
          className="relative overflow-hidden cursor-pointer aspect-[16/9] bg-[#070714]"
          onClick={() => onOpenDetail && onOpenDetail(project)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
            }}
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D20] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-indigo-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#030014]/90 backdrop-blur-md text-indigo-200 border border-indigo-400/40 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {category}
            </span>
          </div>

          {/* Link Type Badge */}
          {project?.linkType && (
            <div className="absolute top-3 right-3 z-10">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-md ${
                project.linkType === 'github'
                  ? 'bg-purple-950/90 text-purple-200 border border-purple-400/50'
                  : project.linkType === 'live'
                  ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-400/50'
                  : 'bg-zinc-900/90 text-zinc-300 border border-zinc-600/50'
              }`}>
                {project.linkType === 'github'
                  ? 'GitHub'
                  : project.linkType === 'live'
                  ? (language === 'en' ? 'Live Web' : 'Aplikasi Web')
                  : (language === 'en' ? 'Internal' : 'Internal')}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
          <div className="space-y-2.5">
            <h3
              onClick={() => onOpenDetail && onOpenDetail(project)}
              className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 line-clamp-1 cursor-pointer"
            >
              {title}
            </h3>

            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
              {description}
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {techList.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.08] text-indigo-200 border border-white/10"
              >
                {t}
              </span>
            ))}
            {techList.length > 3 && (
              <span className="px-2 py-1 text-xs text-indigo-300 font-semibold bg-white/[0.05] rounded-md">
                +{techList.length - 3}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-300 text-xs font-medium">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                {techList.length} {language === 'en' ? "Technologies" : "Teknologi"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onOpenDetail && onOpenDetail(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 hover:from-[#6366f1]/50 hover:to-[#a855f7]/50 border border-indigo-400/50 text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-indigo-500/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>{language === 'en' ? "Details" : "Detail"}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
