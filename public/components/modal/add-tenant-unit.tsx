import React, { SetStateAction, useState } from "react";
import { Inter, Lora, Raleway } from "../../fonts";
import { Inputs } from "../input";
import { ModalContainer } from "../modal";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../button";
import { useFormik } from "formik";
import { AddTenantValidationSchema } from "../../utils/schema/unit";
import { AddTenantToOneUnit } from "@/redux/reducers/unit/thunk-action";
import { useAppThunkDispatch } from "@/redux/store";
import { useProperties } from "../../context/property-context";
import moment from "moment";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useMediaQuery } from "../../hooks/usemediaquery";

type props = {
  setOpenAddTenantModal: React.Dispatch<SetStateAction<any>>;
};
export const AddTenantToUnit = ({ setOpenAddTenantModal }: props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppThunkDispatch();
  const { oneUnit } = useProperties();
  const matches = useMediaQuery("(min-width: 767px)");
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    values,
  } = useFormik({
    initialValues: {
      tenantEmail: "",
      tenantDuration: "12",
      moveInDate: "",
      lastPaymentDate: "",
    },
    validationSchema: AddTenantValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        tenantEmail: values.tenantEmail,
        tenantDuration: `${values.tenantDuration} months`,
        moveInDate: values.moveInDate,
        lastPaymentDate: values.lastPaymentDate,
        unitId: oneUnit.id,
      };
      await dispatch(AddTenantToOneUnit(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Tenant added successfully");
          setOpenAddTenantModal(false);
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    },
  });
  return (
    <ModalContainer
      width={matches ? "35%" : "80%"}
      title="Add Tenant to Unit"
      goBack={true}
      handleModalClose={() => setOpenAddTenantModal(false)}
    >
      <div className="mt-8">
        <div className="mt-2">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Tenant Email
          </label>
          <Inputs
            errMsg={errors.tenantEmail}
            onChange={handleChange("tenantEmail")}
            onBlur={handleBlur("tenantEmail")}
            value={values.tenantEmail}
            err={!!errors.tenantEmail && touched.tenantEmail}
            placeholder="Tenant Email"
            type="text"
            name="tenantEmail"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label
            className={`${Lora.className} mb-2 font-normal text-darkText3 text-[14px]`}
          >
            Move In Date
          </label>
          <div className="relative w-full">
            <Inputs
              style={{ paddingRight: "1rem" }}
              errMsg={errors.moveInDate}
              onChange={handleChange("moveInDate")}
              onBlur={handleBlur("moveInDate")}
              err={!!errors.moveInDate && touched.moveInDate}
              placeholder="Tenant Email"
              type="date"
              name="moveInDate"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Last Payment
          </label>
          <div className="relative w-full">
            <Inputs
              style={{ paddingRight: "1rem" }}
              errMsg={errors.lastPaymentDate}
              onChange={handleChange("lastPaymentDate")}
              onBlur={handleBlur("lastPaymentDate")}
              err={!!errors.lastPaymentDate && touched.lastPaymentDate}
              placeholder="Tenant Email"
              type="date"
              name="lastPaymentDate"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
          >
            Duration (months)
          </label>
          <div className="w-[90%] mx-auto">
            <Slider
              onChange={(value) => setFieldValue("tenantDuration", String(value))}
              min={6}
              max={24}
              marks={{ 6: "6 months", 12: "12 months", 24: "24 months" }}
              step={3}
            />
          </div>
        </div>
        <div className="mt-12">
          <Button
            title="Add Tenant"
            variant="submit"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </ModalContainer>
  );
};
