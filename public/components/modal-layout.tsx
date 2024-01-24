"use client";
import { Lora } from "../fonts";
import { ImLocation2 } from "react-icons/im";
import { CgPlayListAdd } from "react-icons/cg";
import { Button } from "./button";
import { SetStateAction} from "react";
import { PropertiesList } from "./property-details";

type props = {
  title: "Tenancy" | "Pay Rent";
  buttonTitle: 'Next' | 'View Tenants'
  subText: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<any>>;
  arrList: Array<{
    label: string;
    value: string;
  }>;
  handleModalOpen: () => void
};
export const ModalLayout: React.FC<props> = ({
  setModalIsOpen,
  title,
  subText,
  arrList,
  buttonTitle,
  handleModalOpen
}) => {

  return (
    <div className="fixed flex items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div className="w-[50%] mx-auto bg-white h-auto py-4 px-12 rounded-[10px]">
        <h5 className={`${Lora.className} text-text_color text-center`}>
          {title}
        </h5>
        <div className="mt-8">
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[14px]`}
          >
            {subText}
          </p>
          <div>
            <div className="w-full h-auto border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] gap-[1.5rem] flex flex-col justify-between px-4 py-4">
              {PropertiesList.map((elem) => (
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
                      <ImLocation2 color="#EB212D" size={22} />
                    </div>
                    <div className="ml-4">
                      <p
                        className={`${Lora.className} font-light text-darkText text-[12px]`}
                      >
                        {title === "Pay Rent" ? " Tenancy Location" : elem.name}
                      </p>
                      {title === "Tenancy" && (
                        <p>Property ID: {elem.propertyID}</p>
                      )}
                      <p
                        className={`${Lora.className} font-light text-address text-[13px]`}
                      >
                        {elem.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>Select</p>
                    <input type="radio" />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                {title === "Pay Rent" && (
                  <>
                    <p
                      className={`${Lora.className} font-light text-grey3 text-[13px]`}
                    >
                      No additional tenancy record found
                    </p>

                    <div className="flex items-center">
                      <CgPlayListAdd className="text-address text-[14px]" />
                      <p
                        className={`${Lora.className} text-address text-[12px] font-extralight`}
                      >
                        Add
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div>
              {title === "Pay Rent" && (
                <p
                  className={`${Lora.className} font-extralight mt-4 tracking-[0.1px] text-textBlack2 text-[15px]`}
                >
                  Selected Property Details
                </p>
              )}
              <div className="flex flex-col justify-start mt-4 bg-grey4 bg-opacity-30 px-4 pt-4 pb-2">
                <div>
                  {arrList.map((elem) => (
                    <div className="flex justify-start grow-1 border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                      <p className="text-[#000B22] w-[22%] text-[14px]">
                        {elem.label}
                      </p>
                      <p className="text-[#000B22] text-[14px] text-grey3">
                        {elem.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center w-[80%] mt-6 pb-2 gap-[5%] mx-auto">
                <div className="w-[45%]">
                  <Button
                    variant="cancel"
                    title="Cancel"
                    onClick={() => setModalIsOpen(false)}
                  ></Button>
                </div>
                <div className="w-[45%]">
                  <Button
                    variant="submit"
                    title={buttonTitle}
                    onClick={handleModalOpen}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
