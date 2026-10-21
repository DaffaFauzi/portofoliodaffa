import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import Swal from "sweetalert2";
import { toSlug } from "../utils/slug";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../constants/profileData";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Vue: Cpu,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  TypeScript: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const ProjectStats = ({ project, language }) => {
  const techStackCount = project?.tech?.length || 0;
  const featuresCount = project?.features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />
      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2
            className="text-blue-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-bold text-blue-200">
            {techStackCount}
          </div>
          <div className="text-[11px] md:text-xs text-indigo-200 font-medium">
            {language === 'en' ? 'Total Technologies' : 'Total Teknologi'}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers
            className="text-purple-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-bold text-purple-200">
            {featuresCount || 'N/A'}
          </div>
          <div className="text-[11px] md:text-xs text-purple-200 font-medium">
            {language === 'en' ? 'Main Features' : 'Fitur Utama'}
          </div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink, language) => {
  if (githubLink === "Private" || githubLink === "Privat" || !githubLink) {
    Swal.fire({
      icon: "info",
      title: language === 'en' ? "Source Code Private" : "Kode Sumber Bersifat Privat",
      text: language === 'en' ? "Sorry, the source code for this project is private." : "Maaf, kode sumber untuk proyek ini bersifat privat.",
      confirmButtonText: language === 'en' ? "Understand" : "Mengerti",
      confirmButtonColor: "#3085d6",
      background: "#030014",
      color: "#ffffff",
    });
    return false;
  }
  window.open(githubLink, "_blank", "noopener,noreferrer");
  return true;
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const data = profileData[language];
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = data.projects.find(
      (p) => toSlug(p.title) === slug,
    );

    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [slug, data.projects]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">
            {language === 'en' ? 'Loading Project...' : 'Memuat Proyek...'}
          </h2>
        </div>
      </div>
    );
  }

  const projectUrl = `https://daffafauzi.com/project/${toSlug(project.title)}`;

  return (
    <>
      <Helmet>
        <title>{project.title} — {data.name}</title>
        <meta
          name="description"
          content={project.description?.slice(0, 155)}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={projectUrl} />
        <meta
          property="og:title"
          content={`${project.title} — ${data.name}`}
        />
        <meta
          property="og:description"
          content={project.description?.slice(0, 155)}
        />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "${project.title}",
            "description": "${project.description?.replace(/"/g, '\\"')}",
            "url": "${projectUrl}",
            "author": {
              "@type": "Person",
              "name": "${data.name}",
              "url": "https://daffafauzi.com"
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
        <div className="fixed inset-0">
          <div className="absolute -inset-[10px] opacity-20">
            <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
            <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-indigo-400 text-sm md:text-base font-semibold shadow-md"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'en' ? 'Back' : 'Kembali'}</span>
              </button>
              <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-indigo-200">
                <span>{language === 'en' ? 'Projects' : 'Proyek'}</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                <span className="text-white font-semibold truncate">{project.title}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6 md:space-y-10 animate-slideInLeft">
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                    {project.title}
                  </h1>
                  <div className="relative h-1 w-16 md:w-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-base md:text-lg text-gray-100 leading-relaxed font-normal text-justify">
                    {project.description}
                  </p>
                </div>

                <ProjectStats project={project} language={language} />

                {project.features && project.features.length > 0 && (
                  <div className="space-y-3 p-5 rounded-xl bg-white/[0.04] border border-white/15 shadow-md">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-300">
                      {language === 'en' ? 'Key Features' : 'Fitur Utama Proyek'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-200 font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {project.linkType === 'live' && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/25"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{language === 'en' ? 'Visit Website' : 'Kunjungi Website'}</span>
                    </a>
                  )}

                  {project.linkType === 'github' && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/25"
                    >
                      <Github className="w-5 h-5" />
                      <span>{language === 'en' ? 'View on GitHub' : 'Buka di GitHub'}</span>
                    </a>
                  )}

                  {project.github && project.linkType !== 'github' && (
                    <button
                      onClick={() => handleGithubClick(project.github, language)}
                      className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/15 transition-all duration-300 shadow-sm"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </button>
                  )}

                  {!project.link && (
                    <div className="px-5 py-3 rounded-xl bg-zinc-800 border border-zinc-600 text-zinc-200 text-sm font-semibold">
                      {language === 'en' ? 'Internal Project (Private)' : 'Proyek Internal (Privat)'}
                    </div>
                  )}
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {language === 'en' ? 'Technologies Used' : 'Teknologi yang Digunakan'}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech?.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-slideInRight">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a1a]">
                    <img
                      src={project.image || "/placeholder-project.png"}
                      alt={project.title}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/800x400?text=Project+Image"; }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
