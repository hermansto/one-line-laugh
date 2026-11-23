import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed line, written exactly as-is on every run: no randomness,
// no clock, no network, so the output file is byte-identical each time.
const LINE =
  "I set five alarms to wake up early, then slept through all of them \u2014 my snooze button deserves a promotion.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
