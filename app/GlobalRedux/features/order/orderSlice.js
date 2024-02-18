import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {
      products: [],
      totalCost: 0,
    },
  },
  reducers: {
    addProduct: (state, payload) => {
      state.order = {
        ...state.order,
        products: [...state.order.products, payload],
      };
    },

    removeProduct: (state, payload) => {
      state.order = {
        ...state.order,
        products: state.order.products.filter(
          (product) => product.id !== payload
        ),
      };
    },
  },
});
