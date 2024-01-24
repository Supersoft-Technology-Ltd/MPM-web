import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./thunk-action";

const initialState: any = {
  user: {},
  loading: "idle",
  isLogging: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
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
  },
});
export const authReducer = authSlice.reducer;

