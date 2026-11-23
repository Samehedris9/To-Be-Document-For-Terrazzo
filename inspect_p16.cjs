const fs = require('fs');

const p2 = fs.readFileSync('src_pages/pages6_10.js', 'utf8');
const p16Index = p2.indexOf('id="page-16"');
const p17Index = p2.indexOf('id="page-17"');
console.log(p2.substring(p16Index, p17Index));
