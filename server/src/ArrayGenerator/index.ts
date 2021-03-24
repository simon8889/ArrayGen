import ArrayInstructions from "../types/ArrayInstructions"

interface IArrayGeneretor {
    instructions: ArrayInstructions,
    generate(): number[],
    getRandom(): number
}

export const isArrayInstruction = (obj: any): boolean => {
	if (!obj) return false
	const isLength: boolean = typeof(obj.length) === "number"
	const isMin: boolean = typeof(obj.min) === "number"
	const isMax: boolean =  typeof(obj.max) === "number"
	const isSorted: boolean = typeof(obj.sorted) === "boolean"
	const isDuplicates: boolean = typeof(obj.duplicates) === "boolean"
	return isLength && isMin && isMax && isSorted && isDuplicates
}

export const validInstructionData = (obj: any):boolean => {
	if (!obj) return false
    const validLength: boolean = (0 < obj.length) && (obj.length <= 10000)
	const validRange: boolean = obj.min < obj.max
	let validDuplicates = true
	if (!obj.duplicates) validDuplicates = (obj.max - obj.min) >= obj.length
	return validDuplicates && validRange && validLength
}

export default class ArrayGenerator implements IArrayGeneretor{
    instructions: ArrayInstructions
    
    constructor (instructions: ArrayInstructions){
        this.instructions = instructions
    }
    
    getRandom = (): number => {
        const { max, min } = this.instructions
    	return Math.floor( Math.random() * (max - min) + min )
    }
    
    generate = (): number[] => {
        const generatedArray: number[] = []
        let count = 0
        while ( count < this.instructions.length ){
            const newItem = this.getRandom()
            if (!this.instructions.duplicates && generatedArray.includes(newItem)) continue
            generatedArray.push(newItem)
            count ++
        }
        return this.instructions.sorted ? generatedArray.sort((a, b) => a - b) : generatedArray
    }
}