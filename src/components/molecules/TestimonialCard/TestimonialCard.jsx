import React from "react";
import PropTypes from "prop-types";
import classes from "./TestimonialCard.module.css";
import Image from "next/image";
import Rating from "@/components/atoms/Rating/Rating";

export default function TestimonialCard({ data }) {
  return (
    <div className={classes.main}>
      <Rating rating={data?.rating || 4} size={16} />
      <div className={classes.cardBody}>
        <p>
          {data?.testimonial ||
            "The vendor I hired exceeded my expectations. The platform made it easy to compare options and choose the best one."}
        </p>
      </div>
      <div className={classes.author}>
        <Image
          src={data?.authorImage || "/dev-images/dummy-user.png"}
          alt={data?.authorName || "author"}
          width={50}
          height={50}
        />
        <p>{data?.authorName || "John Doe"}</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  data: PropTypes.shape({
    rating: PropTypes.number,
    testimonial: PropTypes.string,
    authorImage: PropTypes.string,
    authorName: PropTypes.string,
  }),
};

