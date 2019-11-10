import React, { useEffect } from "react";

/* Custom Components/Hooks */
import { CityButtons } from "./CityButtons";
import { PriceButtons } from "./PriceButtons";
import { useForm } from "../hooks/useForm";
import { useRole } from "../hooks/useRole";

/* Initial values */
const initialRestaurantState = {
  name: "",
  city: "",
  price: ""
};
const baseUrl = `http://localhost:4000/restaurants`;
// const baseUrl = `http://localhost:3010/restaurants`;

export const RandomRestaurantForm = ({ setFilteredRestaurants, onSubmit }) => {
  /* Hooks */
  const [inputRestaurantValues, changeForm] = useForm(initialRestaurantState);
  const [role, changeRole] = useRole();

  // console.log(`inputRestaurantValues.city: ${inputRestaurantValues.city}`);
  // console.log(`inputRestaurantValues.price: ${inputRestaurantValues.price}`);

  useEffect(() => {
    fetch(
      `${baseUrl}/search?city=${inputRestaurantValues.city}&price=${inputRestaurantValues.price}`
    )
      .then(res => res.json())
      .then(data => {
        setFilteredRestaurants(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [
    inputRestaurantValues.city,
    inputRestaurantValues.price,
    setFilteredRestaurants
  ]);

  // console.table(filteredRestaurants);
  // console.table(randomRestaurant);

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

  cityClassNames[role.city] += " active";
  priceClassNames[role.price] += " active";

  return (
    <form>
      <CityButtons
        changeForm={changeForm}
        changeRole={changeRole}
        restaurant={inputRestaurantValues}
        classes={cityClassNames}
      />
      <br />
      <PriceButtons
        changeForm={changeForm}
        changeRole={changeRole}
        restaurant={inputRestaurantValues}
        classes={priceClassNames}
      />
      <div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
