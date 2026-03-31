"use client";

import clsx from "clsx";
import { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

export default function Input({
  id = "",
  type = "text",
  label = "",
  label2 = "", // sub label
  value = "", // input value
  setValue = () => {}, //setValue
  noBorder = false,
  placeholder = "",
  disabled = false,
  customStyle = {}, //Input container inline Style
  inputStyle = {}, //Input inline Style
  labelStyle = {}, //Label inline Style
  error = "", // Error Text
  leftIcon = null, // Icon For Input
  rightIcon = null,
  inputRef = null,
  inputClass = "",
  applyIconColor = false,
  onEnterClick = () => {},
  className = "",
  containerStyles = {},
  containerClass = "",
  max,
  min = 0,
  maxLength = 50,
  required = false,
  ...props
}) {
  const [show, setShow] = useState(false);
  const reactId = useId();
  const inputId = id || reactId;
  return (
    <div
      className={clsx(classes.containerClass, className)}
      style={containerStyles}
    >
      {(label || label2) && (
        <div className={classes.labelWrapper}>
          {label && (
            <label
              htmlFor={inputId}
              className={clsx(classes.labelText, disabled && classes.disabled)}
              style={labelStyle}
            >
              {label}
            </label>
          )}
          {required && <span className={classes.required}>*</span>}
        </div>
      )}
      <div
        className={clsx(
          classes.inputContainer,
          containerClass,
          disabled && classes.inputDisabled
        )}
        style={customStyle}
      >
        {leftIcon && (
          <div
            className={clsx(
              classes.leftIconBox,
              value && classes.withValue,
              applyIconColor && classes.iconColor
            )}
          >
            {leftIcon}
          </div>
        )}
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={disabled}
          placeholder={placeholder}
          type={show ? "text" : type}
          id={inputId}
          className={clsx(
            inputClass,
            classes.inputClassName,
            noBorder && classes.noBorder,
            leftIcon && classes.withLeftIcon,
            rightIcon && classes.withRightIcon
          )}
          style={{ ...inputStyle }}
          onKeyDownCapture={(e) => {
            ["Enter", "NumpadEnter"].includes(e.code) && onEnterClick?.();
          }}
          onBlur={() => {
            if (
              typeof value === "string" &&
              (type === "text" || type === "") &&
              setValue
            ) {
              setValue(value?.trim());
            }
          }}
          ref={inputRef}
          onKeyDown={(e) => {
            if (type === "number") {
              if (
                (props?.max && Number(`${value}${e.key}`) > props?.max) ||
                (min && Number(`${value}${e.key}`) < min)
              ) {
                return e.preventDefault();
              }
              // Allow minus sign only at the start of the input
              if (
                e.key === "-" &&
                (e.target.selectionStart === 0 || e.target.value === "")
              ) {
                return;
              }
              return ["e", "E", "+"].includes(e.key) && e.preventDefault();
            }
          }}
          onWheel={(e) => {
            if (type === "number") {
              e.target.blur();
            }
          }}
          min={min}
          max={max}
          maxLength={maxLength}
          {...props}
        />

        {rightIcon && (
          <div
            className={clsx(
              classes.rightIconBox,
              applyIconColor && classes.iconColor,
              value && classes.withValue
            )}
          >
            {rightIcon}
          </div>
        )}
        {type == "password" && !show && (
          <FaEyeSlash
            className={clsx(classes.passwordIcon)}
            onClick={() => setShow(!show)}
          />
        )}
        {type == "password" && show && (
          <FaEye
            className={clsx(classes.passwordIcon)}
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      {error && <p className={"errorText"}>*{error}</p>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  label2: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  noBorder: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  error: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  inputClass: PropTypes.string,
  applyIconColor: PropTypes.bool,
  onEnterClick: PropTypes.func,
  className: PropTypes.string,
  containerStyles: PropTypes.object,
  containerClass: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
};
