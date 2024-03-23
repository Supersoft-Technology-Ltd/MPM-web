import React, { SetStateAction, useRef, useState } from "react";
import { ModalContainer } from "../modal";
import { FaShareSquare } from "react-icons/fa";
import { Inter, Lora, Raleway } from "../../fonts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAppSelector } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

type props = {
  setOpenInviteModal: React.Dispatch<SetStateAction<any>>;
};
export const InviteOthers = ({ setOpenInviteModal }: props) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
  };
  const handleModalClose = () => {
    setOpenInviteModal(false);
  };

  const user = useAppSelector(useSelectCurrentUser);
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
            {user?.referralCode}
          </p>
          <div onClick={() => handleCopy()}>
            <CopyToClipboard
              text={`Hi there! I am using MPM Mobile.\nDownload app https://play.google.com/store/apps/details?id=com.supersoft.mypropsmanagermobile and use my referral code: ${user?.referralCode}`}
              onCopy={(text, result) => console.log(result)}
            >
              <span className="flex flex-col justify-center items-center">
                <FaShareSquare color="#0083B1" size={22} />
                <p
                  className={
                    copied
                      ? `${Raleway.className} font-light text-colorRed text-[9px]`
                      : `${Raleway.className} font-light text-socialText text-[9px]`
                  }
                >
                  {copied ? "Copied!" : "Share Code"}
                </p>
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
