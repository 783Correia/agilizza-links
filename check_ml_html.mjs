import fs from 'fs';

const html = fs.readFileSync('public/ml_list.html', 'utf8');

// Find the preloaded state
const match = html.match(/window\.__PRELOADED_STATE__\s*=\s*(.+?);<\/script>/);
if (match && match[1]) {
    try {
        const state = JSON.parse(match[1]);
        console.log("State keys:", Object.keys(state));
        // Usually it's in initialState or similar
        // Let's just find everything that looks like a product in the string
    } catch (e) {
        console.log("Parse error");
    }
}

// Alternatively, let's just regex all product titles from the HTML to see how many there are
// We know a product structure has "title":"..."
const titles = Array.from(html.matchAll(/"title":"([^"]+)"/g)).map(m => m[1]);
console.log("Unique titles found in HTML:", [...new Set(titles)].length);
