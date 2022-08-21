import React from "react";
import { Restaurant } from "../restaurant/component";

const Restaurants = ({ restaurants }) => {
  return (
    <>
      <div>{<Restaurant restaurant={restaurants[0]} />}</div>
      <br />
      <div>{<Restaurant restaurant={restaurants[1]} />}</div>
      <br />
      <div>{<Restaurant restaurant={restaurants[2]} />}</div>
      <br />
      <div>{<Restaurant restaurant={restaurants[3]} />}</div>
    </>
  );
};

export default Restaurants;
