"use client";

import React, { ComponentProps, InputHTMLAttributes } from "react";
import { Lora, AmericanTypewriter } from "../fonts";
import "react-phone-number-input/style.css";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import countryNames from "react-phone-number-input/locale/en";
import { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

type InputProps = {
  type: string;
  err?: boolean;
  errMsg?: string;
  placeholder: string;
  name: string;
  fontFamily?: string;
};
export const Inputs: React.FC<
  InputHTMLAttributes<HTMLInputElement> & InputProps
> = ({ type, placeholder, name, fontFamily, err, errMsg, ...props }) => {
  return (
    <>
      <input
        className={`${Lora.className} font-light w-full border-0 outline-none bg-lighterGrey h-[50px] rounded-[8px] pl-[1.5rem] text-textBlack2 text-[14px]`}
        type={type}
        name={name}
        placeholder={placeholder}
        style={{ fontFamily: fontFamily }}
        {...props}
      />
      {err && (
        <p
          className={`${Lora.className} font-extralight text-colorRed text-[10px]`}
        >
          {errMsg}
        </p>
      )}
    </>
  );
};

type phoneInputProps = {
  err?: boolean;
  errMsg?: string;
  placeholder: string;
  fontFamily?: string;
} & Partial<ComponentProps<typeof Input>>;
export function NumberInput({
  err,
  errMsg,
  placeholder,
  fontFamily,
  ...otherProps
}: phoneInputProps) {
  // Outputs: [AC, AD, AE, ...]
  console.log(getCountries());
  const [value, setValue] = useState<string>();
  // Outputs: United States
  console.log(countryNames["US"]);

  // Outputs: +1
  console.log("+", getCountryCallingCode("NG"));

  return (
    <>
      <div className={`${Lora.className} text-textBlack2 flex rounded-[8px]`}>
        <p
          className={`${AmericanTypewriter.className} font-light text-[15px] bg-[#C8C8C9] px-2 flex items-center py-[.9rem] text-center rounded-t-[8px] rounded-br-[4px] rounded-tr-[4px] rounded-l-[8px]`}
        >
          +{getCountryCallingCode("NG")}{" "}
          <LiaAngleDownSolid size={18} className="font-bold pl-[.4rem]" />
        </p>
        <Input
          className="w-full bg-lighterGrey h-[52px] rounded-t-[8px] rounded-r-[8px] rounded-tl-[0px] pl-[1.5rem] text-textBlack2 font-light text-[14px] border-0 outline-none"
          international
          country="NG"
          value={value}
          onChange={(value) =>  otherProps.onChange && otherProps.onChange(value)}
          {...otherProps}
        />
      </div>
      {err && (
        <p
          className={`${Lora.className} font-extralight text-colorRed text-[10px]`}
        >
          {errMsg}
        </p>
      )}
    </>
  );
}
