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
export const getSubscriptionPlans = createAsyncThunk(
  "transaction/getSubscriptionPlans",
  async (data: void, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/subscription/get-subscription-methods`,
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
export const InitiateSubscriptionPayment = createAsyncThunk(
  "transaction/InitiateSubscriptionPayment",
  async (
    data: {
      userId: string;
      paymentMethod: string;
      subscriptionMethodId: string | number;
    },
    thunkAPI
  ) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/transactions/initiate-subscription-payment/${data?.userId}/${data?.subscriptionMethodId}/${data?.paymentMethod}`,
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
export const getAllBanks = createAsyncThunk(
  "transaction/getAllBanks",
  async (data: void, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/banks/get-banks`,
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
export const getAccountName = createAsyncThunk(
  "transaction/getAccountName",
  async (
    data: {
      accountNumber: string;
      bankCode: string;
    },
    thunkAPI
  ) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/banks/name-enquiry/${data.accountNumber}/${data.bankCode}`,
        method: "get",
      });
      return resp.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(error);
      } else {
        return thunkAPI.rejectWithValue(error as any);
      }
    }
  }
);
export const createBankDetails = createAsyncThunk(
  "transaction/createBankDetails",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/banks/create-bank-details`,
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
export const getUserBankDetails = createAsyncThunk(
  "transaction/getUserBankDetails",
  async (userId: string, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/banks/fetch-user-bank-details/${userId}`,
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
export const updateBankDetails = createAsyncThunk(
  "transaction/updateBankDetails",
  async (data: object, thunkAPI) => {
    try {
      const resp = await useAxios({
        url: `${BASE_URL}/accounts/banks/update-bank-details`,
        method: "put",
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
