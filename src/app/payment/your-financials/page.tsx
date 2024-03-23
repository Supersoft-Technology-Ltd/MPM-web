"use client";
import { useEffect, useState } from "react";
import { Cards } from "../../../../public/components/card";
import { DashboardLayout } from "../../../../public/components/dashboard/layout";
import { Transaction } from "../../../../public/components/transactions";
import { Data } from "../../../../public/components/transactions/data";
import { TransactionTable } from "../../../../public/components/transactions/table";
import { Inter, Lora } from "../../../../public/fonts";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { getFinancials } from "@/redux/reducers/transactions/thunk-action";
import { formatCurrency } from "../../../../public/hooks/formatNumber";
import LayoutContainer from "../../../../public/components/layout-container";

const YourFinancials = () => {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openReceipt, setOpenReceipt] = useState(false);
  const { allFinancials } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );

  const dispatch = useAppThunkDispatch();

  const user = useAppSelector(useSelectCurrentUser);

  useEffect(() => {
    if (user?.id) {
      dispatch(getFinancials(user.id));
    }
  }, [user]);
  console.log(allFinancials, "all");
  return (
    <div>
      <LayoutContainer>
        {" "}
        <DashboardLayout>
          <div className={`${Lora.className} flex items-center justify-start`}>
            <p className="text-textBlack2 font-light text-[15px] py-4">
              You are Here {`>>`} Payments {`>>`}
            </p>
            <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
              Your Financials
            </h5>
          </div>
          <div className="flex lg:gap-[3%] gap-y-4  mt-4 flex-col lg_flex-row ">
            <div className="lg:w-[33%] w-full h-[178px]">
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
                    ₦ {formatCurrency(allFinancials?.walletBalance || 0)}
                  </h5>
                </div>
                <div className="flex justify-between items-center">
                  <p
                    className={`${Inter.className} text-white text-[12px] font-extralight`}
                  >
                    MPM Account ID
                  </p>
                  <p className="text-white">{allFinancials.userId}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[68%] w-full">
              <Cards
                data={[
                  {
                    name: "Total Inflow",
                    amount: `₦${formatCurrency(
                      allFinancials.totalInflow || 0
                    )}`,
                    img: "/assets/inflow icon.png",
                  },
                  {
                    name: "Total Outflow",
                    amount: `₦${formatCurrency(
                      allFinancials.totalOutflow || 0
                    )}`,
                    img: "/assets/outflow icon.png",
                  },
                  {
                    name: "Transactions Count",
                    amount: "56",
                    img: "/assets/counter.png",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex justify-end lg:mt-[-3rem] mt-4 items-center">
            <p
              className={`${Lora.className} bg-white px-4 py-4 rounded-[13px] font-extralight text-[15px] text-colorPrimary`}
            >
              Request Statement
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-[1.3rem]">
            <div className="lg:w-[51%] w-full">
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
                data={[]}
              />
            </div>
            <div className="lg:w-[49%] w-full">
              <p
                className={`${Lora.className} font-extralight text-textBlack mt-4`}
              >
                Transactions Breakdown
              </p>
              <TransactionTable />
            </div>
          </div>
        </DashboardLayout>
      </LayoutContainer>
    </div>
  );
};
export default YourFinancials;
