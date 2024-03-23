"use client";

import { Auth } from "../../../public/components/auth";
import { Lora } from "../../../public/fonts";
import { Button } from "../../../public/components/button";
import { Inputs, NumberInput } from "../../../public/components/input";
import { StatusSelect } from "../../../public/components/select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../../../public/utils/schema/auth";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { signUp } from "../../../src/redux/reducers/auth/thunk-action";
import { ToastContainer, toast } from "react-toastify";
import { ResetPassword } from "../../../public/components/modal/reset-password";
import { authReducer } from "@/redux/reducers/auth";

const Register = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const {loading} = useAppSelector(({authReducer}) => authReducer)
  const dispatch = useAppThunkDispatch();
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
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      referredBy: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      console.log({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        role: values.role,
        referredBy: values.referredBy,
      })
      const payload = {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        role: values.role,
        referredBy: values.referredBy,
      };
      await dispatch(signUp(payload)).then((res) => {
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
            Sign Up
          </h3>
          <p
            className={`${Lora.className} font-light text-[13px] text-titleText`}
          >
            Enter sign up details
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
            type="text"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            err={!!errors.email && touched.email}
            errMsg={errors.email}
            name="email"
            placeholder="Email ID"
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
          <StatusSelect
            placeholder="Select status"
            options={[
              { label: "Landlord", value: "LANDLORD" },
              { label: "Tenant", value: "TENANT" },
              { label: "Property Manager", value: "PROPERTY MANAGER" },
            ]}
            value={values.role}
            onChange={(value) => setFieldValue("role", value)}
            onBlur={() => handleBlur("role")}
            err={!!errors.role && touched.role}
            errMsg={errors.role}
          />
          <Inputs
            type="text"
            onChange={handleChange("referredBy")}
            onBlur={handleBlur("referredBy")}
            name="referredBy"
            placeholder="Referral Code"
          />
          <p
            className={`${Lora.className} font-extralight text-center text-[12px] text-textBlack2`}
          >
            By clicking <u>Sign up</u> you agree to the following{" "}
            <u>Term and Conditions</u> without reservation.
          </p>
          <Button
            variant="submit"
            onClick={() => handleSubmit()}
            title="Sign Up"
            isLoading={loading === 'pending'}
          />
          <div
            className={`${Lora.className} font-light flex justify-between text-textBlack2 pt-[-2rem]`}
          >
            <span className="flex text-[13px]">
              Already have an account?
              <p
                className={`${Lora.className} pl-[2px] underline font-semibold cursor-pointer`}
                onClick={() => router.push("/login")}
              >
                {" "}
                Sign In
              </p>
            </span>
          </div>
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
export default Register;
