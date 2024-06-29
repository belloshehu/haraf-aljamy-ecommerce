import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addCartItem = createAsyncThunk(
  "cart/createCartItem",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("/api/cart", data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to create cart item");
    }
  }
);

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get("/api/cart");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch cart items");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    carts: [],
    totalAmount: 0,
    loading: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.carts = [...state.carts, payload];
    },
    removeFromCart: (state, { payload }) => {
      state.carts = state.carts.filter((product) => product.id !== payload);
    },
    calculateTotalAmount: (state) => {
      let amount = 0;
      if (state.carts.length > 0) {
        state.totalAmount = state.carts.forEach((item) => {
          amount += item.price;
        });
        state.totalAmount = amount;
      }
    },
  },
  extraReducers: {
    // Adding cart item to database
    [addCartItem.pending]: (state) => {
      state.loading = true;
    },
    [addCartItem.fulfilled]: (state, { payload }) => {
      state.carts = [state.carts, payload];
      state.loading = false;
    },
    [addCartItem.rejected]: (state) => {
      state.loading = false;
    },
    // Fetching cart items from database
    [getCartItems.pending]: (state) => {
      state.loading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.carts = payload;
      state.loading = false;
    },
    [getCartItems.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart, calculateTotalAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
