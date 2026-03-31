"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input/Input";
import PhoneInput from "@/components/atoms/PhoneInput";
import { TextArea } from "@/components/atoms/TextArea/TextArea";
import DropDown from "@/components/molecules/DropDown";
import config from "@/config";
import { servicesDropdownOptions } from "@/developmentContent/contactUsPageData";
import {
  contactFormInitialValues,
  getInTouchFormInitialValues,
} from "@/formik/initialValues";
import {
  contactFormSchema,
  getInTouchFormSchema,
} from "@/formik/schema";
import { useFormik } from "formik";
import { useRef, useMemo } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import classes from "./ContactForm.module.css";

export default function ContactForm({ service, showCaptcha = true }) {
  const recaptchaRef = useRef(null);

  const initialServiceValue = useMemo(() => {
    if (!service) return null;

    const matchedOption = servicesDropdownOptions?.find(
      (option) => option?.value === service
    );

    return matchedOption || null;
  }, [service]);

  const baseInitialValues = showCaptcha
    ? contactFormInitialValues
    : getInTouchFormInitialValues;

  const validationSchema = showCaptcha
    ? contactFormSchema
    : getInTouchFormSchema;

  const formik = useFormik({
    initialValues: {
      ...baseInitialValues,
      services: initialServiceValue,
    },
    validationSchema,
    onSubmit: (values) => {
      if (showCaptcha && !values.captcha) {
        formik.setFieldError("captcha", "Please complete the captcha");
        return;
      }
      // TODO: Implement form submission API call
      // console.log(values);
    },
  });

  const handleCaptchaChange = (value) => {
    formik.setFieldValue("captcha", value);
    if (value) {
      formik.setFieldError("captcha", undefined);
    }
  };
  return (
    <div className={classes.main}>
      <div>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          value={formik.values.firstName}
          setValue={(value) => formik.setFieldValue("firstName", value)}
          error={formik.touched.firstName && formik.errors.firstName}
          required
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          value={formik.values.lastName}
          setValue={(value) => formik.setFieldValue("lastName", value)}
          error={formik.touched.lastName && formik.errors.lastName}
          required
        />
      </div>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={formik.values.email}
        setValue={(value) => formik.setFieldValue("email", value)}
        error={formik.touched.email && formik.errors.email}
        required
      />
      <PhoneInput
        label="Phone"
        placeholder="Enter your phone"
        value={formik.values.phone}
        setValue={(value) => formik.setFieldValue("phone", value)}
        error={formik.touched.phone && formik.errors.phone}
        required
      />
      <DropDown
        label="Services"
        options={servicesDropdownOptions}
        value={formik.values.services}
        setValue={(value) => formik.setFieldValue("services", value)}
        error={formik.touched.services && formik.errors.services}
        required
        placeholder="Select a service"
      />
      <TextArea
        label="Message"
        placeholder="Enter your message"
        value={formik.values.message}
        setValue={(value) => formik.setFieldValue("message", value)}
        error={formik.touched.message && formik.errors.message}
        required
      />
      {showCaptcha && (
        <div className={classes.captchaContainer}>
          <div className={classes.captchaWrapper}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={config.siteKey}
              onChange={handleCaptchaChange}
              onExpired={() => formik.setFieldValue("captcha", "")}
            />
          </div>
          {formik.touched.captcha && formik.errors.captcha && (
            <p className={classes.captchaError}>*{formik.errors.captcha}</p>
          )}
        </div>
      )}
      <Button
        label="Submit"
        variant="primary"
        onClick={formik.handleSubmit}
        fullWidth={false}
        className={classes.submitButton}
      />
    </div>
  );
}

ContactForm.propTypes = {
  service: PropTypes.string,
  showCaptcha: PropTypes.bool,
};
