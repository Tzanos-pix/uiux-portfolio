import React, { useEffect, useState } from "react";
import { ArrowLeft, Briefcase, GraduationCap, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "../components/ui/Logo";

const PASTEL_COLORS = [
  '#93c5fd', // blue
  '#6ee7b7', // emerald
  '#c4b5fd', // violet
  '#f9a8d4', // pink
  '#fcd34d', // amber
  '#fca5a5', // red
  '#67e8f9', // cyan
  '#fdba74', // orange
  '#d8b4fe', // purple
  '#5eead4', // teal
];

const HoverTag: React.FC<{ text: string }> = ({ text }) => {
  const [rainColor, setRainColor] = useState<{ text: string, border: string } | null>(null);
  const [hoverColor, setHoverColor] = useState<{ text: string, border: string } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let offTimeoutId: NodeJS.Timeout;

    const triggerRainEffect = () => {
      const randomHex = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
      setRainColor({
        text: randomHex,
        border: `${randomHex}80`,
      });

      const onDuration = 1500 + Math.random() * 2000; // Glow for 1500-3500ms
      offTimeoutId = setTimeout(() => {
        setRainColor(null);
      }, onDuration);

      const nextDelay = 3000 + Math.random() * 7000; // Wait 3s-10s before next glow
      timeoutId = setTimeout(triggerRainEffect, nextDelay);
    };

    // Stagger the initial effect
    timeoutId = setTimeout(triggerRainEffect, Math.random() * 6000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(offTimeoutId);
    };
  }, []);

  const handleHoverStart = () => {
    setIsHovered(true);
    const randomHex = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
    setHoverColor({
      text: randomHex,
      border: `${randomHex}80`,
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const activeColor = isHovered ? hoverColor : rainColor;

  return (
    <motion.span
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={{
        color: activeColor ? activeColor.text : '#d4d4d8',       // text-zinc-300
        borderColor: activeColor ? activeColor.border : '#27272a', // border-zinc-800
      }}
      initial={{
        color: '#d4d4d8',
        borderColor: '#27272a',
        backgroundColor: '#18181b'
      }}
      transition={{ duration: 1.2 }}
      className="inline-block px-4 py-2 border rounded-full text-sm font-medium cursor-default bg-zinc-900"
    >
      {text}
    </motion.span>
  );
};

const LinkedinFilled = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function About({ navigateTo }: { navigateTo: (path: string) => void }) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white font-sans selection:bg-[#CCFF00]/20 selection:text-[#CCFF00] font-display tracking-tight overflow-x-hidden">
      {/* Navigation (Sticky) */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all font-medium text-sm cursor-pointer px-4 py-2 rounded-xl group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          
          <div 
            onClick={() => navigateTo('home')} 
            className="cursor-pointer group transition-transform hover:scale-105"
          >
            <Logo className="w-11 h-11 text-white" />
          </div>
          
          <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest hidden md:block">
            About Me
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column (Sticky Sidebar) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 aspect-square"
              >
                <img fetchPriority="high" loading="eager" decoding="async" 
                  src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/home%20page/PalioudakisTzanis_image.jpg" 
                  alt="Tzanis Palioudakis" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Bio Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tzanis <br className="hidden lg:block"/>Palioudakis</h1>
                <p className="text-xl text-[#c4b5fd] font-medium">Senior UI/UX Designer</p>
                
                <div className="pt-4 flex flex-col gap-3">
                  <a href="mailto:t.palioudakis@outlook.com" className="inline-flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-900 px-5 py-3 rounded-2xl transition-colors w-fit">
                    <Mail size={16} />
                    t.palioudakis@outlook.com
                  </a>
                  <a href="https://www.linkedin.com/in/tzanis-palioudakis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-[#0A66C2] bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-900 px-5 py-3 rounded-2xl transition-colors w-fit">
                    <LinkedinFilled size={16} />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-8 space-y-20 pt-4 lg:pt-0">
            
            {/* About text */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-800"></span>
                About
              </h2>
              <p className="text-white">
                As a Senior UI/UX & Digital Designer with over 15 years of experience, I specialize in crafting intuitive, user-centered digital products that bridge business goals with seamless user experiences. Currently at Plaisio, my work focuses on developing scalable design systems, optimizing e-commerce user journeys, and delivering impactful digital interfaces for diverse brand ecosystems.
              </p>
              <p>
                I am deeply passionate about the future of design operations. I actively integrate AI-driven workflows, generative design tools, and AI-assisted development (vibe coding) into my daily process. This allows me to accelerate ideation, automate repetitive tasks, and focus on high-level strategic problem-solving and rapid prototyping.
              </p>
              <p>
                Proficient in Figma, the Adobe Creative Suite, and emerging AI technologies, I collaborate closely with cross-functional teams (product, marketing, and engineering) to transform complex requirements into clean, engaging, and highly functional digital solutions. My goal is to continuously push the boundaries of design efficiency while delivering interfaces that drive engagement and maximize customer satisfaction.
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-800"></span>
                Experience
              </h2>

              <div className="space-y-12">
                {[
                  {
                    company: "ΠΛΑΙΣΙΟ A.E.B.E. | Athens, Greece",
                    role: "Senior UI/UX & Digital Designer",
                    period: "2021 — Present",
                    description: "Led the strategic development of daily visual content, creating engaging newsletters, dynamic digital banners, and high-conversion landing pages that directly supported marketing and e-commerce objectives. Collaborated closely with marketing and development teams. Applied UI/UX best practices to design and refine user interfaces for promotional campaigns."
                  },
                  {
                    company: "Vassilias S.A. | Athens, Greece",
                    role: "Art Director",
                    period: "2016 — 2021",
                    description: "Directed and executed over 300 diverse graphic design projects, including brand identities, brochures, advertisements, and infographics. Developed creative concepts for product photography, packaging, and digital content. Responsible for the entire design lifecycle."
                  },
                  {
                    company: "RAY Graphic design studio | Athens, Greece",
                    role: "Graphic Designer, Pre-press Designer",
                    period: "2012 — 2016",
                    description: "Visualized and created a wide range of graphics including illustrations, logos, layouts, and photos for both print and digital media. Specialized in producing print-ready materials and magazines, managing the pre-press process to ensure quality."
                  },
                  {
                    company: "Freelance",
                    role: "Graphic Designer",
                    period: "2009 — Present",
                    description: "Planned and constructed complete brand identities for a diverse range of businesses and individual clients."
                  }
                ].map((job, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-8 relative">
                    <div className="md:w-1/4 shrink-0 pt-1">
                      <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">{job.period}</span>
                    </div>
                    <div className="md:w-3/4 space-y-2">
                      <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                      <div className="text-lg text-zinc-400 font-medium flex items-center gap-2">
                        <Briefcase size={16} /> {job.company}
                      </div>
                      <p className="text-zinc-500 leading-relaxed pt-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-800"></span>
                Education
              </h2>

              <div className="space-y-12">
                {[
                  {
                    degree: "Analytics and User Experience",
                    school: "Nielsen / Norman Group",
                    passRate: "97.0%",
                    pdfLink: "https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/home%20page/PALIOUDAKIS-UX-Conference-Attendance-Confirmation_Analytics%20and%20User%20Experience.jpg"
                  },
                  {
                    degree: "UI/UX Basic Training",
                    school: "Nielsen / Norman Group",
                    passRate: "97.0%",
                    pdfLink: "https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/home%20page/PALIOUDAKIS-UX-Conference-Attendance-Confirmation_UX%20Basic%20Training.jpg"
                  },
                  {
                    degree: "Diploma in Graphic Design of Applied Arts & Digital Media",
                    school: "Public Institute of Vocational Training"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-8 relative">
                    <div className="md:w-1/4 shrink-0 pt-1">
                      <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Degree</span>
                    </div>
                    <div className="md:w-3/4 space-y-2">
                      <h3 className="text-2xl font-bold text-white flex flex-wrap items-center gap-3">
                        {edu.degree}
                        {edu.passRate && <span className="text-xs px-2 py-1 bg-[#CCFF00]/10 text-[#CCFF00] rounded-full border border-[#CCFF00]/20 font-bold whitespace-nowrap">{edu.passRate} pass</span>}
                      </h3>
                      <div className="text-lg text-zinc-400 font-medium flex items-center gap-2">
                        <GraduationCap size={16} /> {edu.school}
                      </div>
                      {edu.pdfLink && (
                        <div className="pt-2">
                          <button 
                            onClick={() => setPdfUrl(edu.pdfLink)}
                            className="text-sm text-zinc-500 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                          >
                            View Certificate
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Core Competencies */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-800"></span>
                Skills & Technologies
              </h2>

              <div className="space-y-8">
                <div>
                   <h3 className="text-white font-bold mb-4">Design & UI/UX</h3>
                   <div className="flex flex-wrap gap-3">
                    {[
                      "Figma", "Adobe XD", "Photoshop", "Illustrator", "InDesign",
                      "UI Design", "Interaction Design", "Wireframing", "Prototyping", "User-Centered Design"
                    ].map((skill, idx) => (
                      <HoverTag key={idx} text={skill} />
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-white font-bold mb-4">AI Tools & Workflows</h3>
                   <div className="flex flex-wrap gap-3">
                    {[
                      "Midjourney", "Adobe Firefly", "ChatGPT", "Claude", "Gemini", "DALL-E", 
                      "Prompt Engineering", "AI Ideation", "Asset Creation", "Workflow Optimization"
                    ].map((skill, idx) => (
                      <HoverTag key={idx} text={skill} />
                    ))}
                  </div>
                </div>
                
                <div>
                   <h3 className="text-white font-bold mb-4">Web & Professional</h3>
                   <div className="flex flex-wrap gap-3">
                    {[
                      "Soft Skills", "HTML", "CSS", "Analytical Skills", "Problem Solving", "Project Management", "Cross-functional Collaboration",
                      "Greek (Native)", "English (Fluent)", "German (Fluent)"
                    ].map((skill, idx) => (
                      <HoverTag key={idx} text={skill} />
                    ))}
                  </div>
                </div>
              </div>

            </motion.section>

          </div>
        </div>
      </main>

      {/* PDF Modal */}
      {pdfUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setPdfUrl(null)}>
          <div className="relative w-full max-w-4xl h-[80vh] md:h-[90vh] bg-zinc-900 border border-zinc-700/50 rounded-2xl overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-950/80">
              <h3 className="text-white font-bold tracking-widest text-xs uppercase text-zinc-400">View Document</h3>
              <button onClick={() => setPdfUrl(null)} className="text-zinc-500 hover:text-white transition-colors bg-zinc-800/80 hover:bg-zinc-700 p-2 rounded-lg cursor-pointer text-xs font-bold px-4">
                CLOSE
              </button>
            </div>
            <div className="flex-1 w-full bg-zinc-950 p-2 md:p-4 flex items-center justify-center">
              <img fetchPriority="high" loading="eager" decoding="async" src={pdfUrl} className="max-w-full max-h-full object-contain rounded-xl" alt="Certificate" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
