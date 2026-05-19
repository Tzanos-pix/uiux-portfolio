import fs from 'fs';

function makeDark(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/bg-zinc-50/g, 'bg-zinc-900 border-beam')
                   .replace(/border-zinc-200/g, 'border-zinc-800')
                   .replace(/text-zinc-900/g, 'text-white font-display tracking-tight')
                   .replace(/bg-white/g, 'bg-zinc-950')
                   .replace(/shadow-zinc-200\/50/g, 'shadow-emerald-500/20')
                   .replace(/bg-gray-50/g, 'bg-zinc-900')
                   .replace(/border-gray-200/g, 'border-zinc-800')
                   .replace(/border-gray-100/g, 'border-zinc-800')
                   // .replace(/bg-zinc-950/g, 'bg-zinc-950')
                   .replace(/text-black/g, 'text-zinc-950')
                   // shimmer
                   .replace(/button/g, 'button')
                   .replace(/text-emerald-600/g, 'text-emerald-500')
                   .replace(/text-purple-600/g, 'text-purple-400')
                   .replace(/text-\|#22c55e/gi, 'text-emerald-400')
                   .replace(/bg-app-text/g, 'bg-zinc-900 border-beam')
                   // add noise overlay to main containers if missing
                   ;
                   
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

['src/pages/Home.tsx', 'src/pages/AgromaniCaseStudy.tsx', 'src/pages/MambaCaseStudy.tsx'].forEach(makeDark);
