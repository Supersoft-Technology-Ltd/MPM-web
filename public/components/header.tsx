'use-client'

import Link from 'next/link'
import logo from '../assets/MPM logo.png'
import Image from 'next/image'

export const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-24 bg-backgroundColour lg:p-10 p-[1.2rem] border-[1px] border-gray-300'>
            <Link href={'/'}>
                <img src='/assets/MPM logo.png' alt='' className='lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] object-contain' />
            </Link>
            <div className='flex items-center'>
                <p className='text-colorPrimary mr-8 font-normal lg:text-[.9rem] text-[.75rem]'>About Us</p>
                <Link href={'/contact'} className='text-colorPrimary lg:text-[.9rem] text-[.75rem]'>Contact Us</Link>
            </div>
        </div>
    )
}