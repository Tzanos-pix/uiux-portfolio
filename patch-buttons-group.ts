import fs from 'fs';

function fixButtonsGroup(filePath: string) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/className="inline-flex items-center justify-center gap-2 whitespace-nowrap/g, 'className="group cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap');

    fs.writeFileSync(filePath, content);
  }
}

['src/pages/Home.tsx', 'src/pages/PlaisioCaseStudy.tsx'].forEach(fixButtonsGroup);
