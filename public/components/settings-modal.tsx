import { Lora } from "../fonts";
import { Button } from "./button";
import { Inputs } from "./input";
import { changePasswordValidation } from "../utils/schema/auth";
import { useFormik } from "formik";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { updatePassword } from "@/redux/reducers/auth/thunk-action";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

type props = {
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>;
};
export const Settings = ({ setOpenSuccessModal }: props) => {
  const dispatch = useAppThunkDispatch();
  const user = useAppSelector(useSelectCurrentUser)
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
      oldPassword: "",
      newPassword: "",
      confirm_password: ""
    },
    validationSchema: changePasswordValidation,
    onSubmit: async (values) => {
 
      const payload = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        userId: user?.id
      };
      await dispatch(updatePassword(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("password updated successfully");
          setOpenSuccessModal(true);
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });
  return (
    <div>
      <p
        className={`${Lora.className} text-center pt-4 text-termsTitle font-light text-[15px]`}
      >
        Please enter your old password and select new
        <br /> password to effect password change..
      </p>
      <div className="mt-4">
        <label
          className={`${Lora.className} font-light text-[14px] text-textBlack2 mb-2`}
        >
          Old Password
        </label>
        <Inputs
          type="password"
          onChange={handleChange("oldPassword")}
          onBlur={handleBlur("oldPassword")}
          err={!!errors.oldPassword && touched.oldPassword}
          errMsg={errors.oldPassword}
          style={{ marginTop: "8px" }}
          name="oldPassword"
          placeholder="Enter old password"
        />
      </div>
      <div className="mt-4">
        <label
          className={`${Lora.className} font-light text-[14px] text-textBlack2 mb-2`}
        >
          New Password
        </label>
        <Inputs
          type="password"
          onChange={handleChange("newPassword")}
          onBlur={handleBlur("newPassword")}
          err={!!errors.newPassword && touched.newPassword}
          errMsg={errors.newPassword}
          style={{ marginTop: "8px" }}
          name="newPassword"
          placeholder="Enter new password"
        />
      </div>
      <div className="mt-4">
        <label
          className={`${Lora.className} font-light text-[14px] text-textBlack2`}
        >
          Confirm New Password
        </label>
        <Inputs
          type="password"
          onChange={handleChange("confirm_password")}
          onBlur={handleBlur("confirm_password")}
          err={!!errors.confirm_password && touched.confirm_password}
          errMsg={errors.confirm_password}
          name="confirm_password"
          style={{ marginTop: "8px" }}
          placeholder="Re-enter new password"
        />
      </div>
      <div className="w-[90%] mx-auto py-8">
        <Button title="Change Password" variant="submit" onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};
