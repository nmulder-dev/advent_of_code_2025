import { Day01 } from "./days/day01";
import { getInput } from "./utils/input";

const day = parseInt(process.argv[2] || "1");

try {
  const input = getInput(day);

  let solution: any;

  switch (day) {
    case 1:
      solution = new Day01(input);
      break;
    // Add more days as you solve them
    default:
      console.error(`Day ${day} solution not implemented yet`);
      process.exit(1);
  }

  console.log(`Day ${day} Part 1: ${solution.part1()}`);
  console.log(`Day ${day} Part 2: ${solution.part2()}`);
} catch (error) {
  console.error(`Error running Day ${day}:`, error);
  process.exit(1);
}
