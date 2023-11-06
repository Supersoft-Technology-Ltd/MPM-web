'use-client'
import Image from 'next/image'
import { Layout } from '../../public/components/layout'
import { PiLightningDuotone, PiCoinsDuotone, PiHandsClapping } from 'react-icons/pi'
import { FaSlidersH } from 'react-icons/fa';
import { BsCash } from 'react-icons/bs'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Layout>
        <div className='w-[93%] mx-auto lg:mt-12 mt-8 lg:h-[550px] h-[400px] md:h-[450px] bg-blue flex justify-between'>
          <div className=' px-8 lg:py-[8rem] py-[4rem]'>
            <h4 className='text-[#FFF] lg:text-[2.8rem] text-[2rem] font-medium leading-[2.5rem] lg:leading-[3.7rem]'>Property Management<br /> Made easy</h4>
            <p className='mt-[1rem] text-greyWhite text-[1rem]'>Simplify Administration and Management of your Properties</p>
            <button className='bg-colorPrimary text-colorPrimary px-[2rem] py-[1rem] mt-12 rounded font-normal'>
              <Link href={'/contact'}> Contact Us</Link>
            </button>
          </div>
          <img src='/assets/house.jpg' className='lg:w-[45%] w-[0%] md:w-[45%] h-auto object-center object-cover' alt='' />
        </div>
        <div className='lg:flex lg:w-[90%] w-[50%] mx-auto my-12 pb-2rem justify-between'>
          <div className='flex mt-8 lg:mt-0 flex-col items-center justify-center'>
            <PiLightningDuotone fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Effortless Property Management</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Streamlined record-keeping and rent collection</p>
          </div>
          <div className='flex flex-col mt-8 lg:mt-0 items-center justify-center'>
            <FaSlidersH fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Centralized Property Control</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Manage multiple properties all from one centralized dashboard</p>
          </div>
          <div className='flex flex-col mt-8 lg:mt-0 items-center justify-center sm:mt-8'>
            <PiCoinsDuotone fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Simplify Rent Payments</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Streamlined record-keeping and ent collection</p>
          </div>
          <div className='flex flex-col mt-8 lg:mt-0 items-center justify-center sm:mt-8'>
            <PiHandsClapping fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Unbeatable Service</h4>
            <p className='text-textLightGrey text-[12px] text-center'>We provide you the best platform to manage your properties </p>
          </div>
        </div>
        <div className='w-[82%] mx-auto lg:mt-[-4rem] mt-[2rem]'>
          <div className='lg:flex lg:justify-between pb-[3rem] pt-[2rem]'>
            <div className='lg:w-[50%] lg:mt-[8rem] w-full'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[60%] md:w-[45%] lg: w-[36%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-8 lg:pt-8 font-medium tracking-wide lg:text-[30px] text-[25px] leading-[1rem] lg:leading-[1.5rem]'>Effortless Property</h4>
              <h4 className='text-darkText pt-2 lg: pt-4 font-medium tracking-wide lg:text-[30px] text-[25px] lg:leading-[2.4rem] leading-[2rem]'> Management at Your Fingertips</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Simplify the administration and management of your properties with our
                user-friendly and feature-rich platform. Whether you're a landlord, tenant,
                or property manager, our app
                streamlines your property-related tasks, making property management a breeze.</p>
            </div>
            <img src='/assets/1st.png' className='lg:w-[48%] w-[80%] h-full object-center object-cover' />
          </div>
          <div className='lg:flex lg:justify-between pb-[3rem]'>
            <img src='/assets/2nd.png' className='lg:w-[42%] w-[80%] h-full object-center object-cover' />
            <div className='lg:w-[50%] lg:mt-[8rem] w-full'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[60%] md:w-[45%] lg: w-[36%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-4 lg:pt-4 font-medium tracking-wide lg:text-[32px] text-[25px] lg:leading-[2.4rem] leading-[2rem]'>Enhancing Your <br />Rental Experience</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Discover the advantages of MYPROPSMANAGER.COM, where we offer an
                efficiently streamlined platform designed to cater to the needs
                of both landlords and tenants. Our commitment to enhancing your rental experience sets us apart.</p>
            </div>

          </div>
          <div className='lg:flex lg:justify-between'>
            <div className='lg:w-[50%] lg:mt-[8rem] w-full'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[60%] md:w-[45%] lg: w-[36%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-8 lg:pt-8 font-medium tracking-wide lg:text-[32px] text-[25px] leading-[1rem] lg:leading-[2rem]'>Effortless</h4>
              <h4 className='text-darkText pt-2 lg: pt-4 font-medium tracking-wide lg:text-[32px] text-[25px] lg:leading-[1rem] leading-[2rem]'>Documentation Management</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Effortlessly Organize, Conveniently Access, and Securely Manage Your Property Records on Our Platform</p>
            </div>
            <img src='/assets/3rd.png' className='lg:w-[40%] w-[80%] h-full object-center object-cover' />
          </div>
        </div>
      </Layout>
    </div>
  )
}
