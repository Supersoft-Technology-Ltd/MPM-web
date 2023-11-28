'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AmericanTypewriter, Lora, SpfRounded } from '../../../public/fonts';
import { Button } from '../../../public/components/button';
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Auth } from '../../../public/components/auth';
import { useRouter } from 'next/navigation';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Login = () => {
    const router = useRouter()
    return (
        <Auth>
            <div className='w-[70%] mx-[10%] bg-[#FFFFFF] h-auto my-[6%] px-[7%] py-6 rounded-[10px] shadow-sm'>
                <div className='flex flex-col items-center'>
                    <h3 className={`${Lora.className} font-semibold text-[25px] text-textBlack2`}>Welcome</h3>
                    <p className={`${Lora.className} font-light text-[13px] text-titleText`}>Login to your account</p>
                </div>
                <div className='flex flex-col pt-[2rem] gap-[20px]'>
                    <input type='text' name='text' placeholder='Enter email or mobile number' className={`${Lora.className}font-light w-full bg-lighterGrey h-[52px] rounded-[8px] pl-[1.5rem] text-[rgba(3, 3, 3, 1)] text-[13px]`} />
                    <input type='password' name='pass' placeholder='Enter password' className={`${Lora.className}font-light w-full bg-lighterGrey h-[52px] rounded-[8px] pl-[1.5rem] text-[rgba(3, 3, 3, 1)] text-[13px]`} />
                    <Button variant='submit' title='Login' />
                    <div className={`${Lora.className} font-light flex justify-between text-textBlack2`}>
                        <span className='flex text-[13px]'>Don’t have an account?<p className={`${Lora.className} pl-[2px] underline font-semibold cursor-pointer`} onClick={() => router.push('/register')}> Sign Up</p></span>
                        <p className='flex text-[13px] cursor-pointer' onClick={() => router.push('/forgot-password')}>Forgot password?</p>
                    </div>
                    <p className={`${Lora.className} font-light text-center text-[13px] pt-2 text-titleText`}>Login with social accounts</p>
                    <div className='flex justify-between w-[75%] mx-auto gap-[25px] pb-[1rem]'>
                        <div className='flex items-center justify-center h-[45px] px-[30px] bg-[#F3F4F5] shadow-sm rounded-[8px]'>
                            <AiOutlineGoogle className='text-colorRed' size={17} />
                            <p className={`${SpfRounded.className} font-light text-[12px] text-textBlack2`}>Google</p>
                        </div>
                        <div className='flex items-center justify-center h-[45px] px-[30px] bg-[#F3F4F5] shadow-sm rounded-[8px]'>
                            <FaFacebookF className='text-colorPrimary' size={16} />
                            <p className={`${SpfRounded.className} font-light text-[12px] text-textBlack2`}>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </Auth>
    )
}
export default Login;