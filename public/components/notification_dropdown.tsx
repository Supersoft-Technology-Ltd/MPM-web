import { IoSettingsOutline } from "react-icons/io5";
import { Lora } from "../fonts";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { transactionReducer } from "@/redux/reducers/transactions";
import { formatNotification } from "../utils/formatTransaction";
import moment from "moment";
import { useLayoutEffect, useEffect } from "react";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { getAllNotifications } from "@/redux/reducers/transactions/thunk-action";

export const NotificationDropdown = () => {
  const { allNotification } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );
  const dispatch = useAppThunkDispatch();

  const formattedData = formatNotification(allNotification);
  console.log(allNotification, "formatted");

  const user = useAppSelector(useSelectCurrentUser);
  useLayoutEffect(() => {
    if (user?.id) {
      dispatch(getAllNotifications(user?.id));
    }
  }, [user]);
  return (
    <div className="w-[370px] h-[324px] shadow-sm bg-[#FFF] absolute top-[80%] right-[30%]">
      <h3
        className={`${Lora.className} text-center text-colorPrimary text-[16px] py-2`}
      >
        Notifications
      </h3>
      {formattedData.map((elem: any) => (
        <div>
          <div className="border border-b-[0.7px] border-border_color" />
          <div className="px-4 flex mt-2 gap-[.7rem]">
            <div className="text-center w-[25%]">
              <h4
                className={`${Lora.className} font-light text-dateMonthColor text-[14px]`}
              >
                {moment(elem.createdAt).format("MMM")}
              </h4>
              <h3
                className={`${Lora.className} font-medium text-darkText text-[18px]`}
              >
                {moment(elem.createdAt).format("DD")}
              </h3>
              <h4
                className={`${Lora.className} font-light text-dateMonthColor text-[14px]`}
              >
                {moment(elem.createdAt).format("YYYY")}
              </h4>
            </div>
            <div className="border-r-[0.7px] border-r-border_color" />
           <div>
            {
              elem.items.map((ele: any) => (
                <div className="flex align-center justify-start gap-[.5rem]">
                {" "}
                <div className="w-[60px] h-[35px] bg-[#D88D85] flex items-center justify-center rounded-[.3rem]">
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
              ))
            }
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};
