import { ImLocation2 } from "react-icons/im";
import { Lora } from "../fonts";
import { ReactNode } from "react";

type Locationprops = {
  location: string;
  title: string;
};
export const TenancyCard = ({ location, title }: Locationprops) => {
  return (
    <div className="w-full lg:h-[70px] h-[95px] md:h-[90px] py-2 border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] flex items-center justify-start px-2">
      <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
        <ImLocation2 color="#EB212D" size={19} />
      </div>
      <div className="ml-4">
        <p className={`${Lora.className} font-light text-darkText text-[12px]`}>
          {title}
        </p>
        <p
          className={`${Lora.className} font-light text-address text-[13px] mt-2`}
        >
          {location}
        </p>
      </div>
    </div>
  );
};

type props = {
  name: string;
  subtext: string;
  add?: ReactNode;
};
export const TenancyBox = ({ name, subtext, add }: props) => {
  return (
    <div className="w-full lg:h-[70px] h-[95px] md:h-[90px] border border-[rgba(0, 65, 160, 0.3)] cursor-pointer rounded-[1rem] py-2 px-2">
      <div className="flex justify-between items-center">
        <p className={`${Lora.className} font-light text-darkText text-[12px]`}>
          {name}
        </p>
        <input type="radio" />
      </div>
      <div className="flex justify-between items-center">
        <p
          className={`${Lora.className} font-light text-[#000B22] text-[14px] mt-2`}
        >
          {subtext}
        </p>
        {add}
      </div>
    </div>
  );
};
