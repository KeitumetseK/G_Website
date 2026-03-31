import React from "react";
import PropTypes from "prop-types";
import classes from "./CompleteSecuritySuiteSection.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import CoursesCard from "@/components/molecules/CoursesCard/CoursesCard";

export default function CompleteSecuritySuiteSection({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection
        title={data?.title}
        description={data?.description}
      />
      <div className={classes.coursesContainer}>
        {data?.courses?.map((item) => (
          <div key={item?.id} className={classes.cardWrapper}>
            <CoursesCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

CompleteSecuritySuiteSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};

