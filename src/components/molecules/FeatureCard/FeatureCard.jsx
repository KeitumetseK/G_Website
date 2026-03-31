"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./FeatureCard.module.css";
import Image from "next/image";
import clsx from "clsx";

export default function FeatureCard({ data, className = "" }) {
  return (
    <div className={clsx(classes.featureCard, className)}>
      <Image height={59} width={67} src={data.image} alt="innovation" />
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  className: PropTypes.string,
};

