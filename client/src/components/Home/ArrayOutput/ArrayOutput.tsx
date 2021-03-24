import React, { useState } from "react"
import { Switch } from "@material-ui/core"
import "./ArrayOutput.css"

interface ArrayOutputProps {
    data: number[]
}

const ArrayOutput = ({ data }: ArrayOutputProps) => {
	const [isParse, setIsParse] = useState(true)
	return (
		<div className="output">
			<div className="output__switchContainer">
				<div className="output__switch" onClick={() => setIsParse(!isParse)}>
					<p>{isParse ? "Raw" : "Parse"}</p>
					<div className={ "output__checkbox" + (isParse ? " output__checkboxSelected" : "") }></div>
				</div>
			</div>
			<p className="output__content">{isParse ? "[ " + data.join(", ") + " ]" : data.map((element, index) => <span className="output__parseElement" key={index}>{element}</span>)}</p>
		</div>
	)
}

export default ArrayOutput
