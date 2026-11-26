// Last Text at One Percent — make.fun bounty
// Writes the funniest final text a dying phone sends at 1% battery.
// Gate: /output/entry.txt, UTF-8, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entry =
  "1% left. quick — delete my search history before i go. you know the ones. the 2am ones. and tell the charger it was never its fault. it was yours.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
console.log(entry);
