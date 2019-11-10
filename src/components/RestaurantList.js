/* React Libraries */
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

/* Custom Components */
import { Restaurant } from "./Restaurant";

/* Initial values */
const baseUrl = `http://localhost:4000/restaurants`;

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setRestaurants(data))
      .catch(err => console.log(err));
  }, []);

  const showRestaurants = () => {
    return restaurants.map((currentRestaurant, i) => {
      return <Restaurant restaurant={currentRestaurant} key={i} />;
    });
  };

  return (
    <Table className="restaurant-list-wrapper" bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{showRestaurants()}</tbody>
    </Table>
  );
};
