import { ImLocation2 } from "react-icons/im";
import { Lora } from "../../fonts";
import { Button } from "../button";
import React, { SetStateAction, useEffect, useState } from "react";
import { ModalContainer } from "../modal";
import { useProperties } from "../../context/property-context";
import { formatCurrency } from "../../hooks/formatNumber";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { removeOneTenant } from "@/redux/reducers/unit/thunk-action";
import { toast } from "react-toastify";
import { getTenantInUnit } from "@/redux/reducers/unit/thunk-action";
import { useMediaQuery } from "../../hooks/usemediaquery";

type propertyProps = {
  name?: string;
  value?: string;
  title?: string;
  record?: boolean;
  openList?: boolean;
  openAddPropertyModal: boolean;
  setOpenList: React.Dispatch<SetStateAction<any>>;
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  propertyId: string;
  label: string;
  setOpenAddPropertyModal: React.Dispatch<SetStateAction<any>>;
  setOpenUnitModal: React.Dispatch<SetStateAction<any>>;
  setOpenProperty: React.Dispatch<SetStateAction<any>>;
  setOpenPropertyList: React.Dispatch<SetStateAction<any>>;
  setOpenAddTenantModal: React.Dispatch<SetStateAction<any>>;
  setAddUnitModal: React.Dispatch<SetStateAction<any>>;
  buttonTitle: "Add Tenant" | "View Units" | "Remove Tenant" | "View Tenants";
  handleModalClose: () => void;
  modalTitle: "Property Details" | "Unit Details" | "View Tenants";
  onClear?: VoidFunction;
};
export const PropertyModal = ({
  title,
  value,
  record,
  setOpenList,
  setModalIsOpen,
  propertyId,
  label,
  buttonTitle,
  setOpenAddTenantModal,
  setOpenUnitModal,
  setAddUnitModal,
  setOpenProperty,
  handleModalClose,
  setOpenPropertyList,
  setOpenAddPropertyModal,
  openAddPropertyModal,
  modalTitle,
  onClear,
}: propertyProps) => {
  const matches = useMediaQuery("(min-width: 600px)");
  const [isEditMode, setIsEditMode] = useState(false);
  const { oneUnit, setOneUnit } = useProperties();
  console.log(oneUnit, "one");

  const dispatch = useAppThunkDispatch();
  const { oneTenantDetails } = useAppSelector(({ unitReducer }) => unitReducer);

  useEffect(() => {
    dispatch(getTenantInUnit(oneUnit.id));
  }, []);

  const removeTenant = async () => {
    try {
      if (oneUnit.occupyingStatus) {
        await dispatch(removeOneTenant(oneTenantDetails.tenantId)).then(
          (res) => {
            if (res.meta.requestStatus === "fulfilled") {
              toast.success("Tenant removed successfully");
              setOneUnit({
                ...oneUnit,
                occupyingStatus: false,
              });
            } else {
              console.log(res?.payload, "resp");
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalContainer
      width={matches ? "36%" : "85%"}
      goBack={true}
      handleModalClose={handleModalClose}
      title={modalTitle}
    >
      <div
        className="flex items-start w-full h-[80px]
          border border-[rgba(0, 65, 160, 0.3)] rounded-[1rem] px-4 py-4"
      >
        <div className="w-[45px] h-[45px] bg-grey4 rounded-[12px] flex items-center justify-center">
          <ImLocation2 color="#EB212D" size={22} />
        </div>
        <div className="ml-4">
          <p
            className={`${Lora.className} capitalize font-medium text-darkText text-[15px]`}
          >
            {modalTitle === "Property Details" ? title : oneUnit.unitName}
          </p>
          <p
            className={`${Lora.className} font-light text-address text-[13px]`}
          >
            {modalTitle === "Property Details"
              ? value
              : oneUnit.unitType.description}
          </p>
        </div>
      </div>
      {modalTitle !== "View Tenants" && (
        <>
          <div className="flex justify-between items-end mt-2">
            {record && (
              <h4
                className={`${Lora.className} font-medium text-textBlack2 text-[15px]`}
              >
                Property Record
              </h4>
            )}
            {modalTitle === "Property Details" ? (
              <div
                onClick={() => {
                  setModalIsOpen(false);
                  setIsEditMode(true);
                  setOpenPropertyList(false);
                  setOpenAddPropertyModal(true);
                }}
              >
                <p
                  className={`${Lora.className}
              cursor-pointer underline text-right text-colorPrimary font-light text-[13px]`}
                >
                  {" "}
                  Edit Property
                </p>
              </div>
            ) : (
              <div
                onClick={() => {
                  handleModalClose();
                  setOpenPropertyList(false);
                  setAddUnitModal(true);
                }}
              >
                <p
                  className={`${Lora.className}
                cursor-pointer underline text-right text-colorPrimary font-light text-[13px]`}
                >
                  {" "}
                  Edit Unit
                </p>
              </div>
            )}
          </div>
          {modalTitle === "Property Details" ? (
            <div className="flex flex-col justify-start mt-4 bg-grey4 bg-opacity-10 px-4 pt-4 pb-2">
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Property Name:</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    {label}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Property ID:</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000000] text-[13px] text-left text-grey3">
                    {propertyId}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-start mt-4 bg-grey4 bg-opacity-10 px-4 pt-4 pb-2">
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Unit Rent</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitRent)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Service Charge</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitServiceCharge)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Legal Charge</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitLegalFee)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Agreement Charge</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitAgreementCharge)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Commission</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitCommissionCharge)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Other Charges</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    ₦ {formatCurrency(oneUnit.unitOtherCharges)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start border-b border-b-[rgba(0, 65, 160, 0.3)] py-2">
                <div className="flex flex-col w-[30%]">
                  <p className="text-[#000B22] text-[13px]">Occupying Status</p>
                </div>
                <div className="flex flex-col grow-1 items-center justify-flex-end ml-2">
                  <p className="text-[#000B22] text-[13px] text-left text-grey3">
                    {oneUnit.occupyingStatus === false
                      ? "Not occupied"
                      : "Occupied"}
                  </p>
                </div>
              </div>
            </div>
          )}
          {record && (
            <>
            <p
              onClick={() => {
                setModalIsOpen(false);
                setAddUnitModal(true);
                onClear && onClear();
              }}
              className={`${Lora.className} 
              cursor-pointer underline text-colorPrimary font-light text-[13px]`}
            >
              {" "}
              Add Units
            </p>
            </>
          )}
        </>
      )}
      <div className="mt-6">
        <Button
          title={buttonTitle}
          onClick={() => {
            setModalIsOpen(false);
            setOpenList(true);
            if (buttonTitle === "Add Tenant") {
              setOpenList(false);
              setOpenUnitModal(false);
              setOpenAddTenantModal(true);
            }
            if (buttonTitle === "View Tenants") {
              setOpenProperty("");
              setOpenAddTenantModal(true);
            }
            if (buttonTitle === "Remove Tenant") {
              removeTenant();
            }
          }}
          variant="submit"
        />
      </div>
    </ModalContainer>
  );
};
