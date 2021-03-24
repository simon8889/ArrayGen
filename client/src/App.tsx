import React from "react"
import logo from "./logo.svg"
import { HashRouter, Switch, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home/Home"
import Info from "./components/Info/Info"

function App() {
	return (
		<HashRouter>
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
		</HashRouter>
	)
}

export default App
