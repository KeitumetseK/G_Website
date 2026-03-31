"use client";
import React, { useState } from "react";
import classes from "./ProductivitySolutionsTemplate.module.css";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import { productivitySolutionsPageData } from "@/developmentContent/productivitySolutionsPageData";
import { Container } from "react-bootstrap";
import StartJourneySection from "@/components/organisms/StartJourneySection/StartJourneySection";
import ChoosePerfectSolution from "@/components/organisms/ChoosePerfectSolution/ChoosePerfectSolution";
import SolutionComparison from "@/components/organisms/SolutionComparison/SolutionComparison";
import UnderstandingOptions from "@/components/organisms/UnderstandingOptions/UnderstandingOptions";

export default function ProductivitySolutionsTemplate() {
  const [data] = useState(productivitySolutionsPageData);
  return (
    <React.Fragment>
      <HeroSection data={data.heroSection} className={classes.heroSection} />
      <Container>
        <ChoosePerfectSolution data={data.choosePerfectSolution} />
        <UnderstandingOptions data={data.understandingOptions} />
        <SolutionComparison data={data.solutionComparison} />
        <StartJourneySection data={data?.startJourneySection} className={classes.startJourneySection} />
      </Container>
    </React.Fragment>
  );
}
