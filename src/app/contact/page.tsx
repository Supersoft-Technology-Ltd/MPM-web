"use client";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { GoogleMap, Marker } from "react-google-maps";
import GoogleMapComponent from '../../../public/components/map'
import { Dispatch, FC, SetStateAction } from "react";
import { Layout } from "../../../public/components/layout";



const Modal = () => {
  return (
    <Layout>
      <div className="bg-white w-full h-fit py-10 lg:py-0 lg:h-[100vh] text-black">
        <div className="flex justify-end items-end w-full p-6">
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-between flex-col lg:flex-row items-center w-[90%] lg:max-w-[1400px]">
            <div className="flex justify-start mb-6 lg:mb-0 w-full lg:w-[47%] items-center gap-4">
              <div className="h-[40px] transition ease-in-out cursor-pointer duration-500 flex justify-center items-center w-[40px] border border-black rounded-[50%]">
               <img src="/assets/insta.png" className="w-[30px] h-[30px] object-center object-contain" />
              </div>
              <div className="h-[40px] transition ease-in-out cursor-pointer duration-500 flex justify-center items-center w-[40px] border border-black rounded-[50%]">
                <AiFillFacebook size={25} fill="#3b5998" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:w-[47%] justify-between items-start gap-6 lg:gap-0 lg:items-center">
              <div>
                <p className="font-bold text-lg">My Property Manager</p>
                <p className="font-regular text-sm">28 Shakiru Anjorin Street, Off Admiralty Way, Lekki Phase One, Lagos, Nigeria</p>
                <p className="font-regular text-sm">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="font-bold text-lg">Phone: 09056454636</p>
                <p className="font-regular text-sm">Email: supersofttechltd2023@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[90%] flex-col lg:flex-row flex justify-between items-start">
            <div className="w-full lg:w-[47%]">
              <p className={` mt-6 font-bold text-[35px]`}>
                Get in Touch
              </p>
              <div className="mb-[3rem]">
                <input
                  placeholder="Name"
                  className="text-black mt-4 placeholder:pl-4 pl-4 outline-none border border-black h-[50px] w-full"
                />
                <input
                  placeholder="Email"
                  className="text-black mt-4 placeholder:pl-4 pl-4 outline-none border border-black h-[50px] w-full"
                />
                <input
                  placeholder="Phone"
                  className="text-black mt-4 placeholder:pl-4 pl-4 outline-none border border-black h-[50px] w-full"
                />
                <textarea
                  className="text-black mt-4 pt-4 placeholder:pl-4 pl-4 outline-none border border-black h-[150px] w-full"
                  placeholder="Message"
                ></textarea>
                <p className={`text-xs py-6`}>
                  By providing your contact information to My Property Manager, you acknowledge and agree to our
                  Privacy Policy and consent to receiving app-related communications, including notifications,
                  messages, and emails. Some of these communications may include automated features. Your
                  consent isn't required for using our app, and you can opt out at any time. To
                  stop receiving notifications, you can adjust your app settings. To unsubscribe from emails,
                  you can click on the provided link in the email. Standard message and data rates may apply.
                </p>
                <button className="w-full lg:w-[300px] bg-blue text-[#FFF] p-[1rem]">Contact Us</button>
              </div>
            </div>
            <div className={`w-full lg:w-[47%]`}>
              <div className="mt-12">
                <GoogleMapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Modal;