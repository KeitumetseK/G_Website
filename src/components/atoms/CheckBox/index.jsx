"use client";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useId } from "react";
import classes from "./CheckBox.module.css";

const Checkbox = ({
  id = "",
  required = false,
  label,
  label2 = "", // sub label
  value, // checkbox value (boolean)
  setValue, // setValue function
  disabled = false,
  error = "",
  errorText, // Error Text (deprecated, use error)
  className = "",
  containerStyles = {},
  labelStyle,
  labelClass = "",
  ...props
}) => {
  const reactId = useId();
  const checkboxId = id || reactId;
  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    if (setValue && !disabled) {
      setValue(e.target.checked);
    }
  };

  const showError = error || errorText;

  return (
    <div
      className={clsx(classes.container, className)}
      style={{ ...containerStyles }}
    >
      <div className={classes.checkboxContainer}>
        <div className={classes.checkboxWrapper}>
          <input
            type="checkbox"
            id={checkboxId}
            checked={Boolean(value)}
            onChange={handleCheckboxChange}
            disabled={disabled}
            className={clsx(
              classes.checkboxInput,
              disabled && classes.checkboxInputDisabled
            )}
            {...props}
          />
          {(label || label2) && (
            <label
              htmlFor={checkboxId}
              className={clsx(
                classes.checkboxLabel,
                disabled && classes.disabled,
                labelClass
              )}
              style={{ ...labelStyle }}
            >
              {label}
              {label2 && <span className={classes.label2Text}>{label2}</span>}
              {required && <span className={classes.required}> *</span>}
            </label>
          )}
        </div>
      </div>
      {showError && <p className={"errorText"}>*{showError}</p>}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  label2: PropTypes.string,
  value: PropTypes.bool,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  containerStyles: PropTypes.object,
  labelStyle: PropTypes.object,
  labelClass: PropTypes.string,
};

export default Checkbox;
