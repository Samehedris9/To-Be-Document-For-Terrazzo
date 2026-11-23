const fs = require('fs');

const styles = fs.readFileSync('src_pages/styles.js', 'utf8');
const fcIndex = styles.indexOf('flowchart-figure-box');
if (fcIndex !== -1) {
  console.log(styles.substring(fcIndex - 50, fcIndex + 1000));
}
