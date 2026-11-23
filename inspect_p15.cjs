const fs = require('fs');

const p2 = fs.readFileSync('src_pages/pages6_10.js', 'utf8');
const p15Index = p2.indexOf('id="page-15"');
const p16Index = p2.indexOf('id="page-16"');
console.log(p2.substring(p15Index, p16Index));
