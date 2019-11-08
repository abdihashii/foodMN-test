import React from "react";

export const RandomRestaurant = ({ title, restaurant }) => {
  return (
    <>
      {/* <h3>{title}</h3> */}
      <h3>{restaurant.name ? restaurant.name : title}</h3>
      {/* <p>City: {restaurant.city}</p>
      <p>Price: {restaurant.price}</p> */}
    </>
  );
};
