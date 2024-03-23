import { Lora, Raleway } from "../../fonts";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { Inputs } from "../input";
import { useEffect, useState } from "react";
import { Success } from "./success";
import { SuccessModal } from "./successmodal";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { getAllBanks } from "@/redux/reducers/transactions/thunk-action";
import { useFormik } from "formik";
import { forgotPasswordValidation } from "../../utils/schema/auth";
import ForgotPassword from "@/app/forgot-password/page";
import { forgotPasswordEndpoint } from "@/redux/reducers/auth/thunk-action";
import { toast } from "react-toastify";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

export const EnterPassword = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const user = useAppSelector(useSelectCurrentUser);
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
      newPassword: "",
      confirm_password: "",
      email: ""
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: async (values) => {
      const payload = {
        newPassword: values.newPassword,
        email: values.email,
      };
      await dispatch(forgotPasswordEndpoint(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("password reset successfully");
          //   router.push("/login");
          setOpen(true);
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });
  return (
    <SuccessModal>
      <h1
        className={`${Lora.className} text-[25px] text-textBlack2 font-normal `}
      >
        Enter New Password
      </h1>
      <p
        className={`${Lora.className} font-light text-[14px] px-[6rem] text-center text-titleText mt-4`}
      >
        Kindly enter new password
      </p>
      <div className="w-[75%] mx-auto mt-8">
        <Inputs
          name="new"
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          err={!!errors.email && touched.email}
          errMsg={errors.email}
          type="email"
          placeholder="Enter Email"
        />
      </div>
      <div className="w-[75%] mx-auto mt-8">
        <Inputs
          name="new"
          onChange={handleChange("newPassword")}
          onBlur={handleBlur("newPassword")}
          err={!!errors.newPassword && touched.newPassword}
          errMsg={errors.newPassword}
          type="password"
          placeholder="Enter New Password"
        />
      </div>
      <div className="mt-6 w-[75%] mx-auto">
        <Inputs
          name="confirm"
          onChange={handleChange("confirm_password")}
          onBlur={handleBlur("confirm_password")}
          err={!!errors.confirm_password && touched.confirm_password}
          errMsg={errors.confirm_password}
          type="password"
          placeholder="Confirm New Password"
        />
      </div>
      <div className="w-[75%] mx-auto mt-12">
        <Button
          variant="submit"
          title="Set Password"
          onClick={() => handleSubmit()}
        ></Button>
      </div>
      {open && (
        <Success
          title="New Password Set"
          text={`You have successfully setup\n your new password.`}
          subtext="Kindly login to access your MPM profile."
        />
      )}
    </SuccessModal>
  );
};
