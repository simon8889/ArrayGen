import React from "react"
import { Link } from "react-router-dom"
import "./Info.css"
import ArrayGenLogo from "../../images/corchetes.png"

const Info = () => {
	return (
		<div className="info">
			<div className="info__container">
				<div className="info__header">
					<h1>ArrayGen</h1>
					<h2>- An array generator -</h2>
				</div>
				<div className="info__paragraph">
					<p>ArrayGen is a tool designed to generate an array of numbers according to the options you choose, ArrayGen is useful for generating arrays that serve to test algorithms or as input for your code.</p>
				</div>
				<div className="info__optionsContainer">
					<h2 className="info__titleOptions">Array options</h2>
					<div className="info__options">
						<div className="info__option">
							<h3>Length</h3>
							<p>The length of the array establishes the number of elements that the array will have, it must be in a range between 0 and 10000.</p>
						</div>
						<div className="info__option">
							<h3>Min & Max</h3>
							<p>el valor mínimo establece el valor más bajo de un elemento posible en la matriz, y el valor máximo establece el valor más alto de un elemento posible en la matriz. el valor mínimo debe ser más bajo que el valor máximo.</p>
						</div>
						<div className="info__option">
							<h3>Sorted</h3>
							<p>the sorted field sets whether the elements in the array should be sorted from lowest to highest value.</p>
						</div>
						<div className="info__option">
							<h3>Duplicates</h3>
							<p>the duplicates field sets whether the elements of the array should be unique or not, if this is true, the range between the minimum and the maximum should be equal to the length of the array.</p>
						</div>
					</div>
				</div>
				<Link to="/" className="home__logo">
					<img  src={ArrayGenLogo} alt="Array generator logo"/>
					<p>Generate</p>
				</Link>
			</div>
		</div>
	)
}

export default Info
