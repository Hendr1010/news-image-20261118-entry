// news-image-20261118 entry: writes the day's front-page image to the output dir.
// The image is the entry.png beside this file; the program only copies it, so both
// grader runs write byte-identical output. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
// One file in, one file out: no network, no randomness, the same bytes every run.
