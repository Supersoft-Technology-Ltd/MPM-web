"use client";

import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { formatNotification } from "../../../public/utils/formatTransaction";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { useEffect } from "react";
import { getAllNotifications } from "@/redux/reducers/transactions/thunk-action";
import { Lora } from "../../../public/fonts";
import { IoSettingsOutline } from "react-icons/io5";
import moment from "moment";
import LayoutContainer from "../../../public/components/layout-container";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useRouter } from "next/navigation";
const Notification = () => {
  const { allNotification } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );
  const dispatch = useAppThunkDispatch();
  const router = useRouter();

  const formattedData = formatNotification(allNotification);
  console.log(allNotification, "formatted");

  const user = useAppSelector(useSelectCurrentUser);
  useEffect(() => {
    if (user?.id) {
      dispatch(getAllNotifications(user?.id));
    }
  }, [user]);
  return (
    <DashboardLayout>
      <div className="w-full">
        <div
          className={`${Lora.className} pl-2 flex items-center justify-start`}
        >
          <p className="text-textBlack2 font-light text-[15px] py-4">
            You are Here {`>>`}
          </p>
          <p
            className="text-textBlack2 font-light text-[15px] py-4 ml-2 cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Home {`>>`}
          </p>
          <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
            Notifications
          </h5>
        </div>
        {Array.isArray(formattedData) && formattedData.length > 0 ? (
          <div className="w-[98%] h-[90vh] mx-auto shadow-sm">
            {formattedData.map((elem: any) => (
              <div>
                <div className="border border-b-[0.7px] border-border_color" />
                <div className="px-4 py-2 flex mt-2 gap-[.7rem]">
                  <div className="text-center w-[90px] flex flex-col justify-center items-center">
                    <h4
                      className={`${Lora.className} font-light text-dateMonthColor text-[14px]`}
                    >
                      {moment(elem.date).format("MMM")}
                    </h4>
                    <h3
                      className={`${Lora.className} font-medium text-darkText text-[18px]`}
                    >
                      {moment(elem.date).format("DD")}
                    </h3>
                    <h4
                      className={`${Lora.className} font-light text-dateMonthColor text-[14px]`}
                    >
                      {moment(elem.date).format("YYYY")}
                    </h4>
                  </div>
                  <div className="border-r-[0.7px] border-r-border_color" />
                  <div>
                    {elem.items.map((ele: any) => (
                      <div className="flex align-center justify-start gap-[.5rem] mt-4 ml-4">
                        {" "}
                        <div className="w-[50px] h-[40px] bg-[#D88D85] flex items-center justify-center rounded-[.3rem]">
                          <IoSettingsOutline color="#fff" />
                        </div>
                        <div>
                          <p
                            className={`${Lora.className} font-medium text-darkText text-[14px]`}
                          >
                            {ele.title}
                          </p>
                          <p
                            className={`${Lora.className} font-light text-dateMonthColor text-[12px]`}
                          >
                            {ele.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[40vh] flex justify-center items-center">
            <p
              className={`${Lora.className} text-[18px] txt-textBlack2 font-medium`}
            >
              No Notifications
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
export default Notification;
