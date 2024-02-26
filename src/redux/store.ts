import { configureStore, Action } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: "root",
    storage,
    version: 0,
    whitelist: ['user', 'authReducer']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer)


  export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]});
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  
  export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
  export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
  
  export const persistor = persistStore(store);
