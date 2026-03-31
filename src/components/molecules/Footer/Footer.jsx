"use client";
import {
  footerBottomData,
  footerNavigationData,
} from "@/resources/utils/headerFooterData";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import classes from "./styles.module.css";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={classes.footerSectionMain}>
      <Container>
        <div className={classes.footerContainer}>
          <div className={classes.footer}>
            <div className={classes.footerSection}>
              <div className={classes.footerLogo}>
                <div className={classes.footerLogoImage}>
                  <Image
                    src="/svgs/logo.svg"
                    alt="logo"
                    fill
                  />
                </div>
                <p>
                  GOLE empower your business with next-generation cloud
                  computing and storage solutions built for speed, security, and
                  flexibility.
                </p>
              </div>
            </div>
            <div className={classes.footerNavigation}>
              <h3>Navigation</h3>
              <div className={classes.footerNavigationList}>
                {footerNavigationData?.map((item) => (
                  <Link
                    href={item.path}
                    key={item.path}
                    className={classes.navLink}
                  >
                    {item.label}
                    <LinkLoader />
                  </Link>
                ))}
              </div>
            </div>
            <div className={classes.footerContact}>
              <h3>Get In Touch</h3>
              <div className={classes.contactInfo}>
                <div className={classes.contactInfoItem}>
                  <h3>Email Us:</h3>
                  <p>info@logohere.com</p>
                </div>
                <p>Or book a free call to talk through your project</p>
              </div>
            </div>
            <div className={classes.footerSocial}>
              <h3>Social Links</h3>
              <div className={classes.socialIcons}>
                <Link
                  href="https://x.com/goletech"
                  target="_blank"
                  className={classes.socialIconItem}
                >
                  <BsTwitterX size={14} color="#0D1B2A" />
                </Link>
                <Link
                  href="https://www.instagram.com/goletech"
                  target="_blank"
                  className={classes.socialIconItem}
                >
                  <FaInstagram size={14} color="#0D1B2A" />
                </Link>
                <Link
                  href="https://www.facebook.com/goletech"
                  target="_blank"
                  className={classes.socialIconItem}
                >
                  <SlSocialFacebook size={14} color="#0D1B2A" />
                </Link>
                <Link
                  href="https://www.youtube.com/@goletech"
                  target="_blank"
                  className={classes.socialIconItem}
                >
                  <PiYoutubeLogo size={14} color="#0D1B2A" />
                </Link>
                <Link
                  href="https://wa.me/27798118825"
                  target="_blank"
                  className={classes.socialIconItem}
                >
                  <FaWhatsapp size={14} color="#0D1B2A" />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.footerBottom}>
            <div className={classes.footerCopyrightText}>
              <p>© 2025 Gole. All rights reserved.</p>
            </div>
            <div className={classes.footerCopyrightText}>
              {footerBottomData?.map((item) => (
                <Link href={item.path} className={classes.navLink} key={item.path}>
                  {item.label}
                  <LinkLoader />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
