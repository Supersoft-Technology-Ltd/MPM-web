import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { propertyReducer } from "./reducers/properties";
import { unitReducer } from "./reducers/unit";
import { transactionReducer } from "./reducers/transactions";

export const rootReducer = combineReducers({
  authReducer,
  propertyReducer,
  unitReducer,
  transactionReducer
});
