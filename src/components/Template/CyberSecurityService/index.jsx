"use client";
import SecurityGoleSection from "@/components/molecules/SecurityGoleSection/SecurityGoleSection";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import CompleteSecuritySuiteSection from "@/components/organisms/CompleteSecuritySuiteSection/CompleteSecuritySuiteSection";
import ContactForm from "@/components/organisms/ContactForm/ContactForm";
import ContactUsSection from "@/components/organisms/ContactUsSection/ContactUsSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import StartJourneySection from "@/components/organisms/StartJourneySection/StartJourneySection";
import WhyChooseUsSection from "@/components/organisms/WhyChooseUsSection/WhyChooseUsSection";
import { cyberSecurityServicePageData } from "@/developmentContent/servicesPageData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./CyberSecurityService.module.css";
import Image from "next/image";

export default function CyberSecurityServiceTemplate() {
  const router = useRouter();
  const [data] = useState(cyberSecurityServicePageData);
  return (
    <React.Fragment>
      <HeroSection
        className={classes.heroSection}
        data={data.heroSection}
        showButtons={true}
        btn1props={{
          label: "Request a demo",
          variant: "primary",
          onClick: () => {
            router.push(`/contact-us?service=security-cloud-services`);
          },
        }}
      />
      <Container>
        <SecurityGoleSection data={data.securityGoleSection} />
        <div className={classes.servicesContainer}>
          {data?.servicesCards.map((item, index) => (
            <ServicesCard
              key={item.title || index}
              data={item}
              className={classes.serviceCard}
            />
          ))}
        </div>
        <CompleteSecuritySuiteSection
          data={data?.completeSecuritySuiteSection}
          btn1props={{
            onClick: () => {
              router.push("/contact-us");
            },
          }}
        />
        <ContactUsSection
          className={classes.contactUsSection}
          data={data.contactUsSection}
        >
          <ContactForm />
        </ContactUsSection>
        <WhyChooseUsSection
          data={data.whyChooseUsSection}
          className={classes.whyChooseUsSection}
        >
          <div className={classes.whyChooseUsContent}>
            <p className={classes.headline}>
              {data?.whyChooseUsSection?.partnershipContent?.headline}
            </p>
            <p className={classes.description}>
              {data?.whyChooseUsSection?.partnershipContent?.description}
            </p>
            <p className={classes.deliverHeader}>
              {data?.whyChooseUsSection?.partnershipContent?.deliverHeader}
            </p>
            <ul className={classes.deliverList}>
              {data?.whyChooseUsSection?.partnershipContent?.deliverables.map(
                (item, index) => (
                  <li key={`deliverable-${index}-${item.substring(0, 10)}`}>
                    <span className={classes.checkIcon}>
                      <Image src="/svgs/check.svg" alt="check" fill />
                    </span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </WhyChooseUsSection>

        <StartJourneySection data={data?.startJourneySection} />
      </Container>
    </React.Fragment>
  );
}
