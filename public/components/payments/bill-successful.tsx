import { SuccessModal } from "../modal/successmodal";
import { Raleway, Lora, Inter } from "../../fonts";
import { Button } from "../button";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ImDownload } from "react-icons/im";
import React, { SetStateAction } from "react";
import { date } from "yup";
import { currencyToString, formatCurrency } from "../../hooks/formatNumber";

type props = {
  setOpenReceipt: React.Dispatch<SetStateAction<any>>;
  setOpenModal: React.Dispatch<SetStateAction<any>>;
  setOpenSubscription:React.Dispatch<SetStateAction<any>>
  name: string;
  transactionID: string;
  referenceID: string;
  amount: string;
  dates: string;
};
export const SuccessfulPayment = ({
  setOpenReceipt,
  setOpenModal,
  name,
  transactionID,
  referenceID,
  amount,
  dates,
  setOpenSubscription
}: props) => {
  return (
    <SuccessModal width="27%">
      <h1
        className={`${Lora.className} text-[25px] text-textBlack2 font-normal `}
      >
        Payment Successful
      </h1>
      <p
        className={`${Raleway.className} font-light text-[14px] px-[3rem] text-center text-textBlack2 mt-4`}
      >
        You have successfully paid bill to
      </p>
      <div className="flex flex-col justify-center items-center mt-2 pb-4">
        <IoPersonCircleSharp color="#212121" size={40} />
        <p
          className={`${Inter.className} font-normal text-[14px] text-socialText`}
        >
          {name}
        </p>
        <h6
          className={`${Inter.className} font-normal text-[19px] text-textBlack`}
        >
          ₦ {formatCurrency(Number(amount))}
        </h6>
      </div>
      <div className="border-b border-border w-[70%] mx-auto" />
      <div className={`${Raleway.className} w-[70%] mx-auto`}>
        <div className="border-b border-border w-[100%] mx-auto" />

        <div className="flex justify-between items-center py-2">
          <p className="font-light text-modalBg text-[13px]">Transaction ID:</p>
          <p className="text-success_text text-[12px] font-semibold">
            {transactionID}
          </p>
        </div>
        <div className="border-b border-border w-[100%] mx-auto" />
        <div className="flex justify-between items-center py-2">
          <p className="font-light text-modalBg text-[13px]">Reference:</p>
          <p className="text-success_text text-[12px] font-semibold">
            {referenceID}
          </p>
        </div>
        <div className="border-b border-border w-[100%] mx-auto" />
        <div className="flex justify-between items-center py-2">
          <p className="font-light text-modalBg text-[13px]">Date / Time:</p>
          <p className="text-success_text text-[12px] font-semibold">{dates}</p>
        </div>
        <div className="border-b border-border w-[100%] mx-auto" />
        <div className="flex justify-between items-center py-2">
          <p className="font-light text-modalBg text-[13px]">
            Download Receipt
          </p>
          <ImDownload color="rgba(2, 130, 173, 0.71)" size={19} />
        </div>
        <div className="border-b border-border w-[100%] mx-auto" />
      </div>
      <div className="w-[70%] mx-auto mt-4">
        <Button
          variant="submit"
          title="Finish"
          onClick={() => {
            setOpenReceipt(false)
            setOpenModal(false)
            setOpenSubscription(false)
          }}
        ></Button>
      </div>
    </SuccessModal>
  );
};
