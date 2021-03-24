import React, { useState } from "react"
import "./Home.css"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ArrayInstructions from "../../types/ArrayInstructions"
import * as api from "../../api"
import useSnackBar from "../SnackBar/useSnackBar"
import ArrayGenLogo from "../../images/corchetes.png"
import { Link } from "react-router-dom"

import ArrayOutput from "./ArrayOutput/ArrayOutput"
import SnackBar from "../SnackBar/SnackBar"

const Home = () => {
	const { message, isActive, openSnackBar } = useSnackBar()
	const [ arrayResponse, setArrayResponse ] = useState<number[]>([])
	const [ formContent , setFormContent ] =  useState<ArrayInstructions>({
		length: 10,
		min: 0,
		max: 1000,
		sorted: true,
		duplicates: true
	})

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		if ( !((0 < formContent.length) && (formContent.length <= 10000))) return openSnackBar("the length of the array must be between 0 and 10000")
		api.getArray(formContent)
			.then(data => !data.data.error ? setArrayResponse(data.data.array) : openSnackBar("Invalid array options"))
			.catch(err => openSnackBar("Invalid array options"))
	}

	const CopyToClipboard = () => {
		if (arrayResponse.length <= 0) return openSnackBar("No array generated yet")
		const tempInput = document.createElement("input")
		tempInput.value = "[ " + String(arrayResponse.join(", ")) + " ]"
		document.body.appendChild(tempInput)
		tempInput.select()
		document.execCommand("copy")
		document.body.removeChild(tempInput)
		openSnackBar("Array copied")
	}

	return (
		<div className="home">
			<div className="home__container">
				<div className="home__instructions">
					<h2>Array Options</h2>
					<form onSubmit={e => handleSubmit(e)} className="home__form">
						<div className="home__input">
							<label htmlFor="length">Array length </label>
							<input type="number" value={formContent.length} onChange={(e: any): void => setFormContent({...formContent, length: Number(e.target.value)})} required name="length"/>
						</div>
						<div className="home__input">
							<label htmlFor="min">Min Value </label>
							<input type="number" value={formContent.min} onChange={(e: any): void => setFormContent({...formContent, min: Number(e.target.value)})} required name="min"/>
						</div>
						<div className="home__input">
							<label htmlFor="max">Max Value </label>
							<input type="number" value={formContent.max} onChange={(e: any): void => setFormContent({...formContent, max: Number(e.target.value)})} required name="max"/>
						</div>
						<div className="home__boolean" onClick={() => setFormContent({...formContent, sorted: !formContent.sorted})}>
							<p>Sorted </p>
							<div className="home__booleanContainer">
								<div className={ "home__checkbox" + (formContent.sorted ? " home__checkboxSelected" : "") }></div>
							</div>
						</div>
						<div className="home__boolean" onClick={() => setFormContent({...formContent, duplicates: !formContent.duplicates})}>
							<p>Duplicates </p>
							<div className="home__booleanContainer">
								<div className={ "home__checkbox" + (formContent.duplicates ? " home__checkboxSelected" : "") }></div>
							</div>
						</div>
						<input type="submit" value="GENERATE" className="home__submit"/>
					</form>
				</div>	
				<div className="home__outputContainer">
					<div className="home__output">
						<div className="home__outputHeader">
							<h2 className="home__title">Your Array</h2>
						</div>
						<div className="home__icon" onClick={CopyToClipboard}>
							<FileCopyIcon />
						</div>
						<div className="home__outputContent">
							{  arrayResponse.length > 0  ? <ArrayOutput data={ arrayResponse } /> : <p className="home__noneOutput">Has not generated any matrix yet</p>}
						</div>
					</div>
				</div>
			</div>
			<SnackBar isActive={ isActive } message={ message } />
			<Link to="info" className="home__logo">
				<img  src={ArrayGenLogo} alt="Array generator logo"/>
				<p>Info</p>
			</Link>
		</div>
	)

}

export default Home
