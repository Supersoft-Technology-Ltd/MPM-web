"use client";

import Link from "next/link";
import { useMediaQuery } from "../hooks/usemediaquery";
import { MdMenu } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
export const Header = () => {
  const matches = useMediaQuery("(min-width: 500px)");
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef()
  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        setShow(false)
      },
      true
    );
  }, []);
  return (
    <>
      {matches ? (
        <div className="flex justify-between items-center w-full h-24 bg-backgroundColour lg:p-10 p-[1.2rem] border-[1px] border-gray-300">
          <Link href={"/"}>
            <img
              src="/assets/MPM logo.png"
              alt=""
              className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] object-contain"
            />
          </Link>
          <div className="flex items-center">
            <Link
              href={"/login"}
              className="lg:h-[50px] px-8 py-4 bg-blue text-[#FFF] mr-8 rounded-[5px]"
            >
              Get started
            </Link>
            <p className="text-colorPrimary mr-8 font-normal lg:text-[.9rem] text-[.75rem]">
              About Us
            </p>
            <Link
              href={"/contact"}
              className="text-colorPrimary lg:text-[.9rem] text-[.75rem]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full h-24 bg-backgroundColour lg:p-10 p-[1.2rem] border-[1px] border-gray-300">
          <Link href={"/"}>
            <img
              src="/assets/MPM logo.png"
              alt=""
              className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] object-contain"
            />
          </Link>
          <div onClick={() => setShow(!show)}>
            <MdMenu />
          </div>
          {show && (
            <div className="flex flex-col px-4 gap-2 justify-centerr absolute top-[6rem] h-auto py-4 bg-[#FFF] shadow-sm w-full left-0 items-start">
              <p className="text-colorPrimary mr-8 font-normal lg:text-[.9rem] text-[.75rem]">
                About Us
              </p>
              <Link
                href={"/contact"}
                className="text-colorPrimary lg:text-[.9rem] text-[.75rem]"
              >
                Contact Us
              </Link>
              <Link
                href={"/login"}
                className="text-colorPrimary lg:text-[.9rem] text-[.75rem] font-normal mr-8 rounded-[5px]"
              >
                Get started
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
