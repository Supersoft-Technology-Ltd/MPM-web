"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AmericanTypewriter, Lora, SpfRounded } from "../../../public/fonts";
import { Button } from "../../../public/components/button";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Auth } from "../../../public/components/auth";
import { useRouter } from "next/navigation";
import { signIn } from "../../../src/redux/reducers/auth/thunk-action";
import { signInValidationSchema } from "../../../public/utils/schema/auth";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Inputs } from "../../../public/components/input";
import { ResetPassword } from "../../../public/components/modal/reset-password";
import { useState } from "react";

const Login = () => {
  const dispatch = useAppThunkDispatch();
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
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
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await dispatch(signIn(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Logged in successfully");
          if (!res.payload.verified) {
            setOpenModal(true);
          } else {
            router.push("/dashboard");
            setOpenModal(false);
          }
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });
  return (
    <Auth>
      <div className="lg:w-[70%] w-[100%] lg:mx-[10%]mx-[0%] bg-[#FFFFFF] h-auto my-[6%] lg:px-[7%] px-[5%] py-6 rounded-[10px] shadow-sm">
        <div className="flex flex-col items-center">
          <h3
            className={`${Lora.className} font-semibold text-[25px] text-textBlack2`}
          >
            Welcome
          </h3>
          <p
            className={`${Lora.className} font-light text-[13px] text-titleText`}
          >
            Login to your account
          </p>
        </div>
        <div className="flex flex-col pt-[2rem] gap-[20px]">
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
          <Button
            variant="submit"
            onClick={() => handleSubmit()}
            title="Login"
          />
          <div
            className={`${Lora.className} font-light flex justify-between text-textBlack2`}
          >
            <span className="flex text-[13px]">
              <p className="hidden lg:inline-block md:inline-block">
                {" "}
                Don’t have an account?
              </p>
              <p
                className={`${Lora.className} pl-[2px] underline font-semibold cursor-pointer`}
                onClick={() => router.push("/register")}
              >
                {" "}
                Sign Up
              </p>
            </span>
            <p
              className="flex text-[13px] cursor-pointer"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot password?
            </p>
          </div>
          <p
            className={`${Lora.className} font-light text-center text-[13px] pt-2 text-titleText`}
          >
            Login with social accounts
          </p>
          <div className="flex justify-between lg:w-[75%] w-[90%] mx-auto gap-[15px] lg:gap-[25px] pb-[1rem]">
            <div className="flex items-center justify-center h-[45px] px-[30px] bg-[#F3F4F5] shadow-sm rounded-[8px]">
              <AiOutlineGoogle className="text-colorRed" size={17} />
              <p
                className={`${SpfRounded.className} font-light text-[12px] text-textBlack2`}
              >
                Google
              </p>
            </div>
            <div className="flex items-center justify-center h-[45px] px-[30px] bg-[#F3F4F5] shadow-sm rounded-[8px]">
              <FaFacebookF className="text-colorPrimary" size={16} />
              <p
                className={`${SpfRounded.className} font-light text-[12px] text-textBlack2`}
              >
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <ResetPassword
          title="Verify Email"
          subText="Please enter the password reset PIN sent to your email ID."
        />
      )}
    </Auth>
  );
};
export default Login;
