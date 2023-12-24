"use client";
import { Lora } from "../fonts";
import { ImLocation2 } from "react-icons/im";
import { CgPlayListAdd } from "react-icons/cg";
import { Button } from "./button";
import { useState } from "react";
import { ModalCardLayout } from "./modal-layout-2";

type props = {
  location: string;
  propertyID: string;
  landlord: string;
  rent_amount: string;
  rent_due_date: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<any>>;
  setOpenModal: React.Dispatch<React.SetStateAction<any>>;
};
export const ModalLayout: React.FC<props> = ({
  setModalIsOpen,
  setOpenModal,
  location,
  propertyID,
  rent_amount,
  rent_due_date,
  landlord,
}) => {
  const handleModalOpen = () => {
    setOpenModal(true);
    setModalIsOpen(false)

  };
  return (
    <div className="fixed flex items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div className="w-[50%] mx-auto bg-white h-auto py-4 px-12 rounded-[10px]">
        <h5 className={`${Lora.className} text-text_color text-center`}>
          Pay Rent
        </h5>
        <div className="mt-8">
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[14px]`}
          >
            Rent Recipient Property
          </p>
          <div>
            <div className="w-full h-[220px] border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] flex flex-col justify-between px-4 py-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
                    <ImLocation2 color="#EB212D" size={22} />
                  </div>
                  <div className="ml-4">
                    <p
                      className={`${Lora.className} font-light text-darkText text-[12px]`}
                    >
                      Tenancy Location
                    </p>
                    <p
                      className={`${Lora.className} font-light text-address text-[13px]`}
                    >
                      {location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p>Select</p>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
                    <ImLocation2 color="#EB212D" size={22} />
                  </div>
                  <div className="ml-4">
                    <p
                      className={`${Lora.className} font-light text-darkText text-[12px]`}
                    >
                      Tenancy Location
                    </p>
                    <p
                      className={`${Lora.className} font-light text-address text-[13px]`}
                    >
                      {location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p>Select</p>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className={`${Lora.className} font-light text-grey3 text-[13px]`}
                >
                  No additional tenancy record found
                </p>
                <div className="flex items-center">
                  <CgPlayListAdd className="text-address text-[14px]" />
                  <p
                    className={`${Lora.className} text-address text-[12px] font-extralight`}
                  >
                    Add
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`${Lora.className} font-extralight mt-4 tracking-[0.1px] text-textBlack2 text-[15px]`}
              >
                Selected Property Details
              </p>
              <div className="flex flex-col justify-start mt-4 bg-grey4 bg-opacity-30 px-4 pt-4 pb-2">
                <div>
                  <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                    <p className="text-[#000B22]text-[14px]">Property ID:</p>
                    <p className="text-[#000B22] ml-6 text-[14px] text-grey3">
                      {propertyID}
                    </p>
                  </div>
                  <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-4">
                    <p className="text-[#000B22]text-[14px]">Landlord:</p>
                    <p className="text-[#000B22] ml-10 text-[14px] text-grey3">
                      {landlord}
                    </p>
                  </div>
                  <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-4">
                    <p className="text-[#000B22]text-[14px]">Rent Amount:</p>
                    <p className="text-[#000B22]text-[14px] ml-4">
                      {rent_amount}
                    </p>
                  </div>
                  <div className="flex justify-start py-4">
                    <p className="text-[#000B22]text-[14px]">Rent Due Date:</p>
                    <p className="text-[#000B22]text-[14px] ml-2">
                      {rent_due_date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[80%] mt-6 pb-2 gap-[5%] mx-auto">
                <div className="w-[45%]">
                  <Button
                    variant="cancel"
                    title="Cancel"
                    onClick={() => setModalIsOpen("")}
                  ></Button>
                </div>
                <div className="w-[45%]">
                  <Button
                    variant="submit"
                    title="Next"
                    onClick={() => handleModalOpen()}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
