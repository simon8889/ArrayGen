"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validInstructionData = exports.isArrayInstruction = void 0;
const isArrayInstruction = (obj) => {
    if (!obj)
        return false;
    const isLength = typeof (obj.length) === "number";
    const isMin = typeof (obj.min) === "number";
    const isMax = typeof (obj.max) === "number";
    const isSorted = typeof (obj.sorted) === "boolean";
    const isDuplicates = typeof (obj.duplicates) === "boolean";
    return isLength && isMin && isMax && isSorted && isDuplicates;
};
exports.isArrayInstruction = isArrayInstruction;
const validInstructionData = (obj) => {
    if (!obj)
        return false;
    const validRange = obj.min < obj.max;
    let validDuplicates = true;
    if (!obj.duplicates)
        validDuplicates = (obj.max - obj.min) === obj.length;
    return validDuplicates && validRange;
};
exports.validInstructionData = validInstructionData;
class ArrayGenerator {
    constructor(instructions) {
        this.getRandom = () => {
            const { max, min } = this.instructions;
            return Math.floor(Math.random() * (max - min) + min);
        };
        this.generate = () => {
            const generatedArray = [];
            let count = 0;
            while (count < this.instructions.length) {
                const newItem = this.getRandom();
                if (!this.instructions.duplicates && generatedArray.includes(newItem))
                    continue;
                generatedArray.push(newItem);
                count++;
            }
            return this.instructions.sorted ? generatedArray.sort((a, b) => a - b) : generatedArray;
        };
        this.instructions = instructions;
    }
}
exports.default = ArrayGenerator;
