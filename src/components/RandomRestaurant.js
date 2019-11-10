import React from "react";

export const RandomRestaurant = ({ title, restaurant }) => {
  return (
    <>
      <h3>{restaurant.name ? restaurant.name : title}</h3>
    </>
  );
};
