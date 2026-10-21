import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  const isImage = typeof TechStackIcon === "string";
  const Icon = typeof TechStackIcon === "function" ? TechStackIcon : null;
  const imageSrc = isImage
    ? (TechStackIcon.startsWith("/") ? TechStackIcon : `/${TechStackIcon}`)
    : "";

  return (
    <div className="group p-6 rounded-2xl bg-[#0D0D20] border border-white/15 hover:border-indigo-400/50 hover:bg-[#12122b] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-indigo-500/10">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300" />
        {isImage ? (
          <img 
            src={imageSrc} 
            alt={`${Language} icon`} 
            className="relative h-16 w-16 md:h-20 md:w-20 object-contain transform transition-transform duration-300 drop-shadow-md"
            loading="lazy"
          />
        ) : Icon ? (
          <Icon className="relative h-16 w-16 md:h-20 md:w-20 text-indigo-200 transform transition-transform duration-300" />
        ) : null}
      </div>
      <span className="text-white font-bold text-sm md:text-base tracking-wide group-hover:text-indigo-200 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;
