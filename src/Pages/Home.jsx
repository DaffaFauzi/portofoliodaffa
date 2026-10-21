import React, { useState, useEffect, useCallback, memo, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLanguage } from "../context/LanguageContext"
import { profileData } from "../constants/profileData"
import { motion } from "framer-motion"

const StatusBadge = memo(({ language }) => (
  <div
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6366f1]/25 bg-[#6366f1]/[0.06]"
    data-aos="fade-down"
    data-aos-delay="100"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
    <span className="text-[#a5b4fc] text-xs font-medium tracking-wide">
      {language === 'en' ? 'Ready to Innovate' : 'Siap Berinovasi'}
    </span>
  </div>
));

const MainTitle = memo(({ name }) => (
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
    <span className="text-gray-100">{name.split(' ')[0]}</span>
    <br />
    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
      {name.split(' ').slice(1).join(' ')}
    </span>
  </h1>
));

const TechStack = memo(({ tech }) => (
  <span className="px-3.5 py-1.5 hidden sm:inline-block rounded-full bg-white/[0.08] border border-white/15 text-xs text-indigo-200 font-medium tracking-wide shadow-sm">
    {tech}
  </span>
));

const CTAButton = memo(({ href, text, icon: Icon, variant = 'ghost', isDownload = false }) => {
  const inner = (
    <button
      className={
        variant === 'solid'
          ? "flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-semibold transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
          : variant === 'text'
          ? "flex items-center gap-2 px-4 py-2.5 rounded-lg text-indigo-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:bg-white/[0.05] group"
          : "flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-200 text-sm font-medium transition-all duration-200 hover:border-indigo-400 hover:text-white hover:bg-white/[0.08] active:scale-[0.98]"
      }
    >
      <span>{text}</span>
      <Icon className={`w-4 h-4 ${variant === 'text' ? 'group-hover:translate-y-0.5 transition-transform' : ''}`} />
    </button>
  );

  return (
    <a href={href} download={isDownload || undefined}>
      {inner}
    </a>
  );
});

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2.5 rounded-lg text-gray-300 hover:text-white border border-white/15 hover:border-indigo-400 bg-white/[0.05] hover:bg-white/10 transition-all duration-200 shadow-sm"
  >
    <Icon className="w-5 h-5" />
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;

const Home = () => {
  const { language } = useLanguage();
  const data = profileData[language];
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const WORDS = useMemo(() => [
    data.role,
    language === 'en' ? "Tech Enthusiast" : "Penggemar Teknologi"
  ], [data.role, language]);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex, WORDS]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>{data.name} — {data.role}</title>
        <meta name="description" content={data.shortDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daffafauzi.com" />
        <meta property="og:title" content={`${data.name} — ${data.role}`} />
        <meta property="og:description" content={data.shortDescription} />
        <meta property="og:url" content="https://daffafauzi.com" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${data.name}",
            "jobTitle": "${data.role}",
            "url": "https://daffafauzi.com",
            "sameAs": [
              "${data.contact.github}",
              "${data.contact.linkedin}"
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className="relative z-10 container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">

            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-7 text-left order-1 lg:order-1">

              <StatusBadge language={language} />

              <div data-aos="fade-up" data-aos-delay="100">
                <MainTitle name={data.name} />
              </div>

              {/* Typing Effect */}
              <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="150">
                <span className="text-xl md:text-2xl text-gray-300 font-light">
                  {text}
                </span>
                <span className="w-[2px] h-6 bg-[#6366f1] ml-1 animate-blink" />
              </div>

              {/* Tagline */}
              <p
                className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed font-normal"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                {data.tagline}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="300">
                {(data.skills?.frontend || data.skills?.hardSkills || []).slice(0, 5).map((tech, i) => (
                  <TechStack key={i} tech={tech} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3" data-aos="fade-up" data-aos-delay="350">
                <CTAButton
                  href="#Portofolio"
                  text={language === 'en' ? "Projects" : "Proyek"}
                  icon={ExternalLink}
                  variant="solid"
                />
                <CTAButton
                  href="#Contact"
                  text={language === 'en' ? "Contact" : "Kontak"}
                  icon={Mail}
                  variant="ghost"
                />
                <CTAButton
                  href="/cv.pdf"
                  text={language === 'en' ? "Download CV" : "Unduh CV"}
                  icon={FileText}
                  variant="text"
                  isDownload
                />
              </div>

              {/* Social Links */}
              <div className="hidden sm:flex gap-3" data-aos="fade-up" data-aos-delay="400">
                <SocialLink icon={Github} link={data.contact.github} label="GitHub Profile" />
                <SocialLink icon={Linkedin} link={data.contact.linkedin} label="LinkedIn Profile" />
              </div>
            </div>

            {/* Right Column — GIF */}
            <div className="w-full lg:w-1/2 h-[260px] sm:h-[400px] lg:h-[600px] xl:h-[700px] relative flex items-center justify-center order-2 lg:order-2 mt-5 sm:mt-0">
              <div className="relative w-full">
                {/* Single ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/[0.08] to-[#a855f7]/[0.06] rounded-3xl blur-3xl" />

                <motion.div
                  className="relative lg:left-10 z-10 w-full"
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="Animation1.gif"
                    alt="Developer Animation"
                    className="w-full h-full object-contain scale-[85%] sm:scale-[80%]"
                  />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
