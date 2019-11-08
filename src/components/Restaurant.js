import React from "react";

export const Restaurant = ({ restaurant }) => {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.city}</td>
      <td>{restaurant.price}</td>
    </tr>
  );
};
