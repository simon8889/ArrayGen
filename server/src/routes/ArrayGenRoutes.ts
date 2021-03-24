import { Router } from "express"
import { genArray } from "../controllers/arrayGenController"

const router = Router()

router.post("/gen", genArray)

export default router