import React, { SetStateAction } from "react";
import { ModalContainer } from "../modal";
import { PropertiesList, UnitList } from "../property-details";
import { Lora } from "../../fonts";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Button } from "../button";

type props = {
  setOpenList: React.Dispatch<SetStateAction<any>>;
  setOpenUnitModal: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  button?: boolean;
  arrDetails: Array<{
    label: string;
    value: string;
  }>;
  onClick: () => void
};
export const List = ({
  setOpenList,
  setOpenUnitModal,
  button,
  arrDetails,
  setModalIsOpen,
  setOpenPropertyList,
  onClick,
}: props) => {
  return (
    <div>
      {arrDetails.map((elem) => (
        <div
          className="mt-4 flex cursor-pointer justify-between items-center"
          onClick={onClick}
        >
          <div>
            <h4
              className={`${Lora.className} font-medium text-textBlack2 text-[14px]`}
            >
              {elem.label}
            </h4>
            <p
              className={`${Lora.className} font-light text-textBlack2 text-[12px]`}
            >
              {elem.value}
            </p>
          </div>
          <MdOutlineArrowForwardIos />
        </div>
      ))}
      {button && (
        <div className="w-full mx-auto mt-8">
          <Button title="Add Property" onClick={() => null} variant="submit" />
        </div>
      )}
    </div>
  );
};
type Propertyprops = {
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
};
