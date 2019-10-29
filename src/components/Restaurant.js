import React from "react";

import { TableCell, TableRow } from "@material-ui/core";

export const Restaurant = ({ restaurant }) => {
  return (
    <TableRow>
      <TableCell>{restaurant.name}</TableCell>
      <TableCell>{restaurant.city}</TableCell>
      <TableCell>{restaurant.price}</TableCell>
    </TableRow>
  );
};
