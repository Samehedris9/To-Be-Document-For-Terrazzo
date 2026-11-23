const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let chrome = chromePaths.find(p => fs.existsSync(p));
if (!chrome) {
  console.error('Chrome not found');
  process.exit(1);
}

const htmlPath = path.resolve('index.html');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
const pdfPath = path.resolve('To_Be_Document_Terrazzo_v0.3_with_flowcharts.pdf');

console.log('Exporting PDF from:', fileUrl);
console.log('To:', pdfPath);

const args = [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  fileUrl
];

const res = cp.spawnSync(chrome, args, { stdio: 'inherit' });
if (fs.existsSync(pdfPath)) {
  const stat = fs.statSync(pdfPath);
  console.log(`Success! PDF exported: ${pdfPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
} else {
  console.error('PDF export failed');
}
