import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent animate-pulse tracking-tight">
            404
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full mt-2" />
        </div>

        {/* Message */}
        <div className="mb-8 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'en' ? "Oops! Page Not Found" : "Oops! Halaman Tidak Ditemukan"}
          </h2>
          <p className="text-base text-gray-200 leading-relaxed font-normal">
            {language === 'en'
              ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
              : "Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white font-medium hover:bg-white/15 hover:border-indigo-400 transition-all duration-200 w-full sm:w-auto"
          >
            <ArrowLeft size={18} />
            <span>{language === 'en' ? "Go Back" : "Kembali"}</span>
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all duration-200 w-full sm:w-auto"
          >
            <Home size={18} />
            <span>{language === 'en' ? "Home" : "Beranda"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
