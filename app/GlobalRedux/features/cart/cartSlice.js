import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    carts: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.carts = [...state.carts, payload];
    },
    removeFromCart: (state, { payload }) => {
      state.carts = state.carts.filter((product) => product.id !== payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
