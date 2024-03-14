import { Lora } from "../../fonts";
import { Button } from "../button";
import { Inputs } from "../input";
import { useFormik } from "formik";
import { updateProfileValidation } from "../../utils/schema/auth";
import { useAppThunkDispatch } from "@/redux/store";
import { toast } from "react-toastify";
import { setCurrentUser, useSelectCurrentUser } from "@/redux/reducers/auth";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { updateProfile } from "@/redux/reducers/auth/thunk-action";

export const Profile = () => {
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
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      aliasName: "",
    },
    validationSchema: updateProfileValidation,
    onSubmit: async (values) => {
      const payload = {
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        phoneNumber: user?.phoneNumber,
        aliasName: values.aliasName,
        userId: user?.id,
      };
      await dispatch(updateProfile(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Profile updated successfully");
          dispatch(setCurrentUser(payload));
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });
  useEffect(() => {
    if (user?.id) {
      setFieldValue("email", user.email);
      setFieldValue("firstName", user.firstName);
      setFieldValue("lastName", user.lastName);
      setFieldValue("phoneNumber", user.phoneNumber);
    }
  }, [user]);
  return (
    <div className="mt-4">
      <div>
        <label className={`${Lora.className} font-light text-[14px]`}>
          First Name
        </label>
        <Inputs
          onChange={handleChange("firstName")}
          onBlur={handleBlur("firstName")}
          value={values.firstName}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="mt-4">
        <label className={`${Lora.className} font-light text-[14px]`}>
          Last Name
        </label>
        <Inputs
          onChange={handleChange("lastName")}
          onBlur={handleBlur("lastName")}
          value={values.lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="mt-4">
        <label className={`${Lora.className} font-light text-[14px]`}>
          Alias
        </label>
        <Inputs
          onChange={handleChange("aliasName")}
          onBlur={handleBlur("aliasName")}
          value={values.aliasName}
          name="aliasName"
          type="text"
          placeholder="Alias"
        />
      </div>
      <div className="mt-4">
        <label className={`${Lora.className} font-light text-[14px]`}>
          Phone Number
        </label>
        <Inputs
          onChange={handleChange("phoneNumber")}
          onBlur={handleBlur("phoneNumber")}
          value={values.phoneNumber}
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className="mt-4">
        <label className={`${Lora.className} font-light text-[14px]`}>
          Email
        </label>
        <Inputs
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          disabled={true}
          name="email"
          type="text"
          placeholder="Email address"
          value={values.email}
        />
      </div>
      <div className="mt-6">
        <Button title="Update Profile" onClick={() => handleSubmit()} variant="submit" />
      </div>
    </div>
  );
};
