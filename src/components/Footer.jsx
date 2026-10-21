import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040112] border-t border-white/15">
      <div className="max-w-screen-xl mx-auto px-[5%] sm:px-[5%] lg:px-[10%] py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-300 font-normal">
            &copy; {currentYear}{" "}
            <a href="#Home" className="text-white hover:text-indigo-300 font-semibold transition-colors">
              Daffa Fauzi
            </a>
            {". "}
            {language === 'en' ? "All Rights Reserved." : "Seluruh Hak Cipta Dilindungi."}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-300 font-medium tracking-wide">
            <span>{language === 'en' ? "Built with" : "Dibuat dengan"}</span>
            <span className="text-pink-400 mx-0.5 animate-pulse text-sm">♥</span>
            <span>{language === 'en' ? "using React + Vite" : "menggunakan React + Vite"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
