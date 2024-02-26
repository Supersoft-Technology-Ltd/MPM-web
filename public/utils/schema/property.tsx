import * as Yup from "yup";

export const AddPropertyValidationSchema = Yup.object().shape({
    propertyName:  Yup.string().required("Name is required"),
    propertyLocation:  Yup.string().required("Location is required"),
    propertyState:  Yup.string().required("State is required"),
})