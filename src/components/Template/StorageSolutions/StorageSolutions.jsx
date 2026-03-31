"use client";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OptimizePerformanceSection from "@/components/organisms/OptimizePerformanceSection/OptimizePerformanceSection";
import { storageSolutionsPageData } from "@/developmentContent/servicesPageData";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./StorageSolutions.module.css";

export default function StorageSolutionsTemplate() {
  const [data] = useState(storageSolutionsPageData);
  return (
    <React.Fragment>
      <HeroSection className={classes?.heroSection} data={data?.heroSection} />
      <Container>
        <OptimizePerformanceSection
          showTabs={false}
          data={data?.optimizePerformanceSection}
          pageName="Storage Solutions"
        />
      </Container>
    </React.Fragment>
  );
}
