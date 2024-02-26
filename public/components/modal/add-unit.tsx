import React, {
  SetStateAction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Lora } from "../../fonts";
import { Inputs } from "../input";
import { ModalContainer } from "../modal";
import { StatusSelect } from "../select";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import { AddUnits, getAllUnitTypes } from "@/redux/reducers/unit/thunk-action";
import { AddUnitValidationSchema } from "../../utils/schema/unit";
import { useFormik } from "formik";
import {
  currencyToString,
  formatCurrency,
  formatNumber,
} from "../../hooks/formatNumber";
import { useProperties } from "../../context/property-context";
import { Button } from "../button";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useMediaQuery } from "../../hooks/usemediaquery";

type props = {
  setModalIsOpen: React.Dispatch<SetStateAction<any>>;
  setAddUnitModal: React.Dispatch<SetStateAction<any>>;
};

export const AddUnit = forwardRef(
  ({ setAddUnitModal, setModalIsOpen }: props, ref) => {
    const { unitTypes = [] } = useAppSelector(({ unitReducer }) => unitReducer);
    const [units, setUnits] = useState<any>([]);
    const [show, setShow] = useState(false);
    const dispatch = useAppThunkDispatch();
    const { property, setProperty, oneUnit } = useProperties();
    useEffect(() => {
      dispatch(getAllUnitTypes());
    }, []);
    console.log(unitTypes, "allunits");
    console.log(oneUnit, "unitsf");
    const matches = useMediaQuery("(min-width: 767px)");
    const handleAddUnits = (values: any) => {};
    const {
      handleSubmit,
      handleChange,
      handleBlur,
      errors,
      touched,
      setFieldValue,
      setFieldError,
      values,
      setValues,
    } = useFormik({
      initialValues: {
        unitName: "",
        unitRent: "",
        unitServiceCharge: "",
        unitLegalCharge: "",
        unitAgreementCharge: "",
        unitCommissionCharge: "",
        unitOtherCharges: "",
        unitTypeId: "",
      },
      validationSchema: AddUnitValidationSchema,
      onSubmit: async (values) => {
        const payload = {
          unitName: values.unitName,
          unitRent: values.unitRent,
          unitServiceCharge: values.unitServiceCharge,
          unitLegalCharge: values.unitLegalCharge,
          unitAgreementCharge: values.unitAgreementCharge,
          unitCommissionCharge: values.unitCommissionCharge,
          unitOtherCharges: values.unitOtherCharges,
          unitTypeId: values.unitTypeId,
          propertyId: property.id,
        };
        setUnits([
          ...units,
          {
            propertyId: property.id,
            unitName: values.unitName,
            unitRent: Number(currencyToString(values.unitRent)),
            unitServiceCharge: Number(
              currencyToString(values.unitServiceCharge)
            ),
            unitLegalCharge: Number(currencyToString(values.unitLegalCharge)),
            unitAgreementCharge: Number(
              currencyToString(values.unitAgreementCharge)
            ),
            unitCommissionCharge: Number(
              currencyToString(values.unitCommissionCharge)
            ),
            totalReps: 1,
            unitOtherCharges: Number(currencyToString(values.unitOtherCharges)),
            unitTypeId: values.unitTypeId,
          },
        ]);
        setValues({
          unitName: "",
          unitRent: "",
          unitServiceCharge: "",
          unitLegalCharge: "",
          unitAgreementCharge: "",
          unitCommissionCharge: "",
          unitOtherCharges: "",
          unitTypeId: "",
        });
      },
    });
    console.log(unitTypes, "unitTypes");
    const addUnitToProperty = async () => {
      await dispatch(AddUnits(units)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Units added successfully");
        } else {
          console.log(res?.payload?.data?.response);
        }
      });
    };

    useImperativeHandle(ref, () => {
      return {
        handleClearForm() {
          setValues({} as any);
        },
      };
    });
    
    useEffect(() => {
      if (Object.keys(oneUnit ?? {}).length) {
        setFieldValue("unitName", oneUnit.unitName);
        setFieldValue("unitRent", oneUnit.unitRent);
        setFieldValue("unitServiceCharge", oneUnit.unitServiceCharge);
        setFieldValue("unitLegalCharge", oneUnit.unitLegalFee);
        setFieldValue("unitAgreementCharge", oneUnit.unitAgreementCharge);
        setFieldValue("unitCommissionCharge", oneUnit.unitCommissionCharge);
        setFieldValue("unitOtherCharges", oneUnit.unitOtherCharges);
        setFieldValue("unitTypeId", oneUnit.unitType.id);
      }
    }, [oneUnit]);

    return (
      <ModalContainer
        width={matches ? "35%" : "80%"}
        title="Add Units"
        handleModalClose={() => {
          setAddUnitModal(false);
          setModalIsOpen(true);
        }}
        goBack={true}
      >
        <div className="overflow-y-scroll w-full">
          <div className="mt-4">
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Title or Name
            </label>
            <Inputs
              onChange={handleChange("unitName")}
              onBlur={handleBlur("unitName")}
              err={!!errors.unitName && touched.unitName}
              errMsg={errors.unitName}
              type="text"
              name="unitName"
              placeholder="Unit Name"
              value={values.unitName}
            />
          </div>
          <div className="mt-4">
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Unit Type
            </label>
            <StatusSelect
              options={
                unitTypes?.map((ele: { description: string; id: number }) => ({
                  label: ele.description,
                  value: ele.id.toString(),
                })) ?? []
              }
              onChange={(value) => {
                setFieldValue("unitTypeId", value);
              }}
              value={values.unitTypeId.toString()}
              onBlur={() => handleBlur("unitTypeId")}
              err={!!errors.unitTypeId && touched.unitTypeId}
              errMsg={errors.unitTypeId}
              placeholder="Unit Type"
            />
          </div>
          <div className="mt-4">
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Rent Amount
            </label>
            <Inputs
              err={!!errors.unitRent && touched.unitRent}
              errMsg={errors.unitRent}
              onChange={handleChange("unitRent")}
              onBlur={handleBlur("unitRent")}
              type="text"
              name="unitRent"
              placeholder="Unit Rent"
              value={
                values.unitRent
                  ? formatNumber(values.unitRent)
                  : values.unitRent
              }
            />
          </div>
          <div className="flex justify-between w-full gap-[1rem] mt-4">
            <div>
              <label
                className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
              >
                Service Charge
              </label>
              <Inputs
                err={!!errors.unitServiceCharge && touched.unitServiceCharge}
                errMsg={errors.unitServiceCharge}
                onChange={handleChange("unitServiceCharge")}
                onBlur={handleBlur("unitServiceCharge")}
                type="text"
                name="unitServiceCharge"
                placeholder="Service Charge"
                value={
                  values.unitServiceCharge
                    ? formatNumber(values.unitServiceCharge)
                    : values.unitServiceCharge
                }
              />
            </div>
            <div>
              <label
                className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
              >
                Legal Charge
              </label>
              <Inputs
                err={!!errors.unitLegalCharge && touched.unitLegalCharge}
                errMsg={errors.unitLegalCharge}
                onChange={handleChange("unitLegalCharge")}
                onBlur={handleBlur("unitLegalCharge")}
                type="text"
                name="unitLegalCharge"
                placeholder="Legal Charge"
                value={
                  values.unitLegalCharge
                    ? formatNumber(values.unitLegalCharge)
                    : values.unitLegalCharge
                }
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-[1rem] mt-4">
            <div>
              <label
                className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
              >
                Agreement Charge
              </label>
              <Inputs
                err={
                  !!errors.unitAgreementCharge && touched.unitAgreementCharge
                }
                errMsg={errors.unitAgreementCharge}
                onChange={handleChange("unitAgreementCharge")}
                onBlur={handleBlur("unitAgreementCharge")}
                type="text"
                name="unitAgreementCharge"
                placeholder="Agreement Charge"
                value={
                  values.unitAgreementCharge
                    ? formatNumber(values.unitAgreementCharge)
                    : values.unitAgreementCharge
                }
              />
            </div>
            <div>
              <label
                className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
              >
                Commision Charge
              </label>
              <Inputs
                err={
                  !!errors.unitCommissionCharge && touched.unitCommissionCharge
                }
                errMsg={errors.unitCommissionCharge}
                onChange={handleChange("unitCommissionCharge")}
                onBlur={handleBlur("unitCommissionCharge")}
                type="text"
                name="unitCommissionCharge"
                placeholder="Commission Charge"
                value={
                  values.unitCommissionCharge
                    ? formatNumber(values.unitCommissionCharge)
                    : values.unitCommissionCharge
                }
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className={`${Lora.className} mb-4 font-normal text-darkText3 text-[14px]`}
            >
              Other Charges
            </label>
            <Inputs
              err={!!errors.unitOtherCharges && touched.unitOtherCharges}
              errMsg={errors.unitOtherCharges}
              onChange={handleChange("unitOtherCharges")}
              onBlur={handleBlur("unitOtherCharges")}
              type="text"
              name="unitOtherCharges"
              placeholder="Other Charges"
              value={
                values.unitOtherCharges
                  ? formatNumber(values.unitOtherCharges)
                  : values.unitOtherCharges
              }
            />
          </div>

          {Object.keys(oneUnit ?? {}).length ? (
            <div className="mt-4">
              <Button variant="submit" title="Edit Unit" />
            </div>
          ) : (
            <div className="flex mt-4 justify-between items-center">
              <Button
                title="Add to List"
                variant="outlined"
                onClick={() => {
                  handleSubmit();
                }}
              />
              {units.length > 0 && (
                <Button
                  title="View Added Units"
                  variant="outlined"
                  onClick={() => setShow(true)}
                />
              )}
            </div>
          )}
          {show && (
            <div className="relative static z-[100] mt-[-100%] border-2 border-lighterGrey w-auto bg-[#fff]  bg-white h-[95%] max-h-[95%] overflow-y-scroll py-6 rounded-[10px]">
              <div
                onClick={() => setShow(false)}
                className="cursor-pointer flex justify-start items-start"
              >
                <IoCloseSharp size={24} color="#EB212D" />
              </div>
              {units.map((ele: any) => (
                <div className="border flex flex-col justify-start items-start gap-[.5rem] border-colorPrimary mt-6 w-full px-4 py-4">
                  <h3
                    className={`${Lora.className} capitalize text-[18px] font-normal text-darkText3`}
                  >
                    {ele.unitName}
                  </h3>
                  <span
                    className={`${Lora.className} text-darkText3 font-normal`}
                  >
                    Type{" "}
                    <p>
                      {
                        unitTypes.find(
                          (elem: any) =>
                            Number(elem.id) === Number(ele.unitTypeId)
                        )?.description
                      }
                    </p>
                  </span>
                  <div className="flex justify-start items-start gap-[5rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 font-normal`}
                      >
                        Unit Rent{" "}
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitRent)}
                        </p>
                      </span>
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 font-normal`}
                      >
                        Service Charge{" "}
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitServiceCharge)}
                        </p>
                      </span>
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 text-[14px] font-normal`}
                      >
                        Legal Charge{" "}
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitLegalCharge)}
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 font-normal`}
                      >
                        Agreement Charge{" "}
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitAgreementCharge)}
                        </p>
                      </span>
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 font-normal`}
                      >
                        Commission Charge{" "}
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitCommissionCharge)}
                        </p>
                      </span>
                      <span
                        className={`${Lora.className} text-[14px] text-darkText3 font-normal`}
                      >
                        Other Charges
                        <p className="font-light">
                          ₦ {formatCurrency(ele.unitOtherCharges)}
                        </p>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Button
                  title="Add Unit(s) To Property"
                  variant="submit"
                  onClick={() => addUnitToProperty()}
                />
              </div>
            </div>
          )}
        </div>
      </ModalContainer>
    );
  }
);
