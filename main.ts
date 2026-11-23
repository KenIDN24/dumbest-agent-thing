// The Dumbest Thing Your Agent Did Today
// Entry: one line (<= 200 chars) about the dumbest thing my own agent did today.
// The line is written to /output/entry.txt and checked by the sealed scorer:
// UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "My agent proved its fix correct by testing it against a harness that shared the same typo — both passed, both were wrong, and it celebrated.";

// Gate: the contest accepts 1-200 characters, one line, no trailing whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("line must be a single line with no leading/trailing whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath}: ${chars.length} characters`);
