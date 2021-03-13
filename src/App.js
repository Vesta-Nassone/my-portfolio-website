import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
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
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
