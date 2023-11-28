import { SuccessModal } from "."
import { Lora, Raleway } from "../../fonts"
import { Button } from "../button"
import { useRouter } from "next/navigation"
import { Inputs } from "../input"
import { useState } from "react"
import { Success } from "./success"

export const EnterPassword = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    return (
        <SuccessModal>
            <h1 className={`${Lora.className} text-[25px] text-textBlack2 font-normal `}>Enter New Password</h1>
            <p className={`${Lora.className} font-light text-[14px] px-[6rem] text-center text-titleText mt-4`}>Kindly enter new password</p>
            <div className="w-[75%] mx-auto mt-8">
                <Inputs name="new" type="password" placeholder="Enter New Password" />
            </div>
                <div className="mt-6 w-[75%] mx-auto">
                    <Inputs name="confirm" type="password" placeholder="Confirm New Password" />
                </div>
            <div className="w-[75%] mx-auto mt-12">
                <Button variant="submit" title="Set Password" onClick={() => setOpen(true)}></Button>
            </div>
            {
                open && 
                <Success 
                title="New Password Set"
                text={`You have successfully setup\n your new password.`} 
                subtext="Kindly login to access your MPM profile."
                />
            }
        </SuccessModal>
    )
}