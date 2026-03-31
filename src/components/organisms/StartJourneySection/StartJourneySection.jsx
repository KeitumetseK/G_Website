"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./StartJourneySection.module.css";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function StartJourneySection({ data, className = "" }) {
  const router = useRouter();
  return (
    <div className={clsx(classes.main, className)}>
      <div className={classes.content}>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <div className={classes.buttons}>
          <Button
            label={data?.button?.label || data?.buttonLabel || "Get Started"}
            variant="primary"
            onClick={() => {
              router.push(data?.button?.link || "/contact-us");
            }}
          />
          {(data?.button2?.label || data?.button2Label) && (
            <Button
              label={data?.button2?.label || data?.button2Label || "Learn More"}
              variant="secondary"
              onClick={() => {
                router.push(data?.button2?.link || "/microsoft-solutions");
              }}
              className={classes.button2}
              disabled={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

StartJourneySection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    button: PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }),
    button2Label: PropTypes.string,
    button2: PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  }),
  className: PropTypes.string,
};
