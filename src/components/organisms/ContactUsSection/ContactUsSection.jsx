"use client";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import classes from "./ContactUsSection.module.css";

export default function ContactUsSection({ data, children, className }) {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={clsx(classes.left, className)}>
          <div className={classes.leftContent}>
            <p>{data?.title}</p>
            <p>{data?.description}</p>
          </div>

          {data?.contactDetails && (
            <div className={classes.contactDetails}>
              {data?.contactDetails?.map((detail) => (
                <div className={classes.contactDetail} key={detail?.title}>
                  <div className={classes.icon}>
                    <Image
                      src={detail?.icon}
                      alt={detail?.title}
                      width={14}
                      height={14}
                    />
                  </div>
                  <div className={classes.contactDetailContent}>
                    <p>{detail?.title}</p>
                    <p>{detail?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={classes.right}>{children}</div>
      </div>
    </div>
  );
}

ContactUsSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    contactDetails: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};
