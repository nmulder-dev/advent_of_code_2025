"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day01_1 = require("./days/day01");
const input_1 = require("./utils/input");
const day = parseInt(process.argv[2] || "1");
try {
    const input = (0, input_1.getInput)(day);
    let solution;
    switch (day) {
        case 1:
            solution = new day01_1.Day01(input);
            break;
        // Add more days as you solve them
        default:
            console.error(`Day ${day} solution not implemented yet`);
            process.exit(1);
    }
    console.log(`Day ${day} Part 1: ${solution.part1()}`);
    console.log(`Day ${day} Part 2: ${solution.part2()}`);
}
catch (error) {
    console.error(`Error running Day ${day}:`, error);
    process.exit(1);
}
//# sourceMappingURL=index.js.map