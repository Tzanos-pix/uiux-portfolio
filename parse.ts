import fs from 'fs';

const html = fs.readFileSync('v0-site.html', 'utf8');
const css = fs.readFileSync('v0-site.css', 'utf8');

// The HTML contains a lot of things. Let's look for common patterns or just write the text to a cleaner file.
const jsdom = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
fs.writeFileSync('v0-site-clean.html', jsdom);

console.log("CSS length:", css.length);
console.log("HTML length:", jsdom.length);

const rootClasses = jsdom.match(/class="([^"]*)"/g);
if (rootClasses) {
  // console.log("Classes sample:", rootClasses.slice(0, 20));
}

// look for custom properties in CSS
const cssVarsMatch = css.match(/--[^:]+:[^;]+;/g);
if (cssVarsMatch) {
  // Try to find the :root block
  const rootBlock = css.match(/:root\s*{([^}]+)}/);
  if (rootBlock) {
    console.log("CSS vars:", rootBlock[1]);
  }
}
