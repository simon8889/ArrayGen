import { Router } from 'express'
import { genArray } from '../controllers/arrayGenController'

const router = Router()

router.get("/gen", genArray)

export default router