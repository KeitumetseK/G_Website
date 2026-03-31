"use client";
import SuspenseLoader from "@/components/atoms/SuspenseLoader/SuspenseLoader";
import BuildInstanceSection from "@/components/organisms/BuildInstanceSection/BuildInstanceSection";
import GoleComputeSection from "@/components/organisms/GoleComputeSection/GoleComputeSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import { buildSpecificationPageData } from "@/developmentContent/buildSpecificationPageData";
import React, { Suspense, useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./StorageSolutionPurchasing.module.css";

function StorageSolutionPurchasingContent() {
  const [data] = useState(buildSpecificationPageData);
  const heroData = {
    title: "Scale Your Compute On Demand",
    highlightedText: "Interactive Pricing Calculator Below",
    description:
      "Configure your perfect compute instance below and watch pricing update in real-time. Complete transparency, no hidden fees.",
  };

  const scrollToCalculator = () => {
    const element = document.getElementById("storage-solution-purchasing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <React.Fragment>
      <HeroSection
        data={heroData}
        className={classes.heroSection}
        highlightedTextOnTop
        showButtons
        btn2props={{
          label: "Try Calculator Below",
          variant: "secondary",
          onClick: scrollToCalculator,
        }}
      />
      <Container>
        <BuildInstanceSection data={data} id="storage-solution-purchasing" />
        <GoleComputeSection data={data.goleCompute} />
      </Container>
    </React.Fragment>
  );
}

export default function StorageSolutionPurchasingTemplate() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <StorageSolutionPurchasingContent />
    </Suspense>
  );
}
