import React from "react";

export const CityButtons = ({
  changeForm,
  changeRole,
  restaurant,
  classes
}) => {
  return (
    <>
      {/* Cities */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={classes.mpls}>
          <input
            type="radio"
            name="city"
            value={restaurant.city}
            id="mpls"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          Mpls
        </label>
        <label className={classes.stp}>
          <input
            type="radio"
            name="city"
            value={restaurant.city}
            id="stp"
            autoComplete="off"
            onChange={changeForm}
            onClick={changeRole}
          />
          Stp
        </label>
      </div>
    </>
  );
};
