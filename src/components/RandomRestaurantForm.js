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
const baseUrl = `http://localhost:3010/restaurants`;

export const RandomRestaurantForm = ({
  setFilteredRestaurants = { setFilteredRestaurants },
  randomRestaurant = { randomRestaurant },
  onSubmit
}) => {
  /* Hooks */
  const [inputRestaurantValues, changeForm] = useForm(initialRestaurantState);
  const [role, changeRole] = useRole();

  useEffect(() => {
    fetch(
      `${baseUrl}?city=${inputRestaurantValues.city}&price=${inputRestaurantValues.price}`
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
