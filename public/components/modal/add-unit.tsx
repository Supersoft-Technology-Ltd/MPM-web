import React, { SetStateAction } from "react";
import { Lora } from "../../fonts";
import { Inputs } from "../input";
import { ModalContainer } from "../modal";
import { StatusSelect } from "../select";

type props = {
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  setAddUnitModal: React.Dispatch<SetStateAction<any>>;
};
export const AddUnit = ({ setModalIsOpen, setAddUnitModal}: props) => {
  const options = [
    {
      label: "Two Bedroom Apartment",
      value: 1,
    },
    {
      label: "Two Bedroom Apartment",
      value: 2,
    },
  ];
  return (
    <ModalContainer
      width="35%"
      title="Add Units"
      handleModalClose={() => {
        setAddUnitModal(false)
        setModalIsOpen(true)
      }}
      goBack={true}
    >
      <div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Title or Name
          </label>
          <Inputs type="number" name="duration" placeholder="Duration" />
        </div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Unit Type
          </label>
          <StatusSelect options={options} placeholder="Duration" />
        </div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Rent Amount
          </label>
          <Inputs type="text" name="duration" placeholder="Duration" />
        </div>
        <div className="flex justify-between w-full gap-[1rem] mt-4">
          <div>
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Service Charge
            </label>
            <Inputs type="text" name="duration" placeholder="Duration" />
          </div>
          <div>
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Legal Charge
            </label>
            <Inputs type="text" name="duration" placeholder="Duration" />
          </div>
        </div>
        <div className="flex justify-between w-full gap-[1rem] mt-4">
          <div>
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Agreement Charge
            </label>
            <Inputs type="text" name="duration" placeholder="Duration" />
          </div>
          <div>
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Commision Charge
            </label>
            <Inputs type="text" name="duration" placeholder="Duration" />
          </div>
        </div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Other Charges
          </label>
          <Inputs type="text" name="duration" placeholder="Duration" />
        </div>
      </div>
    </ModalContainer>
  );
};
