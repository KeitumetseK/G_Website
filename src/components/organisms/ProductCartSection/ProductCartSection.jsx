"use client";
import { useState, useMemo } from "react";
import classes from "./ProductCartSection.module.css";
import DropDown from "@/components/molecules/DropDown";
import Button from "@/components/atoms/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Counter from "@/components/atoms/Counter/Counter";
import PropTypes from "prop-types";
import { pricingDropdownOptions } from "@/developmentContent/dummyData";
import Image from "next/image";
import { purchasePageData } from "@/developmentContent/purchasePageData";
import Link from "next/link";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";

const getServiceFromPageName = (pageName) => {
  const serviceMap = {
    "One Office": "one-office",
    "Modern Workplace": "modern-workplace",
    "SMME Box": "smme-solutions",
    "Storage Solutions": "managed-hosted-vm",
  };

  return serviceMap[pageName] || null;
};

export default function ProductCartSection({ productTitle, pageName, serviceType }) {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [data] = useState(purchasePageData)

  const price = 22;

  const serviceValue = useMemo(
    () => serviceType || getServiceFromPageName(pageName),
    [serviceType, pageName]
  );

  return (
    <div className={classes.main}>
      <div className={classes.leftSection}>
        <p>{pageName || "N/A"}</p>
      </div>
      <div className={classes.rightSection}>
        <p className={classes.title}>
          {productTitle || "N/A"}
        </p>
        <DropDown
          options={pricingDropdownOptions}
          containerClass={classes.dropdownContainer}
          value={selectedOption}
          setValue={setSelectedOption}
        />
      <div className={classes.priceSection}>
        <p>Features:</p>
        <ul>
         {
          data?.features?.map((feature) => (
            <li key={feature.id}>
              <span><Image src="/svgs/check.svg" alt="check" fill /></span>
              <p>{feature.title}</p>
            </li>
          ))
         }
        </ul>
      </div>
        <div className={classes.priceContainer}>
          <p className={classes.price}>
            Price: R {price.toFixed(2)} <span>/month</span>
          </p>

          <div className={classes.buttons}>
            <Counter
              value={count}
              setValue={setCount}
              className={classes.counter}
            />
            <div className={classes.buttonsContainer}>

              <Button
                label="Add to Cart"
                variant="secondary"
                rightIcon={<AiOutlineDoubleRight size={24} color="white" />}
                className={classes.addCartButton}
              />
            <Link href={serviceValue ? `/contact-us?service=${serviceValue}` : "/contact-us"}>
              <Button
                label="Need Assistance?"
                variant="secondary"
              />
              <LinkLoader />
            </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCartSection.propTypes = {
  productTitle: PropTypes.string,
  pageName: PropTypes.string,
  serviceType: PropTypes.string,
};
