"use client";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OptimizePerformanceSection from "@/components/organisms/OptimizePerformanceSection/OptimizePerformanceSection";
import {
  optimizePerformanceSectionData,
  storageSolutionsPageData,
} from "@/developmentContent/servicesPageData";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./Services.module.css";

export default function ServicesPageTemplate() {
  const [data] = useState(storageSolutionsPageData);

  return (
    <React.Fragment>
      <HeroSection className={classes.heroSection} data={data.heroSection} />
      <Container>
        <OptimizePerformanceSection
          showTabs={true}
          data={optimizePerformanceSectionData}
          pageName="Storage Solutions"
        />
      </Container>
    </React.Fragment>
  );
}
