import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const htmlPath = join(root, "index.html");
const cssPath = join(root, "styles.css");
const jsPath = join(root, "script.js");

assert(existsSync(htmlPath), "index.html should exist");
assert(existsSync(cssPath), "styles.css should exist");
assert(existsSync(jsPath), "script.js should exist");

const html = readFileSync(htmlPath, "utf8");
const css = readFileSync(cssPath, "utf8");
const js = readFileSync(jsPath, "utf8");

assert(html.includes("executive-design"), "Executive design marker is missing");
assert(html.includes("executive-hero"), "Executive hero marker is missing");
assert(html.includes("assets/trinity-knot-logo.png"), "Trinity knot logo image is not referenced");
assert(existsSync(join(root, "assets", "trinity-knot-logo.png")), "Trinity knot logo asset is missing");
assert((html.match(/assets\/trinity-knot-logo\.png/g) || []).length >= 3, "Trinity knot logo should appear in at least three site areas");
["--navy", "--paper", "--gold"].forEach((token) => {
  assert(css.includes(token), `Missing executive palette token: ${token}`);
});
["--copper", "--concrete", "--teal-deep"].forEach((token) => {
  assert(css.includes(token), `Missing copper/concrete design token: ${token}`);
});
[
  "stitch-inspired",
  "structural-disciplines",
  "project-intelligence",
].forEach((marker) => {
  assert(html.includes(marker), `Missing Stitch-inspired executive marker: ${marker}`);
});
assert(!css.includes("background-size: 72px 72px"), "Old technical grid background should be removed");
assert(!/Material Integrity|The raw truth|Apex Pavilion|London, UK|240\+|2024 SSE/i.test(html), "Stitch placeholder content should not be present");

[
  "hero",
  "proof",
  "about",
  "services",
  "projects",
  "values",
  "contact",
].forEach((id) => {
  assert(html.includes(`id="${id}"`), `Missing #${id} section`);
});

[
  "Systems &amp; Services Engineers",
  "28+ years",
  "Project Management",
  "Electrical Building Services",
  "Mechanical Building Services",
  "Facilities Management",
  "Electrical Power Systems",
  "Civil Engineering",
  "Mining and Production",
  "Botswana Innovation Hub",
  "Debswana Technical Support Centre",
].forEach((phrase) => {
  assert(html.includes(phrase), `Missing required phrase: ${phrase}`);
});

assert(html.includes("assets/sse-engineering-hero.png"), "Hero image is not referenced");
assert(existsSync(join(root, "assets", "sse-engineering-hero.png")), "Hero image asset is missing");
assert(html.includes("project-gallery"), "Project image gallery is missing");

const projectImageRefs = [...html.matchAll(/assets\/projects\/project-[0-9]{2}\.(?:jpg|png)/g)].map((match) => match[0]);
assert(projectImageRefs.length >= 8, "At least 8 DOCX project images should be used");
new Set(projectImageRefs).forEach((ref) => {
  assert(existsSync(join(root, ref)), `Referenced project image is missing: ${ref}`);
});

assert(css.includes("@media"), "Responsive CSS media queries are missing");
assert(css.includes(":focus-visible"), "Accessible focus styles are missing");
assert(js.includes("IntersectionObserver"), "Reveal behavior should use IntersectionObserver");
assert(!/lorem|placeholder|TODO|TBD/i.test(`${html}\n${css}\n${js}`), "Placeholder text remains");

console.log("Static site checks passed.");
