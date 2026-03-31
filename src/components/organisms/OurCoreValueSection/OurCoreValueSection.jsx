"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./OurCoreValueSection.module.css";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";

export default function OurCoreValueSection({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />
      <div className={classes.cardContainer}>
        {data?.features?.map((feature) => (
          <FeatureCard key={feature?.title} data={feature} />
        ))}
      </div>
    </div>
  );
}

OurCoreValueSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      })
    ),
  }),
};
