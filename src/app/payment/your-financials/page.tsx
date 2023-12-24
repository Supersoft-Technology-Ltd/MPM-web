"use client";
import { DashboardLayout } from "../../../../public/components/dashboard/layout";
import { Lora } from "../../../../public/fonts";

const YourFinancials = () => {
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
        <div className="w-[30%] h-[180px]">
            <div className="bg-financials w-full h-full bg-center bg-contain rounded-[18px]">
                <div>
                    <p>MPM Account Balance </p>
                    <h5>₦ ******</h5>
                </div>
                <div>
                    <p>MPM Account ID</p>
                    <p>**** 4098</p>
                </div>
            </div>
        </div>
      </DashboardLayout>
    </div>
  );
};
export default YourFinancials;
