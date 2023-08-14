"use client";

import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/app/data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products.slice(1),
  },
});

export default productSlice.reducer;
