import React from "react";
import { Menu } from "../../../menu/ui/menu/component";
import Rate from "../../../rate/ui/rate/component";
import Reviews from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  let sum = 0;
  restaurant.reviews.map((review) => {
    sum = sum + review.rating;
  });
  const rating = Math.round(sum / restaurant.reviews.length);

  return (
    <div>
      <span>{restaurant.name}</span>
      <br />
      <span>Menu:</span>
      <Menu menu={restaurant.menu} />
      <Rate rating={rating} />
      <div>Reviews:</div>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
