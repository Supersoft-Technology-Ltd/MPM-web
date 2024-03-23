import * as Yup from "yup";

export const AddBankValidationSchema = Yup.object().shape({
  financialInstitution: Yup.string().required("Bank name is required"),
  accountName: Yup.string().required("Account name is required"),
  accountNumber: Yup.string().required("Account number is required"),
});

export const forgotPasswordValidation = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
