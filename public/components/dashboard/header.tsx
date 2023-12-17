"use client";

import { Inputs } from "../input";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Lora } from "../../fonts";

export const DashboardHeader = () => {
  return (
    <div className="w-[80.8%] shadow-sh z-10 fixed left-[19.2%] flex justify-between items-center px-12 top-0 h-[125px] bg-[#FFFFFF] border-b border-border_color">
      <div className="w-[40%]">
        <Inputs
          placeholder="Enter address to search property"
          name="payment"
          type="text"
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center mr-20">
          <img src="/assets/active-notification.png" alt="" className="w-[30px] h-[30px] object-center object-contain" />
          <p className={`${Lora.className} font-light text-textBlack2 text-[11px]`}>Notifications</p>
        </div>
        <div className="flex items-center">
          <div className="bg-[#EAEAEA] w-[52px] mr-6 h-[52px] border border-[#2C5AA3] flex justify-center items-center rounded-[50%]">
            <p className={`${Lora.className} font-light text-[21px] text-textBlack2`}>FE</p>
          </div>
          <div>
            <h5 className={`${Lora.className} font-normal text-textBlack2 text-[14px]`}>Fortune Ekezie</h5>
            <p className={`${Lora.className} font-light text-textBlack2 text-[11px]`}>User ID: 0038</p>
            <p className={`${Lora.className} font-light text-textBlack2 text-[11px]`}>Fortunekezie@gmail.com</p>
          </div>
          <div className="text-[#9C9C9C] text-[12px] font-normal ml-2">
            <LiaAngleDownSolid />
          </div>
        </div>
      </div>
    </div>
  );
};
