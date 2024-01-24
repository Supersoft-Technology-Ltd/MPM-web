"use client";
import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useState } from "react";
import { PortfolioCards } from "../../../public/components/payments/cards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ModalContainer } from "../../../public/components/modal";
import { PropertyModal } from "../../../public/components/modal/property-modal";
import { List } from "../../../public/components/modal/list";
import {
  PropertiesList,
  PropertyDetails,
  UnitDetails,
  UnitList,
  fullPropertyDetails,
} from "../../../public/components/property-details";
import { AddTenantToUnit } from "../../../public/components/modal/add-tenant-unit";
import { AddUnit } from "../../../public/components/modal/add-unit";
import { ModalLayout } from "../../../public/components/modal-layout";

const Portfolio = () => {
  const [action, setAction] = useState<
    "properties" | "tenancy" | "rental" | ""
  >("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [openPropertyList, setOpenPropertyList] = useState(false);
  const [openUnitModal, setOpenUnitModal] = useState(false);
  const [openAddTenantModal, setOpenAddTenantModal] = useState(false);
  const [addUnitModal, setAddUnitModal] = useState(false);
  const [openTenancy, setOpenTenancy] = useState(false);
  const [openProperty, setOpenProperty] = useState(false);
  useState<boolean>(false);
  const router = useRouter();

  const handleOnClick = (selectedAction: any) => {
    setAction(selectedAction);
    if (action === "properties") {
      setOpenPropertyList(true);
    }
    if (action === "rental") {
    }
    if (action === "tenancy") {
      setOpenTenancy(true);
    }
  };

  return (
    <DashboardLayout>
      <div className={`${Lora.className} flex items-center justify-start`}>
        <p className="text-textBlack2 font-light text-[15px] py-4">
          You are Here {`>>`}
        </p>
        <h5 className="font-medium text-textBlack2 text-[16px] ml-2">
          Portfolio
        </h5>
      </div>
      <div className="flex flex-wrap gap-[2rem] w-[100%] mt-4">
        {PortfolioCards.map((elem) => (
          <div
            className="flex justify-center w-[22%] px-2 h-[120px] cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th"
            onClick={() => handleOnClick(elem.action)}
          >
            <Image
              src={elem.img}
              alt=""
              width={50}
              height={50}
            />
            <p
              className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
            >
              {elem.text}
            </p>
          </div>
        ))}
      </div>
      {action === "properties" && (
        <>
          {openPropertyList && (
            <ModalContainer
              goBack={true}
              title="Properties"
              width="35%"
              handleModalClose={() => setOpenPropertyList(false)}
            >
              <List
                onClick={() => {
                  setOpenPropertyList(false);
                  setModalIsOpen(true);
                }}
                arrDetails={PropertiesList.map((elem) => ({
                  label: elem.name,
                  value: elem.value,
                }))}
                setOpenUnitModal={setOpenUnitModal}
                setOpenList={setOpenList}
                setModalIsOpen={setModalIsOpen}
                setOpenPropertyList={setOpenPropertyList}
                button={true}
              />
            </ModalContainer>
          )}
          {modalIsOpen && (
            <PropertyModal
              modalTitle="Property Details"
              handleModalClose={() => {
                setOpenPropertyList(true);
                setModalIsOpen(false);
              }}
              setOpenProperty={setOpenProperty}
              setOpenPropertyList={setOpenPropertyList}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              value="Akure"
              arrDetails={PropertyDetails.map((element) => ({
                label: element.name,
                value: element.value,
              }))}
              buttonTitle="View Units"
              record={true}
              title="Property Location"
              setOpenAddTenantModal={setOpenAddTenantModal}
            />
          )}
          {openList && (
            <ModalContainer
              goBack={true}
              title="Units"
              width="35%"
              handleModalClose={() => setOpenList(false)}
            >
              <List
                arrDetails={UnitList.map((elem) => ({
                  label: elem.name,
                  value: elem.value,
                }))}
                onClick={() => {
                  setOpenList(false);
                  setOpenUnitModal(true);
                }}
                setOpenUnitModal={setOpenUnitModal}
                setOpenList={setOpenList}
                setModalIsOpen={setModalIsOpen}
                setOpenPropertyList={setOpenPropertyList}
              />
            </ModalContainer>
          )}
          {openUnitModal && (
            <PropertyModal
              modalTitle="Unit Details"
              setOpenProperty={setOpenProperty}
              setOpenPropertyList={setOpenPropertyList}
              handleModalClose={() => setOpenUnitModal(false)}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              arrDetails={UnitDetails.map((element) => ({
                label: element.name,
                value: element.value,
              }))}
              buttonTitle="Add Tenants"
              value="Three Bedroom Apartment"
              record={false}
              title="Room 1"
              setOpenAddTenantModal={setOpenAddTenantModal}
            />
          )}
          {openAddTenantModal && (
            <AddTenantToUnit setOpenAddTenantModal={setOpenAddTenantModal} />
          )}
          {addUnitModal && (
            <AddUnit
              setAddUnitModal={setAddUnitModal}
              setModalIsOpen={setModalIsOpen}
            />
          )}
        </>
      )}
      {action === "tenancy" && (
        <>
          {openTenancy && (
            <ModalLayout
              buttonTitle="View Tenants"
              handleModalOpen={() => {
                setOpenTenancy(false);
                setOpenProperty(true);
              }}
              title="Tenancy"
              subText="Listed Properties"
              setModalIsOpen={setOpenTenancy}
              arrList={fullPropertyDetails.map((elem) => ({
                label: elem.name,
                value: elem.value,
              }))}
            />
          )}
          {openProperty && (
            <PropertyModal
              setOpenPropertyList={setOpenPropertyList}
              modalTitle="View Tenants"
              setOpenProperty={setOpenProperty}
              handleModalClose={() => setOpenProperty(false)}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              arrDetails={UnitDetails.map((element) => ({
                label: element.name,
                value: element.value,
              }))}
              buttonTitle="View Tenants"
              value="Property ID: MPM-240567"
              record={false}
              title="White House"
              setOpenAddTenantModal={setOpenAddTenantModal}
            />
          )}
          {openAddTenantModal && (
            <AddTenantToUnit setOpenAddTenantModal={setOpenAddTenantModal} />
          )}
        </>
      )}
    </DashboardLayout>
  );
};
export default Portfolio;
