"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input/Input";
import PhoneInput from "@/components/atoms/PhoneInput";
import { TextArea } from "@/components/atoms/TextArea/TextArea";
import { getInTouchFormInitialValues } from "@/formik/initialValues";
import { getInTouchFormSchema } from "@/formik/schema";
import { useFormik } from "formik";
import classes from "./GetInTouchForm.module.css";
import DropDown from "@/components/molecules/DropDown";
import { servicesDropdownOptions } from "@/developmentContent/contactUsPageData";

export default function GetInTouchForm() {
  const formik = useFormik({
    initialValues: getInTouchFormInitialValues,
    validationSchema: getInTouchFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={classes.main}>
      <div>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          value={formik.values.firstName}
          setValue={(value) => formik.setFieldValue("firstName", value)}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          value={formik.values.lastName}
          setValue={(value) => formik.setFieldValue("lastName", value)}
          error={formik.touched.lastName && formik.errors.lastName}
        />
      </div>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={formik.values.email}
        setValue={(value) => formik.setFieldValue("email", value)}
        error={formik.touched.email && formik.errors.email}
      />
      <PhoneInput
        label="Phone"
        placeholder="Enter your phone"
        value={formik.values.phone}
        setValue={(value) => formik.setFieldValue("phone", value)}
        error={formik.touched.phone && formik.errors.phone}
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
      />

      <Button label="Submit" variant="primary" onClick={formik.handleSubmit} />
    </div>
  );
}
