// build_to_be_html.js - Compiles the complete To-Be Document into index.html
import fs from 'fs';
import path from 'path';

import { getHead, getScripts } from './src_pages/styles.js';
import { getPages1to5 } from './src_pages/pages1_5.js';
import { getPages6to10 } from './src_pages/pages6_10.js';
import { getPages11to15 } from './src_pages/pages11_15.js';
import { getPages16to21 } from './src_pages/pages16_21.js';

console.log("Compiling To-Be Document...");

const fullHtml = [
    getHead(),
    getPages1to5(),
    getPages6to10(),
    getPages11to15(),
    getPages16to21(),
    '    </div><!-- end .doc-wrapper -->',
    getScripts()
].join('\n');

const outputPath = path.resolve('index.html');
fs.writeFileSync(outputPath, fullHtml, 'utf-8');

console.log(`Success! To-Be Document written to ${outputPath} (${fullHtml.length} characters)`);
