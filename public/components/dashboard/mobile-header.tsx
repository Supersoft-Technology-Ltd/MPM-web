import { MdMenu } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Lora } from "../../fonts";
import { useAppSelector } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { Dispatch, SetStateAction } from "react";

type props = {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};
export const MobileHeader = ({ setOpenDrawer }: props) => {
  const user = useAppSelector(useSelectCurrentUser);
  return (
    <div className="w-[100%] shadow-sh z-10 fixed lg:left-[17.5%] md:left-[22%] flex justify-between items-center px-6 top-0 h-[95px] bg-[#FFFFFF] border-b border-border_color">
      <div className="w-full flex justify-start items-center pl-[-1rem]">
        <div onClick={() => setOpenDrawer(true)}>
          <MdMenu size={24} />
        </div>
        <img
          src="/assets/MPM logo.png"
          className="object-center w-[60px] h-[60px] object-contain"
        />
      </div>
      <div className="flex lg:items-center justify-end w-full">
        <div className="flex flex-col justify-center items-center lg:mr-20 mr-8">
          <img
            src="/assets/active-notification.png"
            alt=""
            className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-center object-contain"
          />
        
        </div>
        <div className="flex items-center">
          <div className="bg-[#EAEAEA] lg:w-[52px] w-[40px] h-[40px] mr-2 lg:h-[52px] border border-[#2C5AA3] flex justify-center items-center rounded-[50%]">
            <p
              className={`${Lora.className} uppercase font-light lg:text-[21px] text-[16px] text-textBlack2`}
            >
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </p>
          </div>
        
          <div className="text-[#9C9C9C] text-[12px] font-normal ml-2">
            <LiaAngleDownSolid />
          </div>
        </div>
      </div>
    </div>
  );
};
