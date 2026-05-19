import fs from 'fs';

const filePath = 'src/pages/Home.tsx';
if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Standardize titles
  content = content.replace(/className="text-xl md:text-2xl font-bold mb-2 font-display tracking-tight text-white"/g, 
                            'className="text-2xl md:text-3xl font-bold mb-2 font-display tracking-tight text-white"');

  // Standardize subtitles
  // Plaisio (it had leading-snug originally - I'll make them all leading-relaxed)
  content = content.replace(/className="text-zinc-500 font-medium text-base md:text-lg leading-snug"/g, 
                            'className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed"');
  // Agromani
  content = content.replace(/className="text-zinc-500 font-medium mb-6 text-sm md:text-base leading-relaxed"/g, 
                            'className="text-zinc-500 font-medium mb-6 text-base md:text-lg leading-relaxed"');
  // Mamba
  content = content.replace(/className="text-zinc-500 font-medium text-sm md:text-base leading-relaxed"/g, 
                            'className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed"');
  
  // Stats block: "Years bridging the gap..."
  content = content.replace(/className="text-zinc-400 font-medium text-sm md:text-base leading-snug"/g, 
                            'className="text-zinc-400 font-medium text-base md:text-lg leading-relaxed"');

  fs.writeFileSync(filePath, content);
  console.log("Updated typography in Home.tsx");
}
