import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state, actions) => {
      const productID = actions.payload;
      state.cartList.forEach((item) => {
        // checking
        item?.id === productID && item.count++;
      });
    },
    decrement: (state, actions) => {
      const productID = actions.payload;
      state.cartList.forEach((item) => {
        // checking
        item?.id === productID && item.count--; 
      });
    },
    AddToCart: (state, actions) => {
      const productExist = state.cartList.find(
        (item) => item?.id === actions.payload?.id
      );

      if (productExist) {
        // Count set 1 logic
        const productID = actions.payload;
        state.cartList.forEach((item) => {
          if (item?.id === actions.payload?.id) item.count = 1;
        });
      } else {
        state.cartList.push({
          ...actions.payload,
          count: 1,
        });
      }
    },
  },
});

// Export all actions
export const { increment, decrement, AddToCart } = cartSlice.actions;
// Export all Reducer

export default cartSlice.reducer;
