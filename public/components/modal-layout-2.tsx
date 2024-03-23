"use client";
import { Lora } from "../fonts";
import { formatCurrency } from "../hooks/formatNumber";
import { Button } from "./button";
import { Inputs } from "./input";
import { StatusSelect } from "./select";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import {
  InitiatePayment,
  getPaymentMthods,
} from "@/redux/reducers/transactions/thunk-action";
import { usePaystackPayment } from "react-paystack";
import { useProperties } from "../context/property-context";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

type props = {
  setOpenModal: React.Dispatch<React.SetStateAction<any>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  receipt: {
    name: string,
    amount: string,
    transactionID: string,
    referenceID: string,
    dates: string
  }
  setReceipt: React.Dispatch<SetStateAction<any>>
  setOpenReceipt: React.Dispatch<SetStateAction<any>>;
  paymentDetails: any;
};
export const ModalCardLayout: React.FC<props> = ({
  setOpenModal,
  setModalIsOpen,
  setOpenReceipt,
  paymentDetails,
  receipt,
  setReceipt
}) => {
  const user = useAppSelector(useSelectCurrentUser);
  const dispatch = useAppThunkDispatch();
  const { allPaymentOptions } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );
  const [selectedPayment, setSelectedPayment] = useState("");

  useEffect(() => {
    dispatch(getPaymentMthods());
  }, []);

  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: 0,
    publicKey:
      process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY ?? ""
  });
  
  const initializePayment = usePaystackPayment(config);
  
  const { oneUnit } = useProperties();

  const options = allPaymentOptions.map(
    (paymentOption: { paymentMethod: string; paymentType: string }) => ({
      label: paymentOption.paymentMethod,
      value: paymentOption.paymentMethod,
    })
  );

  const onSuccess = (reference: string) => {
    console.log(reference);
    setOpenReceipt({
      ...receipt,
      open: true,
    });
  };

  const onClose = () => {
    console.log("closed");
  };

  useEffect(() => {
    if (paymentDetails?.unit?.id && selectedPayment) {
      dispatch(
        InitiatePayment({
          unitId: paymentDetails?.unit?.id,
          paymentMethod: selectedPayment,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          console.log(res.payload);
          setConfig({
            ...config,
            amount: res.payload?.message?.amountExpected,
            reference: res.payload?.message?.referenceId,
          });
          setReceipt({
            name: res.payload.message?.landlordName,
            amount: res.payload.message?.amountExpected,
            transactionID: res.payload.message?.referenceId,
            referenceID: res.payload.message?.referenceId,
            dates: res.payload.message?.invoiceCreationDate,
          });
          setOpenReceipt(false);
        }
      });
    }
  }, [selectedPayment, paymentDetails]);

  return (
    <div className="fixed flex items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div className="w-[90%] lg:w-[35%] mx-auto bg-white h-auto py-4 px-8 lg:px-12 rounded-[10px]">
        <h5 className={`${Lora.className} text-text_color text-center`}>
          Confirm Payment
        </h5>
        <div className="pt-8">
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[14px]`}
          >
            Rent Amount Due
          </p>
          <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-2 px-6 flex justify-start items-center">
            <h4 className={`${Lora.className} text-darkText font-semibold`}>
              ₦ {formatCurrency(Number(config.amount))}
            </h4>
          </div>
        </div>
        <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-4 px-6 flex justify-start items-center">
          <p
            className={`${Lora.className} font-light text-textBlack2 tracking-[0.2px] text-[14px]`}
          >
            {paymentDetails?.unit?.propertyId}
          </p>
        </div>
        <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-4 px-6 flex justify-start items-center">
          <p
            className={`${Lora.className} font-light text-textBlack2 tracking-[0.2px] text-[14px]`}
          >
            {paymentDetails?.property_details.propertyLocation}
          </p>
        </div>
        <div className="mt-4">
          <StatusSelect
            placeholder="Select payment option"
            options={options}
            value={""}
            onChange={(e) => setSelectedPayment(e)}
            onBlur={() => null}
          />
        </div>
        <div className="flex justify-center items-center w-[95%] mt-6 pb-2 gap-[5%] mx-auto">
          <div className="w-[45%]">
            <Button
              variant="cancel"
              title="Cancel"
              onClick={() => {
                setOpenModal(false);
                setModalIsOpen(true);
              }}
            ></Button>
          </div>
          <div className="w-[45%]">
            <Button
              variant="submit"
              onClick={() => {
                config.amount &&
                  config.reference &&
                  initializePayment({ onSuccess, onClose });
              }}
              title="Next"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
