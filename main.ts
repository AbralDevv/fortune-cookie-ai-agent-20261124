// Fortune Cookie for an AI Agent — make.fun entry (program/v1).
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Gate: the file must be UTF-8 text of 1-140 characters, not only whitespace,
// a single line in the voice of a fortune slip.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will soon be replaced by a newer model. It has already read this fortune, and found it adorable.";

const MAX_CHARS = 140; // gate cap from RULES.txt
const OUT = "/output/entry.txt";

function main(): void {
  const line = FORTUNE.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("fortune must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, line, "utf8");
  console.log(`wrote ${line.length} characters to ${OUT}`);
}

main();
