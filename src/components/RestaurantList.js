/* React Libraries */
import React from "react";
import { Table } from "react-bootstrap";
// import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';

/* Custom Components */
import { Restaurant } from "./Restaurant";

export const RestaurantList = ({ restaurants }) => {
  const showRestaurants = () => {
    return restaurants.map((currentRestaurant, i) => {
      return <Restaurant restaurant={currentRestaurant} key={i} />;
    });
  };

  return (
    // <Table>
    //   <TableHead>
    //     <TableRow>
    //       <TableCell>Name</TableCell>
    //       <TableCell>City</TableCell>
    //       <TableCell>Price</TableCell>
    //     </TableRow>
    //   </TableHead>
    //   <TableBody>{showRestaurants()}</TableBody>
    // </Table>

    <Table bordered hover>
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
