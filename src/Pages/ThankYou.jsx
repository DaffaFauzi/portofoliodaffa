import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const ThankYouPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-[#6366f1]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          {language === 'en' ? 'Thank You!' : 'Terima Kasih!'}
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          {language === 'en' 
            ? "Your message has been received. I'll get back to you as soon as possible." 
            : "Pesan Anda telah kami terima. Saya akan segera menghubungi Anda kembali."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
        >
          {language === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;