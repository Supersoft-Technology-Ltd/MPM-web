import Image from "next/image";
import location from "../../assets/MPM logo.png";
import { ImLocation2 } from "react-icons/im";
import { Lora } from "../../fonts";
import { SetStateAction } from "react";
import { useMediaQuery } from "../../hooks/usemediaquery";

type props = {
  propertyName: string;
  propertyLocation: string;
  lastRent: string;
  nextRent: string;
  amount: string;
  duration: string;
  landlordName: string;
  landLordNumber: string;
};
export const Rental = ({
  propertyName,
  propertyLocation,
  amount,
  landLordNumber,
  landlordName,
  lastRent,
  nextRent,
  duration
}: props) => {
  const matches = useMediaQuery("(min-width: 767px)");
  return (
    <div>
      <div
        className="flex items-start w-full h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
      >
        <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
          <ImLocation2 color="#EB212D" size={22} />
        </div>
        <div className="ml-4">
          <p
            className={`${Lora.className} capitalize font-medium text-darkText text-[15px]`}
          >
            {propertyName}
          </p>
          <p
            className={`${Lora.className} font-light text-address text-[13px]`}
          >
            {propertyLocation}
          </p>
        </div>
      </div>
      <div className="w-full mt-4 flex justify-between items-center gap-[3%]">
        <div
          className="flex items-start lg:w-[48%] w-[50%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Last Rent Paid
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {lastRent}
            </p>
          </div>
        </div>
        <div
          className="flex items-start lg:w-[48%] w-[50%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Next Rent Due Date
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {nextRent}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 flex justify-between items-center gap-[3%]">
        <div
          className="flex items-start lg:w-[48%] w-[50%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Next Rent Amount
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {amount}
            </p>
          </div>
        </div>
        <div
          className="flex items-start lg:w-[48%] w-[50%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Tenancy Duration
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {duration}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 flex justify-between items-center gap-[3%]">
        <div
          className="flex items-start lg:w-[48%] w-[50%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Landlord's Name
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {landlordName}
            </p>
          </div>
        </div>
        <div
          className="flex items-start w-[48%] h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] lg:px-4 lg:py-4 px-2 py-2"
        >
          <div className="ml-4">
            <p
              className={`${Lora.className} capitalize font-light text-darkText text-[15px]`}
            >
              Landlord's Mobile
            </p>
            <p
              className={`${Lora.className} font-light text-address text-[13px]`}
            >
              {landLordNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
