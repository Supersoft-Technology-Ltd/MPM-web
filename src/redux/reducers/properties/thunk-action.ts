import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import useAxios from "../../../../public/utils/config/useAxios";
import { BASE_URL } from "../../../../public/utils/config/api";
import { ToastContent, toast } from "react-toastify";

export const AddProperties = createAsyncThunk(
  "property/AddProperty",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/create-property`,
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
export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/get-property-by-userid/${id}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const editProperty = createAsyncThunk(
  "property/EditProperty",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/update-property`,
        method: "post",
        data,
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data || {};

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
export const getPropertyDetails = createAsyncThunk(
  "property/getPropertyDetails",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/get-property-details/${id}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);

export const getTenancyDetails = createAsyncThunk(
  "property/getTenancyDetails",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/tenancy/get-tenant-occupied-details/${id}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const deleteOneProperty = createAsyncThunk(
  "property/deleteOneProperty",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/properties/delete-property/${id}`,
        method: "delete",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
