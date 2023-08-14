"use client";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export const RootState = store.dispatch;
export const AppDispatch = store.getState;
