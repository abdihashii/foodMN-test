/* React Libraries */
import React, { useState } from "react";
// import { Button, ButtonGroup } from "react-bootstrap";

/* Custom Components/Hooks */
import { RandomRestaurantForm } from "./RandomRestaurantForm";
import { RandomRestaurant } from "./RandomRestaurant";

export const Home = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState({});

  const submitChoice = e => {
    e.preventDefault();

    var length = filteredRestaurants.length;
    var randomNumber = Math.floor(Math.random() * length) + 0;

    setRandomRestaurant(filteredRestaurants[randomNumber]);
  };

  // console.table(filteredRestaurants);
  // console.table(randomRestaurant);

  return (
    <div className="random-restaurant-wrapper">
      <RandomRestaurant
        className="restaurant"
        title="Restaurant"
        restaurant={randomRestaurant}
      />
      <div>
        <RandomRestaurantForm
          setFilteredRestaurants={setFilteredRestaurants}
          randomRestaurant={randomRestaurant}
          onSubmit={submitChoice}
        />
      </div>
    </div>
  );
};
