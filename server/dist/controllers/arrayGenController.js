"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genArray = void 0;
const index_1 = __importDefault(require("../ArrayGenerator/index"));
const index_2 = require("../ArrayGenerator/index");
const genArray = (req, res) => {
    const body = req.body;
    if (!index_2.isArrayInstruction(body) || !index_2.validInstructionData(body))
        return res.status(400).json({ error: "invalid body" });
    const genArray = new index_1.default(body);
    res.status(200).json({
        array: genArray.generate(),
        arrayInstuctions: genArray.instructions
    });
};
exports.genArray = genArray;
