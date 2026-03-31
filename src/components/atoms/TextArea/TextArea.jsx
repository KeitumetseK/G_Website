"use client";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useId } from "react";
import classes from "./TextArea.module.css";

export function TextArea({
  id = "",
  value = "",
  setValue = () => {},
  label = "",
  label2 = "", // sub label
  placeholder = "",
  customStyle = {},
  labelStyle = {},
  rows = 3,
  className = "",
  containerClass = "",
  containerStyles = {},
  disabled = false,
  labelClass = "",
  error = "",
  required = false,
  children,
  ...props
}) {
  const reactId = useId();
  const textAreaId = id || reactId;
  return (
    <div
      className={clsx(classes.containerClass, containerClass)}
      style={containerStyles}
    >
      {(label || label2) && (
        <div className={classes.labelWrapper}>
          {label && (
            <label
              htmlFor={textAreaId}
              style={{ ...labelStyle }}
              className={clsx(
                classes.labelText,
                labelClass,
                disabled && classes.disabled
              )}
            >
              {label}
              {required && <span className={classes.required}> *</span>}
            </label>
          )}
          {label2 && (
            <div className={classes.label2Wrapper}>
              <span className={classes.label2Text}>{label2}</span>
            </div>
          )}
        </div>
      )}
      <div
        className={clsx(
          classes.textareaContainer,
          disabled && classes.textareaDisabled
        )}
        style={customStyle}
      >
        <textarea
          id={textAreaId}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={() => {
            setValue(value?.trim());
          }}
          className={clsx(classes.textarea, className)}
          rows={rows}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && <p className={clsx("errorText")}>*{error}</p>}
      {children}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  label2: PropTypes.string,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  rows: PropTypes.number,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  containerStyles: PropTypes.object,
  disabled: PropTypes.bool,
  labelClass: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  required: PropTypes.bool,
};
