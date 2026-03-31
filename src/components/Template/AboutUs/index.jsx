"use client";
import AboutWhatWeDoSection from "@/components/organisms/AboutWhatWeDoSection/AboutWhatWeDoSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OurValuesSection from "@/components/organisms/OurValuesSection/OurValuesSection";
import WhyChooseUsSection from "@/components/organisms/WhyChooseUsSection/WhyChooseUsSection";
import { aboutUsPageData } from "@/developmentContent/aboutUsPageData";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./AboutUsTemplate.module.css";
import OurMissions from "@/components/organisms/OurMissions/OurMissions";

export default function AboutUsTemplate() {
  const [data] = useState(aboutUsPageData);

  return (
    <React.Fragment>
      <HeroSection
        className={classes?.heroSection}
        showButtons
        data={data?.heroSection}
      />
      <Container>
        <AboutWhatWeDoSection data={data?.whatWeDoSection} />
        <OurMissions data={data?.ourMissionSection} />
        <OurValuesSection data={data?.ourValuesSection} cardsClassName={classes.cardsContainer} />
        <WhyChooseUsSection showReadMoreButton={false} data={data?.whyChooseUsSection} />
      </Container>
    </React.Fragment>
  );
}
