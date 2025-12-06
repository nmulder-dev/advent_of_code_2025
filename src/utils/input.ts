import fs from "fs";
import path from "path";

export function getInput(day: number): string {
  const filename = `day${String(day).padStart(2, "0")}.txt`;
  const filepath = path.join(__dirname, "..", "inputs", filename);
  return fs.readFileSync(filepath, "utf-8");
}
