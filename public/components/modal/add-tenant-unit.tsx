import React, { SetStateAction, useState } from "react";
import { Inter, Lora, Raleway } from "../../fonts";
import { Inputs } from "../input";
import { ModalContainer } from "../modal";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../button";

type props = {
  setOpenAddTenantModal: React.Dispatch<SetStateAction<any>>;
};
export const AddTenantToUnit = ({ setOpenAddTenantModal }: props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const notify = () => {
    toast.success("Tenant added successfully", {
      position: "top-right",
      autoClose: 5000,
    });
  };
  return (
    <ModalContainer
      width="35%"
      title="Add Tenant to Unit"
      goBack={true}
      handleModalClose={() => setOpenAddTenantModal(false)}
    >
      <div className="mt-8">
        <div className="mt-2">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Tenant Email
          </label>
          <Inputs placeholder="Tenant Email" type="text" name="email" />
        </div>
        <div className="mt-4 flex flex-col">
          <label
            className={`${Lora.className} mb-2 font-normal text-darkText3 text-[14px]`}
          >
            Move In Date
          </label>
          <div className="relative w-full">
            <div className="flex justify-between items-center w-full border-0 outline-none bg-lighterGrey h-[50px] rounded-[8px] pl-[1.5rem] text-textBlack2 text-[14px] ">
              <div className="flex-grow">
                <DatePicker
                  className="bg-lighterGrey w-full border-0 outline-none"
                  placeholderText="Select a date"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat="MM-dd-yyyy"
                  open={isOpen}
                  onClickOutside={() => setIsOpen(false)}
                />
              </div>
              <div
                onClick={() => setIsOpen(!open)}
                className="pr-4 cursor-pointer"
              >
                <FaRegCalendarAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Last Payment
          </label>
          <div className="relative w-full">
            <div className="flex justify-between items-center w-full border-0 outline-none bg-lighterGrey h-[50px] rounded-[8px] pl-[1.5rem] text-textBlack2 text-[14px] ">
              <div className="flex-grow">
                <DatePicker
                  className="bg-lighterGrey w-full border-0 outline-none"
                  placeholderText="Select a date"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat="MM-dd-yyyy"
                  open={open}
                  onClickOutside={() => setOpen(false)}
                />
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="pr-4 cursor-pointer"
              >
                <FaRegCalendarAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Duration (months)
          </label>
          <Inputs type="number" name="duration" placeholder="Duration" />
        </div>
        <div className="mt-8">
          <Button
            title="Add Tenant"
            variant="submit"
            onClick={() => {
              notify();
              setOpenAddTenantModal(false);
            }}
          />
        </div>
      </div>
    </ModalContainer>
  );
};
