/* React Libraries */
import React, { useState, useEffect } from "react";
// import { Button, ButtonGroup } from "react-bootstrap";
// import { Button, ButtonGroup } from "@material-ui/core";
import axios from "axios";

/* CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Initial values */
const INITIAL_CITY_STATE = "";
const INITIAL_PRICE_STATE = "";

export const Home = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [cityRole, setCityRole] = useState(INITIAL_CITY_STATE);
  const [priceRole, setPriceRole] = useState(INITIAL_PRICE_STATE);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState({});

  const handleCityChange = e => {
    let city = e.target.id;
    setCity(city);
  };

  const handlePriceChange = e => {
    setPrice(e.target.id);
  };

  const onHandleCityClick = e => {
    setCityRole(e.target.id);
  };

  const onHandlePriceClick = e => {
    setPriceRole(e.target.id);
  };

  const submitChoice = e => {
    e.preventDefault();

    var length = filteredRestaurants.length;
    var randomNumber = Math.floor(Math.random() * length) + 0;

    setRandomRestaurant(filteredRestaurants[randomNumber]);
  };

  console.table(randomRestaurant);

  console.log(`city: ${city}`);
  console.log(`price: ${price}`);

  const btnClass = "btn btn-secondary";

  var cityClassNames = {
    mpls: btnClass,
    stp: btnClass
  };

  var priceClassNames = {
    cheap: btnClass,
    medium: btnClass,
    pricey: btnClass,
    expensive: btnClass
  };

  cityClassNames[cityRole] += " active";
  priceClassNames[priceRole] += " active";

  useEffect(() => {
    axios
      .get(`http://localhost:3010/restaurants?city=${city}&price=${price}`)
      .then(res => {
        setFilteredRestaurants(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [city, price]);

  return (
    <div className="container">
      <h3>Restaurant</h3>
      <p>Name: {randomRestaurant.name}</p>
      <p>City: {randomRestaurant.city}</p>
      <p>Price: {randomRestaurant.price}</p>
      <div>
        <form>
          {/* Cities */}
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={cityClassNames.mpls}>
              <input
                type="radio"
                name="options"
                id="mpls"
                autoComplete="off"
                onChange={handleCityChange}
                onClick={onHandleCityClick}
              />
              Mpls
            </label>
            <label className={cityClassNames.stp}>
              <input
                type="radio"
                name="options"
                id="stp"
                autoComplete="off"
                onChange={handleCityChange}
                onClick={onHandleCityClick}
              />
              Stp
            </label>
          </div>
          <br />
          {/* Prices */}
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={priceClassNames.cheap}>
              <input
                type="radio"
                name="options"
                id="cheap"
                autoComplete="off"
                onChange={handlePriceChange}
                onClick={onHandlePriceClick}
              />
              $
            </label>
            <label className={priceClassNames.medium}>
              <input
                type="radio"
                name="options"
                id="medium"
                autoComplete="off"
                onChange={handlePriceChange}
                onClick={onHandlePriceClick}
              />
              $$
            </label>
            <label className={priceClassNames.pricey}>
              <input
                type="radio"
                name="options"
                id="pricey"
                autoComplete="off"
                onChange={handlePriceChange}
                onClick={onHandlePriceClick}
              />
              $$$
            </label>
            <label className={priceClassNames.expensive}>
              <input
                type="radio"
                name="options"
                id="expensive"
                autoComplete="off"
                onChange={handlePriceChange}
                onClick={onHandlePriceClick}
              />
              $$$$
            </label>
            <br />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitChoice}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
