import React from "react";
import T from "prop-types";

import "../styles.css";
import { routes } from "../routes";
import { Link } from "react-router-dom";

export const ReviewItem = ({ review }) => {
  return (
    !!review && (
      <div className="reviewItem">
        <Link to={routes.REVIEW + ":" + review.text}>{review.text}</Link>
      </div>
    )
  );
};

ReviewItem.propTypes = {
  review: T.shape({
    _id: T.string.isRequired,
    text: T.string.isRequired
  }).isRequired
};
