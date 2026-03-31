import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),

  phone: yup.object().required("Phone is required"),
  message: yup.string().required("Message is required"),
  services: yup.object().required("Services is required"),
  captcha: yup.string().required("Please complete the captcha"),
});

export const getInTouchFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.object().required("Phone is required"),
  services: yup.object().required("Services is required"),
  message: yup.string().required("Message is required"),
});
