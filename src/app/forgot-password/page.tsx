"use client";
import { Auth } from "../../../public/components/auth";
import { Lora } from "../../../public/fonts";
import { Inputs, NumberInput } from "../../../public/components/input";
import { Button } from "../../../public/components/button";
import { ResetPassword } from "../../../public/components/modal/reset-password";
import { useState } from "react";
import { requestOtp } from "@/redux/reducers/auth/thunk-action";
import { useFormik } from "formik";
import { forgotPasswordValidation } from "../../../public/utils/schema/transactions";
import { useAppThunkDispatch } from "@/redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppThunkDispatch();
  const router = useRouter()
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    values,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: async (values) => {
      await dispatch(requestOtp(values.email)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Otp sent to email successfully");
          setOpenModal(true);
          router.push("/forgot-password?action=forgot password");
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });

  return (
    <Auth>
      <div className="w-[65%] mx-[10%] bg-[#FFFFFF] h-auto my-[6%] px-[7%] py-8 rounded-[10px] shadow-sm">
        <div className="flex flex-col items-center">
          <h3
            className={`${Lora.className} font-semibold text-[24px] text-textBlack2`}
          >
            Forgot Password
          </h3>
          <p
            className={`${Lora.className} font-light text-[12px] mt-[.2rem] text-titleText text-center`}
          >
            Please enter your email address, You will
            <br /> receive a password reset PIN.
          </p>
        </div>
        <div className="flex flex-col pt-[2rem] gap-[23px]">
          <Inputs
            type="text"
            name="email"
            err={!!errors.email && touched.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            errMsg={errors.email}
            placeholder="Email ID"
          />
          <Button
            variant="submit"
            onClick={() => handleSubmit()}
            title="Send Reset PIN"
          />
          <Button variant="cancel" title="Cancel" />
        </div>
      </div>
      {openModal && (
        <ResetPassword
          title="Reset Password"
          subText="Please enter the password reset PIN sent to your email ID."
        />
      )}
    </Auth>
  );
};
export default ForgotPassword;
