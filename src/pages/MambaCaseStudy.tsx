import { useEffect } from "react";
import { ArrowLeft, Package } from "lucide-react";
import { motion } from "motion/react";
import Section from "../components/layout/Section";
import { Logo } from "../components/ui/Logo";

export default function MambaCaseStudy({
  navigateTo,
}: {
  navigateTo: (path: string) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-purple-900 selection:text-white pb-24 relative overflow-x-hidden">
      <div className="noise-overlay fixed" style={{ opacity: 0.04 }}></div>
      
      {/* Navigation */}
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
            Case Study 03
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
            <span className="px-3 py-1 bg-zinc-900 font-bold text-xs rounded-lg uppercase tracking-widest border border-zinc-800 text-purple-400 inline-flex items-center gap-2 mb-6">
              <Package size={14} /> BRANDING & PACKAGING
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight font-display">
              Mamba Sense: Go-to-Market Design
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-zinc-400 mb-8 font-display">
              Product Branding & Strategic Packaging
            </h2>
            <p className="text-base md:text-xl lg:text-[22px] font-normal text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Defined the visual identity and packaging for a new private-label product line,
              establishing it as an immediate best-seller in the competitive home appliance market.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 mt-20 mb-24 max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-zinc-900 border border-zinc-800">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover"
               >
                 <source src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/Mamba%20Vacuum%20Video.webm" type="video/webm" />
               </video>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img fetchPriority="high" loading="eager" decoding="async"
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/10.jpeg"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                alt="Mamba Sense hero shot"
                referrerPolicy="no-referrer"
              />
              <img loading="lazy" decoding="async"
                src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/6.jpeg"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                alt="Powerbrush detail"
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
                    Art Director, Lead Product & Packaging Designer
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Client
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Vassilias S.A.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Photography
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Shot in-house (Studio Setup & Flash Equipment)
                  </p>
                </div>
                 <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Focus
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Branding, Packaging, Visual Strategy
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    Tools
                  </p>
                  <p className="text-zinc-300 font-medium">
                    Adobe Illustrator, Photoshop
                  </p>
                </div>
              </div>
            </div>

            {/* Key Results Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 rounded-[2.5rem] flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight font-display">
                Key Results
              </h3>
              <div className="space-y-8 flex-grow flex flex-col justify-center">
                <div className="flex items-start gap-4 group">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold text-xl">#1</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-purple-400 transition-colors">
                      Best-Seller Status
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Achieved within 3 months of launch as flagship model
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-xl">+50%</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-cyan-400 transition-colors">
                      Add-to-Cart Rate
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Versus category average online
                    </p>
                  </div>
                </div>
                 <div className="flex items-start gap-4 group">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">Top</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-3xl font-bold text-white leading-none mb-1 group-hover:text-green-400 transition-colors">
                      Premium Shelf Space
                    </p>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">
                      Secured in major retail chains nationwide
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
                The Challenge
              </h2>
            </div>
            <div className="bg-zinc-900 p-6 md:p-14 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
              <div className="space-y-6">
                <p className="text-base md:text-2xl font-medium text-zinc-300 leading-relaxed tracking-tight">
                  Launching a new private-label brand in a market dominated by global giants (like Dyson or Bosch) is tough. 
                  With the "Mamba Sense," we weren't just selling a vacuum; we were selling smart technology (Dust Sensor, Auto Mode).
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-3">
                    The Goal
                  </h4>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                    Create a brand identity that felt premium and powerful. We needed to move away from aggressive "industrial" aesthetics 
                    and towards a cleaner, "smart home" look that appeals to modern consumers, while clearly communicating complex specs 
                    like the 110,000 RPM motor and 80' autonomy directly on the shelf.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

         {/* Section 4: The Process & Solution */}
         <Section spacing="medium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight font-display">
                The Process & Solution
              </h2>
            </div>
            <div className="space-y-12">
               <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">1. Brand Strategy & "Tech-Clean" Identity</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Worked closely with the product team to define the brand's core values: agility, power, and speed. I shifted the brand palette to Royal Blue and Gunmetal Grey to match the device's premium finish. The use of white space became central to the identity, communicating high-tech performance and differentiating it from typical appliance aesthetics.
                  </p>
                  <div className="bg-[#e5e5e5] rounded-[2rem] flex items-center justify-center border border-zinc-800 aspect-video md:aspect-[3/1] overflow-hidden py-12">
                    <img fetchPriority="high" loading="eager" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/Mamba_logo.svg" alt="Mamba Logo" className="rotate-90 h-[220px] md:h-[350px] w-auto transform origin-center transition-transform hover:scale-105" />
                  </div>
               </div>
               <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">2. Strategic Packaging Design</h3>
                   <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    Designed the packaging to act as a "silent salesman." Unlike competitors using dark boxes, I opted for a <b>clean white box</b>. This highlights the product's blue accents and makes specs instantly readable. The technical layout (die-cut) was meticulously planned in Illustrator to ensure seamless folding and presentation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-lg mb-8">
                    <li><b>Front:</b> Large, heroic product photography.</li>
                    <li><b>Key Specs:</b> Designed custom minimalist icons for "Dust Sensor", "515W", and "80 min autonomy" to make decision-making easy.</li>
                    <li><b>Trust Signals:</b> Placed the cyan "5 Years Warranty" badge prominently to build instant trust.</li>
                  </ul>
                   <div className="rounded-[2rem] border border-zinc-800 overflow-hidden">
                    <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/box.png" alt="Mamba Packaging Die Cut Layout in Illustrator" className="w-full h-auto object-contain bg-white" />
                   </div>
               </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">3. Launch Assets & 3D Renders</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                    Directed the creation of high-fidelity 3D renders to showcase the internal motor and digital display. These assets were used across the landing page and social media to explain the "Dust Sensor" technology visually.
                  </p>
               </div>
               <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-[2.5rem]">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">✦</span>
                    UX Decisions in Physical Product Design
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Beyond visual branding, a true UX approach was applied to the product's physical interaction points. By thinking beyond the box and treating the vacuum itself as an interface, I advocated for emphasizing user-centric design choices:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/50 border border-zinc-800/50 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
                       <h4 className="text-white font-bold mb-2">Cognitive Load Reduction</h4>
                       <p className="text-zinc-400 text-sm">Simplified the digital interface on the motor head to show only essential states (Battery %, Auto Mode, Error) using clear iconography, preventing user overwhelm.</p>
                    </div>
                    <div className="bg-black/50 border border-zinc-800/50 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
                       <h4 className="text-white font-bold mb-2">Affordance for Maintenance</h4>
                       <p className="text-zinc-400 text-sm">The dust bin release and filter access points were color-coded and structurally highlighted to make maintenance intuitive without needing a manual.</p>
                    </div>
                    <div className="bg-black/50 border border-zinc-800/50 p-6 rounded-2xl md:col-span-2 hover:border-purple-500/50 transition-colors">
                       <h4 className="text-white font-bold mb-2">Ergonomic Visual Mapping</h4>
                       <p className="text-zinc-400 text-sm">By aligning the branding elements with the natural grip and viewing angle, the product feels premium from the moment the user pulls it out of the box, building immediate trust in its quality.</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 5: Gallery */}
        <Section spacing="large">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight font-display">
                Product & Packaging Showcase
              </h2>
            </div>

            <div className="space-y-6">
              {/* Top Full Width */}
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-[2rem] bg-white aspect-video lg:aspect-[21/9] overflow-hidden border border-zinc-800 flex items-center justify-center p-8 group transition-colors">
                  <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/2.jpeg" alt="Mamba Upright Model" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900 aspect-video md:aspect-auto overflow-hidden border border-zinc-800 relative group min-h-[300px]">
                  <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/11.jpeg" alt="Flex tube under furniture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="col-span-1 rounded-[2rem] bg-zinc-900 aspect-square md:aspect-auto overflow-hidden border border-zinc-800 relative group min-h-[300px]">
                  <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/14.jpeg" alt="Dust bin mechanism" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 rounded-[2rem] bg-white aspect-square md:aspect-auto overflow-hidden border border-zinc-800 relative group flex items-center justify-center p-6 min-h-[300px]">
                  <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/3.jpeg" alt="Motor interface" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900 aspect-video md:aspect-auto overflow-hidden border border-zinc-800 relative group min-h-[300px]">
                  <img loading="lazy" decoding="async" src="https://raw.githubusercontent.com/Tzanos-pix/portfolio-2026/main/public/Mamba/13.jpeg" alt="Vacuuming carpet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 6: Conclusion */}
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
            <p className="text-base md:text-xl text-zinc-400 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
              The success of the Mamba Sense proved that strategic packaging design is a crucial driver of sales. 
              By focusing on clarity and premium aesthetics, we managed to build a brand from zero to market leader 
              in its category in record time.
            </p>
            <button
              onClick={() => navigateTo("home")}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] has-[>svg]:px-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform text-zinc-950"
                />{" "}
                Back to Work
               </span>
            </button>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}

