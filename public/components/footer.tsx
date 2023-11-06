import { BiCopyright } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { PiTwitterLogoDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="w-full lg:h-[400px] h-[100%] bg-[#F0F0F0] mt-[7rem] flex flex-col justify-between">
            <div className=" lg:flex justify-between py-10 lg:px-[5rem] px-[3rem] lg:h-[300px] gap-[1rem] h-full">
                <div className="lg:w-[35%] w-[100%] flex flex-col justify-start items-start">
                    <img src='/assets/MPM logo.png' alt='' className="lg:w-[200px] w-[100px] h-auto object-center object-cover" />
                    <div className="lg:flex justify-start">
                        <img src="/assets/appstore.png" className="w-[300px] object-cover object-center lg:ml-[-4rem] ml-[-4rem]" />
                        <img src="/assets/playstore.png" className="w-[210px] h-auto ml-[-2rem] object-contain object-center" />
                    </div>
                </div>
                <div className='lg:w-[60%] w-[100%] flex-wrap flex gap-[1rem] justify-between '>
                    <div>
                        <h6 className="text-textBlack font-normal text-[1.1rem]">Privacy Policies</h6>
                        <Link href={'/terms'} className="text-textBlack mt-[.5rem] text-[.8rem] font-extralight">Terms & conditions</Link>
                    </div>
                    <div>
                        <h6 className="text-textBlack font-normal text-[1.1rem]"> Our Company</h6>
                        <p className="text-textBlack mt-[.5rem] text-[.8rem] font-extralight">Blog</p>
                        <p className="text-textBlack mt-[.2rem] text-[.8rem] font-extralight">About Us</p>
                        <p className="text-textBlack mt-[.2rem] text-[.8rem] font-extralight">Careers</p>
                        <p className="text-textBlack mt-[.2rem] text-[.8rem] font-extralight">FAQs</p>
                    </div>
                    <div>
                        <h6 className="text-textBlack font-normal text-[1.1rem]">Our Products</h6>
                        <p className="text-textBlack mt-[.5rem] text-[.8rem] font-extralight">Download our app</p>
                        <p className="text-textBlack mt-[.2rem] text-[.8rem] font-extralight">Manage Tenancy</p>
                        <p className="text-textBlack mt-[.2rem] text-[.8rem] font-extralight">Manage properties</p>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-black-500 bg-[#000] mt-2 h-[100px] flex justify-between items-center px-4 lg:px-12">
                <div className='flex items-center'>
                    <BiCopyright fill='#C8C8C9' />
                    <p className='ml-2 text-[#C8C8C9] text-[.8rem]'>2023 All Rights Reserved.</p>
                </div>
                <div className='flex'>
                    <FiFacebook color='#3b5998' size={26} />
                    <PiInstagramLogoDuotone size={26} className='ml-2' fill='#c32aa3' />
                    <PiTwitterLogoDuotone size={26} fill='#1da1f2' className='ml-2' />
                    <PiLinkedinLogoDuotone size={26} fill='#0a66c2' className='ml-2' />
                </div>
            </div>
        </div>
    )
}