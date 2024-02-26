"use client";
import { Lora } from "../fonts";
import { ImLocation2 } from "react-icons/im";
import { CgPlayListAdd } from "react-icons/cg";
import { Button } from "./button";
import { useEffect, useState } from "react";
import {
  getAllProperties,
  getPropertyDetails,
} from "@/redux/reducers/properties/thunk-action";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { useProperties } from "../context/property-context";

type props = {
  title: "Tenancy" | "Pay Rent";
  buttonTitle: "Next" | "View Tenants";
  subText: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  value: string;
  handleModalOpen: () => void;
};
export const ModalLayout: React.FC<props> = ({
  setModalIsOpen,
  title,
  subText,
  buttonTitle,
  handleModalOpen,
  label,
  value,
}) => {
  const [selected, setSelected] = useState<{
    propertyName: string;
    id: string;
  }>({
    id: "",
    propertyName: "",
  });
  const dispatch = useAppThunkDispatch();
  const { allProperties, onePropertyDetails } = useAppSelector(
    ({ propertyReducer }) => propertyReducer
  );
  const user = useAppSelector(useSelectCurrentUser);
  console.log(onePropertyDetails, "oneprops");
  useEffect(() => {
    if (user?.id) {
      dispatch(getAllProperties(user.id));
    }
  }, [user]);
  useEffect(() => {
    if (selected.id) {
      dispatch(getPropertyDetails(selected.id));
    }
  }, [selected]);
  return (
    <div className="fixed flex items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div className=" w-[90%] lg:w-[50%] md:w-[70%] mx-auto bg-white h-auto py-4 px-4 md:px-8 lg:px-12 rounded-[10px]">
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
              {allProperties.map((elem: any) => (
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => {
                    setSelected(elem);
                  }}
                >
                  <div className="flex items-start">
                    <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
                      <ImLocation2 color="#EB212D" size={22} />
                    </div>
                    <div className="ml-4">
                      <p
                        className={`${Lora.className} text-[12px] md:text-[13px] font-light capitalize text-darkText lg:text-[14px]`}
                      >
                        {title === "Pay Rent"
                          ? " Tenancy Location"
                          : elem.propertyName}
                      </p>
                      {title === "Tenancy" && <p className="text-[12px] md:text-[13px] font-light capitalize text-darkText lg:text-[15px]">Property ID: {elem.id}</p>}
                      <p
                        className={`${Lora.className} font-light text-address text-[12px] md:text-[13px] font-light capitalize lg:text-[13px]`}
                      >
                        {elem.propertyLocation}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-darkText3 text-[12px] md:text-[13px] lg:text-[14px]">Select</p>
                    <div className="w-[16px] h-[16px] md:w-[18px] lg:w-[20px] flex justify-center items-center md:h-[18px] lg:h-[20px] border-2 border-colorPrimary rounded-[50%]">
                      {selected.propertyName === elem.propertyName && (
                        <div className=" w-[11px] h-[11px] md:w-[12px] md:h-[12px] lg:w-[13px] lg:h-[13px] bg-[#0041A0] rounded-[50%]"></div>
                      )}
                    </div>
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
                  <div>
                    <div className="flex justify-start grow-1 border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                      <p className="text-[#000B22] w-[45%] md:w-[30%] lg:w-[22%] text-[14px]">
                        Property Name
                      </p>
                      <p className="text-[#000B22] text-[14px] text-grey3">
                        {onePropertyDetails?.message?.propertyName}
                      </p>
                    </div>
                    <div className="flex justify-start grow-1 border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                      <p className="text-[#000B22] w-[45%] md:w-[30%] lg:w-[22%] text-[14px]">
                        Property ID
                      </p>
                      <p className="text-[#000B22] text-[14px] text-grey3">
                        {onePropertyDetails?.message?.id}
                      </p>
                    </div>
                    <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                      <div className="flex flex-col w-[45%] md:w-[30%] lg:w-[22%]">
                        <p className="text-[#000B22] text-[13px]">
                          No. of Units:
                        </p>
                      </div>
                      <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                        <p className="text-[#000000] text-[13px] text-left text-grey3">
                          {onePropertyDetails?.additionalDetail
                            ?.numberOfUnoccupiedUnits +
                            onePropertyDetails?.additionalDetail
                              ?.numberOfOccupiedUnits}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                      <div className="flex flex-col w-[45%] md:w-[30%] lg:w-[22%]">
                        <p className="text-[#000B22] text-[13px]">
                          No. of Tenants:
                        </p>
                      </div>
                      <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                        <p className="text-[#000000] text-[13px] text-left text-grey3">
                          {onePropertyDetails?.additionalDetail?.numberOfTenants}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[95%] md:w-[85%] lg:w-[80%] mt-6 pb-2 gap-[5%] mx-auto">
                <div className="w-[48%] md: w-[47%] lg:w-[45%]">
                  <Button
                    variant="cancel"
                    title="Cancel"
                    onClick={() => setModalIsOpen(false)}
                  ></Button>
                </div>
                <div className="w-[48%] md:w-[47%] lg:w-[45%]">
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
