import { ImLocation2 } from "react-icons/im";
import { Lora } from "../../fonts";
import Link from "next/link";
import { Button } from "../button";
import React, { SetStateAction, useState } from "react";
import { ModalContainer } from "../modal";

type propertyProps = {
  name?: string;
  value?: string;
  title?: string;
  record?: boolean;
  openList?: boolean;
  setOpenList: React.Dispatch<SetStateAction<any>>;
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  arrDetails?: Array<{
    label: string;
    value: string;
  }>;
  setOpenUnitModal: React.Dispatch<SetStateAction<any>>;
  setOpenProperty: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
  setOpenAddTenantModal: React.Dispatch<SetStateAction<any>>;
  setAddUnitModal: React.Dispatch<SetStateAction<any>>;
  buttonTitle: "Add Tenants" | "View Units" | "Remove Tenants" | "View Tenants";
  handleModalClose: () => void;
  modalTitle: "Property Details" | "Unit Details" | "View Tenants";
};
export const PropertyModal = ({
  title,
  value,
  record,
  setOpenList,
  setModalIsOpen,
  arrDetails,
  buttonTitle,
  setOpenAddTenantModal,
  setOpenUnitModal,
  setAddUnitModal,
  setOpenProperty,
  handleModalClose,
  setOpenPropertyList,
  modalTitle,
}: propertyProps) => {
  return (
    <ModalContainer
      width="36%"
      goBack={true}
      handleModalClose={handleModalClose}
      title={modalTitle}
    >
      <div
        className="flex items-start w-full h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] px-4 py-4"
      >
        <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
          <ImLocation2 color="#EB212D" size={22} />
        </div>
        <div className="ml-4">
          <p
            className={`${Lora.className} font-medium text-darkText text-[15px]`}
          >
            {title}
          </p>
          <p
            className={`${Lora.className} font-light text-address text-[13px]`}
          >
            {value}
          </p>
        </div>
      </div>
      {modalTitle !== "View Tenants" && (
        <>
          <div className="flex justify-between items-end mt-2">
            {record && (
              <h4
                className={`${Lora.className} font-medium text-textBlack2 text-[15px]`}
              >
                Property Record
              </h4>
            )}
            <p
              className={`${Lora.className} cursor-pointer underline text-right text-colorPrimary font-light text-[13px]`}
            >
              {" "}
              Edit Property
            </p>
          </div>
          <div className="flex flex-col justify-start mt-4 bg-grey4 bg-opacity-10 px-4 pt-4 pb-2">
            {arrDetails?.map((elem) => (
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">{elem.label}</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    {elem.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {record && (
            <p
              onClick={() => {
                setModalIsOpen(false);
                setAddUnitModal(true);
              }}
              className={`${Lora.className} cursor-pointer underline text-colorPrimary font-light text-[13px]`}
            >
              {" "}
              Add Units
            </p>
          )}
        </>
      )}
      <div className="mt-6">
        <Button
          title={buttonTitle}
          onClick={() => {
            setModalIsOpen(false);
            setOpenList(true);
            if (buttonTitle === "Add Tenants") {
              setOpenList(false);
              setOpenUnitModal(false);
              setOpenAddTenantModal(true);
            }
            if(buttonTitle === 'View Tenants'){
              setOpenProperty("")
              setOpenAddTenantModal(true)
            }
          }}
          variant="submit"
        />
      </div>
    </ModalContainer>
  );
};
