import React from "react";
import { AmericanTypewriter } from "../fonts";
type props = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "submit" | "cancel" | "outlined";
  disabled?: boolean
};
export const Button: React.FC<props> = ({ title, onClick, variant, disabled = false }) => {
  return (
    <div>
      {variant === "submit" ? (
        <button
          className={`${AmericanTypewriter.className} w-full bg-[#0041A0] text-[12px] md:text-[14px] lg:text-[16px] text-[#FFF] rounded-[15px] h-[45px] md:h-[50px] lg:h-[55px]`}
          onClick={onClick}
          disabled={disabled}
        >
          {title}
        </button>
      ) : variant === "cancel" ? (
        <button
          className={`${AmericanTypewriter.className} w-full bg-white border-[#EB212D] border text-[12px] md:text-[14px] lg:text-[16px] text-[#EB212D] rounded-[15px] h-[45px] md:h-[50px] lg:h-[55px]`}
          onClick={onClick}
        >
          {title}
        </button>
      ) : (
        // default case or any other variant
        <button
          className={`${AmericanTypewriter.className} w-full bg-white border-colorPrimary border text-[12px] md:text-[14px] lg:text-[16px] text-colorPrimary px-4 rounded-[15px] h-[45px] md:h-[50px] lg:h-[55px]`}
          onClick={onClick}
        >
          {title}
        </button>
      )}
    </div>
  );
};
