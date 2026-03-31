"use client";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import ContactUsSection from "@/components/organisms/ContactUsSection/ContactUsSection";
import ContactForm from "@/components/organisms/ContactForm/ContactForm";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OurCoreValueSection from "@/components/organisms/OurCoreValueSection/OurCoreValueSection";
import OurMissionSection from "@/components/organisms/OurMissionSection/OurMissionSection";
import PartnersSliderSection from "@/components/organisms/PartnersSliderSection/PartnersSliderSection";
import StartJourneySection from "@/components/organisms/StartJourneySection/StartJourneySection";
import TestimonialSection from "@/components/organisms/TestimonialSection/TestimonialSection";
import WhyChooseUsSection from "@/components/organisms/WhyChooseUsSection/WhyChooseUsSection";
import { landingPageData } from "@/developmentContent/landingPageData";
import { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./HomeTemplate.module.css";
import { useRouter } from "next/navigation";

export default function HomeTemplate() {
  const router = useRouter();
  const [data] = useState(landingPageData);

  return (
    <div className={classes.homeTemplate}>
      <HeroSection
        data={data.heroSection}
        className={classes?.heroSection}
        showButtons={true}
        
        btn2props={{
          label: "Explore Our Solutions",
          variant: "secondary",
          onClick: () => {
            router.push("/about-us#what-we-do");
          },
        }}
      />
      <Container>
        <PartnersSliderSection data={data.partnersSliderSection} />
        <WhyChooseUsSection data={data.whyChooseUsSection} />
        <OurCoreValueSection data={data.ourCoreValueSection} />
        <OurMissionSection data={data.ourMissionSection} />
        <TestimonialSection data={data.testimonialSection} />
        <StartJourneySection data={data.startJourneySection} />
          <HeadingSection
            title={data.contactUsSection.heading}
            description={data.contactUsSection.subHeading}
            className={classes.contactHeader}
          />
          <ContactUsSection data={data.contactUsSection}>
            <ContactForm showCaptcha={false} />
          </ContactUsSection>
      </Container>
    </div>
  );
}
