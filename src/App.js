import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/header/Home.js";
import Contact from "./components/contact/Contact.js";
import Skills from "./components/skills/Skills.js";
import Resume from "./components/resume/Resume.js";
import Goals from "./components/games/Goals.js";
import Projects from "./components/projects/Projects";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<div
				className="App.css"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/skills" component={Skills} />
						<Route exact path="/resume" component={Resume} />
						<Route exact path="/goals" component={Goals} />
						<Route exact path="/projects" component={Projects} />
					</Switch>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
