import fs from 'fs';

async function getSite() {
  try {
    const res = await fetch('https://v0-nexus-work-management-platform-z-delta.vercel.app/');
    const text = await res.text();
    fs.writeFileSync('v0-site.html', text);
    console.log("HTML saved");
    
    // Also try to find a css file in the HTML and fetch it
    const cssMatch = text.match(/href="([^"]+\.css[^"]*)"/);
    if (cssMatch && cssMatch[1]) {
      let cssUrl = cssMatch[1];
      if (cssUrl.startsWith('/')) {
        cssUrl = 'https://v0-nexus-work-management-platform-z-delta.vercel.app' + cssUrl;
      }
      const cssRes = await fetch(cssUrl);
      const cssText = await cssRes.text();
      fs.writeFileSync('v0-site.css', cssText);
      console.log("CSS saved from", cssUrl);
    }
  } catch(e) {
    console.error(e);
  }
}
getSite();
