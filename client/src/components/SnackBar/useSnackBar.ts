import React, { useState, useEffect } from "react"

const useSnackBar = () => {
	const [ isActive, setIsActive ] = useState<boolean>(false)
	const [ message, setMessage] = useState<string>("")
    
	const openSnackBar = (message: string): void => {
		setMessage(message)
		setIsActive(true)
	}
    
	useEffect(() => {
		if (isActive){
			setTimeout(() => setIsActive(false), 2000)
		}
	}, [isActive])
    
	return { isActive, message, openSnackBar}
}

export default useSnackBar
