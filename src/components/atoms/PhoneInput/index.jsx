"use client";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { useState } from "react";
import PropTypes from "prop-types";
import ReactPhoneInput from "react-phone-input-2";
import clsx from "clsx";
import classes from "./PhoneInput.module.css";
import "react-phone-input-2/lib/bootstrap.css";
import "./style.css";
const PhoneInput = ({
  required = false,
  value,
  setValue,
  label = "",
  label2 = "",
  error = "",
  errorText = "",
  labelStyle = {},
  disabled = false,
  customStyle = {},
  className = "",
  containerStyles = {},
  containerClass = "",
  defaultCountry = "us",
  showDropdown = false,
  leftIcon = null,
  applyIconColor = false,
}) => {
  const [internalError, setInternalError] = useState("");
  const showError = error || errorText || internalError;

  // Convert value to string format expected by react-phone-input-2
  // react-phone-input-2 expects international format string or empty string
  const getPhoneValue = () => {
    if (!value) return "";
    // If value is a string, return it (should be in international format or empty)
    if (typeof value === "string") {
      return value;
    }
    // If value is an object, try to construct the phone number
    if (typeof value === "object" && value !== null) {
      if (value.phoneNumber) {
        const callingCode = value.callingCode || "";
        const phoneNumber = value.phoneNumber || "";
        return callingCode && phoneNumber
          ? `+${callingCode}${phoneNumber}`
          : "";
      }
    }
    return "";
  };

  const handlePhoneChange = (phone) => {
    // Ensure phone is a string
    const phoneString = typeof phone === "string" ? phone : String(phone || "");
    const phoneNumberObj = parsePhoneNumberFromString(`+${phoneString}`);

    if (phoneNumberObj?.country) {
      const isValid = isValidPhoneNumber(
        phoneNumberObj.nationalNumber,
        phoneNumberObj?.country
      );
      setValue({
        callingCode: phoneNumberObj.countryCallingCode,
        phoneNumber: phoneNumberObj.nationalNumber,
        isValid: isValid,
      });

      if (isValid) {
        setInternalError("");
      } else {
        setInternalError("Invalid phone number");
      }
    } else {
      setInternalError("");
      // Still update value even if parsing fails
      if (phoneString) {
        // Try to extract calling code from the phone string
        const match = phoneString.match(/^(\d{1,4})(.+)$/);
        if (match) {
          setValue({
            callingCode: match[1],
            phoneNumber: match[2],
          });
        }
      }
    }
  };

  const hasValue = getPhoneValue();

  return (
    <div className={clsx(classes.container, className)} style={containerStyles}>
      {(label || label2) && (
        <div className={classes.labelWrapper}>
          {label && (
            <label
              htmlFor={`phoneInput${label}`}
              className={clsx(classes.labelText, disabled && classes.disabled)}
              style={labelStyle}
            >
              {label} {required && <span className={classes.required}>*</span>}
            </label>
          )}
          {label2 && <div className={classes.label2Wrapper}>{label2}</div>}
        </div>
      )}

      <div
        className={clsx(
          classes.inputWrapper,
          containerClass,
          leftIcon && classes.withLeftIcon,
          disabled && classes.inputDisabled
        )}
        style={customStyle}
      >
        {leftIcon && (
          <div
            className={clsx(
              classes.leftIconBox,
              hasValue && classes.withValue,
              applyIconColor && classes.iconColor
            )}
          >
            {leftIcon}
          </div>
        )}

        <ReactPhoneInput
          country={defaultCountry}
          value={getPhoneValue()}
          onChange={handlePhoneChange}
          containerClass={classes.inputContainer}
          disabled={disabled}
          specialLabel=""
          countryCodeEditable={false}
          showDropdown={showDropdown}
        />
      </div>
      {showError && <p className={"errorText"}>*{showError}</p>}
    </div>
  );
};

PhoneInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      callingCode: PropTypes.string,
      phoneNumber: PropTypes.string,
      isValid: PropTypes.bool,
    }),
  ]),
  setValue: PropTypes.func,
  label: PropTypes.string,
  label2: PropTypes.string,
  error: PropTypes.string,
  errorText: PropTypes.string,
  labelStyle: PropTypes.object,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  containerStyles: PropTypes.object,
  containerClass: PropTypes.string,
  defaultCountry: PropTypes.string,
  showDropdown: PropTypes.bool,
  leftIcon: PropTypes.node,
  applyIconColor: PropTypes.bool,
};

export default PhoneInput;
