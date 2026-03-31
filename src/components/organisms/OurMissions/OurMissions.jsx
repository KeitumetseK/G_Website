import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import PropTypes from "prop-types";

export default function OurMissions({ data }) {
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <p>{data?.title}</p>
        <div className={classes.logo}>
          <Image src={data?.image} alt="our-mission" fill />
        </div>
      </div>

      <div className={classes.right}>
        <Image src="/svgs/quote.svg" alt="quote" width={65} height={40} />
        <p>{data?.description}</p>
        {data?.description2 && <p>{data?.description2}</p>}
      </div>
    </div>
  );
}

OurMissions.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
  }),
};
