"use client";
import { cyberSecurityServicePageData } from "@/developmentContent/servicesPageData";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Container } from "react-bootstrap";
import classes from "./CyberSecurityBlogDetail.module.css";

export default function CyberSecurityBlogDetail() {
  const { slug } = useParams();
  const course =
    cyberSecurityServicePageData?.completeSecuritySuiteSection?.courses?.find(
      (c) => c.slug === slug
    );
  const data =
    course?.details ||
    cyberSecurityServicePageData?.completeSecuritySuiteSection?.courses[0]
      .details;

  return (
    <Container>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.blogImg}>
            <Image src={data.image} alt={data.title} fill />
          </div>
          <p className={classes.blogContentDescription}>{data.description}</p>
        </div>
      </div>
    </Container>
  );
}
