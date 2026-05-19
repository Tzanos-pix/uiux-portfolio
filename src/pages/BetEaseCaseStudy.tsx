import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Zap, Target, Smartphone, Pointer, CheckCircle, Clock, Database, BarChart3, Layout, X, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Section from '../components/layout/Section';
import { Logo } from '../components/ui/Logo';
import BettingAppPrototype from '../components/BettingAppPrototype';

export default function BetEaseCaseStudy({ navigateTo }: { navigateTo: (path: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themePrimary = "#CCFF00";
  const darkBg = "#0A0A0A"; 
  const cardBg = "#121212";

  return (
    <div className="min-h-screen w-full font-sans selection:bg-[#CCFF00]/20 selection:text-[#CCFF00] pb-24 text-white font-display tracking-tight overflow-x-hidden" style={{ backgroundColor: darkBg }}>
      {/* Navigation (Sticky) */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all font-medium text-sm cursor-pointer px-4 py-2 rounded-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <div 
            onClick={() => navigateTo('home')} 
            className="cursor-pointer group transition-transform hover:scale-105"
          >
            <Logo className="w-11 h-11 text-white" />
          </div>
          <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest hidden md:block">Case Study 02</div>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <Section spacing="large" className="pt-28 md:pt-48" containerClassName="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 text-[#CCFF00] font-bold text-xs uppercase tracking-widest mb-6">
              UI/UX Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              BetEase
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-8 text-zinc-300">
              Deep Dive: From Wireframes to Final UI
            </h2>
            <p className="text-base md:text-xl lg:text-[22px] font-normal leading-relaxed max-w-4xl mx-auto text-zinc-400 tracking-tight">
              A frictionless mobile betting experience designed for speed, clarity, and error prevention. I focused on micro-interactions and strict hierarchy to reduce cognitive load during high-intensity moments.
            </p>
          </motion.div>

          {/* Hero Mockup */}
          <BettingAppPrototype />
        </Section>

        {/* Section 2: Structure & Logic */}
        <Section spacing="large" className="relative bg-[url('https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/BetEase/bg2.jpg')] bg-cover bg-center bg-fixed">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[#0A0A0A]/50 backdrop-blur-[2px] z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
              <h2 className="text-[#CCFF00] font-bold tracking-widest uppercase text-xs mb-4">PART 1: STRUCTURE</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Blueprints & Hierarchy</h3>
              <p className="text-base md:text-xl text-zinc-400">Information architecture and Low-Fidelity Wireframes.</p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
            <div className="bg-[#121212] border border-zinc-800 p-6 md:p-10 rounded-[2rem]">
              <Pointer className="text-[#0055FF] w-10 h-10 mb-6" />
              <h4 className="text-xl md:text-2xl font-bold mb-4">Hierarchy First</h4>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                Before color, I defined the hierarchy. Odds and the bet button must be the most recognizable elements on every screen.
              </p>
            </div>
            <div className="bg-[#121212] border border-zinc-800 p-6 md:p-10 rounded-[2rem]">
              <Zap className="text-[#0055FF] w-10 h-10 mb-6" />
              <h4 className="text-xl md:text-2xl font-bold mb-4">User Flows</h4>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                I designed the <strong>"3-Clicks"</strong> journey: Match selection → Odds selection → Confirmation. No unnecessary moves.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto bg-[#121212] border border-zinc-800 rounded-[2rem] p-6 md:p-12 flex flex-col gap-8 md:gap-12">
            <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 border-b border-zinc-800/50 pb-8">
              <div className="w-full lg:w-1/3">
                <h4 className="text-2xl md:text-3xl font-bold border-l-4 border-[#0055FF] pl-4 mb-6">Low-Fidelity Wireframes</h4>
                <p className="text-base md:text-lg text-zinc-400">Creating low-fidelity prototypes for three main use cases. The absence of colors and details allows focusing on the information architecture.</p>
              </div>
              <div className="w-full lg:w-2/3">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <li className="flex gap-4">
                    <CheckCircle className="text-[#0055FF] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block mb-1">Skeleton Layout</strong>
                      <span className="text-zinc-500 text-sm">Focus on the position of elements without visual distractions.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="text-[#0055FF] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block mb-1">Fixed Navigation</strong>
                      <span className="text-zinc-500 text-sm">Added bottom bar for easy thumb access ("Thumb Zone").</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="text-[#0055FF] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block mb-1">Rapid Evaluation</strong>
                      <span className="text-zinc-500 text-sm">Using placeholders to test hierarchy and functionality early.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Phone 1: Live Feed */}
              <div className="w-full max-w-[280px]">
                <div className="bg-[#0a0a0a] border-[3px] border-zinc-800 rounded-[2.5rem] aspect-[9/18.5] flex flex-col relative overflow-hidden shadow-2xl">
                   {/* Top StatusBar area */}
                   <div className="h-6 w-full flex justify-between px-6 pt-4 gap-1">
                      <span className="text-[10px] font-bold text-white/50">XX:XX</span>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-5 h-2.5 rounded-sm bg-white/30 border border-white/50"></div>
                      </div>
                   </div>

                   {/* Header skeleton */}
                   <div className="px-5 pt-8 pb-4 flex justify-between items-center gap-4">
                     <div className="flex-1 h-7 rounded-lg border border-dashed border-white/20 bg-white/10"></div>
                     <div className="w-9 h-7 rounded-lg border border-dashed border-white/20 bg-white/10"></div>
                   </div>

                   {/* Filter/Tags */}
                   <div className="px-5 pb-5 pt-1 flex gap-2 overflow-hidden">
                      <div className="w-12 h-7 rounded-full border border-dashed border-white/20 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white/30">ALL</span></div>
                      <div className="w-20 h-7 rounded-full border border-white/50 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white">CATEGORY</span></div>
                      <div className="w-20 h-7 rounded-full border border-dashed border-white/20 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white/30">CATEGORY</span></div>
                   </div>

                   {/* Content */}
                   <div className="flex-1 px-4 space-y-4">
                      {/* Match Card 1 */}
                      <div className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 flex flex-col gap-3">
                         <div className="flex justify-between">
                            <div className="w-10 h-3 rounded bg-red-500/40"></div>
                            <div className="w-12 h-3 rounded border border-dashed border-white/20 bg-white/10"></div>
                         </div>
                         <div className="flex gap-3 items-center">
                            <div className="flex-1 flex flex-col gap-2">
                               <div className="w-full h-3 rounded bg-white/20"></div>
                               <div className="w-3/4 h-3 rounded bg-white/20"></div>
                            </div>
                            <div className="w-3 h-8 rounded bg-white/20"></div>
                         </div>
                         <div className="flex gap-2 mt-1">
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                         </div>
                      </div>
                      
                      {/* Match Card 2 */}
                      <div className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 flex flex-col gap-3">
                         <div className="flex justify-between">
                            <div className="w-10 h-3 rounded bg-red-500/40"></div>
                            <div className="w-12 h-3 rounded border border-dashed border-white/20 bg-white/10"></div>
                         </div>
                         <div className="flex gap-3 items-center">
                            <div className="flex-1 flex flex-col gap-2">
                               <div className="w-full h-3 rounded bg-white/20"></div>
                               <div className="w-3/4 h-3 rounded bg-white/20"></div>
                            </div>
                            <div className="w-3 h-8 rounded bg-white/20"></div>
                         </div>
                         <div className="flex gap-2 mt-1">
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                         </div>
                      </div>
                   </div>

                   {/* Fixed Navigation Bottom Bar */}
                   <div className="absolute bottom-0 left-0 right-0 h-[70px] border-t border-dashed border-white/20 bg-black/90 flex justify-around items-center px-2 pb-2">
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Phone 2: Open Bets */}
              <div className="w-full max-w-[280px]">
                <div className="bg-[#0a0a0a] border-[3px] border-zinc-800 rounded-[2.5rem] aspect-[9/18.5] flex flex-col relative overflow-hidden shadow-2xl">
                   <div className="h-6 w-full flex justify-between px-6 pt-4 gap-1">
                      <span className="text-[10px] font-bold text-white/50">XX:XX</span>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-5 h-2.5 rounded-sm bg-white/30 border border-white/50"></div>
                      </div>
                   </div>

                   <div className="px-5 pt-8 pb-6 flex justify-center">
                     <span className="text-xs font-bold tracking-[0.2em] text-white/60">OPEN BETS</span>
                   </div>

                   <div className="flex-1 px-4">
                      {/* Active Bet Card */}
                      <div className="w-full rounded-2xl border border-dashed border-white/30 bg-white/5 p-5 flex flex-col gap-6">
                         <div className="flex flex-col gap-3">
                            <div className="w-2/3 h-5 rounded bg-white/20"></div>
                            <div className="w-1/3 h-3 rounded bg-white/10"></div>
                         </div>
                         
                         <div className="flex flex-col gap-2">
                           <div className="w-1/4 h-3 rounded bg-white/10"></div>
                           <div className="w-full h-8 rounded bg-white/20"></div>
                         </div>
                         
                         <div className="w-full h-12 rounded-full border border-dashed border-white/20 flex items-center px-1 mt-2">
                            <div className="w-10 h-10 rounded-full bg-white/20"></div>
                            <span className="flex-1 text-center text-[10px] font-medium tracking-widest text-white/30">SWIPE TO ACTION</span>
                         </div>
                      </div>
                   </div>

                   <div className="absolute bottom-0 left-0 right-0 h-[70px] border-t border-dashed border-white/20 bg-black/90 flex justify-around items-center px-2 pb-2">
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                         <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Phone 3: Buzzer Beater Modal */}
              <div className="w-full max-w-[280px]">
                <div className="bg-[#0a0a0a] border-[3px] border-zinc-800 rounded-[2.5rem] aspect-[9/18.5] flex flex-col relative overflow-hidden shadow-2xl">
                   <div className="h-6 w-full flex justify-between px-6 pt-4 gap-1 opacity-40">
                      <span className="text-[10px] font-bold text-white/50">XX:XX</span>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-3 h-2.5 rounded-sm bg-white/30"></div>
                        <div className="w-5 h-2.5 rounded-sm bg-white/30 border border-white/50"></div>
                      </div>
                   </div>

                   <div className="px-5 pt-8 pb-4 flex justify-between items-center gap-4 opacity-40">
                     <div className="flex-1 h-7 rounded-lg border border-dashed border-white/20 bg-white/10"></div>
                     <div className="w-9 h-7 rounded-lg border border-dashed border-white/20 bg-white/10"></div>
                   </div>

                   {/* Blurred background content */}
                   <div className="px-5 pb-5 pt-1 flex gap-2 overflow-hidden opacity-40">
                      <div className="w-12 h-7 rounded-full border border-dashed border-white/20 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white/30">ALL</span></div>
                      <div className="w-20 h-7 rounded-full border border-white/50 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white">CATEGORY</span></div>
                      <div className="w-20 h-7 rounded-full border border-dashed border-white/20 bg-white/5 flex-shrink-0 flex items-center justify-center"><span className="text-[9px] text-white/30">CATEGORY</span></div>
                   </div>

                   <div className="flex-1 px-4 space-y-4 opacity-40">
                      <div className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 flex flex-col gap-3">
                         <div className="flex justify-between">
                            <div className="w-10 h-3 rounded bg-red-500/40"></div>
                            <div className="w-12 h-3 rounded border border-dashed border-white/20 bg-white/10"></div>
                         </div>
                         <div className="flex gap-3 items-center">
                            <div className="flex-1 flex flex-col gap-2">
                               <div className="w-full h-3 rounded bg-white/20"></div>
                               <div className="w-3/4 h-3 rounded bg-white/20"></div>
                            </div>
                            <div className="w-3 h-8 rounded bg-white/20"></div>
                         </div>
                         <div className="flex gap-2 mt-1">
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                           <div className="flex-1 h-8 rounded-lg border border-dashed border-white/20 bg-white/5"></div>
                         </div>
                      </div>
                      
                      <div className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 flex flex-col gap-3">
                         <div className="flex justify-between">
                            <div className="w-10 h-3 rounded bg-red-500/40"></div>
                            <div className="w-12 h-3 rounded border border-dashed border-white/20 bg-white/10"></div>
                         </div>
                         <div className="flex gap-3 items-center">
                            <div className="flex-1 flex flex-col gap-2">
                               <div className="w-full h-3 rounded bg-white/20"></div>
                               <div className="w-3/4 h-3 rounded bg-white/20"></div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Overlay Modal */}
                   <div className="absolute inset-0 z-10 flex flex-col justify-end">
                      <div className="absolute inset-0 bg-black/60"></div>
                      <div className="relative mx-3 mb-[80px] bg-[#111] border border-dashed border-white/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
                         <div className="absolute top-4 right-4 w-4 h-4 rounded flex items-center justify-center opacity-50">✕</div>
                         <div className="w-24 h-5 rounded bg-red-500/20 mb-4"></div>
                         <div className="w-3/4 h-6 rounded bg-white/20 mb-2"></div>
                         <div className="w-full h-3 rounded bg-white/10 mb-6 mt-4"></div>
                         
                         <div className="w-full h-11 rounded-lg border border-dashed border-white/30 flex items-center justify-center">
                            <span className="text-[10px] text-white/50 tracking-widest">CTA BUTTON</span>
                         </div>
                      </div>
                   </div>

                   {/* Fixed Navigation Bottom Bar */}
                   <div className="absolute bottom-0 left-0 right-0 h-[70px] border-t border-dashed border-white/20 bg-black/90 flex justify-around items-center px-2 pb-2 z-20">
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                        <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-5 h-5 rounded border border-dashed border-white/40"></div>
                         <div className="w-6 h-1 rounded bg-white/20"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Section>

        {/* Section 3: Principles & UI Design */}
        <Section spacing="large" className="bg-[#121212] border-y border-zinc-900 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-12 md:mb-16 text-center">
              <h2 className="text-[#CCFF00] font-bold tracking-widest uppercase text-xs mb-4">PART 2: UI DESIGN</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">Principles & High-Fidelity UI</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24 cursor-default">
              <div className="group bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800 hover:border-[#CCFF00]/50 transition-colors">
                <Zap className="text-[#CCFF00] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Speed</h4>
                <p className="text-zinc-500 text-sm">Minimizing decision time through clear numerical data.</p>
              </div>
              <div className="group bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800 hover:border-[#CCFF00]/50 transition-colors">
                <Target className="text-[#CCFF00] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Focus</h4>
                <p className="text-zinc-500 text-sm">Using whitespace to let the thousands of match details "breathe".</p>
              </div>
              <div className="group bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800 hover:border-[#CCFF00]/50 transition-colors">
                <Smartphone className="text-[#CCFF00] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Feedback</h4>
                <p className="text-zinc-500 text-sm">Immediate confirmation of every action with haptics and visual effects.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
               <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-[#CCFF00] pl-4">Design System Components</h4>
                  <div className="space-y-6 md:space-y-8">
                     <div>
                       <h5 className="text-[#CCFF00] font-bold text-lg mb-2">Deep Dark Theme</h5>
                       <p className="text-zinc-400">I chose a dark theme to reduce eye strain, especially in low-light conditions (stadiums, bars). The <strong>Neon Green</strong> acts as a beacon, guiding the user to important action points.</p>
                     </div>
                     <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.3)]"></div>
                        <div className="w-16 h-16 rounded-2xl bg-[#0055FF] shadow-[0_0_20px_rgba(0,85,255,0.3)]"></div>
                        <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-zinc-700"></div>
                     </div>
                     <div>
                       <h5 className="text-[#0055FF] font-bold text-lg mb-2">Electric Blue Accent</h5>
                       <p className="text-zinc-400">Balances against the Neon, adding depth and visually separating secondary information (e.g., active states).</p>
                     </div>
                     <div>
                       <h5 className="text-white font-bold text-lg mb-2">Inter Font Family</h5>
                       <p className="text-zinc-400">Maximum legibility in small sizes.</p>
                     </div>
                     <div>
                       <h5 className="text-[#CCFF00] font-bold text-lg mb-2">Odds Tags</h5>
                       <p className="text-zinc-400">Monospaced numbers for quick vertical comparison in odds lists.</p>
                     </div>
                  </div>
               </div>

               <div className="relative">
                 {/* Performance Chart Mockup */}
                 <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8">
                   <h5 className="text-lg md:text-xl font-bold mb-8 text-center">Performance: Time to Bet</h5>
                   <div className="space-y-6">
                     <div>
                       <div className="flex justify-between text-sm text-zinc-400 mb-2">
                         <span>Competitor A</span>
                         <span>8.5s</span>
                       </div>
                       <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                         <div className="h-full bg-zinc-700 w-[100%] rounded-full"></div>
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-sm text-zinc-400 mb-2">
                         <span>Competitor B</span>
                         <span>7.2s</span>
                       </div>
                       <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                         <div className="h-full bg-zinc-600 w-[85%] rounded-full"></div>
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-[#CCFF00] font-bold text-sm mb-2">
                         <span>BetEase (Our App)</span>
                         <span>2.8s</span>
                       </div>
                       <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                         <div className="h-full bg-[#CCFF00] w-[33%] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
                       </div>
                     </div>
                   </div>
                   <p className="text-center text-zinc-500 mt-8 text-sm">The simplification of the user flow I designed reduced betting time by <strong className="text-white">65%</strong>.</p>
                 </div>
               </div>
            </div>
          </div>
        </Section>

        {/* Mid-Page Mockup */}
        <div className="w-full h-[50vh] md:h-[80vh] relative border-y border-white/5 bg-[#0A0A0A]">
           <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/BetEase/mockup1.jpg')] bg-cover bg-center bg-no-repeat"></div>
        </div>

        {/* Section 4: Features & Edge Cases */}
        <Section spacing="large" className="bg-[#0A0A0A]">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-[#CCFF00] font-bold tracking-widest uppercase text-xs mb-4">PART 3: EDGE CASES & FEATURES</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Smart Betslip & Error Prevention</h3>
            <p className="text-base md:text-xl text-zinc-400">Buzzer Beaters, Transaction Security and Personalization.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            
            {/* feature 1 */}
            <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 md:p-10 flex flex-col justify-between">
               <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#CCFF00]">The "Buzzer Beater" Modal</h4>
                  <p className="text-base md:text-lg text-zinc-400 mb-6">
                    <strong>Micro-Moment UX:</strong> In the last 5 minutes of a derby, adrenaline hits the red. I designed a <strong>non-intrusive pop-up</strong> (snackbar style).
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Clock size={18} className="text-[#CCFF00] mt-1" />
                      <div><strong className="text-white">Urgency:</strong> Live countdown timer for when the market closes.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Pointer size={18} className="text-[#CCFF00] mt-1" />
                      <div><strong className="text-white">Frictionless:</strong> Pre-selected amount (€10) for 1-Tap Bet.</div>
                    </li>
                  </ul>
               </div>
               
               <div className="w-full bg-zinc-950 rounded-2xl flex items-center justify-center p-6 border border-zinc-800/50 shadow-inner overflow-hidden relative">                   
                   <div className="w-full max-w-[320px] bg-[#1A1A1A] border border-[#CCFF00]/30 rounded-[24px] p-6 shadow-[0_0_50px_rgba(204,255,0,0.15)] relative overflow-hidden backdrop-blur-xl z-10 text-left">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,1)]"></div>
                     <div className="absolute top-5 right-5 text-white/40 bg-black/20 p-1.5 rounded-full backdrop-blur-md">
                       <X size={16} strokeWidth={3} />
                     </div>
                     
                     <div className="flex items-center gap-2 text-[#ff3b30] font-bold text-base mb-3 max-w-[85%]">
                       <Clock size={18} /> 88:45' - Expiring Soon!
                     </div>
                     
                     <h3 className="text-xl font-bold text-white mb-2 leading-tight">Next Goal: Real Madrid</h3>
                     <p className="text-[13px] text-white/60 mb-5 leading-relaxed pr-4">
                        Real is pressing hard. Do you think they'll score in the final minutes?
                     </p>
                     
                     <div className="w-full bg-[#CCFF00] hover:bg-[#b3e600] cursor-pointer text-black font-extrabold py-3.5 rounded-xl text-[15px] shadow-[0_4px_20px_rgba(204,255,0,0.3)] flex justify-center items-center transition-colors">
                       Odds 3.40 | €10 1-Tap
                     </div>
                   </div>
                </div>
            </div>

            {/* feature 2 & 3 */}
            <div className="space-y-6 md:space-y-12 flex flex-col">
               <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 md:p-10 flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#CCFF00]">Swipe-To-Cash-Out</h4>
                  <p className="text-base md:text-lg text-zinc-400 mb-6">
                    <strong className="text-white">Error Prevention:</strong> In moments of pressure (Heuristic Evaluation), simple buttons (Taps) are dangerous.
                  </p>
                  <p className="text-base md:text-lg text-zinc-400 mb-6">
                    I replaced the button with <strong>Swipe-to-Confirm</strong>, reducing <em>fat-finger errors</em> to 0%.
                  </p>
                  <div className="bg-[#1A1A1A] p-6 rounded-[24px] border border-white/10 relative shadow-2xl overflow-hidden flex flex-col justify-center text-center">
                     <div className="text-sm text-white/50 font-medium mb-1">Barcelona vs Real Madrid</div>
                     <div className="text-lg font-bold mb-1 text-white">Winner: Barcelona</div>
                     <div className="text-sm text-white/50 mb-6">Stake: €50.00</div>
                     
                     <div className="text-sm text-white/50 font-medium">Current Return</div>
                     <div className="text-4xl font-black mt-1 tracking-tight text-[#CCFF00]">
                       €145.50
                     </div>

                     <div className="mt-8 relative w-full h-14 bg-black/40 rounded-full border border-[#0055FF]/20 overflow-hidden flex items-center justify-center shadow-inner">
                        <span className="text-[#0055FF] text-[13px] font-bold tracking-wide z-0 uppercase">Swipe for Cash Out</span>
                        <div className="absolute left-1 top-1 bottom-1 w-12 bg-[#CCFF00] rounded-full flex items-center justify-center z-10 shadow-lg">
                           <ArrowRight className="text-black" size={20} strokeWidth={3} />
                        </div>
                     </div>
                   </div>
               </div>
            </div>

          </div>
          
          <div className="max-w-6xl mx-auto mt-12 md:mt-20">
             <div className="text-center mb-8 md:mb-12">
               <span className="text-zinc-500 font-bold tracking-wider uppercase text-sm mb-2 block">Future Extensions (Roadmap)</span>
               <h4 className="text-xl md:text-3xl font-bold">Personalization: "For You" Bets</h4>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-3xl">
                   <Database className="text-[#CCFF00] w-8 h-8 mb-4" />
                   <h5 className="font-bold text-lg md:text-xl mb-3">AI Data Mapping</h5>
                   <p className="text-zinc-400 text-sm">Proposal for developing an algorithm that will analyze each user's favorite teams and markets.</p>
                </div>
                <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-3xl">
                   <Layout className="text-[#CCFF00] w-8 h-8 mb-4" />
                   <h5 className="font-bold text-lg md:text-xl mb-3">Dynamic UI Widgets</h5>
                   <p className="text-zinc-400 text-sm">Future design of a dynamic horizontal "Picks for you" carousel, bringing favorite markets to the first scroll.</p>
                </div>
                <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-3xl">
                   <BarChart3 className="text-[#CCFF00] w-8 h-8 mb-4" />
                   <h5 className="font-bold text-lg md:text-xl mb-3">Retention Impact</h5>
                   <p className="text-zinc-400 text-sm">These additions will aim to increase session length, with the prospect of significantly boosting user retention.</p>
                </div>
             </div>
          </div>
        </Section>
        {/* Section 5: Conclusion */}
        <Section
          spacing="large"
          containerClassName="text-center border-t border-zinc-900 bg-[#0A0A0A]"
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
              The BetEase project demonstrated the power of user-centric design in high-stress environments. By focusing on fundamental design principles—clear hierarchy, removing friction, and preventing errors—we transformed a complex betting interface into an intuitive and fast experience, ultimately driving engagement through superior UI/UX.
            </p>
            <button
              onClick={() => navigateTo("home")}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all outline-none focus-visible:ring-[#CCFF00]/50 focus-visible:ring-[3px] has-[>svg]:px-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-sm transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform text-zinc-950"
                />
                Back to Home
              </span>
            </button>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}
