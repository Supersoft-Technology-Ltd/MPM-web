"use client";

import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useState } from "react";
import { PaymentCards } from "../../../public/components/payments/cards";
import Image from "next/image";
import { ModalLayout } from "../../../public/components/modal-layout";
import { ModalCardLayout } from "../../../public/components/modal-layout-2";
import { useRouter } from "next/navigation";



const Payment = () => {
  const [action, setAction] = useState<'Pay rent'| 'Your financials' | "">("");
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter()

  const handleCardClick = (selectedAction: any) => {
    setAction(selectedAction);
    if(selectedAction === 'Pay rent'){
      setModalIsOpen(true)
    }
    if(selectedAction === 'Your financials'){
      router.push(`/payment/your-financials`)
    }
  }

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
              objectFit="center"
              objectPosition="contain"
            />
            <p
              className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
            >
              {elem.text}
            </p>
          </div>
        ))}
      </div>
      {
        action === 'Pay rent' && 
       <ModalLayout 
       setOpenModal={setOpenModal}
       location="10 Alake Street, Victoria Island. Lagos" 
       propertyID="Property not registered in Mypropsmanger"
       rent_amount="₦ 1,350,000. 00"
       rent_due_date="25/02/2024"
       landlord="Not Specified"
       setModalIsOpen={setAction}/>
      }
      {openModal && <ModalCardLayout setOpenModal={setOpenModal}/>}

    </DashboardLayout>
  );
};
export default Payment;
