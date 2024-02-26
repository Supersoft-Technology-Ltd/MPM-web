"use client";
import { Lora } from "../../../public/fonts";
import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { useEffect, useState, useRef } from "react";
import { PortfolioCards } from "../../../public/components/payments/cards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ModalContainer } from "../../../public/components/modal";
import { PropertyModal } from "../../../public/components/modal/property-modal";
import { List } from "../../../public/components/modal/list";
import { AddTenantToUnit } from "../../../public/components/modal/add-tenant-unit";
import { AddUnit } from "../../../public/components/modal/add-unit";
import { ModalLayout } from "../../../public/components/modal-layout";
import { getAllProperties } from "@/redux/reducers/properties/thunk-action";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { useSelectCurrentUser } from "@/redux/reducers/auth";
import { AddProperty } from "../../../public/components/modal/add-property";
import { useProperties } from "../../../public/context/property-context";
import { Property } from "@/redux/reducers/properties/interface";
import { getPropertyUnits } from "@/redux/reducers/unit/thunk-action";
import { useMediaQuery } from "../../../public/hooks/usemediaquery";

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
  const ref = useRef<any>(null);
  const [openAddPropertyModal, setOpenAddPropertyModal] = useState(false);
  useState<boolean>(false);
  const router = useRouter();
  const matches = useMediaQuery("(min-width: 767px)");
  const dispatch = useAppThunkDispatch();

  const { allProperties } = useAppSelector(
    ({ propertyReducer }) => propertyReducer
  );
  const { allUnits } = useAppSelector(({ unitReducer }) => unitReducer);
  const { property, setProperty, oneUnit, setOneUnit } = useProperties();
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
  const user = useAppSelector(useSelectCurrentUser);

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllProperties(user.id));
    }
  }, [user]);

  useEffect(() => {
    if (property.id) {
      dispatch(getPropertyUnits(property.id));
    }
  }, [property]);

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
            className="flex justify-center lg:w-[22%] md:w-[30%] lg:mx-0 md:mx-0 w-[90%] mx-auto px-2 h-[120px]
            cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th"
            onClick={() => handleOnClick(elem.action)}
          >
            <Image src={elem.img} alt="" width={50} height={50} />
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
              width={matches ? "35%" : "80%"}
              handleModalClose={() => setOpenPropertyList(false)}
            >
              <List
                onClick={(elem) => {
                  setProperty(elem as Property);
                  setOpenPropertyList(false);
                  setModalIsOpen(true);
                }}
                arrDetails={allProperties?.map((elem: any) => ({
                  label: elem.propertyName,
                  value: elem.propertyLocation,
                  ...elem,
                }))}
                setOpenUnitModal={setOpenUnitModal}
                setOpenList={setOpenList}
                setModalIsOpen={setModalIsOpen}
                setOpenPropertyList={setOpenPropertyList}
                button={true}
                setOpenAddPropertyModal={setOpenAddPropertyModal}
              />
            </ModalContainer>
          )}
          {openAddPropertyModal && (
            <AddProperty
              setOpenPropertyList={setOpenPropertyList}
              modalTitle={
                Object.keys(property).length ? "Edit Property" : "Add Property"
              }
              setOpenAddPropertyModal={setOpenAddPropertyModal}
            />
          )}
          {modalIsOpen && (
            <PropertyModal
              openAddPropertyModal={openAddPropertyModal}
              modalTitle="Property Details"
              handleModalClose={() => {
                setOpenPropertyList(true);
                setModalIsOpen(false);
              }}
              setOpenAddPropertyModal={setOpenAddPropertyModal}
              setOpenProperty={setOpenProperty}
              setOpenPropertyList={setOpenPropertyList}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              value={property.propertyLocation}
              label={property.propertyName}
              propertyId={property.id}
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
              width={matches ? "35%" : "80%"}
              handleModalClose={() => setOpenList(false)}
            >
              <List
                arrDetails={allUnits?.map((elem: any) => ({
                  label: elem.unitName,
                  value: elem.unitType.description,
                  ...elem,
                }))}
                onClick={(elem) => {
                  setOneUnit(elem as any);
                  setOpenList(false);
                  setOpenUnitModal(true);
                }}
                setOpenAddPropertyModal={setOpenAddPropertyModal}
                setOpenUnitModal={setOpenUnitModal}
                setOpenList={setOpenList}
                setModalIsOpen={setModalIsOpen}
                setOpenPropertyList={setOpenPropertyList}
              />
            </ModalContainer>
          )}
          {openUnitModal && (
            <PropertyModal
              openAddPropertyModal={openAddPropertyModal}
              modalTitle="Unit Details"
              setOpenProperty={setOpenProperty}
              setOpenPropertyList={setOpenPropertyList}
              setOpenAddPropertyModal={setOpenAddPropertyModal}
              handleModalClose={() => setOpenUnitModal(false)}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              label=""
              onClear={() => ref.current?.handleClearForm()}
              propertyId={""}
              buttonTitle={
                oneUnit.occupyingStatus
                  ? "Remove Tenant"
                  : "Add Tenant"
              }
              record={false}
              setOpenAddTenantModal={setOpenAddTenantModal}
            />
          )}

          {openAddTenantModal && (
            <AddTenantToUnit setOpenAddTenantModal={setOpenAddTenantModal} />
          )}
          {addUnitModal && (
            <AddUnit
              ref={ref}
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
              label=""
              value=""
              title="Tenancy"
              subText="Listed Properties"
              setModalIsOpen={setOpenTenancy}
            />
          )}
          {openProperty && (
            <PropertyModal
              openAddPropertyModal={openAddPropertyModal}
              setOpenAddPropertyModal={setOpenAddPropertyModal}
              setOpenPropertyList={setOpenPropertyList}
              modalTitle="View Tenants"
              setOpenProperty={setOpenProperty}
              handleModalClose={() => setOpenProperty(false)}
              setAddUnitModal={setAddUnitModal}
              setOpenUnitModal={setOpenUnitModal}
              setModalIsOpen={setModalIsOpen}
              setOpenList={setOpenList}
              openList={openList}
              label=""
              propertyId=""
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
