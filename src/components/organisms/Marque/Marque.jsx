"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./Marque.module.css";
import Image from "next/image";

export default function Marque({ partners }) {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={classes.marqueContainer}>
      <div className={classes.marque}>
        <div className={classes.marqueTrack}>
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={classes.logoWrapper}
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={150}
                height={60}
                className={classes.logo}
              />
            </div>
          ))}
        </div>
        <div className={classes.marqueTrack} aria-hidden="true">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-duplicate-${index}`}
              className={classes.logoWrapper}
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={150}
                height={60}
                className={classes.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Marque.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
