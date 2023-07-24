import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    categories: data.categorieen,
    sauzen: data.sauzen,
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity, sauzen } = action.payload;
      let found = false;
      let updatedItem = null;

      for (let category of Object.values(state.categories)) {
        const menuItems = category.producten;

        for (let i = 0; i < menuItems.length; i++) {
          if (menuItems[i].naam === item.naam) {
            found = true;
            updatedItem = {
              ...menuItems[i],
              quantity: (menuItems[i].quantity || 0) + quantity,
            };
            category.producten[i] = updatedItem;
            break;
          }
        }
        if (found) {
          break;
        }
      }
      state.cart.push({
        ...item,
        sauzen,
        quantity,
      });

      // console.log('Cart State:', state.cart);
    },
  },
});

export const { addToCart } = menuSlice.actions;
export default menuSlice.reducer;
