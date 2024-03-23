import { createSlice } from "@reduxjs/toolkit";
import {
  InitiatePayment,
  InitiateSubscriptionPayment,
  createBankDetails,
  getAccountName,
  getAllBanks,
  getAllTransactions,
  getFinancials,
  getPaymentMthods,
  getSubscriptionPlans,
  getUserBankDetails,
  updateBankDetails,
} from "./thunk-action";
import {
  BankDetailsResponse,
  MessageItem,
  ResponseData,
  UserWallet,
} from "./interface";

const initialState: {
  allPaymentOptions: Array<any>;
  allTransactions: MessageItem[];
  allFinancials: UserWallet;
  allUserBankDetails: BankDetailsResponse;
  allSubscriptionPlans: Array<any>;
  allBanks: Array<any>;
  data: {
    account_name: string;
  };
} = {
  allPaymentOptions: [],
  allTransactions: [],
  allFinancials: {} as UserWallet,
  allUserBankDetails: {} as BankDetailsResponse,
  allSubscriptionPlans: [],
  allBanks: [],
  data: {
    account_name: "",
  },
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

    //getAllBanks
    builder.addCase(getAllBanks.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getAllBanks.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        allBanks: action.payload.message,
      };
    });
    builder.addCase(getAllBanks.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //getAccountName
    builder.addCase(getAccountName.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getAccountName.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        data: action.payload.data,
      };
    });
    builder.addCase(getAccountName.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //createBankDetails
    builder.addCase(createBankDetails.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(createBankDetails.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(createBankDetails.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //updateBankDetails
    builder.addCase(updateBankDetails.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(updateBankDetails.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(updateBankDetails.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //getUserBankDetails
    builder.addCase(getUserBankDetails.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getUserBankDetails.fulfilled, (state, action) => {
      console.log(action.payload.message, "pay");
      return {
        ...state,
        loading: "successful",
        allUserBankDetails: action.payload,
      };
    });
    builder.addCase(getUserBankDetails.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});

export const transactionReducer = transactionSlice.reducer;
