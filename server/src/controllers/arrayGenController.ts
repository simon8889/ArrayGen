import ArrayGenerator, { isArrayInstruction, validInstructionData } from "../ArrayGenerator/index"
import {Request, Response} from "express"

export const genArray = (req: Request, res: Response) => {
	const body = req.body
	if (!isArrayInstruction(body) || !validInstructionData(body)) return res.status(400).json({error: "invalid body"})
	const genArray = new ArrayGenerator(body)
	res.status(200).json({
		array: genArray.generate(),
		arrayInstuctions: genArray.instructions
	})
}