import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060614] border-t border-white/[0.05]">
      <div className="max-w-screen-xl mx-auto px-[5%] sm:px-[5%] lg:px-[10%] py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-700">
            © {currentYear}{" "}
            <a href="#Home" className="text-gray-600 hover:text-gray-300 transition-colors">
              Daffa Fauzi
            </a>
            {". "}All Rights Reserved.
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-800 tracking-wide">
            <span>Built with</span>
            <span className="text-[#6366f1] mx-0.5">♥</span>
            <span>using React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
