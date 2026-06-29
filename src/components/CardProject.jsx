import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { toSlug } from "../utils/slug";
import { useLanguage } from "../context/LanguageContext";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const { language } = useLanguage();

  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert(language === 'en' ? "Live demo link is not available" : "Tautan demo langsung tidak tersedia");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert(language === 'en' ? "Project details are not available" : "Detail proyek tidak tersedia");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-[#0D0D20] border border-white/[0.06] transition-all duration-300 hover:border-[#6366f1]/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={Img || "/placeholder-project.png"}
            alt={Title}
            className="w-full object-cover aspect-[16/8] transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.src = "https://via.placeholder.com/800x400?text=Project+Image"; }}
          />
          {/* Subtle overlay gradient on image bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D20]/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-base font-semibold text-white leading-snug">
            {Title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-light">
            {Description}
          </p>

          <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between">
            {ProjectLink ? (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#6366f1] text-xs font-medium transition-colors duration-200"
              >
                <span>{language === 'en' ? "Live Demo" : "Demo Langsung"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-gray-700 text-xs italic">
                {language === 'en' ? "Demo Not Available" : "Demo Tidak Tersedia"}
              </span>
            )}

            {id ? (
              <Link
                to={`/project/${toSlug(Title)}`}
                onClick={handleDetails}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-[#6366f1]/15 border border-white/[0.07] hover:border-[#6366f1]/30 text-gray-400 hover:text-white text-xs font-medium transition-all duration-200"
              >
                <span>{language === 'en' ? "Details" : "Detail"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="text-gray-700 text-xs">
                {language === 'en' ? "Details N/A" : "Detail N/A"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
