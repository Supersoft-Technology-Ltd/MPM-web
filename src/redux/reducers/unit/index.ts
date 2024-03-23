import { createSlice } from "@reduxjs/toolkit";
import {
  AddTenantToOneUnit,
  AddUnits,
  deleteOneUnit,
  getAllUnitTypes,
  getPropertyUnits,
  getTenantInUnit,
  removeOneTenant,
} from "./thunk-action";
import { TenantDetails, UnitData } from "./interface";

const initialState: any = {
  unitTypes: [],
  allUnits: {} as UnitData[],
  loading: "idle",
  oneTenantDetails: {} as TenantDetails[],
};

const UnitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //getAllUnitTypes
    builder.addCase(getAllUnitTypes.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getAllUnitTypes.fulfilled, (state, action) => {
      return { ...state, loading: "successful", unitTypes: action.payload };
    });
    builder.addCase(getAllUnitTypes.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //getAllUnits
    builder.addCase(getPropertyUnits.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getPropertyUnits.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allUnits: action.payload.message,
      };
    });
    builder.addCase(getPropertyUnits.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //addUnit
    builder.addCase(AddUnits.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(AddUnits.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(AddUnits.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //addTenantToUnit
    builder.addCase(AddTenantToOneUnit.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(AddTenantToOneUnit.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(AddTenantToOneUnit.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //removeOneTenant
    builder.addCase(removeOneTenant.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(removeOneTenant.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(removeOneTenant.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //oneTenantDetails
    builder.addCase(getTenantInUnit.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getTenantInUnit.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        oneTenantDetails: action.payload.message,
      };
    });
    builder.addCase(getTenantInUnit.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //deleteOneUnit
    builder.addCase(deleteOneUnit.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(deleteOneUnit.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(deleteOneUnit.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const unitReducer = UnitSlice.reducer;
