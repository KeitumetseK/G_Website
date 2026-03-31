"use client";
import React, { useState } from "react";
import classes from "./ModernWorkplaceTemplate.module.css";
import { Container } from "react-bootstrap";
import { modernWorkplacePageData } from "@/developmentContent/servicesPageData";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OptimizePerformanceSection from "@/components/organisms/OptimizePerformanceSection/OptimizePerformanceSection";

export default function ModernWorkplaceTemplate() {
  const [data] = useState(modernWorkplacePageData);

  return (
    <React.Fragment>
      <HeroSection className={classes.heroSection} data={data.heroSection} />
      <Container>
        <OptimizePerformanceSection
          showTabs={false}
          data={data.optimizePerformanceSection}
          pageName="Modern Workplace"
        />
      </Container>
    </React.Fragment>
  );
}
