/* React Libraries */
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/* CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/grid.css";

/* Custom Components */
import { Home } from "./components/Home";
import { RestaurantList } from "./components/RestaurantList";
import { About } from "./components/About";
const logo = require("./foodMN.png");

export const App = () => {
  return (
    <Router>
      <div className="container wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-wrapper">
          <Link to="/" className="navbar-brand">
            <div className="headerText">
              {/* <h3>foodMN</h3> */}
              <img alt="Home" src={logo}></img>
            </div>
          </Link>
          <div className="collapse navbar-collapse link-wrapper">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/restaurants" className="nav-link">
                  restaurants
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  signin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bottom-wrapper">
          <Switch>
            <Route path="/restaurants">
              <RestaurantList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/signin">
              <Signin />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
