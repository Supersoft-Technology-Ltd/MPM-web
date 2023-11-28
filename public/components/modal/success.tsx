import { SuccessModal } from "./"
import { Lora, Raleway } from "../../fonts"
import { Button } from "../button"
import { useRouter } from "next/navigation"
import React from "react"


type props = {
    title: string,
    text?: string,
    subtext?: string,

}
export const Success:React.FC<props> = ({text, title, subtext}) => {
    const router = useRouter()
    return (
        <SuccessModal>
            <h1 className={`${Lora.className} text-[25px] font-normal text-textBlack2 `}>{title}</h1>
            <img src="/assets/success.svg" className="w-[22%] mt-8" />
            <p className={`${Raleway.className} w-[55%] mx-auto font-extralight text-[18px] text-center text-textBlack2`}>{text}</p>
            <p className={`${Raleway.className} font-extralight text-[12px] pt-4 text-textBlack2`}>{subtext}</p>
            <div className="w-[70%] mx-auto mt-12">
                <Button variant="submit" title="Login" onClick={() => router.push('/login')}></Button>
            </div>
        </SuccessModal>
    )
}