import fs from 'fs';

const html = fs.readFileSync('v0-site-clean.html', 'utf8');

const matches = html.match(/class="([^"]*)"/g);
if (matches) {
  const classSets = new Set();
  for (const m of matches) {
    const cls = m.substring(7, m.length - 1);
    const parts = cls.split(/\s+/).filter(Boolean);
    parts.forEach(p => classSets.add(p));
  }
  const classes = Array.from(classSets).sort();
  fs.writeFileSync('v0-site-classes.txt', classes.join('\n'));
  console.log("Found", classes.length, "classes");
}
