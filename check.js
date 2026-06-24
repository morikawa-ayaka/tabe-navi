const fs = require('fs');
const html = fs.readFileSync('outputs/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/);
if (!match) throw new Error('script missing');
new Function(match[1]);
console.log(`HTML: ${html.length} chars`);
console.log('JavaScript syntax: OK');
console.log(`Recipes: ${(match[1].match(/name:'/g) || []).length}`);
