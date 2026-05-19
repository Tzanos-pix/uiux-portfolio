import fs from 'fs';

function fixFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/shadow-emerald-500\/[0-9]+/g, 'shadow-white/5')
                     .replace(/bg-app-primary .* blur-2xl/g, 'bg-zinc-600 rounded-full blur-2xl')
                     .replace(/pulse-glow/g, '')
                     .replace(/selection:bg-emerald-500\/30/g, 'selection:bg-zinc-800')
                     .replace(/selection:text-emerald-100/g, 'selection:text-white')
                     .replace(/bg-emerald-500\/20/g, 'bg-zinc-800')
                     .replace(/border-emerald-500\/20/g, 'border-zinc-700')
                     ;
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx', 'src/pages/AgromaniCaseStudy.tsx', 'src/pages/MambaCaseStudy.tsx'].forEach(fixFile);
