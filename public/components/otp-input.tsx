import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import OtpInput from "react-otp-input"
import { verifyOtp } from "@/redux/reducers/auth/thunk-action";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
type props = {
  title: string;
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>
};
export default function Otp({ title, otp, setOtp }: props) {

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
