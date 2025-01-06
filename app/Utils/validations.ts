import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const gstRegex = /^([0-9]{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/;
const nameRegex = /^(?!\s)[a-zA-Z\s]{2,}$/;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, "Email is not valid")
    .email("Email is not vaild"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    // .required('phoneNumber is required')
    .min(9, "PhoneNumber must be of 10 digit")
    .max(15, "PhoneNumber is too large"),
});
export const gstValidationSchema = yup.object().shape({
  company_email: yup
    .string()
    .matches(emailRegex, "Email is not valid")
    .email("Email is not vaild"),
  company_name: yup
    .string()
    .transform((value, originalValue) =>
      originalValue ? originalValue.trim() : ""
    )
    .min(4, "Company name must be of atleast 4 characters"),
  gst_number: yup
    .string()
    .matches(gstRegex, "gst is not valid")
    .required("gst num is required"),
});

export const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, "Email is not valid")
    .email("Email is not vaild"),
  name: yup
    .string()
    .transform((value, originalValue) =>
      originalValue ? originalValue.trim() : ""
    )
    .min(2, "First Name must be of atleast 2 characters")
    .required("First Name is required"),
  middleName: yup
    .string()
    .transform((value, originalValue) =>
      originalValue ? originalValue.trim() : ""
    ),
  lastName: yup
    .string()
    .transform((value, originalValue) =>
      originalValue ? originalValue.trim() : ""
    )
    .min(2, "Last Name must be of atleast 2 characters")
    .required("Last Name is required"),
  password: yup
    .string()
    .matches(
      passRegex,
      "Password must of atleast 8 digits including 1 capital letter,1 number and 1 special character "
    ),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "PhoneNumber must be of atleast 8 digit")
    .max(15, "PhoneNumber is too large"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
