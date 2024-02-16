"use client";

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products.slice(1),
  },
});

export default productSlice.reducer;
