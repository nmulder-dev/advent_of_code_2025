"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = getInput;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getInput(day) {
    const filename = `day${String(day).padStart(2, "0")}.txt`;
    const filepath = path_1.default.join(__dirname, "..", "inputs", filename);
    return fs_1.default.readFileSync(filepath, "utf-8");
}
//# sourceMappingURL=input.js.map