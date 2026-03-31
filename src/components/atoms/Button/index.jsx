"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";
import { Spinner } from "react-bootstrap";
import clsx from "clsx";

const Button = ({
  label,
  fullWidth = false,
  buttonStyles = {},
  onClick = () => {},
  disabled = false,
  children,
  leftIcon = null,
  rightIcon = null,
  className = "",
  variant = "",
  type = "button",
  loading = false,
  showSpinner = false,
  spinnerStyles = {},
  ...props
}) => {
  return (
    <button
      type={type}
      style={{
        ...buttonStyles,
        ...(fullWidth && { width: "100%" }),
      }}
      onClick={onClick}
      disabled={disabled}
      data-color-variant={variant}
      className={clsx(classes.btn, className)}
      {...props}
    >
      {leftIcon}
      {label && <label>{label}</label>}
      {children}
      {!(loading && showSpinner) && rightIcon}
      {showSpinner && loading && <Spinner size="sm" style={spinnerStyles} />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  buttonStyles: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  showSpinner: PropTypes.bool,
  spinnerStyles: PropTypes.object,
};

export default Button;
