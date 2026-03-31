import React from "react";
import PropTypes from "prop-types";
import classes from "./OurValuesSection.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import OurValuesCard from "@/components/molecules/OurValuesCard/OurValuesCard";
import clsx from "clsx";
export default function OurValuesSection({ data,  cardsClassName, showHeading = true }) {
  return (
    <div className={classes.main}>
      {showHeading && (<HeadingSection
        className={classes.headingSection}
          title={data?.title}
          description={data?.description}
        />
      )}
      <div
        className={clsx(classes.cards, cardsClassName, {
          [classes.cardsThree]: data?.values?.length === 3,
          [classes.cardsFour]: data?.values?.length === 4,
        })}
      >
        {data?.values?.map((value) => (
          <OurValuesCard key={value.title} data={value} />
        ))}
      </div>
    </div>
  );
}

OurValuesSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      })
    ),
  }),
  cardsClassName: PropTypes.string,
  showHeading: PropTypes.bool,
};
