import fs from 'fs';

let css = fs.readFileSync('v0-site.css', 'utf8');
const customClasses = ['noise-overlay', 'pulse-glow', 'border-beam', 'shimmer-btn', 'animate-marquee'];
for (const cls of customClasses) {
  console.log(`Checking for ${cls}`);
  // grep index
  const idx = css.indexOf(cls);
  if (idx !== -1) {
    let start = css.lastIndexOf('}', idx);
    if(start === -1) start = 0;
    else start += 1;
    let end = css.indexOf('}', idx);
    console.log(css.substring(start, end + 1));
  }
}
