import fs from 'fs';

function fixAgromaniTag(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // In Home.tsx, change Agromani tag
    content = content.replace(/className="px-3 py-1 bg-zinc-950 text-zinc-400 font-bold text-\[10px\] rounded-lg uppercase tracking-widest mb-4 self-start border border-zinc-800 shadow-sm/g, 'className="px-3 py-1 bg-zinc-950 text-[#142AEC] font-bold text-[10px] rounded-lg uppercase tracking-widest mb-4 self-start border border-zinc-800 shadow-sm');
    
    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx'].forEach(fixAgromaniTag);
