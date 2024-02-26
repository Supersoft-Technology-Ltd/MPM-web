"use client";
import { Lora, Raleway } from "../../fonts";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import Otp from "../otp-input";
import { SuccessModal } from "./successmodal";
import { useState } from "react";
import { EnterPassword } from "./enter-pasword";

type resetPasswordProps = {
  title: string;
  subText?: string;
};
export const ResetPassword = ({ title, subText }: resetPasswordProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
      <Otp title={title} />
      {title !== "Verify Email" ? (
        <>
          <div className="w-[80%] mx-auto mt-12">
            <Button
              variant="submit"
              title="Confirm"
              onClick={() => setOpen(true)}
            ></Button>
          </div>
          <div className="w-[80%] mx-auto mt-6">
            <Button variant="cancel" title="Cancel"></Button>
          </div>
        </>
      ) : null}
      {open && <EnterPassword />}
    </SuccessModal>
  );
};
