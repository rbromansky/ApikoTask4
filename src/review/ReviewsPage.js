import React, { Fragment, useState, useEffect } from "react";
import { RaviewInput } from "./RaviewInput";
import { ReviewItem } from "./ReviewItem";
import uuid from "uuid/v4";

export const ReviewsPage = () => {
  const reviewsFromStorage = JSON.parse(localStorage.getItem("reviews"));
  const [reviews, setReviews] = useState(reviewsFromStorage || []);

  useEffect(() => {
    const reviewsStringifyed = JSON.stringify(reviews);
    localStorage.setItem("reviews", reviewsStringifyed);
  }, [reviews]);

  const onAdd = text =>
    setReviews([
      ...reviews,
      {
        _id: uuid(),
        text,
        complited: false
      }
    ]);

  return (
    <Fragment>
      <div>Reviews</div>
      <RaviewInput onAdd={onAdd} />
      <div className="reviewsList">
        {reviews.map(review => (
          <ReviewItem key={review._id} {...{ review }} />
        ))}
      </div>
    </Fragment>
  );
};
