const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The file has a <main> or just a sequence of sections.
// Let's split the HTML before the first section, and after the last section.
const firstSectionIdx = html.indexOf('<section id="about"');
const lastSectionEndIdx = html.lastIndexOf('</section>') + '</section>'.length;

const prefix = html.substring(0, firstSectionIdx);
const suffix = html.substring(lastSectionEndIdx);

const bodyStr = html.substring(firstSectionIdx, lastSectionEndIdx);

// Extract all sections and their preceding comments.
// We'll split by `<section id="` but keep the preceding comments attached to the section.
// Actually, it's safer to use regex to find sections.
const sectionRegex = /(?:[ \t]*<!--[\s\S]*?-->\s*)*<section id="([^"]+)"[\s\S]*?<\/section>/g;

let sections = {};
let match;
while ((match = sectionRegex.exec(bodyStr)) !== null) {
  sections[match[1]] = match[0];
}

console.log("Found sections:", Object.keys(sections).join(", "));

// Define the new order
const newOrder = [
  "about",
  "steps",
  "programs",
  "special-offer",
  "backstage",
  "video-backstage",
  "reviews",
  "text-reviews",
  "team",
  "faq",
  "contact"
];

let newBody = "";
for (const id of newOrder) {
  if (sections[id]) {
    newBody += sections[id] + "\n\n";
  } else {
    console.error("Missing section: " + id);
  }
}

// Ensure nothing is lost if there were extra sections not in `newOrder`.
const allIds = Object.keys(sections);
for (const id of allIds) {
  if (!newOrder.includes(id)) {
    console.warn("Extra section found and added at end: " + id);
    newBody += sections[id] + "\n\n";
  }
}

fs.writeFileSync('index.html', prefix + newBody + suffix);
console.log("Done rearranging sections.");
