"use client";

import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { Lora } from "../../../public/fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  TenancyCard,
  TenancyBox,
} from "../../../public/components/tenancy-card";
import { CgPlayListAdd } from "react-icons/cg";
import { useEffect, useState } from "react";
import { InviteOthers } from "../../../public/components/dashboard/invite-others";
import { AddProperty } from "../../../public/components/modal/add-property";
import { useMediaQuery } from "../../../public/hooks/usemediaquery";
import { MobileCards } from "../../../public/components/dashboard/mobile-cards";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import {
  getAllProperties,
  getTenancyDetails,
} from "@/redux/reducers/properties/thunk-action";
import { formatCurrency } from "../../../public/hooks/formatNumber";

const Dashboard = () => {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [openAddpropertyModal, setOpenAddPropertyModal] = useState(false);
  const [openPropertyList, setOpenPropertyList] = useState(false);
  const matches = useMediaQuery("(min-width: 500px)");
  const user = useAppSelector(useSelectCurrentUser);
  const dispatch = useAppThunkDispatch();
  const { allTenancyDetails, allProperties } = useAppSelector(
    ({ propertyReducer }) => propertyReducer
  );
  useEffect(() => {
    if (user?.id) {
      dispatch(getTenancyDetails(user.id));
      dispatch(getAllProperties(user.id));
    }
  }, [user]);
  console.log(allProperties, "allprops");
  return (
    <DashboardLayout>
      {openInviteModal && (
        <InviteOthers setOpenInviteModal={setOpenInviteModal} />
      )}
      <div className={`${Lora.className} flex items-center justify-start`}>
        <p className="text-textBlack2 font-light text-[15px] py-4">
          You are Here {`>>`}
        </p>
        <h5 className="font-medium text-textBlack2 text-[16px] ml-2">Home</h5>
      </div>
      <div className="border border-[rgba(0, 65, 160, 0.1)] h-[166px] px-[-1rem] lg:px-4 pb-2 lg:pb-4">
        <Carousel autoPlay={true}>
          <div>
            <div className=" flex items-center">
              <div className="lg:w-[160px] h-[200px] lg:h-[160px]">
                <img
                  src="/assets/3811384.jpg"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color text-[14px] lg:text-[16px] mr-24 lg:mr-28 mt-[-1rem] lg:mt-[-2rem] leading-[2.2rem]`}
                >
                  Verify Your Email
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className} font-extralight text-justify text-text_color leading-[1.5rem] text-[12px] lg:text-[14px] w-[81%]`}
                  >
                    Welcome to props manager app! to get started, please verify
                    your email address to unlock all the features and benefits
                    awaiting you.Thank you for joining us!{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                    >
                      Click to verify
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="lg:w-[160px] h-[200px] lg:h-[160px]">
                <img
                  src="/assets/add-tenancy-image.png"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color text-[14px] lg:text-[16px] mr-24 lg:mr-28 mt-[-1rem] lg:mt-[-2rem] leading-[2.2rem]`}
                >
                  Add Tenancy Details
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className}  font-extralight text-justify text-text_color leading-[1.5rem] text-[12px] lg:text-[14px] w-[77%]`}
                  >
                    Welcome to props manager app! to get started, please verify
                    your email address to unlock all the features and benefits
                    awaiting you.Thank you for joining us!{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                    >
                      Click to Add Details
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="lg:w-[160px] h-[200px] lg:h-[160px]">
                <img
                  src="/assets/invite-others-social.png"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color text-[14px] lg:text-[16px] mr-24 lg:mr-28 mt-[-1rem] lg:mt-[-2rem] leading-[2.2rem]`}
                >
                  Invite Others
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className} font-extralight text-justify text-text_color leading-[1.5rem] text-[12px] lg:text-[14px] w-[79%]`}
                  >
                    Hello! You can invite your Landlord, tenants or neighbours
                    and make it even more fun! 🌟 Simply tap on the “Invite
                    Others” to share the app with them.{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                      onClick={() => setOpenInviteModal(true)}
                    >
                      Click to Invite Others
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {matches ? (
        <div className="w-full lg:h-[140px] h-[350px] md:h-[270px] md:py-6 rounded-[1rem] px-4 mt-6 shadow-sm bg-[#FFF] flex flex-col justify-center">
          <div className="flex items-center mb-2 justify-between">
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[15px]`}
            >
              Listed Properties
            </p>
            <div
              className="flex items-center"
              onClick={() => setOpenAddPropertyModal(true)}
            >
              <CgPlayListAdd className="text-address text-[14px]" />
              <p
                className={`${Lora.className} text-address text-[12px] font-extralight`}
              >
                Add
              </p>
            </div>
          </div>
          <div className=" lg:flex-row flex flex-wrap lg:gap-[1%] gap-[3%] sm:flex-row md:flex-row md:gap-[3%] gap-y-[1rem] md:gap-y-[1rem] md:flex-wrap lg:flex-nowrap">
            <div className="lg:w-[23%] w-[45%] md:w-[40%]">
              <TenancyCard
                title="Tenancy Location"
                location={
                  allTenancyDetails[0]?.property_details.propertyLocation ||
                  "nil"
                }
              />
            </div>
            <div className="lg:w-[15%] w-[45%] md:w-[25%]">
              <TenancyBox
                name="Active Tenancy"
                subtext={allTenancyDetails?.length || 0}
                add={
                  <div className="flex mt-4 items-center">
                    <CgPlayListAdd className="text-address text-[12px]" />
                    <p
                      className={`${Lora.className} text-address text-[10px] font-extralight`}
                    >
                      Add
                    </p>
                  </div>
                }
              />
            </div>
            <div className="lg:w-[15%] w-[45%] md:w-[25%]">
              <TenancyBox
                name="Next Rent Due Date"
                subtext={
                  allTenancyDetails[0]?.tenancy.nextDueDate || "DD/MM/YYYY"
                }
              />
            </div>
            <div className="lg:w-[15%] w-[45%] md:w-[40%]">
              <TenancyBox
                name="Tenancy Duration"
                subtext={
                  allTenancyDetails[0]?.tenancy.tenantDuration || "0 months"
                }
              />
            </div>
            <div className="lg:w-[15%] w-[45%] md:w-[25%]">
              <TenancyBox
                name="Next Rent Amount"
                subtext={`₦${formatCurrency(
                  allTenancyDetails[0]?.unit?.unitRent || 0.0
                )}`}
              />
            </div>
            <div className="lg:w-[15%] w-[45%] md:w-[25%]">
              <TenancyBox
                name="Landlord’s Name"
                subtext={`${allTenancyDetails[0]?.landlord_detail.firstName} 
                ${allTenancyDetails[0]?.landlord_detail.lastName}`}
              />
            </div>
          </div>
        </div>
      ) : (
        <MobileCards setOpenAddPropertyModal={setOpenAddPropertyModal} />
      )}
      <div className="w-full lg:h-[140px] h-[350px] md:h-[270px] md:py-6 rounded-[1rem] px-4 mt-6 shadow-sm bg-[#FFF] flex flex-col justify-center">
        {allProperties.length ? (
          <>
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[15px]`}
            >
              {" "}
              Properties
            </p>
            <div className=" flex-col lg:flex-row lg:flex lg:gap-[2%]">
              {allProperties.slice(0, 2).map((elem: any) => (
                <div className="lg:w-[45%]  lg: mt-0 mt-4 lg:max-w-[40%] w-[90%] md:w-[40%]">
                  <TenancyCard
                    title={elem?.propertyName}
                    location={elem.propertyLocation}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[15px]`}
          >
            No properties
          </p>
        )}
      </div>
      {openAddpropertyModal && (
        <AddProperty
          setOpenPropertyList={setOpenPropertyList}
          modalTitle="Add Property"
          setOpenAddPropertyModal={setOpenAddPropertyModal}
        />
      )}
    </DashboardLayout>
  );
};
export default Dashboard;
