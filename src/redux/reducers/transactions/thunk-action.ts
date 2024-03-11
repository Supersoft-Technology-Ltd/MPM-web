import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import useAxios from "../../../../public/utils/config/useAxios";
import { BASE_URL } from "../../../../public/utils/config/api";
import { ToastContent, toast } from "react-toastify";

export const getPaymentMthods = createAsyncThunk(
  "transaction/getPaymentMthods",
  async (data, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/transactions/get-payment-methods`,
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
export const InitiatePayment = createAsyncThunk(
  "transaction/InitiatePayment",
  async (
    data: {
      unitId: string;
      paymentMethod: string;
    },
    thunkAPI
  ) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/transactions/initiate-rent-payment/${data?.unitId}/${data?.paymentMethod}`,
        method: "GET",
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
export const getAllTransactions = createAsyncThunk(
  "transaction/getAllTransactions",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/transactions/get-transaction-history/${id}`,
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
export const getFinancials = createAsyncThunk(
  "transaction/getFinancials",
  async (id: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/transactions/get-financials/${id}`,
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
