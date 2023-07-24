import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/menuSlice";
import cartReducer from "../slices/cartSlice";
import orderReducer from "../slices/orderSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;

