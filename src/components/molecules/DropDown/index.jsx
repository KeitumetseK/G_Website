"use client";
import Checkbox from "@/components/atoms/CheckBox";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useId } from "react";
import { IoChevronDown } from "react-icons/io5";
import ReactSelect, { components } from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";
import classes from "./DropDown.module.css";

const DropDown = ({
  options = [],
  value,
  setValue,
  isMulti = false,
  disabled = false,
  placeholder = "Select...",
  label,
  label2 = "",
  required = false,
  leftIcon,
  applyIconColor = false,
  error = "",
  errorText,
  errorTextClass,
  labelClassName,
  containerClass = "",
  variant = "",
  borderRadius,
  style,
  customStyle,
  isSearchable = false,
  optionLabel,
  optionValue,
  loadOptions, // Passed from parent
  initialPageNumber = 1,
  isAsync = false,
  ...props
}) => {
  const instanceId = useId();
  const DropdownComponent = isAsync ? AsyncPaginate : ReactSelect;

  const CustomOption = (optionProps) => {
    const { isSelected, children, data } = optionProps;

    return (
      <components.Option {...optionProps}>
        <div className={classes.checkboxContainer}>
          {isMulti && (
            <Checkbox
              checked={isSelected}
              onChange={() => {
                optionProps.selectOption(data);
              }}
              className={classes.checkbox}
            />
          )}
          {children}
        </div>
      </components.Option>
    );
  };

  const DropdownIndicator = (indicatorProps) => (
    <components.DropdownIndicator {...indicatorProps}>
      <IoChevronDown
        className={clsx(
          classes.indicatorIcon,
          indicatorProps.selectProps.menuIsOpen && classes.indicatorOpen
        )}
        size={16}
      />
    </components.DropdownIndicator>
  );

  const dropDownStyle = {
    control: (styles, { isSelected, isDisabled, isFocused }) => ({
      ...styles,
      width: "100%",
      backgroundColor: "var(--white)",
      padding: "0",
      borderRadius: borderRadius ?? "var(--s10)",
      color: "var(--black-2)",
      boxShadow: "none",
      fontFamily: "var(--font-inter)",
      fontWeight: 500,
      fontSize: "var(--fs14)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      border: "1px solid var(--white-5)",
      opacity: isDisabled ? 0.5 : 1,
      minHeight: "max-content",
      height: "46px",
      minWidth: variant === "primary" && "100%",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      ...customStyle,
      ":hover": {
        ...styles[":hover"],
        borderColor: "var(--blue-4)",
        boxShadow: "0 0 0 1px var(--blue-4-o10)",
      },
      ":active": {
        ...styles[":active"],
        borderColor: "var(--blue-1)",
        boxShadow: "0 0 0 3px var(--blue-4-o10)",
      },
      ...(isFocused && {
        borderColor: "var(--blue-1)",
        boxShadow: "0 0 0 3px var(--blue-4-o10)",
      }),
      ...(leftIcon && {
        paddingLeft: "var(--s30)",
      }),
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "var(--white)",
      zIndex: 9999,
      color: "var(--black-2)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      border: "1px solid var(--white-5)",
      borderRadius: "var(--s10)",
      marginTop: "4px",
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      fontSize: "var(--fs14)",
      fontFamily: "var(--font-inter)",
      color: "var(--gray-4)",
      opacity: 0.4,
      fontWeight: 400,
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor:
        isSelected || isFocused ? "var(--blue-1)" : "var(--white)",
      color: isSelected || isFocused ? "var(--white)" : "var(--black-2)",
      padding: "8px 16px",
      fontFamily: "var(--font-inter)",
      fontWeight: 500,
      fontSize: "var(--fs14)",
      cursor: "pointer",
      borderBottom: "1px solid var(--white-7)",
      ":hover": {
        ...styles[":hover"],
        cursor: "pointer",
        backgroundColor: "var(--blue-1)",
        color: "var(--white)",
      },
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: "var(--fs14)",
      fontFamily: "var(--font-inter)",
      fontWeight: 500,
      color: "var(--black-2)",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "var(--blue-1)",
      color: "var(--white)",
      borderRadius: "100px",
      padding: "0 var(--s10)",
      fontFamily: "var(--font-inter)",
      fontWeight: 500,
      fontSize: "var(--fs12)",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "var(--white)",
      fontSize: "var(--fs14)",
    }),
  };

  const hasValue = value && (isMulti ? value.length > 0 : value);
  const showError = error || errorText;

  return (
    <div
      className={clsx(
        classes.container,
        containerClass,
        variant === "primary" && classes.primary
      )}
    >
      {(label || label2) && (
        <div className={classes.labelWrapper}>
          {label && (
            <label
              htmlFor={`dropdown-${label}`}
              className={clsx(
                classes.labelText,
                labelClassName,
                disabled && classes.disabled
              )}
            >
              {label} {required && <span className={classes.required}>*</span>}
            </label>
          )}
          {label2 && <div className={classes.label2Wrapper}>{label2}</div>}
        </div>
      )}
      <div
        className={clsx(
          classes.selectContainer,
          disabled && classes.selectContainerDisabled
        )}
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
        <DropdownComponent
          instanceId={instanceId}
          inputId={`dropdown${label}`}
          value={value}
          onChange={(e) => setValue(e)}
          options={options}
          styles={{ ...dropDownStyle, ...style }}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null,
            Option: isMulti ? CustomOption : components.Option,
          }}
          getOptionLabel={(option) =>
            optionLabel ? option[optionLabel] : option.label
          }
          getOptionValue={(option) =>
            optionValue ? option[optionValue] : option.value
          }
          isMulti={isMulti}
          isDisabled={disabled}
          placeholder={placeholder}
          isClearable={false}
          isSearchable={isSearchable}
          hideSelectedOptions={false}
          closeMenuOnSelect={!isMulti}
          className={clsx(
            classes.reactSelect,
            variant === "primary" && classes.dropdownContainerPrimary
          )}
          classNamePrefix="DropdownOptionContainer"
          {...(isAsync
            ? {
                additional: { page: initialPageNumber },
                loadOptions: loadOptions,
              }
            : {
                options: options,
              })}
          {...props}
        />
      </div>
      {showError && (
        <p className={clsx(["errorText"], errorTextClass)}>*{showError}</p>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  setValue: PropTypes.func,
  isMulti: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  label2: PropTypes.string,
  required: PropTypes.bool,
  leftIcon: PropTypes.node,
  applyIconColor: PropTypes.bool,
  error: PropTypes.string,
  errorText: PropTypes.string,
  errorTextClass: PropTypes.string,
  labelClassName: PropTypes.string,
  containerClass: PropTypes.string,
  variant: PropTypes.string,
  borderRadius: PropTypes.string,
  style: PropTypes.object,
  customStyle: PropTypes.object,
  isSearchable: PropTypes.bool,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  loadOptions: PropTypes.func,
  initialPageNumber: PropTypes.number,
  isAsync: PropTypes.bool,
};

export default DropDown;
