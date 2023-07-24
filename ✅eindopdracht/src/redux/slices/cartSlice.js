import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    cartDrawerOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log("addToCart called with payload:", action.payload);
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload.item,
          quantity: action.payload.quantity,
        });
      }
      state.total += action.payload.quantity * action.payload.item.prijs;
    },

    removeFromCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const itemToRemove = state.cart[index];
        state.total -= itemToRemove.prijs * itemToRemove.quantity;
        state.cart.splice(index, 1);
      }
    },

    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const itemToUpdate = state.cart[index];
        const quantityDifference = quantity - itemToUpdate.quantity;
        state.total += quantityDifference * itemToUpdate.prijs;
        itemToUpdate.quantity = quantity;
      }
    },

    clearCart: (state) => {
      // console.log("clearCart");
      state.cart = [];
      state.total = 0;
    },
    toggleCartDrawer: (state) => {
      // console.log("toggleCartDrawer");
      state.cartDrawerOpen = !state.cartDrawerOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  toggleCartDrawer,
} = cartSlice.actions;
export default cartSlice.reducer;
