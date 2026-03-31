"use client";
import Button from "@/components/atoms/Button";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { AiOutlineDoubleRight } from "react-icons/ai";
import classes from "./HeroSection.module.css";

export default function HeroSection({
  data,
  showButtons = false,
  className,
  btn1props = {
    label: "",
    variant: "primary",
    onClick: () => {},
  },
  btn2props = {
    label: "",
    variant: "secondary",
    onClick: () => {},
  },
  highlightedTextOnTop = false,
  children,
}) {
  return (
    <div
      className={clsx(
        classes.heroSection,
        data?.image && classes.imageHeroSection,
        className
      )}
    >
      <Container>
        <div
          className={
            data.image ? classes.heroSectionContentContainerWithImage : ""
          }
        >
          <div
            className={
              data.image
                ? classes.heroSectionContentWithImage
                : classes.heroSectionContent
            }
          >
            {highlightedTextOnTop ? (
              <>
                {data.highlightedText && (
                  <p
                    className={clsx(classes.highlightedText, "highlightedText")}
                  >
                    {data.highlightedText}
                  </p>
                )}
                <p className={classes.title}>{data.title}</p>
              </>
            ) : (
              <>
                <p className={classes.title}>{data.title}</p>
                {data.highlightedText && (
                  <p
                    className={clsx(classes.highlightedText, "highlightedText")}
                  >
                    {data.highlightedText}
                  </p>
                )}
              </>
            )}

            <p className={classes.description}>{data.description}</p>
            {showButtons && (
              <div
                className={
                  data.image
                    ? classes.heroSectionButtonsWithImage
                    : classes.heroSectionButtons
                }
              >
                {btn1props?.label && (
                  <Button
                    label={btn1props.label}
                    variant={btn1props.variant}
                    onClick={btn1props.onClick}
                  />
                )}
                {btn2props?.label && (
                  <Button
                    label={btn2props.label}
                    variant={btn2props.variant}
                    rightIcon={<AiOutlineDoubleRight size={14} color="white" />}
                    onClick={btn2props.onClick}
                  />
                )}
              </div>
            )}
          </div>
          {data.image && (
            <div className={classes.heroSectionImage}>
              <Image src={data.image} alt="hero-section" fill />
            </div>
          )}


        </div>
        {children}
      </Container>
    </div>
  );
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    highlightedText: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    btnLabel1: PropTypes.string,
    btnLabel2: PropTypes.string,
    highlightedTextOnTop: PropTypes.bool,
  }),
  showButtons: PropTypes.bool,
  className: PropTypes.string,
  btn1props: PropTypes.shape({
    label: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
  }),
  btn2props: PropTypes.shape({
    label: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
  }),
  highlightedTextOnTop: PropTypes.bool,
  children: PropTypes.node,
};
