import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Forgot from "./components/pages/Forgot";
import Home from "./components/pages/Home";
import Myprofile from "./components/pages/Myprofile";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="myapp bg-rose-100 scroll-m-10">
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/myprofile">
            <Myprofile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
