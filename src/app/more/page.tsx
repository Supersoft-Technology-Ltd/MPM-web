"use client";

import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { more } from "../../../public/components/payments/cards";
import Image from "next/image";
import { ModalContainer } from "../../../public/components/modal";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import Switch from "react-switch";
import { FaAngleRight } from "react-icons/fa6";
import { Faq } from "../../../public/components/faq.modal";
import { Settings } from "../../../public/components/settings-modal";
import { Socials } from "../../../public/components/faq";
import { Success } from "../../../public/components/modal/success";
import { Profile } from "../../../public/components/dashboard/profile";
import { Subscription } from "../../../public/components/subscription-modal";
import { SuccessfulPayment } from "../../../public/components/payments/bill-successful";
import moment from "moment";
import {
  InitiateSubscriptionPayment,
  getPaymentMthods,
  getSubscriptionPlans,
} from "@/redux/reducers/transactions/thunk-action";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { ResetPassword } from "../../../public/components/modal/reset-password";
import { requestOtp } from "@/redux/reducers/auth/thunk-action";
import { useRouter } from "next/navigation";
import LayoutContainer from "../../../public/components/layout-container";

const More = () => {
  const [action, setAction] = useState<
    "settings" | "faqs" | "help and support" | "subscription" | ""
  >("");
  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const [selected, setSelected] = useState<string>("");
  const [openSelected, setOpenSelected] = useState(false);
  const [openFaqModal, setOpenFaqModal] = useState(false);
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [openSuccessModal, setOpenSuccessmodal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openSubscription, setOpenSubscription] = useState(false);
  const [receipt, setReceipt] = useState<any>({});
  const [openReceipt, setOpenReceipt] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openBankModal, setOpenBankModal] = useState(false);

  const user = useAppSelector(useSelectCurrentUser);
  const generateOtp = () => {
    if (user?.email) {
      dispatch(requestOtp(user.email));
    }
  };

  const handleSelected = (selectElem: string) => {
    setSelected(selectElem);
    if (selectElem === "Change Password") {
      setOpenTransactionModal(false);
      setOpenSelected(true);
    }
    if (selectElem === "Profile") {
      setOpenTransactionModal(false);
      setOpenProfile(true);
    }
    if (selectElem === "Bank Account") {
      router.push("/more?action=bank account");
      setOpenTransactionModal(false);
      setOpenModal(true);
      generateOtp();
    }
  };

  const [selectedPayment, setSelectedPayment] = useState({
    paymentMethod: "",
    planId: "",
  });

  const [openTransactionModal, setOpenTransactionModal] =
    useState<boolean>(false);

  const [checked, setChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  const handleCardClick = (selectedAction: any) => {
    setAction(selectedAction);
    if (selectedAction === "faqs") {
      setOpenFaqModal(true);
    }
    if (selectedAction === "settings") {
      setOpenTransactionModal(true);
    }
    if (selectedAction === "help and support") {
      setOpenHelpModal(true);
    }
    if (selectedAction === "subscription") {
      setOpenSubscription(true);
    }
  };

  const handleModalClose = () => {
    setOpenTransactionModal(false);
  };

  return (
    <LayoutContainer>
      <DashboardLayout>
        <div className={`${Lora.className} flex items-center justify-start`}>
          <p className="text-textBlack2 font-light p-[15px] py-4">
            You are Here {`>>`}
          </p>
          <h5 className="font-medium text-textBlack2 text-[16px]">More</h5>
        </div>
        <div className="lg:flex lg:flex-row md:flex-row lg:gap-[1rem] gap-[2rem] md:gap-[1rem] lg:w-[95%] w-[100%] mt-4">
          {more.map((elem) => (
            <div
              className="flex justify-center mt-4 lg:mt-0 md:mt-0 lg:w-[30%] md:w-[40%] md:px-4 md:h-[100px] h-[120px] mx-auto lg:px-2 lg:h-[120px] cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th"
              onClick={() => handleCardClick(elem.action)}
            >
              <Image src={elem.img} alt="" width={50} height={50} />
              <p
                className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
              >
                {elem.text}
              </p>
            </div>
          ))}
        </div>
        {action === "settings" && openTransactionModal && (
          <ModalContainer
            width="33%"
            goBack={true}
            handleModalClose={handleModalClose}
            title="Settings"
          >
            <div>
              {[
                "Change Password",
                "Profile",
                "Bank Account",
                "Setup 2 FA",
                "Allow Notifications",
              ].map((elem, id) => (
                <div
                  key={id}
                  className="flex cursor-pointer pt-4 pb-4 justify-between items-center border-b border-[#00000029]"
                  onClick={() => handleSelected(elem)}
                >
                  <p
                    className={`${Lora.className} font-light text-address text-[14px]`}
                  >
                    {elem}
                  </p>
                  {id !== 3 ? (
                    <FaAngleRight size={14} color="rgba(0, 11, 34, 1)" />
                  ) : (
                    <Switch
                      checkedIcon={false}
                      uncheckedIcon={false}
                      onChange={handleChange}
                      checked={checked}
                    />
                  )}
                </div>
              ))}
            </div>
          </ModalContainer>
        )}
        {selected === "Change Password" && openSelected && (
          <ModalContainer
            width="35%"
            title="Change Password"
            goBack={true}
            handleModalClose={() => {
              setOpenSelected(false);
              setOpenTransactionModal(true);
            }}
          >
            <Settings setOpenSuccessModal={setOpenSuccessmodal} />
          </ModalContainer>
        )}
        {openSuccessModal && (
          <Success
            title="Password Changed"
            text="You have successfully changed your password."
            subtext="Please keep your new password safe as you
           will require it regularly to access your MPM account."
          />
        )}
        {selected === "Profile" && openProfile && (
          <ModalContainer
            width="35%"
            title="Edit Profile"
            goBack={true}
            handleModalClose={() => {
              setOpenProfile(false);
              setOpenTransactionModal(true);
            }}
          >
            <Profile />
          </ModalContainer>
        )}
        {action === "faqs" && openFaqModal && (
          <ModalContainer
            width="50%"
            goBack={true}
            handleModalClose={() => setOpenFaqModal(false)}
            title="FAQs"
          >
            <div>
              <Faq />
            </div>
          </ModalContainer>
        )}
        {action === "subscription" && openSubscription && (
          <ModalContainer
            width="35%"
            goBack={true}
            handleModalClose={() => setOpenSubscription(false)}
            title="Choose Subscription Plan"
          >
            <Subscription
              setOpenModal={setOpenModal}
              receipt={receipt}
              setOpenReceipt={setOpenReceipt}
              setReceipt={setReceipt}
            />
          </ModalContainer>
        )}
        {action === "help and support" && openHelpModal && (
          <ModalContainer
            width="30%"
            goBack={true}
            handleModalClose={() => setOpenHelpModal(false)}
            title="Help and Support"
          >
            <div>
              <div className="w-[50%] mx-auto">
                <img src="/assets/help-support.png" />
              </div>
              <div>
                {Socials.map((elem: any, id) => (
                  <div key={id}>
                    <div className="flex items-center py-4">
                      <img src={elem.icon} className="w-[35px] h-[35px]" />
                      <div
                        className={`${Lora.className} ml-4 font-light text-address text-[14px]`}
                      >
                        <p>{elem.text}</p>
                        <p>{elem.contact}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        borderBottomColor: "",
                        width: "100%",
                        borderBottomWidth: 0.5,
                        paddingTop: 0.8,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </ModalContainer>
        )}
        {openReceipt && (
          <SuccessfulPayment
            setOpenSubscription={setOpenSubscription}
            setOpenModal={setOpenModal}
            name={receipt.name}
            transactionID={receipt.referenceID}
            referenceID={receipt.referenceID}
            amount={receipt.amount}
            dates={moment(receipt.dates).format("DD / MM / YYYY : hh:mm a")}
            setOpenReceipt={setOpenReceipt}
          />
        )}
        {openModal && (
          <ResetPassword
            title="Email Verification"
            subText="We need to verify your email before you can proceed."
          />
        )}
      </DashboardLayout>
    </LayoutContainer>
  );
};
export default More;
