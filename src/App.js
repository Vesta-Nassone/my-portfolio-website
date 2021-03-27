import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";
import Resume from "./Resume.js";
import Games from "./Games.js"
import Projects from "./Projects"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div
        className="App.css"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/games" component={Games}/>
            <Route exact path="/projects" component={Projects}/>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
