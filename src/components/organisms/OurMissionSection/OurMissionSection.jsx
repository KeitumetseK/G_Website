"use client";
import React from 'react';
import classes from "./OurMissionSection.module.css";
import Image from 'next/image';
import PropTypes from "prop-types";
export default function OurMissionSection({ data }) {
  return (
      <div className={classes.main}>
        <div className={classes.left}>
          <div className={classes.imageWrapper}>
            <Image 
              src={data?.image} 
              alt="our-mission"
              fill
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.right}>
          <p className={classes.title}>{data?.title}</p>
          <p className={classes.description}>
            {data?.description}
          </p>
          <p className={classes.description}>
            {data?.description2}
          </p>
        </div>
      </div>
  );
}

OurMissionSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
  }),
};