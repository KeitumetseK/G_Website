"use client";
import Button from "@/components/atoms/Button";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import classes from "./WhyChooseUsSection.module.css";
import { useRouter } from "next/navigation";
import React from "react";

export default function WhyChooseUsSection({ data,showReadMoreButton = true, children, className }) {
  const router = useRouter();
  const defaultContent = (
    <React.Fragment>
      <p>
        {data?.title}
        <span className={clsx(classes.highlight, "highlightedText")}>
          {data?.highlight}
        </span>
      </p>
      <p>{data?.description}</p>
      {
        showReadMoreButton && (
          <Button label="Read More" variant="primary" onClick={() => router.push("/about-us")} />
        )
      }
    </React.Fragment>
  );

  return (
    <div className={clsx(classes.main, className)}>
      <div className={classes.leftSection}>{children ?? defaultContent}</div>
      <div className={classes.rightSection}>
        <Image src={data?.image} alt="why-choose-us" fill />
      </div>
    </div>
  );
}

WhyChooseUsSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    highlight: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node,
  showReadMoreButton: PropTypes.bool,
  className: PropTypes.string,
};
