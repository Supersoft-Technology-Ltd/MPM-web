"use client";

import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useEffect, useState } from "react";
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
import moment from "moment";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { transactionReducer } from "@/redux/reducers/transactions";
import { getAllTransactions } from "@/redux/reducers/transactions/thunk-action";
import { useProperties } from "../../../public/context/property-context";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { useMediaQuery } from "../../../public/hooks/usemediaquery";
import LayoutContainer from "../../../public/components/layout-container";

const Payment = () => {
  const [action, setAction] = useState<
    "Pay rent" | "Your financials" | "Transaction history" | ""
  >("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 767px)");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTransactionModal, setOpenTransactionModal] =
    useState<boolean>(false);
  const [openReceipt, setOpenReceipt] = useState(false);
  const [receipt, setReceipt] = useState<any>({});
  const [paymentDetails, setPaymentDetails] = useState<{
    unitRent: number;
    propertyID: string;
    propertyLocation: string;
  }>({
    propertyID: "",
    propertyLocation: "",
    unitRent: 0,
  });
  const router = useRouter();

  const { allTransactions } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );

  const dispatch = useAppThunkDispatch();

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
  const user = useAppSelector(useSelectCurrentUser);

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllTransactions(user?.id));
    }
  }, [user]);
  return (
    <LayoutContainer>
      <DashboardLayout>
        <div className={`${Lora.className} flex items-center justify-start`}>
          <p className="text-textBlack2 font-light text-[15px] py-4">
            You are Here {`>>`}
          </p>
          <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
            Payments
          </h5>
        </div>
        <div className="lg:flex lg:flex-row md:flex-row lg:gap-[1rem] gap-[2rem] md:gap-[1rem] lg:w-[80%] w-[100%] mt-4">
          {PaymentCards.map((elem) => (
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
        {action === "Pay rent" && (
          <>
            {modalIsOpen && (
              <ModalLayout
                handleModalOpen={() => {
                  setOpenModal(true);
                  setModalIsOpen(false);
                }}
                setPaymentDetails={setPaymentDetails}
                title="Pay Rent"
                subText="Rent Recipient Property"
                buttonTitle="Next"
                setModalIsOpen={setAction}
                label=""
                value=""
              />
            )}
          </>
        )}
        {openModal && (
          <ModalCardLayout
            receipt={receipt}
            setReceipt={setReceipt}
            setOpenReceipt={setOpenReceipt}
            setModalIsOpen={setModalIsOpen}
            paymentDetails={paymentDetails}
            setOpenModal={setOpenModal}
          />
        )}
        {action === "Transaction history" && openTransactionModal && (
          <ModalContainer
            width={matches ? "60%" : "90%"}
            goBack={true}
            handleModalClose={handleModalClose}
            title="Transaction History"
          >
            <Transaction
              setOpenReceipt={setOpenReceipt}
              setOpenTransactionModal={setOpenTransactionModal}
              width="10%"
              height="45px"
              data={allTransactions as any}
              menu={true}
            />
          </ModalContainer>
        )}
        {openReceipt && (
          <SuccessfulPayment
            setOpenSubscription={() => null}
            setOpenModal={setOpenModal}
            name={receipt.name}
            transactionID={receipt.referenceID}
            referenceID={receipt.referenceID}
            amount={receipt.amount}
            dates={moment(receipt.dates).format("DD / MM / YYYY : hh:mm a")}
            setOpenReceipt={setOpenReceipt}
          />
        )}
      </DashboardLayout>
    </LayoutContainer>
  );
};
export default Payment;
