import React from "react";
import Review from "../review/component";

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} name={review.user} description={review.text} />
      ))}
    </div>
  );
};

export default Reviews;
