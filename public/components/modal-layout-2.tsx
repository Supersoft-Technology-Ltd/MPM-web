"use client";
import { Lora } from "../fonts";
import { Button } from "./button";
import { Inputs } from "./input";
import { StatusSelect } from "./select";

type props = {
  setOpenModal: React.Dispatch<React.SetStateAction<any>>;
};
export const ModalCardLayout: React.FC<props> = ({ setOpenModal }) => {
  const options = [
    {
      label: "Paystack",
      value: 1,
    },
    {
      label: "SquadCo",
      value: 1,
    },
  ];
  return (
    <div className="fixed flex items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div className="w-[35%] mx-auto bg-white h-auto py-4 px-12 rounded-[10px]">
        <h5 className={`${Lora.className} text-text_color text-center`}>
          Confirm Payment
        </h5>
        <div className="pt-8">
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[14px]`}
          >
            Rent Amount Due
          </p>
          <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-2 px-6 flex justify-start items-center">
            <h4 className={`${Lora.className} text-darkText font-semibold`}>
              ₦ 1,350,000. 00
            </h4>
          </div>
        </div>
        <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-4 px-6 flex justify-start items-center">
          <p
            className={`${Lora.className} font-light text-textBlack2 tracking-[0.2px] text-[14px]`}
          >
            MPM-107323
          </p>
        </div>
        <div className="bg-lighterGrey w-full h-[52px] rounded-[7px] mt-4 px-6 flex justify-start items-center">
          <p
            className={`${Lora.className} font-light text-textBlack2 tracking-[0.2px] text-[14px]`}
          >
            Lekki Phase 1
          </p>
        </div>
        <div className="mt-4">
          <StatusSelect
            placeholder=""
            options={[
              { label: "Landlord", value: "LANDLORD" },
              { label: "Tenant", value: "TENANT" },
              { label: "Property Manager", value: "PROPERTY MANAGER" },
            ]}
            value={""}
            onChange={() => null}
            onBlur={() => null}
            err={false}
            errMsg={"errors.role"}
          />
        </div>
        <div className="flex justify-center items-center w-[95%] mt-6 pb-2 gap-[5%] mx-auto">
          <div className="w-[45%]">
            <Button
              variant="cancel"
              title="Cancel"
              onClick={() => setOpenModal(false)}
            ></Button>
          </div>
          <div className="w-[45%]">
            <Button variant="submit" title="Next"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
