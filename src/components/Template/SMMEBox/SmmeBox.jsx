"use client";
import React, { useState } from "react";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OptimizePerformanceSection from "@/components/organisms/OptimizePerformanceSection/OptimizePerformanceSection";
import { smmeBoxPageData } from "@/developmentContent/servicesPageData";
import { Container } from "react-bootstrap";
import classes from "./SmmeBox.module.css";

export default function SmmeBoxTemplate() {
  const [data] = useState(smmeBoxPageData);

  return (
    <React.Fragment>
      <HeroSection data={data.heroSection} className={classes.heroSection} />
      <Container>
        <OptimizePerformanceSection
          showTabs={false}
          data={data.optimizePerformanceSection}
          pageName="SMME Box"
        />
      </Container>
    </React.Fragment>
  );
}
