import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import React from "react";
import PropTypes from "prop-types";
import classes from "./AboutWhatWeDoSection.module.css";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";

export default function AboutWhatWeDoSection({ data }) {
  return (
    <div id="what-we-do" className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />
      <div className={classes.cards}>
        {data?.cards?.map((card) => (
          <ServicesCard
            key={card.title}
            data={card}
            className={classes.servicesCard}
          />
        ))}
      </div>
    </div>
  );
}

AboutWhatWeDoSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        slug: PropTypes.string,
      })
    ),
  }).isRequired,
};
