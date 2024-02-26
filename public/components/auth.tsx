"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineGoogle, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AmericanTypewriter, Lora, SpfRounded } from "../fonts";
import { Button } from "./button";
import { ReactNode } from "react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Auth = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-hero-pattern w-full h-full bg-center bg-cover bg-container">
      <div className="bg-container border-[1px] h-[95px] flex items-center pl-12">
        <img
          src="/assets/MPM logo.png"
          alt=""
          className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] object-contain"
        />
      </div>
      <div className="w-full flex lg:items-start items-center pb-2">
        <div className="lg:w-[46.5%] w-[0%] h-full lg:pl-[3.5%]">
          <Carousel
            responsive={responsive}
            showDots={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={1000}
          >
            <div className="w-[80%]">
              <img src="/assets/1st.png" className="w-[90%]" />
              <h2
                className={`${AmericanTypewriter.className} font-semibold text-[27px] text-textGrey leading-[33px]`}
              >
                Enhancing Your Rental
                <br /> Experience
              </h2>
              <p
                className={`${Lora.className} font-light text-[15px] leading-[30px] pb-[40px] text-textBlack2`}
              >
                Efficiently Streamlined Platform for Landlords and Tenants …
              </p>
            </div>
            <div className="w-[80%]">
              <img src="/assets/2nd.png" className="w-[77%] h-[40%] mt-[13%]" />
              <h2
                className={`${AmericanTypewriter.className} font-semibold text-[27px] text-textGrey leading-[33px]`}
              >
                Property Management Made <br /> Easy
              </h2>
              <p
                className={`${Lora.className} font-light text-[15px] leading-[30px] pb-[40px] text-textBlack2`}
              >
                Simplify Administration and Management of your Properties …
              </p>
            </div>
            <div className="w-[80%]">
              <img src="/assets/3rd.png" className="w-[77%] h-[40%] mt-[15%]" />
              <h2
                className={`${AmericanTypewriter.className} font-semibold text-[27px] text-textGrey leading-[33px]`}
              >
                Effortless Documentation <br /> Management
              </h2>
              <p
                className={`${Lora.className} font-light text-[15px] leading-[30px] pb-[40px] text-textBlack2`}
              >
                Organize, Access, and Secure Your Property Records …
              </p>
            </div>
          </Carousel>
        </div>
        <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto">{children}</div>
      </div>
      <span
        className={`${Lora.className} flex justify-center lg:justify-center items-start lg:items-center text-[#B9B4B4] text-[10px] lg:text-[14px] pb-2`}
      >
        <AiOutlineCopyrightCircle />
        <p>
          2023 SuperSoft Technology , All Right Reserved | Legal | Privacy |
          Contact US
        </p>
      </span>
    </div>
  );
};
