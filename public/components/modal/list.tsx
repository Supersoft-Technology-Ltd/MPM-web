import React, { SetStateAction } from "react";
import { ModalContainer } from "../modal";
import { PropertiesList, UnitList } from "../property-details";
import { Lora } from "../../fonts";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Button } from "../button";
import { useProperties } from "../../context/property-context";
import { Property } from "@/redux/reducers/properties/interface";
import { UnitData } from "@/redux/reducers/unit/interface";

type props = {
  setOpenList: React.Dispatch<SetStateAction<any>>;
  setOpenUnitModal: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  setOpenAddPropertyModal: React.Dispatch<SetStateAction<any>>;
  button?: boolean;
  arrDetails: Array<{
    label: string;
    value: string;
  }>;
  title?: "Properties" | "Units";
  onClick: (property?: Property) => void;
  buttonOnClick?: () => void;
};
export const List = ({
  setOpenList,
  setOpenUnitModal,
  button,
  arrDetails,
  setModalIsOpen,
  setOpenPropertyList,
  onClick,
  setOpenAddPropertyModal,
  title,
}: props) => {
  const { property, setProperty, oneUnit, setOneUnit } = useProperties();
  return (
    <div>
      {arrDetails?.map((elem: any, id) => (
        <div
          key={id}
          className="mt-4 flex cursor-pointer justify-between items-center"
          onClick={() => onClick(elem)}
        >
          <div>
            <h4
              className={`${Lora.className} capitalize font-medium text-textBlack2 text-[14px]`}
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
          <Button
            title="Add Property"
            onClick={() => {
              setProperty({} as Property);
              setOpenPropertyList(false);
              setOpenAddPropertyModal(true);
            }}
            variant="submit"
          />
        </div>
      )}
    </div>
  );
};
type Propertyprops = {
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
};
