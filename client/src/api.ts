import axios from "axios"
import ArrayInstructions from "./types/ArrayInstructions"

const url = process.env.REACT_APP_API_DIRECTION

export const getArray = (obj: ArrayInstructions) => axios.post(`${url}/gen`, obj)