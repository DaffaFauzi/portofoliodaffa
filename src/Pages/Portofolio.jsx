import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { Code, Award, Boxes, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../constants/profileData";

const ToggleButton = ({ onClick, isShowingMore, language }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-2.5 text-white hover:text-indigo-200 text-sm font-semibold transition-all duration-200 border border-white/20 hover:border-indigo-400 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] shadow-md"
  >
    <span>
      {isShowingMore
        ? (language === 'en' ? "See Less" : "Lihat Lebih Sedikit")
        : (language === 'en' ? "See More" : "Lihat Lebih Banyak")}
    </span>
    {isShowingMore
      ? <ChevronUp className="w-4 h-4" />
      : <ChevronDown className="w-4 h-4" />}
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "typescript-color.svg", language: "TypeScript" },
  { icon: "vuejs-color.svg", language: "Vue.js" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "laravel-color.svg", language: "Laravel" },
  { icon: "php-color.svg", language: "PHP" },
  { icon: "expressjs-color.svg", language: "Express.js" },
  { icon: "golang-color.svg", language: "Golang" },
  { icon: "mysql-color.svg", language: "MySQL" },
  { icon: "restapi-color.svg", language: "REST API" },
  { icon: "git-color.svg", language: "Git" },
  { icon: "figma-color.svg", language: "Figma" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const { language } = useLanguage();
  const data = profileData[language];
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState(data.projects);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => { setProjects(data.projects); }, [language, data.projects]);
  useEffect(() => { AOS.init({ once: true }); }, []);

  const handleChange = (event, newValue) => { setValue(newValue); };
  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') setShowAllProjects(prev => !prev);
    else setShowAllCertificates(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">

      {/* Section Header */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="700">
        <p className="text-[#6366f1] text-xs uppercase tracking-widest mb-3 font-medium">
          {language === 'en' ? "My Work" : "Karya Saya"}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          {language === 'en' ? "Portfolio Showcase" : "Showcase Portofolio"}
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base mt-3 font-normal">
          {language === 'en'
            ? "Explore my journey through projects, certifications, and technical expertise."
            : "Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis."}
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* Tab Bar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "14px",
            overflow: "hidden",
            background: "rgba(13, 13, 32, 0.95)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "60px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
                fontWeight: "600",
                textTransform: "none",
                letterSpacing: "0.3px",
                transition: "all 0.3s ease",
                color: "rgba(255, 255, 255, 0.8)",
                zIndex: 1,
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                },
                "&.Mui-selected": {
                  color: "#ffffff",
                  fontWeight: "700",
                },
              },
              "& .MuiTabs-indicator": {
                height: "2px",
                borderRadius: "1px",
                background: "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-1 w-4 h-4" />}
              label={language === 'en' ? "Projects" : "Proyek"}
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-1 w-4 h-4" />}
              label={language === 'en' ? "Certificates" : "Sertifikat"}
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-1 w-4 h-4" />}
              label={language === 'en' ? "Tech Stack" : "Teknologi"}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <CardProject
                    key={project.id || index}
                    project={project}
                    Img={project.image}
                    Title={project.title}
                    Description={project.shortDescription || project.description}
                    Link={project.link || "#"}
                    id={project.id}
                    onOpenDetail={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>
              {projects.length > initialItems && (
                <div className="mt-8 flex justify-center">
                  <ToggleButton
                    onClick={() => toggleShowMore('projects')}
                    isShowingMore={showAllProjects}
                    language={language}
                  />
                </div>
              )}
            </div>
          </TabPanel>

          {/* Certificates Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto">
              {certificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {displayedCertificates.map((cert, i) => (
                    <Certificate key={i} Img={cert.Img} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-300 text-sm font-medium">
                  {language === 'en' ? "Certificates will be added soon." : "Sertifikat akan segera ditambahkan."}
                </div>
              )}
              {certificates.length > initialItems && (
                <div className="mt-8 flex justify-center">
                  <ToggleButton
                    onClick={() => toggleShowMore('certificates')}
                    isShowingMore={showAllCertificates}
                    language={language}
                  />
                </div>
              )}
            </div>
          </TabPanel>

          {/* Tech Stack Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStacks.map((stack, i) => (
                  <TechStackIcon key={i} TechStackIcon={stack.icon} Language={stack.language} />
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>

      {/* Project Detail Popup Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
