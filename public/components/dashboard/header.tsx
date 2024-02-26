"use client";

import { Inputs } from "../input";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Lora } from "../../fonts";
import { useAppSelector } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

export const DashboardHeader = () => {
  const user = useAppSelector(useSelectCurrentUser);
  return (
    <div className="lg:w-[82.5%] md:w-[78%] w-[100%] left-0 shadow-sh z-10 fixed lg:left-[17.5%] md:left-[22%] flex justify-between items-center px-12 top-0 h-[115px] bg-[#FFFFFF] border-b border-border_color">
      <div className="lg:w-[40%] lg:block hidden">
        <Inputs
          placeholder="Enter address to search property"
          name="payment"
          type="text"
        />
      </div>
      <div className="flex lg:items-center justify-end w-full">
        <div className="flex flex-col justify-center items-center lg:mr-20 mr-10">
          <img
            src="/assets/active-notification.png"
            alt=""
            className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-center object-contain"
          />
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
          >
            Notifications
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-[#EAEAEA] lg:w-[52px] w-[40px] h-[40px] mr-6 lg:h-[52px] border border-[#2C5AA3] flex justify-center items-center rounded-[50%]">
            <p
              className={`${Lora.className} uppercase font-light lg:text-[21px] text-[16px] text-textBlack2`}
            >
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </p>
          </div>
          <div>
            <h5
              className={`${Lora.className} font-normal capitalize text-textBlack2 text-[12px] lg:text-[14px]`}
            >
              {user?.firstName} {user?.lastName}
            </h5>
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
            >
              User ID: {user?.id}
            </p>
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
            >
              {user?.email}
            </p>
          </div>
          <div className="text-[#9C9C9C] text-[12px] font-normal ml-2">
            <LiaAngleDownSolid />
          </div>
        </div>
      </div>
    </div>
  );
};
