/* React Libraries */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

/* CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Components */
import { Home } from "./components/Home";
import { RestaurantList } from "./components/RestaurantList";
import { About } from "./components/About";

export const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/restaurants")
      .then(res => {
        setRestaurants(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  var length = restaurants.length;
  // console.log(`length: ${length}`);

  var randomNumber = Math.floor(Math.random() * length) + 0;
  // console.log(`randomNumber: ${randomNumber}`);

  const restaurant = restaurants[randomNumber];

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <h3>foodMN</h3>
          </Link>
          <div className="collpase navbar-collapse">
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
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/restaurants">
            <RestaurantList restaurants={restaurants} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* <Home restaurant={restaurant} /> */}
            <Home restaurant={restaurant} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
