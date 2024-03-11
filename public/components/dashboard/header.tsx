import { Inputs } from "../input";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Lora } from "../../fonts";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { Button } from "../button";
import { setCurrentUser } from "@/redux/reducers/auth";
import { useRouter } from "next/navigation";

export const DashboardHeader = () => {
  const user = useAppSelector(useSelectCurrentUser);
  const [show, setShow] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const dispatch = useAppThunkDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setCurrentUser({}));
    router.push("/login");
  };
  return (
    <>
      <div className="lg:w-[82.5%] md:w-[78%] w-[100%] left-0 shadow-sh z-10 fixed lg:left-[17.5%] md:left-[22%] flex justify-between items-center px-12 top-0 h-[115px] bg-[#FFFFFF] border-b border-border_color">
        <div className="lg:w-[40%] lg:block hidden">
          <Inputs
            placeholder="Enter address to search property"
            name="payment"
            type="text"
          />
        </div>
        <div className="flex lg:items-center justify-end w-full">
          <div className="flex flex-col justify-center items-center lg:mr-20 mr-10">
            <img
              src="/assets/active-notification.png"
              alt=""
              className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-center object-contain"
            />
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
            >
              Notifications
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#EAEAEA] lg:w-[52px] w-[40px] h-[40px] mr-6 lg:h-[52px] border border-[#2C5AA3] flex justify-center items-center rounded-[50%]">
              <p
                className={`${Lora.className} uppercase font-light lg:text-[21px] text-[16px] text-textBlack2`}
              >
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </p>
            </div>
            <div>
              <h5
                className={`${Lora.className} font-normal capitalize text-textBlack2 text-[12px] lg:text-[14px]`}
              >
                {user?.firstName} {user?.lastName}
              </h5>
              <p
                className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
              >
                User ID: {user?.id}
              </p>
              <p
                className={`${Lora.className} font-light text-textBlack2 text-[11px]`}
              >
                {user?.email}
              </p>
            </div>
            <div
              className="text-[#9C9C9C] text-[12px] cursor-pointer font-normal ml-2"
              onClick={() => setShow(prev => !prev)}
            >
              <LiaAngleDownSolid />
            </div>
          </div>
          {show && (
            <div className="bg-[#fff] gap-2 absolute top-[80%] w-[170px] h-[120px] pt-4  shadow-th">
              <div className="border-b-[0.3px] border-textInput">
                <div
                  className="flex items-center py-2 px-4 cursor-pointer"
                  onClick={() => {
                    setShowAlertModal(true);
                  }}
                >
                  <div className="text-[rgba(235, 33, 45, 1)]">
                    <GrLogout />
                  </div>
                  <p className="ml-4 text-[14px] text-address">Log out</p>
                </div>
              </div>
              <div className="border-b-[0.3px] border-textInput">
                <div className="flex items-center py-2 px-4 cursor-pointer">
                  <CgProfile />
                  <p className="ml-4 text-[14px] text-address">Profile</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showAlertModal && (
        <div className="fixed flex overflow-y-auto items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
          <div className="w-[30%] py-4 bg-[#FFF] flex flex-col justify-center mx-auto absolute top-[50%] left-[35%] py-4 px-4">
            <p className="text-center">Are you sure you want to log out?</p>
            <div className="flex items-center justify-center py-4 gap-2">
              <div className="w-[45%]">
                {" "}
                <Button
                  title="Cancel"
                  variant="cancel"
                  onClick={() => setShowAlertModal(false)}
                />
              </div>
              <div className="w-[45%]">
                {" "}
                <Button
                  title="Log out"
                  variant="outlined"
                  onClick={() => handleLogout()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
