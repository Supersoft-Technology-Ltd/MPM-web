import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  role: Yup.string().required("Status is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .test("specialChars", "Field must contain special characters", (value) => {
      const regex = /[~!@#$%^&*)(_+\-:[}=]/;
      return regex.test(value || "");
    })
    .test("specialChars", "Field must contain at least one number", (value) => {
      const regex = /\d/;
      return regex.test(value || "");
    })
    .test(
      "specialChars",
      "Field must contain at least an uppercase",
      (value) => {
        const regex = /[A-Z]/;
        return regex.test(value || "");
      }
    )
    .min(8),
  // password_confirmation: Yup.string()
  //   .required("Confirm Password is required")
  //   .test("passwords-match", "Passwords must match", function (value) {
  //     return this.parent.password === value;
  //   }),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const changePasswordValidation = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required"),
  password: Yup.string()
    .required("New password is required")
    .test("specialChars", "Field must contain special characters", (value) => {
      const regex = /[~!@#$%^&*)(_+\-:[}=]/;
      return regex.test(value || "");
    })
    .test("specialChars", "Field must contain at least one number", (value) => {
      const regex = /\d/;
      return regex.test(value || "");
    })
    .test(
      "specialChars",
      "Field must contain at least an uppercase",
      (value) => {
        const regex = /[A-Z]/;
        return regex.test(value || "");
      }
    )
    .min(8),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export const updateProfileValidation = Yup.object().shape({
  email: Yup.string().email().optional(),
  firstName: Yup.string().optional(),
  lastName: Yup.string().optional(),
  aliasName: Yup.string().optional(),
  phoneNumber: Yup.string().optional(),
});
