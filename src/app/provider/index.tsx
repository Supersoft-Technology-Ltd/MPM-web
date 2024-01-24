"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from "../../redux/store";
import { ReactNode } from "react";


interface Props {
    children: ReactNode;
  }
export const AppProvider = ({children}: Props) => {
  return <PersistGate persistor={persistor} loading={null}>
    <Provider store={store}>
        {children}
    </Provider>
  </PersistGate>;

};
