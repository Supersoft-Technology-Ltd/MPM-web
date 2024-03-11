import { createSlice } from "@reduxjs/toolkit";
import {
  InitiatePayment,
  getAllTransactions,
  getFinancials,
  getPaymentMthods,
} from "./thunk-action";
import { MessageItem, ResponseData, UserWallet } from "./interface";

const initialState: {
  allPaymentOptions: Array<any>,
  allTransactions: MessageItem[],
  allFinancials: UserWallet
} = {
  allPaymentOptions: [],
  allTransactions: [],
  allFinancials: {} as UserWallet,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //allPaymentOptions
    builder.addCase(getPaymentMthods.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getPaymentMthods.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allPaymentOptions: action.payload.message,
      };
    });
    builder.addCase(getPaymentMthods.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //getAllTransactions
    builder.addCase(getAllTransactions.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allTransactions: action.payload.message,
      };
    });
    builder.addCase(getAllTransactions.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //getFinancials
    builder.addCase(getFinancials.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getFinancials.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allFinancials: action.payload,
      };
    });
    builder.addCase(getFinancials.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //initiatePayment
    builder.addCase(InitiatePayment.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(InitiatePayment.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(InitiatePayment.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const transactionReducer = transactionSlice.reducer;
