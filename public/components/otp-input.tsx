import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { verifyOtp } from "@/redux/reducers/auth/thunk-action";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
type props = {
  title: string;
};
export default function Otp({ title }: props) {
  const [otp, setOtp] = useState("");
  const [openModal, setOpenModal] = useState(false)
  const router = useRouter();
  const dispatch = useAppThunkDispatch();

  const handleVerifyOtp = async () => {
    try {
      await dispatch(verifyOtp(otp)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Email verified successfully");
          setOpenModal(false)
          router.push("/login");
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    } catch (error) {
      console.error("OTP Verification failed", error);
    }
  };
  useEffect(() => {
    if (otp.length === 6) {
      if (title === "Verify Email") {
        handleVerifyOtp();
      }
    }
  }, [otp]);
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputStyle={{
        width: "54px",
        height: "50px",
        border: "1px solid #0041A0",
        marginLeft: "1rem",
        borderRadius: "12px",
        outline: "none",
      }}
      containerStyle={{
        marginTop: "2rem",
        color: "#242A37",
        fontWeight: "500",
      }}
      renderInput={(props) => <input {...props} />}
    />
  );
}
