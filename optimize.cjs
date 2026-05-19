const fs = require('fs');

const files = fs.readdirSync('src/pages').filter(f => f.endsWith('.tsx')).map(f => 'src/pages/'+f);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;
  content = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
    count++;
    if (match.includes('loading=')) return match;
    // Hero image logic for first img
    if (count === 1) {
      return `<img fetchpriority="high" loading="eager" decoding="async"${p1}>`;
    }
    return `<img loading="lazy" decoding="async"${p1}>`;
  });
  fs.writeFileSync(file, content);
});
console.log('Images updated.');
