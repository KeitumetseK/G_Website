import React from 'react'
import PropTypes from "prop-types";
import classes from "./PartnersSliderSection.module.css";
import Marque from '../Marque/Marque';

export default function PartnersSliderSection({ data }) {
  return (
      <div className={classes.partnersSliderSection}>
        <div className={classes.textSection}>
          <p>{data.title}</p>
        </div>
        <div className={classes.logosSection}>
          <Marque partners={data.partners} />
        </div>
      </div>
  )
}

PartnersSliderSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    partners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        logo: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
  }),
};

