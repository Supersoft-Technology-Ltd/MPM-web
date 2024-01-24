"use client";

import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useState } from "react";
import { PaymentCards } from "../../../public/components/payments/cards";
import Image from "next/image";
import { ModalLayout } from "../../../public/components/modal-layout";
import { ModalCardLayout } from "../../../public/components/modal-layout-2";
import { useRouter } from "next/navigation";
import { ModalContainer } from "../../../public/components/modal";
import { Transaction } from "../../../public/components/transactions";
import { Data } from "../../../public/components/transactions/data";
import { SuccessfulPayment } from "../../../public/components/payments/bill-successful";
import { rentDetails } from "../../../public/components/property-details";

const Payment = () => {
  const [action, setAction] = useState<
    "Pay rent" | "Your financials" | "Transaction history" | ""
  >("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTransactionModal, setOpenTransactionModal] =
    useState<boolean>(false);
  const [openReceipt, setOpenReceipt] = useState(false);
  const router = useRouter();

  const handleCardClick = (selectedAction: any) => {
    setAction(selectedAction);
    if (selectedAction === "Pay rent") {
      setModalIsOpen(true);
    }
    if (selectedAction === "Your financials") {
      router.push(`/payment/your-financials`);
    }
    if (selectedAction === "Transaction history") {
      setOpenTransactionModal(true);
    }
  };
  const handleModalClose = () => {
    setOpenTransactionModal(false);
  };
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
          <div
            className="flex justify-center w-[22%] px-2 h-[120px] cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th"
            onClick={() => handleCardClick(elem.action)}
          >
            <Image
              src={elem.img}
              alt=""
              width={50}
              height={50}
             
            />
            <p
              className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
            >
              {elem.text}
            </p>
          </div>
        ))}
      </div>
      {action === "Pay rent" && (
       <>
       {modalIsOpen &&
         <ModalLayout
         handleModalOpen={() => {
           setOpenModal(true);
           setModalIsOpen(false);
         }}
         title="Pay Rent"
         subText="Rent Recipient Property"
         buttonTitle="Next"
         setModalIsOpen={setAction}
         arrList={rentDetails.map((elem) => ({
           label: elem.name,
           value: elem.value,
         }))}
       />
       }
       </>
      )}
      {openModal && <ModalCardLayout setOpenModal={setOpenModal} />}
      {action === "Transaction history" && openTransactionModal && (
        <ModalContainer
          width="60%"
          goBack={true}
          handleModalClose={handleModalClose}
          title="Transaction History"
        >
          <Transaction
            setOpenReceipt={setOpenReceipt}
            setOpenTransactionModal={setOpenTransactionModal}
            width="10%"
            height="45px"
            data={Data}
            menu={true}
          />
        </ModalContainer>
      )}
      {openReceipt && <SuccessfulPayment setOpenReceipt={setOpenReceipt} />}
    </DashboardLayout>
  );
};
export default Payment;
