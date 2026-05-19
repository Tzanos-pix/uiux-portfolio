import fs from 'fs';

function fixIcons(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/className="mr-3 text-zinc-400"/g, 'className="mr-2 text-zinc-950"');
    content = content.replace(/className="ml-3 group-hover:-translate-x-1 transition-transform text-zinc-400"/g, 'className="ml-2 group-hover:-translate-x-1 transition-transform text-zinc-950"');
    content = content.replace(/className="ml-3 group-hover:translate-x-1 transition-transform text-zinc-400"/g, 'className="ml-2 group-hover:translate-x-1 transition-transform text-zinc-950"');
    
    content = content.replace(/className="group-hover:-translate-x-1 transition-transform text-zinc-400"/g, 'className="group-hover:-translate-x-1 transition-transform text-zinc-950"');
    
    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx'].forEach(fixIcons);
