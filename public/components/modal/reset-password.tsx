"use client";
import { Lora } from "../../fonts";
import { Button } from "../button";
import { useRouter, useSearchParams } from "next/navigation";
import Otp from "../otp-input";
import { SuccessModal } from "./successmodal";
import { useEffect, useState } from "react";
import { EnterPassword } from "./enter-pasword";
import { useAppThunkDispatch } from "@/redux/store";
import { verifyOtp } from "@/redux/reducers/auth/thunk-action";
import { toast } from "react-toastify";
import { AddBankDetails } from "./add-bank";

type resetPasswordProps = {
  title: string;
  subText?: string;
};
export const ResetPassword = ({ title, subText }: resetPasswordProps) => {
  const [open, setOpen] = useState(false);
  const [openBank, setOpenBank] = useState(false);
  const [otp, setOtp] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const params = useSearchParams();

  const handleVerifyOtp = async () => {
    try {
      await dispatch(verifyOtp(otp)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Email verified successfully");
          setOpenModal(false);
          if (params.get("action") === "bank account") {
            setOpenBank(true);
          } else if (params.get("action") === "forgot password") {
            setOpen(true);
          } else {
            router.push("/login");
          }
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
      } else if (title === "Email Verification") {
      }
    }
  }, [otp]);
  return (
    <SuccessModal>
      <h1
        className={`${Lora.className} text-[25px] text-textBlack2 font-normal `}
      >
        {title}
      </h1>
      <p
        className={`${Lora.className} font-light text-[14px] px-[6rem] text-center text-titleText mt-4`}
      >
        {subText}
      </p>
      <Otp otp={otp} setOtp={setOtp} title={title} />
      {title === "Verify Email" ? null : title === "Email Verification" ? (
        <div className="w-[80%] mx-auto mt-12">
          <Button
            variant="submit"
            title="Confirm"
            onClick={() => {
              handleVerifyOtp();
            }}
          ></Button>
        </div>
      ) : (
        <>
          <div className="w-[80%] mx-auto mt-12">
            <Button
              variant="submit"
              title="Confirm"
              onClick={() => handleVerifyOtp()}
            ></Button>
          </div>
          <div className="w-[80%] mx-auto mt-6">
            <Button variant="cancel" title="Cancel"></Button>
          </div>
        </>
      )}
      {open && <EnterPassword />}
      {openBank && <AddBankDetails />}
    </SuccessModal>
  );
};
