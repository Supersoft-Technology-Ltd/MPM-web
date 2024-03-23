import { ReactNode } from "react";
import { Lora } from "../fonts";
import { IoIosArrowRoundBack } from "react-icons/io";

type modalProps = {
  title: string;
  goBack?: true;
  children: ReactNode;
  width?: string;
  handleModalClose: () => void
};
export const ModalContainer = ({
  title,
  goBack,
  children,
  handleModalClose,
  width = "50%",
}: modalProps) => {

  return (
    <div className="fixed flex overflow-y-auto items-center z-[1000] bg-[rgba(0,0,0,0.7)] w-full h-[100vh] top-0 left-0">
      <div
        className="mx-auto bg-white h-auto max-h-[95%] overflow-auto lg:px-8 lg:py-4 px-6 py-4 py-2rounded-[10px]"
        style={{ width }}
      >
        <div className="flex items-center justify-between">
          {goBack ? (
            <div onClick={() => handleModalClose()}>
              <IoIosArrowRoundBack
                color="#000"
                size={33}
                style={{ fontWeight: 100, cursor: 'pointer' }}
              />
            </div>
          ) : (
            ""
          )}
          <h5 className={`${Lora.className} text-text_color text-center`}>
            {title}
          </h5>
          <div />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
