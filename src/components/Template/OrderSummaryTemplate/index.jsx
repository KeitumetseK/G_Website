"use client";
import React, { useState } from "react";
import classes from "./OrderSummaryTemplate.module.css";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OrderSummarySection from "@/components/organisms/OrderSummarySection/OrderSummarySection";
import { Container } from "react-bootstrap";
import { orderSummaryPageData } from "@/developmentContent/orderSummaryData";

export default function OrderSummaryTemplate() {
  const [data] = useState(orderSummaryPageData);
  return (
    <React.Fragment>
      <HeroSection data={data.heroSection} className={classes.heroSection} />
      <Container>
        <OrderSummarySection data={data.orderSummaryCardsData} />
      </Container>
    </React.Fragment>
  );
}
