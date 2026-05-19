import { useEffect } from "react";
import {
  Award,
  TrendingUp,
  Monitor,
  Package,
  ArrowRight,
  Mail,
  Activity,
  Target,
  User,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Section from "../components/layout/Section";
import { Logo } from "../components/ui/Logo";

export default function Home({
  navigateTo,
  returnFrom,
}: {
  navigateTo: (path: string) => void;
  returnFrom?: string | null;
}) {
  useEffect(() => {
    if (returnFrom) {
      setTimeout(() => {
        const el = document.getElementById(`card-${returnFrom}`);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'center' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [returnFrom]);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-app-bg text-app-text font-sans selection:bg-app-primary/10 selection:text-app-primary pb-12 relative overflow-x-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-[100vh]">
        <motion.div 
          style={{ 
            opacity: bgOpacity, 
            scale: bgScale, 
            willChange: "transform, opacity",
            transformOrigin: "center center"
          }}
          className="absolute inset-0"
        >
          <img fetchPriority="high" loading="eager" decoding="async" 
            src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/PalioudakisTzanis_gray.jpg" 
            alt="Portrait background" 
            className="w-full h-full object-cover grayscale brightness-[1.3] contrast-[1.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-app-bg/10 to-app-bg"></div>
        </motion.div>
      </div>
      <div className="noise-overlay fixed inset-0 z-10" style={{ opacity: 0.04 }}></div>
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <Logo className="w-11 h-11 text-white group-hover:scale-105 transition-transform" />
            </button>
          </motion.div>

          <div className="flex items-center gap-4 md:gap-10">
            <div className="flex space-x-4 md:space-x-10 text-xs md:text-sm font-medium text-zinc-400">
              <button
                onClick={() => scrollToSection("work")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Work
              </button>
              <button
                onClick={() => navigateTo("about")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section
        id="hero"
        spacing="none"
        className="pt-[35vh] md:pt-[45vh] lg:pt-[50vh] pb-8 md:pb-32 relative z-10"
        containerClassName="text-center flex flex-col items-center"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 leading-[0.95] max-w-5xl text-app-text font-display"
        >
          {["Designing", "digital", "experiences", "that"].map((word, i) => (
            <span key={i} className="inline-block whitespace-pre">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
              {" "}
            </span>
          ))}
          <span className="inline-block whitespace-pre text-zinc-400">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
              }}
              className="inline-block"
            >
              deliver results.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.02,
                delayChildren: 0.8,
              },
            },
          }}
          className="text-zinc-500 max-w-2xl text-base sm:text-lg md:text-xl mb-12 leading-relaxed font-medium"
        >
          {"I blend user-centered design with business strategy to create intuitive interfaces and performance-driven marketing campaigns.".split(" ").map((word, i, arr) => (
            <span key={i} className="inline-block whitespace-pre">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] } },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
              {i !== arr.length - 1 && " "}
            </span>
          ))}
        </motion.p>

        <motion.div
          id="card-about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigateTo("about")}
          className="relative inline-flex mb-12 group cursor-pointer"
        >
          {/* Animated Iridescent Gradient Border Wrapper */}
          <div className="absolute inset-0 rounded-full blur-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-70 group-hover:opacity-100 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]"></div>
          
          {/* Main Button Content */}
          <div className="relative inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-transparent rounded-full transition-colors m-[1px]">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800">
              <img loading="lazy" decoding="async" 
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/home%20page/PalioudakisTzanis_image.jpg" 
                alt="Tzanis Palioudakis" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-zinc-400 font-medium text-sm">
              About — <span className="text-white tracking-widest font-black">ΤΖΑΝΗΣ ΠΑΛΙΟΥΔΑΚΗΣ</span>
            </span>
          </div>
        </motion.div>

      </Section>

      {/* BENTO GRID WORK SECTION */}
      <div className="relative mt-8 md:mt-20">
        <Section id="work" spacing="none" className="relative z-10 pt-12 md:pt-24 pb-12 md:pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-auto md:auto-rows-[340px]"
        >
          {/* BENTO BOX 1: Plaisio */}
          <div
            id="card-plaisio"
            onClick={() => navigateTo("plaisio")}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                borderColor: "rgba(255, 255, 255, 0.4)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group h-[450px] md:h-full bg-[#c4b5fd] rounded-[2rem] p-6 md:p-8 border border-zinc-800/10 overflow-hidden relative flex flex-col cursor-pointer"
            >
              <div className="z-10 text-left">
                <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-sm font-bold text-[10px] rounded-lg uppercase tracking-widest mb-4 inline-flex items-center gap-1 border border-zinc-900/10">
                  <Monitor size={12} className="text-zinc-300" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
                    E-COMMERCE UI/UX
                  </span>
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display tracking-tight text-zinc-950">
                  Plaisio Black Friday
                </h3>
                <p className="text-zinc-900/80 font-semibold text-base md:text-lg leading-relaxed mb-4">
                  Modular visual system & landing page.
                </p>
                <div className="flex gap-3 mb-6">
                  <div className="bg-zinc-950 text-white px-3 py-1.5 rounded-lg border border-zinc-800/50 flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-zinc-400" />
                    <span className="text-xs font-bold">+37% CTR</span>
                  </div>
                  <div className="bg-zinc-950 text-white px-3 py-1.5 rounded-lg border border-zinc-800/50 flex items-center gap-1.5">
                    <Activity size={12} className="text-zinc-400" />
                    <span className="text-xs font-bold">4.2x ROAS</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow w-full bg-black rounded-2xl flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                  poster="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/landing_page_desktop_mockup.jpg"
                >
                  <source src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/black_friday_teaser.webm" type="video/webm" />
                </video>
              </div>
            </motion.div>
          </div>

          {/* BENTO BOX 2: NN/g Progress */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#000000",
              backgroundColor: "#ffffff"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-1 min-h-[280px] md:min-h-0 md:h-full bg-zinc-50 text-zinc-900 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-black shadow-sm"
          >
            <img loading="lazy" decoding="async" 
              src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/home%20page/NNG.svg" 
              alt="NN/g Logo" 
              className="h-8 mb-4 auto relative z-10 transition-opacity group-hover:opacity-100 opacity-80"
            />
            <h3 className="text-sm font-bold relative z-10 font-display tracking-tight leading-tight text-zinc-500">
              NN/g UX Professional
            </h3>
            
            <div className="my-3 relative z-10 flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                 97%
               </span>
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">Avg Score</p>
            </div>

            <div className="mt-4 flex flex-col gap-2 w-full max-w-[180px] opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] font-bold px-3 py-2 bg-zinc-100 border border-zinc-200 rounded uppercase tracking-widest text-zinc-600 shadow-none flex items-center justify-center text-center leading-tight">
                Analytics and User Experience
              </span>
              <span className="text-[9px] font-bold px-3 py-2 bg-zinc-100 border border-zinc-200 rounded uppercase tracking-widest text-zinc-600 shadow-none flex items-center justify-center text-center leading-tight">
                UX Basic Training
              </span>
            </div>
          </motion.div>

          {/* BENTO BOX 3: BetEase */}
          <motion.div
            id="card-betease"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              borderColor: "rgba(255, 255, 255, 0.4)" 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => navigateTo("betease")}
            className="group col-span-1 lg:col-span-1 row-span-1 md:row-span-2 h-[340px] md:h-full bg-[#6ee7b7] rounded-[2rem] p-6 md:p-8 border border-zinc-800/10 relative overflow-hidden flex flex-col cursor-pointer"
          >
            <span className="px-3 py-1 bg-zinc-950 font-bold text-[10px] rounded-lg uppercase tracking-widest mb-4 self-start border border-zinc-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
                UI/UX CASE STUDY
              </span>
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display tracking-tight text-zinc-950">
              BetEase
            </h3>
            <p className="text-zinc-900/80 font-semibold mb-6 text-base md:text-lg leading-relaxed">
              Frictionless Betting App with high-fidelity UI & smart UX.
            </p>
            <div className="flex-grow bg-[#121212] rounded-2xl w-full border border-zinc-800 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out overflow-hidden relative">
              {/* 
                BACKGROUND VIDEO 
              */}
              <video 
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/BetEase/betease-preview.webm"
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              
              {/* Fallback pattern in case video is slow to load or missing */}
              <div className="absolute inset-0 bg-[#121212] -z-10"></div>
            </div>
          </motion.div>

          {/* BENTO BOX 4: Stats */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              borderColor: "rgba(255, 255, 255, 0.4)" 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-1 h-[180px] md:h-full bg-[#fcd34d] text-zinc-950 rounded-[2rem] p-6 md:p-8 border border-zinc-800/10 flex flex-col justify-between group"
          >
            <p className="text-zinc-900/80 font-semibold text-base md:text-lg leading-relaxed">
              Years bridging the gap between design and business.
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-6xl md:text-7xl font-bold font-display tracking-tighter text-zinc-950">
                15
              </h2>
              <span className="text-3xl md:text-4xl font-bold text-zinc-950 transition-colors">
                +
              </span>
            </div>
          </motion.div>

          {/* BENTO BOX 5: Mamba */}
          <motion.div
            id="card-mamba"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              borderColor: "rgba(255, 255, 255, 0.4)" 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => navigateTo("mamba")}
            className="group col-span-1 md:col-span-2 lg:col-span-3 row-span-1 h-[420px] md:h-full bg-[#93c5fd] rounded-[2rem] p-6 md:p-8 border border-zinc-800/10 flex flex-col md:flex-row items-center gap-6 md:gap-8 cursor-pointer overflow-hidden"
          >
            <div className="md:w-1/2 z-10 flex flex-col justify-center text-left">
              <span className="px-3 py-1 bg-zinc-950 font-bold text-[10px] rounded-lg uppercase tracking-widest mb-4 self-start border border-zinc-800 flex items-center gap-1">
                <Package size={12} className="text-zinc-300" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
                  PHYSICAL UX
                </span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display tracking-tight text-zinc-950">
                Mamba Vacuums
              </h3>
              <p className="text-zinc-900/80 font-semibold text-base md:text-lg leading-relaxed">
                Information Architecture for packaging. Making tech specs
                digestible in 3 seconds.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex-grow md:h-full bg-black rounded-2xl flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out overflow-hidden relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
              >
                <source src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/Mamba%20Vacuum%20Video.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="w-full text-center mt-12 md:mt-32 border-t border-zinc-900 bg-zinc-950 relative z-10"
      >
        <div className="pt-16 pb-8 md:pt-24 md:pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-app-text"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 leading-[0.95] max-w-5xl text-app-text font-display">
              Open to new opportunities
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-12 leading-relaxed font-medium">
              I am currently available for discussions regarding product design roles, freelance projects, or strategic partnerships. Should you require a dedicated professional to help define and execute your digital product vision, please feel free to reach out. I would be glad to discuss how we can achieve your business objectives together.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex group cursor-pointer"
            >
              {/* Animated Iridescent Gradient Border Wrapper */}
              <div className="absolute inset-0 rounded-full blur-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-70 group-hover:opacity-100 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]"></div>
              
              <a
                href="mailto:tzapal.casual@gmail.com"
                className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors outline-none bg-zinc-950 hover:bg-zinc-900 rounded-full px-8 h-12 text-base font-medium text-white m-[1px]"
              >
                <Mail className="mr-2 text-white" size={22} /> Get in touch{" "}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform text-white"
                  size={22}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-zinc-900/50 pt-4 pb-6 flex flex-col md:flex-row items-center justify-center text-[10px] sm:text-xs text-zinc-600 font-medium px-6">
          <p>© {new Date().getFullYear()} Tzanis Palioudakis. All rights reserved.</p>
        </div>
      </footer>
      </div>
      </div>
    </div>
  );
}
