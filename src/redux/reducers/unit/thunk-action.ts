
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import useAxios from "../../../../public/utils/config/useAxios";
import { BASE_URL } from "../../../../public/utils/config/api";
import { ToastContent, toast } from "react-toastify";

export const getAllUnitTypes = createAsyncThunk(
  "unit/getAllUnitTypes",
  async (data, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/unit-management/get-all-unit-type`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const AddUnits = createAsyncThunk(
  "unit/AddUnits",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/create-property-unit`,
        method: "post",
        data,
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error as AxiosError; 
        const responseData = axiosError.response?.data || {};
        console.log("responseData", responseData);

        const msg =
          typeof responseData === "object" && "message" in responseData
            ? responseData.message
            : "An error occurred, please try again";
        toast.error(msg as ToastContent);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
export const getPropertyUnits = createAsyncThunk(
  "unit/getPropertyUnits",
  async (id:string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/get-property-units/${id}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);

export const AddTenantToOneUnit = createAsyncThunk(
  "unit/AddTenantToUnit",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/tenancy/create-tenancy`,
        method: "post",
        data,
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error as AxiosError; 
        const responseData = axiosError.response?.data || {};
        console.log("responseData", responseData);

        const msg =
          typeof responseData === "object" && "message" in responseData
            ? responseData.message
            : "An error occurred, please try again";
        toast.error(msg as ToastContent);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const removeOneTenant = createAsyncThunk(
  "unit/removeOneTenant",
  async (id:string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/tenancy/remove-tenancy/${id}`,
        method: "delete",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const getTenantInUnit = createAsyncThunk(
  "unit/getTenantInUnit",
  async (id:string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/get-tenant-in-a-unit/${id}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);

