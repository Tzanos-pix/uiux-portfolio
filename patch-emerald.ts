import fs from 'fs';

function fixEmerald(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Specifically fix the TP logo
    content = content.replace(/bg-emerald-500 rounded flex items-center justify-center/g, 'bg-white rounded flex items-center justify-center');
    content = content.replace(/text-\[10px\] font-black text-white/g, 'text-[10px] font-black text-zinc-950');
    
    // Other emerald elements
    content = content.replace(/bg-emerald-500/g, 'bg-white');
    content = content.replace(/selection:bg-emerald-500\/[0-9]+/g, 'selection:bg-white/20');
    content = content.replace(/selection:text-emerald-[0-9]+/g, 'selection:text-zinc-900');

    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx'].forEach(fixEmerald);
