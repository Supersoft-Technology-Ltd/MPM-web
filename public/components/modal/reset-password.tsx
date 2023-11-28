'use client'
import { Lora, Raleway } from "../../fonts"
import { Button } from "../button"
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useRouter } from "next/navigation"
import Otp from "../otp-input"
import { SuccessModal } from "."
import { useState } from "react"
import { EnterPassword } from "./enter-pasword"

export const ResetPassword = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    return (
        <SuccessModal>
               <h1 className={`${Lora.className} text-[25px] text-textBlack2 font-normal `}>Reset Password</h1>
                <p className={`${Lora.className} font-light text-[14px] px-[6rem] text-center text-titleText mt-4`}>Please enter the password reset PIN sent to your email ID.</p>
                <Otp />
                <div className="w-[75%] mx-auto mt-12">
                    <Button variant="submit" title="Confirm" onClick={() => setOpen(true)}></Button>
                </div>
                <div className="w-[75%] mx-auto mt-6">
                    <Button variant="cancel" title="Cancel"></Button>
                </div>
                {open && 
                <EnterPassword />
                }
        </SuccessModal>
    )
}