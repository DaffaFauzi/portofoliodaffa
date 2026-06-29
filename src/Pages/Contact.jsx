import React, { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { AOS.init({ once: true }); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: language === 'en' ? 'Sending Message...' : 'Mengirim Pesan...',
      html: language === 'en' ? 'Please wait while we send your message' : 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    try {
      const formSubmitUrl = 'https://formsubmit.co/daffafauzi303@gmail.com';
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', language === 'en' ? 'New Message from Portfolio Website' : 'Pesan Baru dari Website Portfolio');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire({
        title: language === 'en' ? 'Success!' : 'Berhasil!',
        text: language === 'en' ? 'Your message has been sent successfully!' : 'Pesan Anda telah berhasil terkirim!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: language === 'en' ? 'Failed!' : 'Gagal!',
        text: language === 'en' ? 'Something went wrong. Please try again later.' : 'Terjadi kesalahan. Silakan coba lagi nanti.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `
    w-full p-4 pl-12 rounded-xl
    bg-[#0A0A1A] border border-white/[0.07]
    placeholder-gray-700 text-gray-200 text-sm
    focus:outline-none focus:border-[#6366f1]/40 focus:bg-[#0D0D20]
    transition-all duration-200
    disabled:opacity-50
  `;

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] bg-[#060614]">

      {/* Section Header */}
      <div className="text-center lg:mt-[5%] mt-10 mb-8 sm:px-0 px-[5%]">
        <p className="text-[#6366f1] text-xs uppercase tracking-widest mb-3 font-medium">
          {language === 'en' ? "Get In Touch" : "Hubungi Saya"}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-3xl md:text-5xl font-bold text-white"
        >
          {language === 'en' ? 'Contact Me' : 'Hubungi Saya'}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-gray-600 max-w-2xl mx-auto text-sm mt-3"
        >
          {language === 'en'
            ? "Got a question? Send me a message, and I'll get back to you as soon as possible."
            : "Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya."}
        </p>
      </div>

      <div
        className="h-auto py-8 pb-16 flex items-start justify-center"
        id="Contact"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[38%_62%] gap-8">

          {/* Form Card */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="bg-[#0D0D20] rounded-2xl border border-white/[0.06] p-6 sm:p-8"
          >
            <div className="flex justify-between items-start mb-7">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {language === 'en' ? 'Get in Touch' : 'Hubungi'}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? "Something on your mind? Drop me a message."
                    : "Ada yang ingin didiskusikan? Kirim pesan."}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-4 w-4 h-4 text-gray-700 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'en' ? "Your Name" : "Nama Anda"}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                  required
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-4 h-4 text-gray-700 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder={language === 'en' ? "Your Email" : "Email Anda"}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                  required
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-700 group-focus-within:text-indigo-400 transition-colors" />
                <textarea
                  name="message"
                  placeholder={language === 'en' ? "Your Message" : "Pesan Anda"}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputClass} resize-none h-36`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                {isSubmitting
                  ? (language === 'en' ? 'Sending...' : 'Mengirim...')
                  : (language === 'en' ? 'Send Message' : 'Kirim Pesan')}
              </button>
            </form>

            <div className="mt-7 pt-6 border-t border-white/[0.05] flex justify-center space-x-4">
              <SocialLinks />
            </div>
          </div>

          {/* Comments Card */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="bg-[#0D0D20] rounded-2xl border border-white/[0.06] p-3 sm:p-6"
          >
            <Komentar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
