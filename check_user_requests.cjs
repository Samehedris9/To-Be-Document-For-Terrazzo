const fs = require('fs');
const readline = require('readline');

async function allUserRequests() {
  const fileStream = fs.createReadStream('C:\\Users\\Sameh Edris\\.gemini\\antigravity\\brain\\7eae638f-8974-440e-8743-81786780e194\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let i = 0;
  for await (const line of rl) {
    if (line.includes('<USER_REQUEST>')) {
      i++;
      const match = line.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
      if (match) {
        console.log('#' + i + ': ' + match[1].replace(/\\n/g, ' ').substring(0, 150));
      }
    }
  }
}
allUserRequests();
