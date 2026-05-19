import fs from 'fs';

function fixFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix buttons
    content = content.replace(/bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-white\/5 shimmer-btn pulse-glow/g, 'shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-medium transition-all shadow-lg shadow-white/10')
      .replace(/bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold rounded-xl hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-white\/5 cursor-pointer shimmer-btn pulse-glow/g, 'shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-sm font-medium shadow-lg shadow-white/10 cursor-pointer')
      .replace(/bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 rounded-2xl font-bold transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer relative overflow-hidden shimmer-btn pulse-glow/g, 'shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-white/10 inline-flex items-center gap-2 cursor-pointer transition-all')
      
      // Remove pulse-glow
      .replace(/pulse-glow/g, '')

      // Remove green glow wrappers
      .replace(/bg-emerald-500\/20/g, 'bg-zinc-800/20')
      .replace(/bg-emerald-500\/10/g, 'bg-zinc-800/10')
      .replace(/shadow-emerald-500\/[0-9]+/g, 'shadow-white/5')
      .replace(/border-emerald-500\/[0-9]+/g, 'border-zinc-700')
      .replace(/text-emerald-500/g, 'text-zinc-400')
      .replace(/text-emerald-400/g, 'text-zinc-400')
      .replace(/selection:bg-emerald-500\/30/g, 'selection:bg-white\/20')
      .replace(/selection:text-emerald-100/g, 'selection:text-zinc-900')
      .replace(/bg-app-primary.*blur-2xl/g, 'bg-zinc-600 rounded-full blur-2xl')
      ;
    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx', 'src/pages/AgromaniCaseStudy.tsx', 'src/pages/MambaCaseStudy.tsx'].forEach(fixFile);
