import { CgPlayListAdd } from "react-icons/cg"
import { TenancyBox, TenancyCard } from "../tenancy-card"
import { Lora } from "../../fonts"
import { Dispatch, SetStateAction } from "react"

type props = {
    setOpenAddPropertyModal: Dispatch<SetStateAction<boolean>>
}
export const MobileCards = ({setOpenAddPropertyModal}: props) => {
    return(
        <div className="w-full h-full py-4 rounded-[1rem] px-4 mt-8 shadow-sm bg-[#FFF] flex flex-col justify-center">
        <div className="flex items-center mb-2 justify-between">
          <p
            className={`${Lora.className} font-light text-textBlack2 text-[15px]`}
          >
            Listed Properties
          </p>
          <div
            className="flex items-center"
            onClick={() => setOpenAddPropertyModal(true)}
          >
            <CgPlayListAdd className="text-address text-[14px]" />
            <p
              className={`${Lora.className} text-address text-[12px] font-extralight`}
            >
              Add
            </p>
          </div>
        </div>
        <div className=" flex gap-[1rem] flex-col">
          <div className="w-[90%] mx-auto">
            <TenancyCard location="" title=""/>
          </div>
          <div className="w-[90%] mx-auto">
            <TenancyBox
              name="Active Tenancy"
              subtext="0"
              add={
                <div className="flex mt-4 items-center">
                  <CgPlayListAdd className="text-address text-[12px]" />
                  <p
                    className={`${Lora.className} text-address text-[10px] font-extralight`}
                  >
                    Add
                  </p>
                </div>
              }
            />
          </div>
          <div className="w-[90%] mx-auto">
            <TenancyBox name="Next Rent Due Date" subtext="DD/MM/YYYY" />
          </div>
          <div className="w-[90%] mx-auto">
            <TenancyBox name="Tenancy Duration" subtext="12 months" />
          </div>
          <div className="w-[90%] mx-auto">
            <TenancyBox name="Next Rent Amount" subtext="₦ 0.00" />
          </div>
          <div className="w-[90%] mx-auto">
            <TenancyBox name="Landlord’s Name" subtext="Nil" />
          </div>
        </div>
      </div>
    )
}