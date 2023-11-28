'use client'

import { Auth } from "../../../public/components/auth";
import { Lora} from "../../../public/fonts";
import { Button } from "../../../public/components/button";
import { Inputs, NumberInput } from "../../../public/components/input";
import { StatusSelect } from "../../../public/components/select";
import { SuccessModal } from "../../../public/components/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Success } from "../../../public/components/modal/success";

const Register = () => {
    const options = [
        {
            label: 'Landlord',
            value: 1
        },
        {
            label: 'Tenant',
            value: 1
        },

    ]
    const router = useRouter()
    const [open, setOpen] = useState(false)
    return (
        <Auth>
            <div className='w-[70%] mx-[10%] bg-[#FFFFFF] h-auto my-[6%] px-[7%] py-6 rounded-[10px] shadow-sm'>
                <div className='flex flex-col items-center'>
                    <h3 className={`${Lora.className} font-semibold text-[24px] text-textBlack2`}>Sign Up</h3>
                    <p className={`${Lora.className} font-light text-[13px] text-titleText`}>Enter sign up details</p>
                </div>
                <div className='flex flex-col pt-[2rem] gap-[18px]'>
                    <Inputs type="text" name="firstname" placeholder="Firstname" />
                    <Inputs type="text" name="lastname" placeholder="Lastname" />
                    <NumberInput />
                    <Inputs type="text" name="email" placeholder="Email ID" />
                    <Inputs type="password" name="password" placeholder="Password" />
                    <StatusSelect
                        placeholder='Select Status'
                        options={options} />
                    <p className={`${Lora.className} font-extralight text-center text-[12px] text-textBlack2`}>
                        By clicking <u>Sign up</u> you agree to the following <u>Term and Conditions</u> without reservation.
                    </p>
                    <Button variant="submit" onClick={() => setOpen(true)} title='Sign Up' />
                    <div className={`${Lora.className} font-light flex justify-between text-textBlack2 pt-[-2rem]`}>
                        <span className='flex text-[13px]'>Already have an account?<p className={`${Lora.className} pl-[2px] underline font-semibold cursor-pointer`} onClick={() => router.push('/login')}> Sign In</p></span>
                    </div>
                </div>
            </div>
            { open &&
                <Success title="Account created"
                text={`Your account has \n successfully been created`}
                subtext="Kindly login to access your MPM profile" />
            }
        </Auth>
    )
}
export default Register;