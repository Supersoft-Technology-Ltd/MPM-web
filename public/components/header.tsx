'use-client'

import Link from 'next/link'
import logo from '../assets/MPM logo.png'
import Image from 'next/image'

export const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-24 bg-backgroundColour p-10 border-[1px] border-gray-300'>
            <Link href={'/'}>
                <Image src={logo} alt='' width={150} height={150} />
            </Link>
            <div className='flex items-center'>
                <p className='text-colorPrimary mr-8 font-normal'>About Us</p>
                <Link href={'/contact'} className='text-colorPrimary'>Contact Us</Link>
            </div>
        </div>
    )
}