"use client";

import { Auth } from "../../../public/components/auth";
import { Lora } from "../../../public/fonts";
import { Button } from "../../../public/components/button";
import { Inputs, NumberInput } from "../../../public/components/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { completeProfileValidationSchema } from "../../../public/utils/schema/auth";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { completeProfile } from "../../redux/reducers/auth/thunk-action";
import { ToastContainer, toast } from "react-toastify";
import { ResetPassword } from "../../../public/components/modal/reset-password";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

const CompleteProfile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const dispatch = useAppThunkDispatch();
  const user = useAppSelector(useSelectCurrentUser);
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
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: completeProfileValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        userId: user?.id,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      };
      await dispatch(completeProfile(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Account created successfully");
          setOpen(true);
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });

  return (
    <Auth>
      <div className="lg:w-[70%] lg:mx-[10%] mx-[2.5%] w-[95%] bg-[#FFFFFF] h-auto my-[6%] px-[7%] py-6 rounded-[10px] shadow-sm">
        <div className="flex flex-col items-center">
          <h3
            className={`${Lora.className} font-semibold text-[24px] text-textBlack2`}
          >
            Complete Profile
          </h3>
          <p
            className={`${Lora.className} font-light text-[13px] text-titleText`}
          >
            Enter profile details
          </p>
        </div>
        <div className="flex flex-col pt-[2rem] gap-[18px]">
          <Inputs
            type="text"
            onChange={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            err={!!errors.firstName && touched.firstName}
            errMsg={errors.firstName}
            name="firstname"
            placeholder="Firstname"
          />
          <Inputs
            type="text"
            onChange={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            err={!!errors.lastName && touched.lastName}
            errMsg={errors.lastName}
            name="lastname"
            placeholder="Lastname"
          />
          <NumberInput
            placeholder="Phone Number"
            onChange={(value) => setFieldValue("phoneNumber", value)}
            onblur={() => handleBlur("phoneNumber")}
            err={!!errors.phoneNumber && touched.phoneNumber}
            errMsg={errors.phoneNumber}
          />

          <Inputs
            type="password"
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            err={!!errors.password && touched.password}
            errMsg={errors.password}
            name="password"
            placeholder="Password"
          />

          <Button
            variant="submit"
            onClick={() => handleSubmit()}
            title="Sign Up"
            isLoading={loading === "pending"}
          />
        </div>
      </div>
      {open && (
        <ResetPassword
          title="Verify Email"
          subText="Please enter the verify email PIN sent to your email."
        />
      )}
    </Auth>
  );
};
export default CompleteProfile;
