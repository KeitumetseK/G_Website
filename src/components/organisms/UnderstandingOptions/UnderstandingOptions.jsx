"use client";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import classes from "./UnderstandingOptions.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import PerfectSolutionCard from "@/components/molecules/PerfectSolutionCard/PerfectSolutionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function UnderstandingOptions({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />

      <div className={classes.tabs}>
        {data?.tabs?.map((tab) => (
          <button
            key={tab.value}
            className={clsx(
              classes.tab,
              tab.value === "one-office" ? classes.greenTab : classes.blueTab
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={classes.sliderWrapper}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className={classes.swiper}
        >
          {data?.slides?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={classes.cardsRow}>
                <PerfectSolutionCard
                  className={classes.card}
                  data={{
                    ...slide.oneOffice,
                    cardVariant: "green",
                    bgColor:
                      "linear-gradient(181deg, #F3F9FF 1.13%, #03D9CC 395.77%)",
                  }}
                />
                <div className={classes.cardsDivider} />
                <PerfectSolutionCard
                  className={classes.card}
                  data={{
                    ...slide.modernWorkplace,
                    cardVariant: "blue",
                    bgColor:
                      "linear-gradient(182deg, #F3F9FF 1.32%, rgba(75, 166, 255, 0.13) 499.95%)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const cardDataShape = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
});

UnderstandingOptions.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        oneOffice: cardDataShape,
        modernWorkplace: cardDataShape,
      })
    ),
  }),
};
