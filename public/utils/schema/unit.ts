import * as Yup from "yup";

export const AddUnitValidationSchema = Yup.object().shape({
  unitName: Yup.string().required("Unit name is required"),
  unitRent: Yup.string().required("Unit rent is required"),
  unitServiceCharge: Yup.string().required("Service charge is required"),
  unitLegalCharge: Yup.string().required("Legal charge is required"),
  unitAgreementCharge: Yup.string().required("Agreement charge is required"),
  unitCommissionCharge: Yup.string().required("Commission charge is required"),
  unitOtherCharges: Yup.string().optional(),
  unitTypeId: Yup.string().required("Unit type is required")
});

export const AddTenantValidationSchema = Yup.object().shape({
  tenantEmail: Yup.string().required("Tenant Email is required"),
  tenantDuration: Yup.string().required("Duration is required"),
  lastPaymentDate: Yup.string().required("Last payment date is required"),
  moveInDate: Yup.string().required("move in date is required"),
});
