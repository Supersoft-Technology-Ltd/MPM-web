import { useState } from "react";
import { Faqs } from "./faq";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Lora } from "../fonts";

export const Faq = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = (id: any) => {
    setVisible(id);
  };
  return (
    <div>
      <div>
        {Faqs.map((elem, id: any) => (
          <div key={id}>
            <div className="py-6">
              <div className="flex justify-between items-center">
                <p className={`${Lora.className} text-address font-light text-[14px]`}>{elem.question}</p>
                {visible !== id ? (
                  <div onClick={() => toggle(id)}>
                    <FaAngleUp size={12} color="black" />
                    <FaAngleDown size={12} color="black"/>
                  </div>
                ) : (
                  <div onClick={() => setVisible(!visible)}>
                    <p className={`${Lora.className} underline text-[12px] text-address font-light`}>Close</p>
                  </div>
                )}
              </div>
              {visible === id ? <p className={`${Lora.className} py-4 text-address font-light text-[14px]`}>{elem.answer}</p> : null}
            </div>
            <div className="border-b-[0.03px] border-[rgba(0, 0, 0, 0.16)" />
          </div>
        ))}
      </div>
    </div>
  );
};
