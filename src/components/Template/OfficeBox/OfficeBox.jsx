"use client";
import React, { useState } from "react";
import classes from "./OfficeBox.module.css";
import { Container } from "react-bootstrap";
import { oneOfficePageData } from "@/developmentContent/servicesPageData";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OptimizePerformanceSection from "@/components/organisms/OptimizePerformanceSection/OptimizePerformanceSection";

export default function OfficeBoxTemplate() {
  const [data] = useState(oneOfficePageData);

  return (
    <React.Fragment>
      <HeroSection className={classes.heroSection} data={data.heroSection} highlightedTextOnTop={true} />
      <Container>
        <OptimizePerformanceSection
          showTabs={false}
          data={data.optimizePerformanceSection}
          pageName="One Office"
        />
      </Container>
    </React.Fragment>
  );
}
