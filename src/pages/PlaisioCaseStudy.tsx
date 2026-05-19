import { useEffect } from "react";
import { TrendingUp, Mail, Activity, ArrowLeft, Monitor } from "lucide-react";
import { motion } from "motion/react";
import Section from "../components/layout/Section";
import { Logo } from "../components/ui/Logo";

export default function PlaisioCaseStudy({
  navigateTo,
}: {
  navigateTo: (path: string) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white pb-24 relative">
      <div className="noise-overlay fixed" style={{ opacity: 0.04 }}></div>
      {/* Navigation (Dark Mode - Nexus Style) */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-medium text-sm cursor-pointer"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div 
            onClick={() => navigateTo("home")} 
            className="cursor-pointer group transition-transform hover:scale-105"
          >
            <Logo className="w-11 h-11 text-white" />
          </div>
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest hidden md:block">
            Case Study 01
          </div>
        </div>
      </nav>

      <main className="bg-[#0a0a0a]">
        {/* Section 1: Hero */}
        <Section
          spacing="large"
          className="pt-32 md:pt-48"
          containerClassName="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight font-display">
              Plaisio Black Friday: The Modular System
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-zinc-400 mb-8 font-display">
              High-Conversion UI/UX at Scale
            </h2>
            <p className="text-base md:text-xl lg:text-[22px] font-normal text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Orchestrated the digital visual strategy for Greece's biggest
              retail event. By shifting from ad-hoc design to a modular design
              system, I delivered a frictionless user journey that broke sales
              records.
            </p>
          </motion.div>

          {/* Plain images replacing the parallax mockup */}
          <div className="flex flex-col gap-6 mt-20 mb-24 max-w-6xl mx-auto">
            <img fetchPriority="high" loading="eager" decoding="async"
              src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/landing_page_desktop_mockup.jpg"
              className="w-full h-auto rounded-2xl"
              alt="Plaisio Desktop Mockup"
              referrerPolicy="no-referrer"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img loading="lazy" decoding="async"
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/newsletter.jpg"
                className="w-full h-auto rounded-2xl"
                alt="Plaisio Newsletter Mockup"
                referrerPolicy="no-referrer"
              />
              <img loading="lazy" decoding="async"
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/story.jpg"
                className="w-full h-auto rounded-2xl"
                alt="Plaisio Story Mockup"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Section>

        {/* Section 2: At a Glance & Key Results */}
        <Section spacing="medium">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* At a Glance Box */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-10 rounded-[2.5rem] flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight font-display">
                At a Glance
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Role
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Lead Digital Designer
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Duration
                  </p>
                  <p className="text-zinc-300 font-medium">
                    1 Month (Nov 2024)
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Tools
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Figma, Adobe Creative Suite
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Team
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Marketing Dept, Dev Team, Copywriters
                  </p>
                </div>
              </div>
            </div>

            {/* Key Results Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 rounded-[2.5rem] flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight font-display">
                Performance Metrics
              </h3>
              <div className="space-y-8 flex-grow flex flex-col justify-center">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden p-2.5">
                    <img loading="lazy" decoding="async"
                      src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/CTR_icon.svg"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-zinc-400 transition-colors">
                      +37%
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Click-Through Rate (CTR) vs previous year
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden p-2.5">
                    <img loading="lazy" decoding="async"
                      src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/ROAS_icon.svg"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-zinc-400 transition-colors">
                      4.2x
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Return On Ad Spend (ROAS) on paid media
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden p-2.5">
                    <img loading="lazy" decoding="async"
                      src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/Open_Rate_icon.svg"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-fuchsia-400 transition-colors">
                      &gt;46%
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Open Rate Best performing of the year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 3: The Challenge */}
        <Section spacing="medium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight font-display">
                The Challenge: Chaos vs Consistency
              </h2>
            </div>
            <div className="bg-zinc-900 p-6 md:p-14 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-white "></div>
              <div className="space-y-6">
                <p className="text-base md:text-2xl font-medium text-zinc-300 leading-relaxed tracking-tight">
                  Black Friday at Plaisio is a massive operation: hundreds of
                  offers, shifting prices, and extreme traffic.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-3">
                    The UX Problem
                  </h4>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                    In previous years, creating assets one-by-one led to
                    inconsistencies and slow reaction times. How might we build
                    a scalable system that maintains brand integrity across 500+
                    assets while maximizing conversion speed?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 4: The Process & Solution */}
        <Section spacing="large">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight font-display">
                The Solution: A Modular Design System
              </h2>
            </div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-zinc-800">01</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Atomic Design in Figma
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-zinc-400 max-w-2xl">
                    Instead of designing isolated banners, I built a
                    component-based system in Figma.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <h4 className="text-white font-bold mb-2">
                        Master Components
                      </h4>
                      <p className="text-sm text-zinc-500">
                        Standardized buttons, price tags, and product frames.
                      </p>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <h4 className="text-white font-bold mb-2">Scalability</h4>
                      <p className="text-sm text-zinc-500">
                        Generated hundreds of consistent variations in minutes.
                      </p>
                    </div>
                  </div>
                  {/* Figma System Image */}
                  <div className="mt-8">
                    <img loading="lazy" decoding="async"
                      src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/Figma.jpg"
                      alt="Design System Variants"
                      className="w-full h-auto rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-zinc-800">02</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Conversion-Led UI (Mobile First)
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-zinc-400 max-w-2xl">
                    Designed the campaign landing page with a strict
                    mobile-first approach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <h4 className="text-zinc-400 font-bold mb-2 font-display">
                        Visual Hierarchy
                      </h4>
                      <p className="text-sm text-zinc-500">
                        Prioritized the "Offer" and "CTA" using high-contrast
                        Neon colors.
                      </p>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <h4 className="text-zinc-400 font-bold mb-2">
                        Micro-interactions
                      </h4>
                      <p className="text-sm text-zinc-500">
                        Added subtle hover states for immediate feedback.
                      </p>
                    </div>
                  </div>
                  {/* Mobile Video Full Width */}
                  <div className="mt-8 flex justify-center w-full">
                    <div className="w-full max-w-md rounded-[2.5rem] bg-zinc-900 overflow-hidden shadow-2xl border border-zinc-800/50">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      >
                        <source
                          src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/plaisio/story_order_mockup.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>


        {/* Section 6: Conclusion & Next Steps */}
        <Section
          spacing="large"
          containerClassName="text-center border-t border-zinc-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[42px] font-bold text-white mb-8 tracking-tight font-display">
              Conclusion
            </h2>
            <p className="text-base md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
              This project proved that systematized design drives ROI. By
              treating the campaign as a product with a defined design system,
              we achieved speed, consistency, and record-breaking performance
              numbers.
            </p>
            <button
              onClick={() => navigateTo("home")}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] has-[>svg]:px-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-sm transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform text-zinc-950"
                />{" "}
                Back to Works
              </span>
            </button>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}
