import fs from 'fs';

function fixButtons(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Any button with shimmer-btn that doesn't yet have bg-white text-zinc-950 will be replaced.
    content = content.replace(/className="[^"]*shimmer-btn[^"]*"/g, (match) => {
      // Revert to the exact styling from the v0 app for the primary button
      return 'className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] has-[>svg]:px-4 shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-white/10"';
    });

    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx'].forEach(fixButtons);
