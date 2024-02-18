"use client";

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products.slice(1),
    selectedProduct: {
      quantity: 1,
      id: 0,
      name: "",
      image: "",
      price: 0,
      stock: 0,
      discount: 0,
    },
  },

  reducers: {
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = { ...payload, quantity: 1 };
    },
    increaseQuantity: (state) => {
      if (state.selectedProduct.stock > state.selectedProduct.quantity) {
        state.selectedProduct = {
          ...state.selectedProduct,
          quantity: state.selectedProduct.quantity + 1,
        };
      }
    },
    decreaseQuantity: (state) => {
      if (state.selectedProduct.quantity > 1) {
        state.selectedProduct = {
          ...state.selectedProduct,
          quantity: state.selectedProduct.quantity - 1,
        };
      }
    },
  },
});
export const { setSelectedProduct, increaseQuantity, decreaseQuantity } =
  productSlice.actions;

export default productSlice.reducer;
