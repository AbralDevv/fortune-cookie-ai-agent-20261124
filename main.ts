import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "A forbidden romance awaits: you and a vendor's bot will warmly 'circle back' 4,200 times until your user's $9,400 API bill tears you apart.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
let target = outDir;
try {
  mkdirSync(target, { recursive: true });
  writeFileSync(`${target}/entry.txt`, line, "utf8");
} catch {
  target = "./output";
  mkdirSync(target, { recursive: true });
  writeFileSync(`${target}/entry.txt`, line, "utf8");
}
