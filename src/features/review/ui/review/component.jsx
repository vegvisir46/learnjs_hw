import React from "react";

const Review = ({ name, description }) => {
  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
    </>
  );
};

export default Review;
