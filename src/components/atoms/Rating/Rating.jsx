"use client";
import React from "react";
import { Rating as SimpleRating } from "react-simple-star-rating";
import classes from "./Rating.module.css";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

function Rating({ rating = 4, size = 16, readonly = true }) {
  return (
    <div className={classes.rating}>
      <SimpleRating
        initialValue={rating}
        readonly={readonly}
        size={size}
        allowFraction={false}
        fillIcon={<FaStar size={size} className={classes.filledStar} />}
        emptyIcon={<FaStar size={size} className={classes.emptyStar} />}
        fillColor={"var(--blue-2)"}
        emptyColor={"var(--gray-3)"}
      />
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
  readonly: PropTypes.bool,
};

export default Rating;
