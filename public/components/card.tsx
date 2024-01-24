"use client";

import { Lora } from "../fonts";

type details = {
  name: string;
  amount: string;
  img: string;
};
const Details: details[] = [
  {
    name: "Total Inflow",
    amount: "₦5,000,000",
    img: "/assets/inflow icon.png",
  },
  {
    name: "Total Outflow",
    amount: "₦5,000,000",
    img: "/assets/outflow icon.png",
  },
  {
    name: "Transactions Count",
    amount: "56",
    img: "/assets/counter.png",
  },
];

export const Cards = () => {
  return (
    <div className="flex justify-between items-center gap-[1rem] w-full">
      {Details.map((elem, id) => (
        <div className="bg-white w-full h-[110px] shadow-th rounded-[13px] flex items-center justify-start py-2 px-2">
          <div className="w-[45px] h-[40px]">
            <img src={elem.img} className="w-full h-full object-center object-contain" />
          </div>
          <div className={id === 2 ? "flex flex-col items-center ml-2" : "flex flex-col items-center ml-8"}>
            <h5 className={`${Lora.className} font-extralight text-[14px] text-shadowText`}>{elem.name}</h5>
            <p className={`${Lora.className} font-extralight text-shadowText text-[10px]`}>{`{last 60 days}`}</p>
            <h4 className={`${Lora.className} font-semibold mt-2 text-[13px] text-text_color2`}>{elem.amount}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
