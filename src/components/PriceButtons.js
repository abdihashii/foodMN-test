import React from "react";

export const PriceButtons = ({
  changeForm,
  changeRole,
  restaurant,
  classes
}) => {
  return (
    <>
      {/* Prices */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={classes.cheap}>
          <input
            type="radio"
            name="price"
            value={restaurant.price}
            id="cheap"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          $
        </label>
        <label className={classes.medium}>
          <input
            type="radio"
            name="price"
            value={restaurant.price}
            id="medium"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          $$
        </label>
        <label className={classes.pricey}>
          <input
            type="radio"
            name="price"
            value={restaurant.price}
            id="pricey"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          $$$
        </label>
        <label className={classes.expensive}>
          <input
            type="radio"
            name="price"
            value={restaurant.price}
            id="expensive"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          $$$$
        </label>
        <br />
      </div>
    </>
  );
};
