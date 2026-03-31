"use client";
import Image from 'next/image'
import React from 'react'
import PropTypes from "prop-types";
import classes from './OurValuesCard.module.css';

export default function OurValuesCard({ data }) {
  return (
    <div className={classes.main}>
        <div className={classes.icon}>
            <Image src={data.icon} alt="our-values-icon" fill />
        </div>
        <div className={classes.content}>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </div>
    </div>
  )
}

OurValuesCard.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
