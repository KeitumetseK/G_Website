import React from "react";
import PropTypes from "prop-types";
import classes from "./ChoosePerfectSolution.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import PerfectSolutionCard from "@/components/molecules/PerfectSolutionCard/PerfectSolutionCard";

export default function ChoosePerfectSolution({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />
      <div className={classes.cards}>
        {data?.cards?.map((card) => (
          <PerfectSolutionCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

ChoosePerfectSolution.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        cardVariant: PropTypes.oneOf(["green", "blue"]),
        bgColor: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
        button: PropTypes.shape({
          label: PropTypes.string,
          variant: PropTypes.string,
          link: PropTypes.string,
        }),
      })
    ),
  }),
};
