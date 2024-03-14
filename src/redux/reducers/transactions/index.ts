import { createSlice } from "@reduxjs/toolkit";
import {
  InitiatePayment,
  InitiateSubscriptionPayment,
  getAllTransactions,
  getFinancials,
  getPaymentMthods,
  getSubscriptionPlans,
} from "./thunk-action";
import { MessageItem, ResponseData, UserWallet } from "./interface";

const initialState: {
  allPaymentOptions: Array<any>;
  allTransactions: MessageItem[];
  allFinancials: UserWallet;
  allSubscriptionPlans: Array<any>;
} = {
  allPaymentOptions: [],
  allTransactions: [],
  allFinancials: {} as UserWallet,
  allSubscriptionPlans: [],
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

    //getSubscriptionPlans
    builder.addCase(getSubscriptionPlans.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getSubscriptionPlans.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allSubscriptionPlans: action.payload.message,
      };
    });
    builder.addCase(getSubscriptionPlans.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //InitiateSubscriptionPayment
    builder.addCase(InitiateSubscriptionPayment.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(InitiateSubscriptionPayment.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
      };
    });
    builder.addCase(InitiateSubscriptionPayment.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const transactionReducer = transactionSlice.reducer;
