import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"

import genRoutes from "./routes/ArrayGenRoutes"

dotenv.config()

const port = process.env.PORT || 9000
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use("/", genRoutes)

app.get("/", (req, res) => res.send("ArrayGen api"))


app.listen(port, () => console.log(`ready in port ${port}`))


