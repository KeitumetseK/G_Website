"use client";
import SuspenseLoader from "@/components/atoms/SuspenseLoader/SuspenseLoader";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ProductCartSection from "@/components/organisms/ProductCartSection/ProductCartSection";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import classes from "./PurchaseTemplate.module.css";

function PurchaseContent() {
  const searchParams = useSearchParams();
  const productTitle = searchParams.get("product");
  const pageName = searchParams.get("page");
  const serviceType = searchParams.get("serviceType");

  const heroData = {
    title: productTitle || "Purchase",
    description: "A reliable, cost-effective cloud server for basic business workloads.",
  };

  return (
    <React.Fragment>
      <HeroSection data={heroData} className={classes.heroSection} />
      <Container>
        <ProductCartSection 
          productTitle={productTitle} 
          pageName={pageName}
          serviceType={serviceType}
        />

       
      </Container>
    </React.Fragment>
  );
}

export default function PurchaseTemplate() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <PurchaseContent />
    </Suspense>
  );
}

