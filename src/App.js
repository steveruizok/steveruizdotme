import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Steve Ruiz</p>
					<a
						className="App-link"
						href="https://twitter.com/steveruizok"
						target="_blank"
						rel="noopener noreferrer"
					>
						@steveruizok
					</a>
				</header>
			</div>
		);
	}
}

export default App;
