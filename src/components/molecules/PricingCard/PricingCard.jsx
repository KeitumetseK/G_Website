"use client";
import Button from "@/components/atoms/Button";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AiOutlineDoubleRight } from "react-icons/ai";
import classes from "./PricingCard.module.css";
import Link from "next/link";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";
import Counter from "@/components/atoms/Counter/Counter";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function PricingCard({ data, pageName, serviceType }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  
  const getPurchaseUrl = () => {
    const params = new URLSearchParams({
      product: data.title,
      page: pageName,
    });
    if (serviceType) {
      params.append('serviceType', serviceType);
    }
    
    // Only link to storage solution purchasing if we're on the storage solutions page
    const isStorageSolutionsPage = pathname === "/services/storage-solutions";
    
    if (isStorageSolutionsPage) {
      return `/services/storage-solution-purchasing?${params.toString()}`;
    }
    
    // All other pricing cards link to regular purchase page
    return `/services/purchase?${params.toString()}`;
  };

  return (
    <div className={classes.main}>
      <div className={classes.pricingSection}>
        <p>{data.title}</p>
        <p className={clsx(classes.lightedPriceText, "highlightedText")}>
           {data.price}
        </p>
        <p>{data.frequency}</p>
      </div>
      <p className={classes.description}>{data.description}</p>
      {pageName ? (
        <Link
          href={getPurchaseUrl()}
          className={classes.btn}
        >
          <Button
            label="Get Started"
            variant="secondary"
            rightIcon={<AiOutlineDoubleRight size={14} color="white" />}
          />
          <LinkLoader />
        </Link>
      ) : (
        <div className={classes.priceDetails}>
          <p>
            Price: R 22.00 <span>/month</span>
          </p>
          <Counter value={count} setValue={setCount} />
        </div>
      )}
    </div>
  );
}

PricingCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    frequency: PropTypes.string,
    description: PropTypes.string,
  }),
  pageName: PropTypes.string,
  serviceType: PropTypes.string,
};
