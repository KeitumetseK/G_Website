"use client";
import ContactForm from "@/components/organisms/ContactForm/ContactForm";
import ContactUsSection from "@/components/organisms/ContactUsSection/ContactUsSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OurValuesSection from "@/components/organisms/OurValuesSection/OurValuesSection";
import { contactUsPageData } from "@/developmentContent/contactUsPageData";
import { useState, Suspense } from "react";
import { Container } from "react-bootstrap";
import classes from "./ContactUs.module.css";
import { useSearchParams } from "next/navigation";
import SuspenseLoader from "@/components/atoms/SuspenseLoader/SuspenseLoader";
import React from "react";

function ContactUsContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [data] = useState(contactUsPageData);
  return (
    <React.Fragment>
      <HeroSection data={data.heroSection} className={classes.heroSection}>
        
        <OurValuesSection
          data={data.ourValuesSection}
          cardsClassName={classes.cardsContainer}
          showHeading={false}
        />
      </HeroSection>
      <Container className={classes.contactUsSectionContainer}>
        <ContactUsSection
          className={classes.contactUsSection}
          data={data.contactUsSection}
        >
          <ContactForm service={service} />
        </ContactUsSection>
      </Container>
    </React.Fragment>
  );
}

export default function ContactUsTemplate() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <ContactUsContent />
    </Suspense>
  );
}
