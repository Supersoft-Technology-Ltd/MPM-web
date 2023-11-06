import Image from 'next/image'
import { Layout } from '../../public/components/layout'
import { PiLightningDuotone, PiCoinsDuotone, PiHandsClapping } from 'react-icons/pi'
import { FaSlidersH } from 'react-icons/fa';
import { BsCash } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className='w-[93%] mx-auto mt-12 h-[550px] bg-blue flex justify-between'>
          <div className=' px-8 py-[8rem]'>
            <h4 className='text-[#FFF] text-[2.8rem] font-medium leading-[3.7rem]'>Property Management<br/> Made easy</h4>
            <p className='mt-[1rem] text-greyWhite text-[1rem]'>Simplify Administration and Management of your Properties …</p>
            <button className='bg-colorPrimary text-colorPrimary px-[2rem] py-[1rem] mt-12 rounded font-normal'>Contact Us</button>
          </div>
          <img src='/assets/house.jpg' className='w-[45%] h-auto object-center object-cover' alt='' />
        </div>
        <div className='flex w-[90%] mx-auto justify-between items-center my-12 pb-[2rem]'>
          <div className='flex flex-col items-center justify-center'>
            <PiLightningDuotone fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Effortless Property Management</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Streamlined record-keeping and rent collection</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <FaSlidersH fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Centralized Property Control</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Manage multiple properties all from one centralized dashboard</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <PiCoinsDuotone fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Simplify Rent Payments</h4>
            <p className='text-textLightGrey text-[12px] text-center'>Streamlined record-keeping and ent collection</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <PiHandsClapping fill='#0041A0' size={35} />
            <h4 className='text-darkText pt-4 font-normal tracking-wide text-center text-[14px]'>Unbeatable Service</h4>
            <p className='text-textLightGrey text-[12px] text-center'>We provide you the best platform to manage your properties </p>
          </div>
        </div>
        <div className='w-[80%] mx-auto'>
          <div className='flex justify-between'>
            <div className='w-[50%] mt-[8rem]'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[30%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-4 font-medium tracking-wide text-[32px] leading-[2.7rem]'>Effortless Property Management <br/>at Your Fingertips</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Simplify the administration and management of your properties with our
                user-friendly and feature-rich platform. Whether you're a landlord, tenant,
                or property manager, our app
                streamlines your property-related tasks, making property management a breeze.</p>
            </div>
            <img src='/assets/1st.png' className='w-[45%] h-full object-center object-cover'/>
          </div>
          <div className='flex justify-between'>
            <img src='/assets/2nd.png' className='w-[42%] h-full object-center object-cover' />
            <div className='w-[50%] mt-[8rem]'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[30%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-4 font-medium tracking-wide text-[32px] leading-[2.7rem]'>Enhancing Your Rental Experience</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Discover the advantages of MYPROPSMANAGER.COM, where we offer an
                efficiently streamlined platform designed to cater to the needs
                of both landlords and tenants. Our commitment to enhancing your rental experience sets us apart.</p>
            </div>

          </div>
          <div className='flex justify-between'>
            <div className='w-[50%] mt-[8rem]'>
              <p className='px-[.5rem] py-[.7rem] bg-[#ced4f3] bg-opacity[0.8] w-[30%] text-colorPrimary text-[11px] font-normal tracking-wider text-center'>WHY MYPROPSMANAGER?</p>
              <h4 className='text-darkText pt-4 font-medium tracking-wide text-[32px] leading-[2.7rem]'>Effortless Documentation Management</h4>
              <p className='mt-[1rem] text-textLightGrey text-[.85rem] leading-[1.3rem]'>Effortlessly Organize, Conveniently Access, and Securely Manage Your Property Records on Our Platform</p>
            </div>
            <img src='/assets/3rd.png' className='w-[40%] h-full object-center object-cover'/>
          </div>
        </div>
      </Layout>
    </div>
  )
}
