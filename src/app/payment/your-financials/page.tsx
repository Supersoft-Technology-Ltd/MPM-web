"use client";
import { useState } from "react";
import { Cards } from "../../../../public/components/card";
import { DashboardLayout } from "../../../../public/components/dashboard/layout";
import { Transaction } from "../../../../public/components/transactions";
import { Data } from "../../../../public/components/transactions/data";
import { TransactionTable } from "../../../../public/components/transactions/table";
import { Inter, Lora } from "../../../../public/fonts";

const YourFinancials = () => {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openReceipt, setOpenReceipt] = useState(false);

  return (
    <div>
      <DashboardLayout>
        <div className={`${Lora.className} flex items-center justify-start`}>
          <p className="text-textBlack2 font-light text-[15px] py-4">
            You are Here {`>>`} Payments {`>>`}
          </p>
          <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
            Your Financials
          </h5>
        </div>
        <div className="flex gap-[3%] mt-4">
          <div className="w-[33%] h-[178px]">
            <div className="bg-financials shadow-th w-full h-full bg-center bg-contain rounded-[18px] px-4 pb-4">
              <div className="flex justify-between items-center">
                <div className="w-[110px] h-[110px]">
                  <img
                    src="/assets/coin.png"
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <div>
                  <p className="text-white text-[14px] mt-[-1rem]">
                    05/06/2023
                  </p>
                </div>
              </div>
              <div className="mt-[-1rem]">
                <p
                  className={`${Inter.className} font-normal text-white text-[11px]`}
                >
                  MPM Account Balance{" "}
                </p>
                <h5
                  className={`${Lora.className} font-bold text-white text-[25px]`}
                >
                  ₦ ******
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <p
                  className={`${Inter.className} text-white text-[12px] font-extralight`}
                >
                  MPM Account ID
                </p>
                <p className="text-white">**** 4098</p>
              </div>
            </div>
          </div>
          <div className="w-[68%]">
            <Cards />
          </div>
        </div>
        <div className="flex justify-end mt-[-3rem] items-center">
          <p
            className={`${Lora.className} bg-white px-4 py-4 rounded-[13px] font-extralight text-[15px] text-colorPrimary`}
          >
            Request Statement
          </p>
        </div>

        <div className="flex justify-between gap-[1.3rem]">
          <div className="w-[51%]">
            <p
              className={`${Lora.className} font-extralight text-textBlack mt-4`}
            >
              Recent Transactions
            </p>
            <Transaction
              width="10%"
              setOpenTransactionModal={setOpenTransactionModal}
              setOpenReceipt={setOpenReceipt}
              height="40px"
              data={Data}
            />
          </div>
          <div className="w-[49%]">
            <p
              className={`${Lora.className} font-extralight text-textBlack mt-4`}
            >
              Transactions Breakdown
            </p>
            <TransactionTable />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};
export default YourFinancials;
