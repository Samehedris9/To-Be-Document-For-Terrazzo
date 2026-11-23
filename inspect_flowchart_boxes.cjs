const fs = require('fs');

const files = ['pages1_5.js', 'pages6_10.js', 'pages11_15.js', 'pages16_21.js'];

files.forEach(f => {
  const content = fs.readFileSync('src_pages/' + f, 'utf8');
  const matches = content.match(/<div class=\"flowchart-figure-box\"[^>]*>/g);
  console.log(f, 'flowchart-figure-box matches:', matches ? matches.length : 0);
  const imgMatches = content.match(/<img[^>]*flowcharts_png[^>]*>/g);
  console.log(f, 'img flowcharts_png matches:', imgMatches ? imgMatches.length : 0);
});
