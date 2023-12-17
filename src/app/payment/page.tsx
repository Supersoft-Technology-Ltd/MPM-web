"use client";

import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useState } from "react";
import { PaymentCards } from "../../../public/components/payments/cards";
import Image from "next/image";

const Payment = () => {
  const [action, setAction] = useState<"Pay bills" | "Pay rent" | "">("");

  return (
    <DashboardLayout>
      <div className={`${Lora.className} flex items-center justify-start`}>
        <p className="text-textBlack2 font-light text-[15px] py-4">
          You are Here {`>>`}
        </p>
        <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
          Payments
        </h5>
      </div>
      <div className="flex flex-wrap gap-[2rem] w-[100%] mt-4">
        {PaymentCards.map((elem) => (
          <div className="flex justify-center w-[22%] px-2 h-[120px] cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th">
            <Image
              src={elem.img}
              alt=""
              width={50}
              height={50}
              objectFit="center"
              objectPosition="contain"
            />
            <p
              className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
            >
              {elem.text}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};
export default Payment;
