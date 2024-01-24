import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import useAxios from "../../../../public/utils/config/useAxios";
import { BASE_URL } from "../../../../public/utils/config/api";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/accounts/create-user`,
        method: 'post',
        data: data,
        withCredentials: true,
      });

      // const response = await fetch.post(`${BASE_URL}/accounts/create-user`, {

      // })
// const resp = response.json()
      return response.data;
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
