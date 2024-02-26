import { FaHome, FaMailBulk, FaAngleRight } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { Lora } from "../../fonts";
import { useRouter, usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

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
type props = {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};
export const MobileSidebar = ({ setOpenDrawer }: props) => {
  const [active, setActive] = useState(1);
  const router = useRouter();
  const path = usePathname();
  const HandleActive = (id: number, page: string) => {
    router.push(page);
  };
  return (
    <div className="w-[45%] h-[100vh] fixed top-0 z-[200] bg-[#FFF]">
      <div className="flex justify-between items-center px-4 py-2">
        <img
          src="/assets/MPM logo.png"
          className="object-center w-[80px] h-[80px] object-contain"
        />
        <div onClick={() => setOpenDrawer(false)}>
          {" "}
          <IoCloseSharp color="red" />
        </div>
      </div>
      <div className="px-6 flex flex-col gap-[1.5rem]">
        {" "}
        {options.map((elem, id) => (
          <div
            onClick={() => HandleActive(id, elem.page)}
            className="flex gap-[1rem] justify-start items-center"
          >
            <div>{elem.icon}</div>
            <p className="text-darkText3">{elem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
