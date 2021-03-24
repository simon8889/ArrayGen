import React from "react"
import logo from "./logo.svg"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./App.css"

import Home from "./components/Home/Home"
import Info from "./components/Info/Info"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/info" exact>
						<Info />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
