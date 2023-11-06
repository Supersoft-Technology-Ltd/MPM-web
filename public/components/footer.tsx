import { BiCopyright } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { PiTwitterLogoDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="w-full h-[400px] bg-[#F0F0F0] mt-[7rem] flex flex-col justify-between">
            <div className=" flex justify-between  py-10 px-[5rem] h-[300px]">
                <div className="w-[35%] flex flex-col justify-start items-start">
                    <img src='/assets/MPM logo.png' alt='' className="w-[200px] object-center object-cover" />
                    <div className="flex justify-start">
                        <img src="/assets/appstore.png" className="w-[300px] object-cover object-center ml-[-4rem]" />
                        <img src="/assets/playstore.png" className="w-[220px] ml-[-2rem] object-contain object-center" />
                    </div>
                </div>
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
            <div className="border-t-[1px] border-black-500 bg-[#000] mt-2 h-[100px] flex justify-between items-center px-12">
                <div className='flex items-center'>
                    <BiCopyright fill='#C8C8C9' />
                    <p className='ml-2 text-[#C8C8C9] text-[.8rem]'>2023 All Rights Reserved.</p>
                </div>
                <div className='flex'>
                    <FiFacebook color='#3b5998' size={30} />
                    <PiInstagramLogoDuotone size={30} className='ml-2' fill='#c32aa3' />
                    <PiTwitterLogoDuotone size={30} fill='#1da1f2' className='ml-2'/>
                    <PiLinkedinLogoDuotone size={30} fill='#0a66c2' className='ml-2'/>
                </div>
            </div>
        </div>
    )
}