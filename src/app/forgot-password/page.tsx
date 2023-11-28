'use client'
import { Auth } from "../../../public/components/auth"
import { Lora } from "../../../public/fonts"
import { Inputs, NumberInput } from "../../../public/components/input"
import { Button } from "../../../public/components/button"
import { ResetPassword } from "../../../public/components/modal/reset-password"
import { useState } from "react"

const ForgotPassword = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <Auth>
            <div className='w-[65%] mx-[10%] bg-[#FFFFFF] h-auto my-[6%] px-[7%] py-8 rounded-[10px] shadow-sm'>
                <div className='flex flex-col items-center'>
                    <h3 className={`${Lora.className} font-semibold text-[24px] text-textBlack2`}>Forgot Password</h3>
                    <p className={`${Lora.className} font-light text-[12px] mt-[.2rem] text-titleText text-center`}>Please enter your email address, You will<br /> receive a password reset PIN.</p>
                </div>
                <div className='flex flex-col pt-[2rem] gap-[23px]'>
                    <Inputs type="text" name="email" placeholder="Email ID" />
                    <Button
                        variant="submit"
                        onClick={() => setOpenModal(true)}
                        title='Send Reset PIN'
                    />
                    <Button
                        variant="cancel"
                        title='Cancel'
                    />
                </div>
            </div>
            {openModal &&
                <ResetPassword />
            }
        </Auth>
    )
}
export default ForgotPassword;