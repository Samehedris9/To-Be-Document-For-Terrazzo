// build_pages16_21.js - Compiles Pages 19 to 27 of To-Be Document v0.3
import fs from 'fs';

const indexHtml = fs.readFileSync('index.html', 'utf8');
const oldPages16_21 = fs.readFileSync('src_pages/pages16_21.js', 'utf8');

function extractSection(source, pageId) {
    const regex = new RegExp(`<!-- =+ PAGE [^>]+=+ -->\\s*<section class="a4-page" id="${pageId}">[\\s\\S]*?</section>`, 'i');
    const match = source.match(regex);
    if (match) return match[0];
    
    // Fallback: search by id
    const startIdx = source.indexOf(`id="${pageId}"`);
    if (startIdx === -1) return null;
    const sectionStart = source.lastIndexOf('<section', startIdx);
    const sectionEnd = source.indexOf('</section>', startIdx) + 10;
    return source.slice(sectionStart, sectionEnd);
}

// 1. Extract Old Pages 14, 15, 16 from indexHtml
let p14 = extractSection(indexHtml, 'page-14'); // Becomes Page 19
let p15 = extractSection(indexHtml, 'page-15'); // Becomes Page 20
let p16 = extractSection(indexHtml, 'page-16'); // Becomes Page 21

// 2. Extract Old Pages 17 to 22 from oldPages16_21
let p17 = extractSection(oldPages16_21, 'page-17'); // Becomes Page 22
let p18 = extractSection(oldPages16_21, 'page-18'); // Becomes Page 23
let p19 = extractSection(oldPages16_21, 'page-19'); // Becomes Page 24
let p20 = extractSection(oldPages16_21, 'page-20'); // Becomes Page 25
let p21 = extractSection(oldPages16_21, 'page-21'); // Becomes Page 26
let p22 = extractSection(oldPages16_21, 'page-22'); // Becomes Page 27

function transformPage(rawHtml, oldId, newId, newNum) {
    let html = rawHtml;
    // Replace comment
    html = html.replace(new RegExp(`PAGE \\d+:`, 'g'), `PAGE ${newNum}:`);
    // Replace id
    html = html.replace(`id="${oldId}"`, `id="${newId}"`);
    // Replace footer
    html = html.replace(/<span>الصفحة\s+\d+\s+من\s+\d+[^<]*<\/span>/g, `<span>الصفحة ${newNum < 10 ? '0' + newNum : newNum} من 27${newNum === 27 ? ' (نهاية الوثيقة)' : ''}</span>`);
    return html;
}

const newP19 = transformPage(p14, 'page-14', 'page-19', 19);
const newP20 = transformPage(p15, 'page-15', 'page-20', 20);
const newP21 = transformPage(p16, 'page-16', 'page-21', 21);
const newP22 = transformPage(p17, 'page-17', 'page-22', 22);
const newP23 = transformPage(p18, 'page-18', 'page-23', 23);
const newP24 = transformPage(p19, 'page-19', 'page-24', 24);
const newP25 = transformPage(p20, 'page-20', 'page-25', 25);
const newP26 = transformPage(p21, 'page-21', 'page-26', 26);
const newP27 = transformPage(p22, 'page-22', 'page-27', 27);

const finalFileContent = `// src_pages/pages16_21.js - Pages 19 through 27 of To-Be Document v0.3
// Metrics, Traceability, Risks, Roadmap, Sign-off & Complete Appendices A, B, C.

export function getPages16to21() {
    return \`
${newP19}

${newP20}

${newP21}

${newP22}

${newP23}

${newP24}

${newP25}

${newP26}

${newP27}
    \`;
}
`;

fs.writeFileSync('src_pages/pages16_21.js', finalFileContent, 'utf-8');
console.log('Successfully written src_pages/pages16_21.js with Pages 19 to 27!');
