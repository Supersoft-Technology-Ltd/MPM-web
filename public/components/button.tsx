import React from "react"
import { AmericanTypewriter } from "../fonts"
type props = {
    title: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'submit' | 'cancel'
}
export const Button: React.FC<props> = ({ title, onClick, variant }) => {
    return (
        <div>
            {
                variant === 'submit' ?
                    <button className={`${AmericanTypewriter.className} w-full bg-[#0041A0] text-[17px] text-[#FFF] rounded-[15px] h-[55px]`} onClick={onClick}>
                        {title}
                    </button>
                    :
                    <button className={`${AmericanTypewriter.className} w-full bg-white border-[#EB212D] border text-[16px] text-[#EB212D] rounded-[15px] h-[55px]`} onClick={onClick}>
                        {title}
                    </button>
            }

        </div>
    )
}