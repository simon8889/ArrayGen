"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const ArrayGenRoutes_1 = __importDefault(require("./routes/ArrayGenRoutes"));
dotenv_1.default.config();
const port = process.env.PORT || 9000;
const app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/", ArrayGenRoutes_1.default);
app.get("/", (req, res) => res.send("ArrayGen api"));
app.listen(port, () => console.log(`ready in port ${port}`));
