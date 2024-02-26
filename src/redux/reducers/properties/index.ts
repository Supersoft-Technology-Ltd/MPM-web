import { createSlice } from "@reduxjs/toolkit";
import { AddProperties, getAllProperties, editProperty, getPropertyDetails } from "./thunk-action";
import { Property, propertyDetails } from "./interface";

const initialState: any = {
  allProperties: {} as Property[],
  loading: "idle",
  error: null,
  onePropertyDetails: {} as propertyDetails,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //addProperty
    builder.addCase(AddProperties.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(AddProperties.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(AddProperties.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //getProperty
    builder.addCase(getAllProperties.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getAllProperties.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allProperties: action.payload.message,
      };
    });
    builder.addCase(getAllProperties.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //editProperty
    builder.addCase(editProperty.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(editProperty.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(editProperty.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //getPropertyDetails
    builder.addCase(getPropertyDetails.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getPropertyDetails.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        onePropertyDetails: action.payload,
      };
    });
    builder.addCase(getPropertyDetails.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const propertyReducer = propertySlice.reducer;
