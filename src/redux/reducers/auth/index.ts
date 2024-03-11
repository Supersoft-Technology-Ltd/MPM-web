import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, verifyOtp, updatePassword } from "./thunk-action";
import { UserData } from "./interface";
import { RootState } from "@/redux/store";

const initialState: any = {
  user: {} as UserData,
  loading: "idle",
  isLogging: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, payload) => {
      return {
        ...state,
        user: {},
      };
    },
  },

  extraReducers: (builder) => {
    //signup
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signUp.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //signin
    builder.addCase(signIn.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      return { ...state, loading: "successful", user: action.payload };
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //verifyOtp
    builder.addCase(verifyOtp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(verifyOtp.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //updatePassword
    builder.addCase(updatePassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(updatePassword.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const { setCurrentUser } = authSlice.actions;
export const useSelectCurrentUser = (state: RootState): UserData | null =>
  state.authReducer.user;
export const authReducer = authSlice.reducer;
