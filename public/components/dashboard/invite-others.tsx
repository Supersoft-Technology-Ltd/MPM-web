import React, { SetStateAction, useState } from "react";
import { ModalContainer } from "../modal";
import { FaShareSquare } from "react-icons/fa";
import { Inter, Lora, Raleway } from "../../fonts";

type props = {
  setOpenInviteModal: React.Dispatch<SetStateAction<any>>;
};
export const InviteOthers = ({ setOpenInviteModal }: props) => {
  const handleModalClose = () => {
    setOpenInviteModal(false);
  };
  return (
    <ModalContainer
      handleModalClose={handleModalClose}
      width="30%"
      title="Invite Others"
      goBack={true}
    >
      <div className="pb-[60%]">
        <div className="border-b border-border w-full" />
        <p
          className={`${Lora.className} text-termsTitle w-[80%] mx-auto my-4 font-extralight text-[13px] text-center`}
        >
          You can invite your landlord, tenants or neighbours and make it even
          more fun!
        </p>
        <div className="w-full mt-10 bg-invite py-2 px-4 flex justify-between items-center">
          <p className={`${Inter.className} font-semibold text-textBlack2`}>
            Fortune0038
          </p>
          <span className="flex flex-col justify-center items-center">
            <FaShareSquare color="#0083B1" size={22} />
            <p
              className={`${Raleway.className} font-light text-socialText text-[9px]`}
            >
              Share Code
            </p>
          </span>
        </div>
      </div>
    </ModalContainer>
  );
};
