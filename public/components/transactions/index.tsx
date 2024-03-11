import moment from "moment";
import { Lora } from "../../fonts";
import { formatTransaction } from "../../utils/formatTransaction";
import { Data } from "./data";
import { RxDotsVertical } from "react-icons/rx";
import React, { SetStateAction, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ImDownload } from "react-icons/im";

type props = {
  data: Array<{
    date: string;
    transactionId: string;
    historyTitle: string;
    historyMessage: string;
    successful: boolean;
    amount: string;
    id: string;
  }>;
  menu?: true;
  width: string;
  height: string;
  setOpenTransactionModal: React.Dispatch<SetStateAction<any>>;
  setOpenReceipt: React.Dispatch<SetStateAction<any>>;
};
export const Transaction = ({
  data,
  menu,
  width,
  height,
  setOpenTransactionModal,
  setOpenReceipt,
}: props) => {
  const formattedData = formatTransaction(data);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  const handlePopupToggle = (id: string) => {
    setActive(id);
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <div className="w-full h-full mt-2 flex flex-col gap-[1.6rem] relative">
      {Array.isArray(formattedData) && formattedData.length > 0 ? (
        formattedData.map((group) => (
          <div
            key={group.date}
            className="flex w-full flex-row gap-[1rem] bg-[#FFF] px-4 py-4 justify-start shadow-sm h-auto rounded-[10px]"
          >
            <div
              className={`${Lora.className} flex flex-col w-[15%] items-center justify-center`}
            >
              <p
                className={`${Lora.className} flex flex-col justify-center items-center text-textBlack`}
              >
                <span
                  className={`${Lora.className} text-dateMonthColor font-extralight text-[20px]`}
                >
                  {moment(group.date).format("MMM")}
                </span>
                <span className={`${Lora.className} font-normal text-[20px]`}>
                  {moment(group.date).format("DD")}
                </span>
                <span
                  className={`${Lora.className} text-dateMonthColor font-extralight text-[20px]`}
                >
                  {moment(group.date).format("YYYY")}
                </span>
              </p>
            </div>
            <div className="border-l border-shadowText" />
            <div className="flex flex-col justify-start gap-[1rem] w-[85%]">
              {group.items.map((item: any) => (
                <li
                  key={item.id}
                  className="flex justify-between w-full items-start relative"
                >
                  <div className="h-full" style={{ width: width }}>
                    <div
                      className="w-full flex flex-col justify-center items-center bg-[#18573A] rounded-[10px]"
                      style={{ height: height }}
                    >
                      <img
                        src="/assets/dollar-symbol.png"
                        className="w-[60%] h-[60%] object-center object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-[85%] ml-[3%]">
                    <p
                      className={`${Lora.className} font-extralight text-[16px] text-[#212524]`}
                    >
                      {" "}
                      {item.title}
                    </p>
                    <p
                      className={`${Lora.className} font-extralight  text-[12px] text-dateMonthColor`}
                    >
                      {" "}
                      {item.text}
                    </p>
                    <span
                      className={`${Lora.className} font-extralight text-[12px] flex text-dateMonthColor`}
                    >
                      <p className="font-normal mr-2">Amount:</p> {item.amount}
                    </span>
                    <span
                      className={`${Lora.className} font-extralight text-[12px] flex text-dateMonthColor`}
                    >
                      <p className="font-normal mr-2">Transaction ID:</p>{" "}
                      {item.id}
                    </span>
                    <p
                      className={`${Lora.className} font-extralight text-[12px] text-[#079B2F]`}
                    >
                      {item.status ? "Payment Successful" : "Payment Failed"}
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                    {menu ? (
                      <div onClick={() => handlePopupToggle(item.id)}>
                        <RxDotsVertical color="#0000001A" size={35} />
                      </div>
                    ) : (
                      ""
                    )}
                    {active === item.id && openPopup && (
                      <div className="bg-colorPrimary gap-[.3rem] py-2 px-2 z-[1000] flex flex-col justify-between w-[10.4rem] h-auto shadow-sm absolute right-2 top-12">
                        <div
                          className="flex justify-end items-end cursor-pointer"
                          onClick={() => handleClose()}
                        >
                          <AiOutlineClose color="#EA132C" size={18} />
                        </div>
                        <div className="w-full flex flex-col gap-[.5rem] items-start justify-start">
                          <p
                            onClick={() => {
                              setOpenTransactionModal(false);
                              setOpenReceipt(true);
                            }}
                            className={`${Lora.className} cursor-pointer font-extralight text-[14px] text-[#212524]`}
                          >
                            View Receipt
                          </p>
                          <div className="border-b border-border w-full" />
                          <div className="flex items-center justify-between w-full">
                            <p
                              className={`${Lora.className} font-extralight text-[14px] text-[#212524]`}
                            >
                              Download Receipt
                            </p>
                            <div>
                              {" "}
                              <ImDownload
                                color="rgba(2, 130, 173, 0.71)"
                                size={19}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-12">No Transaction</p>
      )}
    </div>
  );
};
