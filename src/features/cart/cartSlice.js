import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // console.log(state.cart);
      const itemCart = action.payload;

      // if (
      //   state.cart.length !== 0 &&
      //   state.cart.map((item) => item.pizzaId === itemCart.pizzaId)
      // )
      //   return;
      state.cart.push(itemCart);
      console.log(action.payload);
    },
    addQuantity(state, action) {
      if (state.cart.length === 0) return;
      const newElement = action.payload;

      const index = state.cart.findIndex(
        (pizza) => pizza.pizzaId === newElement.pizzaId,
      );
      state.cart[index].quantity =
        state.cart[index].quantity + newElement.quantity;
      state.cart[index].totalPrice =
        state.cart[index].totalPrice + newElement.totalPrice;
    },
    delQuantity(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
      // console.log(state.cart);
    },
  },
});

export const { addToCart, addQuantity, delQuantity } = cartSlice.actions;
export default cartSlice.reducer;
