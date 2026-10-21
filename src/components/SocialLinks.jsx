import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../constants/profileData";

const SocialLinks = () => {
  const { language } = useLanguage();
  const data = profileData[language];

  const phoneDigits = (data?.contact?.phone || "").replace(/\D/g, "");
  const phoneForIntl = phoneDigits.startsWith("0")
    ? `62${phoneDigits.slice(1)}`
    : phoneDigits.startsWith("62")
      ? phoneDigits
      : phoneDigits;
  const whatsappUrl = phoneForIntl ? `https://wa.me/${phoneForIntl}` : "";
  const telUrl = phoneForIntl ? `tel:+${phoneForIntl}` : "";

  const socialLinks = [
    {
      name: "LinkedIn",
      displayName: language === 'en' ? "Let's Connect" : "Mari Terhubung",
      subText: language === 'en' ? "Professional Profile" : "Profil Profesional",
      icon: Linkedin,
      url: data.contact.linkedin,
      color: "#0A66C2",
      gradient: "from-[#0A66C2] to-[#0077B5]",
      isPrimary: true,
    },
    {
      name: "GitHub",
      displayName: "GitHub",
      subText: "@daffafauzi",
      icon: Github,
      url: data.contact.github,
      color: "#ffffff",
      gradient: "from-[#333] to-[#24292e]",
    },
    {
      name: "Email",
      displayName: language === 'en' ? "Email Me" : "Kirim Email",
      subText: data.contact.email,
      icon: Mail,
      url: `mailto:${data.contact.email}`,
      color: "#ffffff",
      gradient: "from-[#6366f1] to-[#a855f7]",
    },
    {
      name: "WhatsApp",
      displayName: language === 'en' ? "WhatsApp Me" : "Hubungi WhatsApp",
      subText: data.contact.phone,
      icon: Phone,
      url: whatsappUrl || telUrl,
      color: "#ffffff",
      gradient: "from-[#22c55e] to-[#16a34a]",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <div className="w-full space-y-3.5">
      {socialLinks.map((link, index) => {
        const isExternal = /^https?:\/\//.test(link.url);
        return (
          <a
            key={link.name}
            href={link.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group relative flex items-center justify-between p-4 rounded-xl bg-white/[0.06] border border-white/15 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.1] hover:border-indigo-400/50 shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <div className="flex items-center space-x-3.5">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${link.gradient} opacity-90 group-hover:opacity-100 transition-opacity shadow-sm`}>
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-indigo-200 transition-colors">
                  {link.displayName}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm font-normal">
                  {link.subText}
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
