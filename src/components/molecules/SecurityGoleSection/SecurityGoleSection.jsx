import React from "react";
import PropTypes from "prop-types";
import classes from "./SecurityGoleSection.module.css";

export default function SecurityGoleSection({ data }) {
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <p>
          {data?.title || "Why GOLE"}{" "}
          <span>{data?.highlight || "Security?"}</span>
        </p>
      </div>
      <div className={classes.right}>
        <p>
          {data?.description ||
            "GOLE Security brings next-generation threat prevention, detection, and response into one seamless solution. With automated intelligence, deep threat analytics, and unified management, we stop attacks before they disrupt your operations — no matter where your users or data reside."}
        </p>
      </div>
    </div>
  );
}

SecurityGoleSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    highlight: PropTypes.string,
    description: PropTypes.string,
  }),
};

