import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    cart: [],
    total: 0,
    status: "idle",
  },
  reducers: {
    checkoutPending: (state) => {
      state.status = "pending";
    },
    checkoutSuccess: (state) => {
      state.status = "succeeded";
      state.cart = [];
      state.total = 0;
    },
    checkoutFailed: (state) => {
      state.status = "failed";
    },
  },
});

export const { checkoutPending, checkoutSuccess, checkoutFailed } =
  orderSlice.actions;

export default orderSlice.reducer;
