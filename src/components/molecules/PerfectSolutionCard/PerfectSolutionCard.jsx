import React from "react";
import PropTypes from "prop-types";
import classes from "./PerfectSolutionCard.module.css";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

export default function PerfectSolutionCard({ data, className = "" }) {
  const router = useRouter();
  const isBlue = data?.cardVariant === "blue";
  const checkIcon = isBlue ? "/svgs/check.svg" : "/svgs/green-check.svg";

  return (
    <div
      className={clsx(classes.main, className)}
      style={data?.bgColor && { background: data.bgColor }}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>{data?.title}</h3>
        {data?.description && (
          <p className={classes.description}>{data?.description}</p>
        )}
      </div>
      {data?.features && (
        <div className={classes.features}>
          {data?.features?.map((feature) => (
            <div key={feature} className={classes.featureItem}>
              <Image src={checkIcon} alt="check" width={28} height={28} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      )}
      {data?.button?.label && (
        <Button
          label={data?.button?.label}
          variant={data?.button?.variant || "primary"}
          onClick={() => router.push(data?.button?.link || "/")}
          className={classes.button}
          fullWidth
          rightIcon={<Image src={"/svgs/right-arrows.svg"} alt="arrow-right" width={14} height={14} />}
        />
      )}
    </div>
  );
}

PerfectSolutionCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cardVariant: PropTypes.oneOf(["green", "blue"]),
    bgColor: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    button: PropTypes.shape({
      label: PropTypes.string,
      variant: PropTypes.string,
      link: PropTypes.string,
    }),
  }),
  className: PropTypes.string,
};
