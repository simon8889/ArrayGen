"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const arrayGenController_1 = require("../controllers/arrayGenController");
const router = express_1.Router();
router.get("/gen", arrayGenController_1.genArray);
exports.default = router;
