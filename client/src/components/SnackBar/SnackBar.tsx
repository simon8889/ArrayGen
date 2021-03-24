import React, { useState, useEffect } from "react"
import "./SnackBar.css"

interface SnackBarProps {
    isActive: boolean,
    message: string
}

const SnackBar = ({isActive, message}: SnackBarProps) => {
	return (
		<div className={isActive ? ["snackbar", "fadeIn"].join(" ") : ["snackbar", "fadeOut"].join(" ")}>
			{message}
		</div>
	)
}

export default SnackBar
