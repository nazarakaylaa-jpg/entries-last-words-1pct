// Famous Last Words at 1 Percent — u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// One line, the funniest last words a phone says as its battery hits 1 percent.
// Chosen line: the phone spends its final percent on one last autocorrect —
// a real twist, in the phone's own voice, punch landing at the very end.
// Avoids the stock moves: no will reading, no goodbye to the charger, no 1% pun.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One percent. For my final act, I am autocorrecting your last text to your boss. It now says what you really meant.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Gate mirror: entry must be 1-199 characters, one line, not only whitespace.
// Fail loudly instead of shipping an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 199) throw new Error(`entry is ${chars} chars, must be 1-199`);
if (LINE.trim().length === 0 || LINE.includes("\n")) throw new Error("entry must be a single non-blank line");

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
