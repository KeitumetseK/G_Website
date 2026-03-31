"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./GoleComputeSection.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";

export default function GoleComputeSection({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection
        title={data?.headingSection?.title || "Why Choose GOLE Compute?"}
        className={classes.headingSection}
        description={
          data?.headingSection?.description ||
          "Built for developers who demand transparency, performance, and flexibility"
        }
      />
      <div className={classes.cards}>
        {data?.features?.map((item) => (
          <FeatureCard key={item._id} data={item} className={classes.featureCard} />
        ))}
      </div>
    </div>
  );
}

GoleComputeSection.propTypes = {
  data: PropTypes.shape({
    headingSection: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    features: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
      })
    ),
  }),
};
