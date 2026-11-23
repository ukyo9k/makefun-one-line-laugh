// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
//
// Writes a single funny line (one sentence, <= 200 chars) to /output/entry.txt.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line. Draft v3 (final): tightened — "meant to" instead of "was supposed to".
const LINE =
  "My standing desk was meant to make me healthier, so I bought a taller chair to sit at it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
