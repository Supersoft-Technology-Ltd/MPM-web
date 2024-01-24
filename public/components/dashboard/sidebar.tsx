"use client";

import { useEffect, useState } from "react";
import { FaHome, FaMailBulk, FaAngleRight } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { Lora } from "../../fonts";
import { useRouter, usePathname } from "next/navigation";

const options = [
  {
    title: "Home",
    icon: <FaHome />,
    id: 1,
    page: "/dashboard",
  },
  {
    title: "Payments",
    icon: <RiWallet3Line />,
    id: 2,
    page: "/payment",
  },
  {
    title: "Portfolio",
    icon: <FaMailBulk />,
    id: 3,
    page: "/portfolio",
  },
  {
    title: "More",
    icon: <AiOutlineAppstore />,
    id: 4,
    page: "",
  },
];
const Sidebar = () => {
  const [active, setActive] = useState(1);
  const router = useRouter();
  const path = usePathname();
  const HandleActive = (id: number, page: string) => {
    router.push(page);
  };

  useEffect(() => {
    if (path) {
      const id =
        options.findIndex((ele: any) => path?.includes(ele?.page)) || 0;
      setActive(id + 1);
    }
  }, [path]);

  return (
    <div className="w-[17.5%] z-[1000] bg-container shadow-sh fixed border-border_color h-full top-0 left-0">
      <div className="w-full h-[115px] border-b border-border_color bg-[#FFFFFF] flex justify-center items-center">
        <img
          src="/assets/MPM logo.png"
          className="object-center object-contain w-[50%]"
        />
      </div>
      <div className="border-b border-border_color py-10 px-8" />
      <div>
        {options.map((option) => (
          <div
            className={
              active === option.id
                ? "flex justify-between cursor-pointer items-center pl-8 p-6 bg-[#F5F7F9] w-full border-b border-border_color"
                : "flex cursor-pointer justify-between items-center pl-8 p-6 w-full border-b border-border_color"
            }
          >
            <div
              key={option.id}
              onClick={() => HandleActive(option.id, option.page)}
              className="w-full flex items-center justify-start"
            >
              <div
                className={
                  active === option.id
                    ? "text-colorPrimary text-[22px] font-medium"
                    : "text-#B0B3BA text-[22px]"
                }
              >
                {option.icon}
              </div>
              <p
                className={
                  active === option.id
                    ? `${Lora.className} font-medium text-[15px] text-colorPrimary pl-4`
                    : `${Lora.className} font-light text-[14px] text-textBlack2 pl-4`
                }
              >
                {option.title}
              </p>
            </div>
            {option.id !== 1 && (
              <div>
                <FaAngleRight
                  color={active === option.id ? "#0041A0" : "#707070"}
                  size={18}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
