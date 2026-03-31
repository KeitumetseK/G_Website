"use client";
import PropTypes from "prop-types";
import classes from "./CoursesCard.module.css";

export default function CoursesCard({ data }) {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
      </div>
    </div>
  );
}

CoursesCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
