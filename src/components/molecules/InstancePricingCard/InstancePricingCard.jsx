"use client";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";
import classes from "./InstancePricingCard.module.css";
import Link from "next/link";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";

export default function InstancePricingCard({
  title,
  totalPrice,
  billingPeriod,
  description,
  costBreakdown,
  onAddToCart,
  onGetAssistance,
  disclaimer,
  className,
}) {
  return (
    <div className={clsx(classes.main, className)}>
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.price}>R{totalPrice.toFixed(2)}</p>
        <p className={classes.period}>{billingPeriod}</p>
        {description && <p className={classes.description}>{description}</p>}
      </div>

      {costBreakdown && costBreakdown.length > 0 && (
        <>
          <div className={classes.divider}></div>
          <div className={classes.costBreakdown}>
            <h4 className={classes.breakdownTitle}>Cost Breakdown</h4>
            <div className={classes.breakdownList}>
              {costBreakdown.map((item, index) => (
                <div key={index} className={classes.breakdownItem}>
                  <span className={classes.itemLabel}>{item.label}</span>
                  <span className={classes.itemPrice}>
                    R{item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className={classes.actions}>
        {onAddToCart && (
          <Button
            label="Add To Cart"
            variant="primary"
            onClick={onAddToCart}
            rightIcon={
              <span className={classes.doubleChevron}>
                <AiOutlineDoubleRight size={14} color="white" />
              </span>
            }
            className={classes.actionButton}
            fullWidth
          />
        )}
        {onGetAssistance && (
          <Link href="/contact-us">
            <Button
              label="Get Assistance"
              variant="secondary"
              onClick={onGetAssistance}
              rightIcon={
                <span className={classes.doubleChevron}>
                  <AiOutlineDoubleRight size={14} color="white" />
                </span>
              }
              className={classes.actionButton}
              fullWidth
            />
            <LinkLoader />
          </Link>
        )}
      </div>

      {disclaimer && <p className={classes.disclaimer}>{disclaimer}</p>}
    </div>
  );
}

InstancePricingCard.propTypes = {
  title: PropTypes.string,
  totalPrice: PropTypes.number,
  billingPeriod: PropTypes.string,
  description: PropTypes.string,
  costBreakdown: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  onAddToCart: PropTypes.func,
  onGetAssistance: PropTypes.func,
  disclaimer: PropTypes.string,
  className: PropTypes.string,
};
