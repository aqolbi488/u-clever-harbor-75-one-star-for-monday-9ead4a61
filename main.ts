// One Star for Monday — a one-star review of Monday as if it were a restaurant.
// Writes a single deterministic line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Monday kept us waiting an hour, served cold coffee, then billed us for the whole week.";

// Gate guard: 1-180 chars, at most 25 words, single line, plain text.
const words = ENTRY.trim().split(/\s+/);
if (
  ENTRY.length < 1 ||
  ENTRY.length > 180 ||
  words.length > 25 ||
  ENTRY.includes("\n")
) {
  throw new Error("Entry fails the gate: check length, word count, or newlines.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
