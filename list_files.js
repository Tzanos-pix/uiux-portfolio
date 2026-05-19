fetch('https://api.github.com/repos/Tzanos-pix/portfolio-2026/contents/public/plaisio').then(r=>r.json()).then(j=>console.log(j.map(f=>f.name)))
