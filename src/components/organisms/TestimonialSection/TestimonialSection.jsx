"use client";
import PropTypes from "prop-types";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import TestimonialCard from "@/components/molecules/TestimonialCard/TestimonialCard";
import classes from "./TestimonialSection.module.css";

export default function TestimonialSection({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />
      <div className={classes.testimonialCards}>
        {data?.testimonials?.map((testimonial) => (
          <TestimonialCard key={testimonial?.id} data={testimonial} />
        ))}
      </div>
    </div>
  );
}

TestimonialSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    testimonials: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        rating: PropTypes.number,
        testimonial: PropTypes.string,
        authorImage: PropTypes.string,
        authorName: PropTypes.string,
      })
    ),
  }),
};

