"use client";
import { Lora } from "../fonts";
import { ImLocation2 } from "react-icons/im";

export const ModalLayout = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.4)] w-full h-[100vh] top-0 left-0">
      <div className="w-[50%] mx-auto my-auto bg-white">
        <h5>Pay Rent</h5>
        <div>
          <p>Rent Recipient Property</p>
          <div>
            <div className="w-full h-[70px] border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] flex items-center justify-start px-2">
              <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
                <ImLocation2 color="#EB212D" size={19} />
              </div>
              <div className="ml-4">
                <p
                  className={`${Lora.className} font-light text-darkText text-[12px]`}
                >
                  Tenancy Location
                </p>
                <p
                  className={`${Lora.className} font-light text-address text-[13px]`}
                >
                  10 Alake Street, Victoria Island. Lagos
                </p>
              </div>
            </div>
            <div>
              <p>Select</p>
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
