import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, BatteryMedium, Signal, Home, PlayCircle, 
  Receipt, User, UserCircle2, ArrowUp, ArrowDown, ArrowRight,
  Clock, X, CheckCircle2, LayoutTemplate, Palette
} from 'lucide-react';

type ViewMode = 'wireframe' | 'hifi';
type Tab = 'live' | 'bets' | 'buzzer';

export default function BettingAppPrototype() {
  const [viewMode, setViewMode] = useState<ViewMode>('hifi');
  const [activeTab, setActiveTab] = useState<Tab>('live');
  const [showBuzzer, setShowBuzzer] = useState(false);
  const [selectedBet, setSelectedBet] = useState<{ match: string, pick: string, odds: string } | null>(null);
  const [betPlaced, setBetPlaced] = useState(false);

  // Randomly trigger buzzer beater modal for demo purposes
  useEffect(() => {
    if (activeTab === 'buzzer') {
      setShowBuzzer(true);
      setSelectedBet(null);
    } else if (activeTab === 'live' && viewMode === 'hifi') {
      const timer = setTimeout(() => setShowBuzzer(true), 3500);
      return () => clearTimeout(timer);
    } else {
      setShowBuzzer(false);
      setSelectedBet(null);
      setBetPlaced(false);
    }
  }, [activeTab, viewMode]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 px-2 py-8 md:p-8 w-full">
      
      {/* Case Study Controls / Presentation Panel */}
      <div className="max-w-md text-left flex flex-col gap-6 order-1 lg:order-1 px-4 md:px-0 w-full overflow-hidden">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white">Interactive <span className="text-accent">Prototype</span></h1>
          <p className="text-white/60 text-sm md:text-base">Explore the BetEase UI/UX in real-time.</p>
        </div>

        <div className="bg-bg-card p-5 md:p-6 rounded-2xl border border-white/5 space-y-5 md:space-y-6 shadow-xl w-full">
          <div>
            <div className="flex bg-black/40 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('wireframe')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${viewMode === 'wireframe' ? 'bg-tertiary text-white shadow-sm shadow-tertiary/20' : 'text-white/40 hover:text-white/60'}`}
              >
                <LayoutTemplate size={16} /> Wireframes
              </button>
              <button 
                onClick={() => setViewMode('hifi')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${viewMode === 'hifi' ? 'bg-accent text-black shadow-sm' : 'text-white/40 hover:text-white/60'}`}
              >
                <Palette size={16} /> High-Fidelity
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xs md:text-sm uppercase tracking-wider text-white/40 font-semibold mb-3">Core Use Cases</h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible items-stretch pb-2 lg:pb-0 gap-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <button 
                onClick={() => setActiveTab('live')}
                className={`w-[85%] lg:w-full flex-shrink-0 snap-start cursor-pointer text-left px-4 py-3 rounded-xl text-sm transition-all border ${activeTab === 'live' ? 'bg-tertiary/10 border-tertiary/30 text-white' : 'border-transparent text-white/60 hover:bg-white/5'}`}
              >
                <strong className={`block mb-0.5 ${activeTab === 'live' ? 'text-tertiary' : 'text-white'}`}>1. Basic Flow (3-Clicks)</strong>
                <span className="text-xs opacity-80">Tap any odds to see the Select → Confirm flow with no unnecessary moves.</span>
              </button>
              <button 
                onClick={() => setActiveTab('bets')}
                className={`w-[85%] lg:w-full flex-shrink-0 snap-start cursor-pointer text-left px-4 py-3 rounded-xl text-sm transition-all border ${activeTab === 'bets' ? 'bg-tertiary/10 border-tertiary/30 text-white' : 'border-transparent text-white/60 hover:bg-white/5'}`}
              >
                <strong className={`block mb-0.5 ${activeTab === 'bets' ? 'text-tertiary' : 'text-white'}`}>2. Error Prevention (Cash Out)</strong>
                <span className="text-xs opacity-80">"Swipe-to-Confirm" mechanism to avoid accidental actions.</span>
              </button>
              <button 
                onClick={() => setActiveTab('buzzer')}
                className={`w-[85%] lg:w-full flex-shrink-0 snap-start cursor-pointer text-left px-4 py-3 rounded-xl text-sm transition-all border ${activeTab === 'buzzer' ? 'bg-tertiary/10 border-tertiary/30 text-white' : 'border-transparent text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                <strong className={`block mb-0.5 ${activeTab === 'buzzer' ? 'text-tertiary' : 'text-white'}`}>3. Buzzer Beater (Micro-Moment)</strong>
                <span className="text-xs opacity-80">Non-intrusive pop-up for rapid betting (1-Tap) in stoppage time.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Device Frame Wrapper */}
      <div className="w-full flex justify-center items-center order-2 lg:order-2 md:px-0 h-[650px] sm:h-[750px] md:h-[850px] overflow-hidden">
        <div className="relative w-[375px] h-[812px] rounded-[48px] bg-bg-app border-[12px] border-[#2a2a35] shadow-2xl overflow-hidden shadow-black/80 shrink-0 flex flex-col origin-center scale-[0.75] sm:scale-[0.85] md:scale-100">
          
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-[#2a2a35] rounded-b-3xl z-50"></div>

          {/* Status Bar */}
          <div className="absolute top-0 w-full px-6 pt-3 flex justify-between items-center text-[13px] font-semibold tracking-wide z-40 text-white">
          <span>{viewMode === 'wireframe' ? 'XX:XX' : '21:35'}</span>
          <div className="flex items-center gap-1.5 opacity-80">
            <Signal size={14} />
            <Wifi size={14} />
            <BatteryMedium size={16} />
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 min-h-0 w-full pt-12 pb-24 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] relative text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${viewMode}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="min-h-full"
            >
              {activeTab === 'bets' ? <MyBets mode={viewMode} /> : <LiveFeed mode={viewMode} onBetSelect={(match, pick, odds) => { setSelectedBet({match, pick, odds}); setBetPlaced(false); }} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Betslip Overlay */}
        <AnimatePresence>
          {selectedBet && (
            <motion.div 
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 300 }}
              className={`absolute bottom-0 left-0 w-full z-[70] rounded-t-[32px] overflow-hidden ${viewMode === 'wireframe' ? 'bg-black border-t-2 border-dashed border-white/40 pb-8' : 'bg-bg-card border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pb-4'}`}
            >
              {betPlaced ? (
                <div className="p-8 flex flex-col items-center justify-center text-center gap-4 h-[240px]">
                  {viewMode === 'wireframe' ? (
                    <>
                      <div className="w-16 h-16 border-2 border-dashed border-white/40 text-white/40 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-mono text-white/60 mb-1 tracking-widest uppercase">SUCCESS</h3>
                      </div>
                      <button onClick={() => setSelectedBet(null)} className="mt-2 border border-dashed border-white/40 px-4 py-2 text-white/40 text-xs font-mono cursor-pointer rounded">CLOSE</button>
                    </>
                  ) : (
                    <>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Bet placed successfully!</h3>
                        <p className="text-white/50 text-sm">Good luck.</p>
                      </div>
                      <button onClick={() => setSelectedBet(null)} className="mt-2 text-white/40 hover:text-white text-sm font-medium cursor-pointer">Close</button>
                    </>
                  )}
                </div>
              ) : (
                <div className="p-6">
                  {viewMode === 'wireframe' ? (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="w-24 h-3 bg-white/10 rounded mb-2"></div>
                          <div className="w-32 h-6 bg-white/30 rounded"></div>
                        </div>
                        <button onClick={() => setSelectedBet(null)} className="text-white/40 cursor-pointer"><X size={20} /></button>
                      </div>
                      
                      <div className="h-16 border-2 border-dashed border-white/20 bg-white/5 rounded-2xl mb-6"></div>

                      <button 
                        onClick={() => setBetPlaced(true)}
                        className="w-full border-2 border-dashed border-white/40 text-white/40 font-mono py-4 rounded-xl text-sm cursor-pointer"
                      >
                        PLACE BET ACTION
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">{selectedBet.match}</div>
                          <div className="text-xl font-bold text-white">Pick: {selectedBet.pick}</div>
                        </div>
                        <button onClick={() => setSelectedBet(null)} className="text-white/40 hover:text-white bg-white/5 p-2 rounded-full cursor-pointer"><X size={16} /></button>
                      </div>
                      
                      <div className="flex justify-between items-center bg-black/30 p-4 rounded-2xl border border-white/5 mb-6 shadow-inner">
                        <span className="text-white/60 text-sm font-medium">Odds</span>
                        <span className="text-accent text-2xl font-black">{selectedBet.odds}</span>
                      </div>

                      <button 
                        onClick={() => setBetPlaced(true)}
                        className="w-full bg-accent hover:bg-accent-hover text-black font-extrabold py-4 rounded-xl text-[16px] shadow-[0_4px_20px_rgba(204,255,0,0.2)] transition-all active:scale-[0.98] cursor-pointer"
                      >
                        Place Bet
                      </button>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buzzer Modal Overlay */}
        <AnimatePresence>
          {showBuzzer && <BuzzerModal mode={viewMode} onClose={() => { setShowBuzzer(false); if (activeTab === 'buzzer') setActiveTab('live'); }} />}
        </AnimatePresence>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab === 'buzzer' ? 'live' : activeTab} setActiveTab={setActiveTab} mode={viewMode} />

      </div>
      </div>
    </div>
  );
}

// --- Screens & Components ---

function LiveFeed({ mode, highlightHierarchy, onBetSelect }: { mode: ViewMode, highlightHierarchy?: boolean, onBetSelect?: (match: string, pick: string, odds: string) => void }) {
  const isWireframe = mode === 'wireframe';

  return (
    <div className="flex flex-col pb-6">
      {/* Header */}
      <header className={`flex justify-between items-center px-5 py-2 transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
        {isWireframe ? (
          <div className="h-6 w-24 bg-white/20 rounded"></div>
        ) : (
          <div className="text-xl font-bold tracking-tight">Bet<span className="text-accent">Ease</span></div>
        )}
        
        {isWireframe ? (
          <div className="h-8 w-24 bg-white/10 border border-white/20 border-dashed rounded-full"></div>
        ) : (
          <div className="flex items-center gap-2 bg-bg-card py-1.5 pl-4 pr-1.5 rounded-full border border-white/5 shadow-sm">
            <span className="text-sm font-bold text-accent">€145.50</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <UserCircle2 size={16} className="text-white/80" />
            </div>
          </div>
        )}
      </header>

      {/* Categories */}
      <div className={`flex gap-3 px-5 py-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
        {['ALL', '⚽ Football', '🏀 Basketball', '🎾 Tennis'].map((cat, i) => (
          <div key={i} className={`shrink-0 cursor-pointer px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
            isWireframe 
              ? i === 1 ? 'border-2 border-white/40 text-white/80' : 'border border-dashed border-white/20 text-white/40'
              : i === 1 ? 'bg-accent text-black font-bold shadow-md shadow-accent/20' : 'bg-bg-card font-semibold text-white/70 border border-white/5 hover:bg-white/5'
          }`}>
            {isWireframe ? (i === 0 ? 'ALL' : 'CATEGORY') : cat}
          </div>
        ))}
      </div>

      {/* Match Cards */}
      <div className="px-5 space-y-4">
        {/* Match 1 */}
        {isWireframe ? <WireframeMatchCard live onBetSelect={() => onBetSelect?.('WIREFRAME MATCH', 'PICK', 'X.XX')} /> : (
          <MatchCard 
             liveTime="78'"
             league="La Liga"
             team1="Barcelona"
             score1="2"
             team2="Real Mad."
             score2="1"
             odds1="1.18"
             oddsX="4.50" trendX="up"
             odds2="9.00"
             onBetSelect={onBetSelect}
             highlightHierarchy={highlightHierarchy}
          />
        )}

        {/* Match 2 */}
        {isWireframe ? <WireframeMatchCard live onBetSelect={() => onBetSelect?.('WIREFRAME MATCH', 'PICK', 'X.XX')} /> : (
          <MatchCard 
             liveTime="32'"
             league="Premier League"
             team1="Arsenal"
             score1="0"
             team2="Chelsea"
             score2="0"
             odds1="2.40"
             oddsX="2.90"
             odds2="3.10"
             onBetSelect={onBetSelect}
             highlightHierarchy={highlightHierarchy}
          />
        )}
      </div>
    </div>
  );
}

function MyBets({ mode }: { mode: ViewMode }) {
  const isWireframe = mode === 'wireframe';
  const [isCashedOut, setIsCashedOut] = useState(false);

  return (
    <div className="flex flex-col px-5 py-4 h-full">
      <h2 className={`text-xl font-bold text-center mb-6 ${isWireframe ? 'text-white/40 font-mono tracking-widest uppercase text-sm' : ''}`}>
        {isWireframe ? 'OPEN BETS' : 'Open Bets'}
      </h2>

      {isWireframe ? (
        <div className="border-2 border-dashed border-white/20 rounded-2xl p-5 bg-white/5 space-y-4">
           <div className="h-4 w-32 bg-white/10 rounded"></div>
           <div className="h-6 w-48 bg-white/20 rounded"></div>
           <div className="h-4 w-24 bg-white/10 rounded"></div>
           <div className="pt-6 border-t border-dashed border-white/10 mt-6">
               <div className="h-3 w-20 bg-white/10 rounded mb-2"></div>
               <div className="h-8 w-32 bg-white/20 rounded"></div>
           </div>
           {/* Wireframe Swipe */}
           <div className="mt-8 h-14 w-full border border-dashed border-white/30 rounded-full flex items-center p-1">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="mx-auto text-xs text-white/40 tracking-widest">SWIPE TO ACTION</div>
           </div>
        </div>
      ) : (
        <motion.div 
          layout
          className={`bg-bg-card rounded-[24px] p-6 border transition-colors ${isCashedOut ? 'border-success/50 bg-success/5' : 'border-white/10 shadow-2xl relative overflow-hidden'}`}
        >
          {isCashedOut && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-4 -right-4 w-24 h-24 bg-success/20 rounded-full blur-xl"></motion.div>
          )}

          <div className="text-sm text-white/50 font-medium mb-1">Barcelona vs Real Madrid</div>
          <div className="text-lg font-bold mb-1">Winner: Barcelona</div>
          <div className="text-sm text-white/50 mb-6">Stake: €50.00</div>
          
          <div className="text-sm text-white/50 font-medium">Current Return</div>
          <motion.div 
            key={isCashedOut ? 'cashed' : 'active'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-black mt-1 tracking-tight ${isCashedOut ? 'text-success' : 'text-accent'}`}
          >
            €145.50
          </motion.div>

          {/* Swipe-to-Cash-Out Interaction */}
          <div className="mt-8">
            {!isCashedOut ? (
              <div className="relative w-full h-14 bg-black/40 rounded-full border border-tertiary/20 overflow-hidden flex items-center justify-center shadow-inner">
                 <span className="text-tertiary text-[13px] font-bold tracking-wide z-0 uppercase">Swipe for Cash Out</span>
                 
                 <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 230 }} // Approx width minus thumb
                    dragElastic={0.05}
                    onDragEnd={(e, info) => {
                       if (info.offset.x > 180) { // Threshold to trigger
                         setIsCashedOut(true);
                       }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-1 top-1 bottom-1 w-12 bg-accent rounded-full flex items-center justify-center z-10 cursor-grab active:cursor-grabbing shadow-lg"
                 >
                    <ArrowRight className="text-black" size={20} strokeWidth={3} />
                 </motion.div>
              </div>
            ) : (
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="w-full h-14 bg-success/20 text-success rounded-full flex items-center justify-center font-bold gap-2"
              >
                 <CheckCircle2 size={20} /> Successful Cash Out
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// --- Shared Elements ---

function MatchCard({
  liveTime,
  league,
  team1,
  team2,
  score1,
  score2,
  odds1,
  oddsX,
  odds2,
  trend1,
  trendX,
  trend2,
  onBetSelect,
  highlightHierarchy,
}: {
  liveTime: string;
  league: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  odds1: string;
  oddsX: string;
  odds2: string;
  trend1?: 'up' | 'down';
  trendX?: 'up' | 'down';
  trend2?: 'up' | 'down';
  onBetSelect?: (match: string, pick: string, odds: string) => void;
  highlightHierarchy?: boolean;
}) {
  const matchName = `${team1} - ${team2}`;
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="cursor-pointer bg-bg-card rounded-2xl p-3 border border-white/5 shadow-md relative overflow-hidden flex flex-col gap-2.5 hover:border-white/20 transition-colors">
      {/* Decor */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full pointer-events-none transition-opacity ${highlightHierarchy ? 'opacity-10' : 'opacity-100'}`}></div>

      {/* Header */}
      <div className={`flex justify-between items-center transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
         <div className="flex items-center gap-1.5 text-danger font-bold text-[10px] tracking-wider uppercase">
           <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-danger"></motion.div>
           Live {liveTime}
         </div>
         <div className="text-[10px] text-white/40 font-semibold tracking-wide">{league}</div>
      </div>
      
      {/* Content */}
      <div className="flex justify-between items-center">
        {/* Teams & Scores Stack */}
        <div className={`flex-1 flex flex-col gap-1.5 pr-2 transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
           <div className="flex justify-between items-center pr-2 border-r border-white/5">
              <span className="text-[14px] font-semibold truncate leading-none">{team1}</span>
              <span className="text-[15px] font-black text-accent ml-2">{score1}</span>
           </div>
           <div className="flex justify-between items-center pr-2 border-r border-white/5">
              <span className="text-[14px] font-semibold opacity-80 truncate leading-none">{team2}</span>
              <span className="text-[15px] font-bold opacity-80 ml-2">{score2}</span>
           </div>
        </div>

        {/* Compact Odds */}
        <div className="flex gap-1 pl-1 shrink-0 z-10 relative">
           {highlightHierarchy && <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-110"></div>}
           <CompactOddsButton label="1" odds={odds1} trend={trend1} onClick={() => onBetSelect?.(matchName, team1, odds1)} highlightHierarchy={highlightHierarchy} />
           <CompactOddsButton label="X" odds={oddsX} trend={trendX} onClick={() => onBetSelect?.(matchName, 'Draw', oddsX)} highlightHierarchy={highlightHierarchy} />
           <CompactOddsButton label="2" odds={odds2} trend={trend2} onClick={() => onBetSelect?.(matchName, team2, odds2)} highlightHierarchy={highlightHierarchy} />
        </div>
      </div>
    </motion.div>
  );
}

function CompactOddsButton({ label, odds, trend, onClick, highlightHierarchy }: { label: string, odds: string, trend?: 'up' | 'down', onClick?: () => void, highlightHierarchy?: boolean }) {
  return (
    <button onClick={(e) => { e.stopPropagation(); onClick?.(); }} className={`cursor-pointer w-12 py-1.5 bg-black/40 hover:bg-black/80 transition-colors rounded-lg flex flex-col items-center justify-center gap-0.5 relative z-10 ${highlightHierarchy ? 'border-accent shadow-[0_0_10px_rgba(204,255,0,0.4)]' : 'border-white/10'}`}>
      {trend === 'up' && <div className="absolute -top-1 -right-1 bg-success/20 rounded-full p-0.5"><ArrowUp size={8} className="text-success" strokeWidth={3} /></div>}
      {trend === 'down' && <div className="absolute -top-1 -right-1 bg-danger/20 rounded-full p-0.5"><ArrowDown size={8} className="text-danger" strokeWidth={3} /></div>}
      <span className="text-[9px] text-white/40 font-semibold leading-none">{label}</span>
      <span className="text-[12px] font-bold font-mono tracking-tighter leading-none text-white">{odds}</span>
    </button>
  );
}

function WireframeMatchCard({ live, onBetSelect }: { live?: boolean, onBetSelect?: () => void }) {
  return (
    <div className="border border-dashed border-white/20 bg-white/5 rounded-2xl p-3 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className={`h-3 w-12 rounded ${live ? 'bg-danger/40' : 'bg-white/10'}`}></div>
        <div className="h-3 w-16 bg-white/10 rounded"></div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 flex flex-col gap-2.5 pr-3 border-r border-dashed border-white/10">
           <div className="flex justify-between items-center">
              <div className="h-4 w-20 bg-white/20 rounded"></div>
              <div className="h-4 w-4 bg-white/30 rounded"></div>
           </div>
           <div className="flex justify-between items-center">
              <div className="h-4 w-20 bg-white/20 rounded"></div>
              <div className="h-4 w-4 bg-white/30 rounded"></div>
           </div>
        </div>
        <div className="flex gap-1.5 pl-3 shrink-0">
           <div onClick={(e) => { e.stopPropagation(); onBetSelect?.(); }} className="w-12 h-[34px] border border-dashed border-white/20 rounded-lg bg-white/5 cursor-pointer"></div>
           <div onClick={(e) => { e.stopPropagation(); onBetSelect?.(); }} className="w-12 h-[34px] border border-dashed border-white/20 rounded-lg bg-white/5 cursor-pointer"></div>
           <div onClick={(e) => { e.stopPropagation(); onBetSelect?.(); }} className="w-12 h-[34px] border border-dashed border-white/20 rounded-lg bg-white/5 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ activeTab, setActiveTab, mode, highlightHierarchy }: { activeTab: Tab, setActiveTab: (t: Tab) => void, mode: ViewMode, highlightHierarchy?: boolean }) {
  const isWireframe = mode === 'wireframe';
  
  if (isWireframe) {
    return (
      <div className={`absolute bottom-0 w-full h-[88px] bg-black border-t border-white/20 border-dashed flex justify-around px-2 pt-4 pb-8 z-50 transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex flex-col items-center gap-1.5 opacity-40">
            <div className="w-6 h-6 border border-white/50 border-dashed rounded"></div>
            <div className="w-8 h-2 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`absolute bottom-0 w-full bg-bg-app/90 backdrop-blur-md border-t border-white/5 flex justify-around px-2 py-3 pb-8 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-all ${highlightHierarchy ? 'opacity-30 grayscale' : 'opacity-100'}`}>
       <button className="cursor-pointer flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
          <Home size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-semibold uppercase">Home</span>
       </button>
       <button onClick={() => setActiveTab('live')} className={`cursor-pointer flex flex-col items-center gap-1 transition-colors ${activeTab === 'live' ? 'text-accent' : 'text-white/40 hover:text-white'}`}>
          <PlayCircle size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-semibold uppercase">In-Play</span>
       </button>
       <button onClick={() => setActiveTab('bets')} className={`cursor-pointer flex flex-col items-center gap-1 transition-colors ${activeTab === 'bets' ? 'text-accent' : 'text-white/40 hover:text-white'}`}>
          <Receipt size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-semibold uppercase">Bets</span>
       </button>
       <button className="cursor-pointer flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
          <User size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-semibold uppercase">Profile</span>
       </button>
    </div>
  );
}

function BuzzerModal({ mode, onClose }: { mode: ViewMode, onClose: () => void }) {
  const isWireframe = mode === 'wireframe';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
      className="absolute bottom-24 left-0 w-full px-5 z-[100]"
    >
      {isWireframe ? (
        <div className="bg-black border-2 border-dashed border-white/40 rounded-2xl p-5 shadow-2xl relative text-white">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/40 cursor-pointer"><X size={20} /></button>
          <div className="h-6 w-32 bg-danger/20 border border-danger/40 border-dashed rounded mb-4"></div>
          <div className="h-6 w-48 bg-white/30 rounded mb-2"></div>
          <div className="h-4 w-full bg-white/10 rounded mb-6"></div>
          <div className="h-12 w-full border-2 border-dashed border-white/50 rounded-xl flex items-center justify-center">
            <span className="text-white/40 font-mono text-xs">CTA BUTTON</span>
          </div>
        </div>
      ) : (
        <div className="bg-bg-card border border-accent/30 rounded-[24px] p-6 shadow-[0_0_50px_rgba(204,255,0,0.15)] relative overflow-hidden backdrop-blur-xl text-white">
          {/* Neon Glow effect background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent shadow-[0_0_20px_rgba(204,255,0,1)]"></div>
          
          <button onClick={onClose} className="cursor-pointer absolute top-5 right-5 text-white/40 hover:text-white bg-black/20 p-1.5 rounded-full backdrop-blur-md transition-colors z-20">
            <X size={16} strokeWidth={3} />
          </button>
          
          <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="flex items-center gap-2 text-danger font-bold text-base mb-3 max-w-[85%]">
            <Clock size={18} /> 88:45' - Expiring Soon!
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">Next Goal: Real Madrid</h3>
          <p className="text-[13px] text-white/60 mb-5 leading-relaxed pr-4">
            Real is pressing hard. Do you think they'll score in the final minutes?
          </p>
          
          <motion.button 
             onClick={onClose} 
             animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
             transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
             className="cursor-pointer relative z-10 w-full bg-accent hover:bg-accent-hover text-black font-extrabold py-3.5 rounded-xl text-[15px] shadow-[0_4px_20px_rgba(204,255,0,0.3)] transition-colors active:scale-[0.98]"
          >
            Odds 3.40 | €10 1-Tap
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
