import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemCart = action.payload;
      state.cart.push(itemCart);
    },
    addQuantity(state, action) {
      if (state.cart.length === 0) return;
      const newElement = action.payload;

      const index = state.cart.findIndex(
        (pizza) => pizza.pizzaId === newElement.pizzaId,
      );
      const location = window.location;
      // used it to run code on the basis of pages. since we cant run useLocation here i used window.location.
      if (location.pathname === '/menu') {
        state.cart[index].quantity =
          state.cart[index].quantity + newElement.quantity;
        state.cart[index].totalPrice =
          state.cart[index].totalPrice + newElement.totalPrice;
      } else {
        // Its for the cart item, when we click plus it will only add one quantity and corresponding unit price,
        // Had it like above code, it will add the same quantity whatever is put in menu page since after adding the
        // quantity in the cart, the whole item was the same we added in the cart and if from theat cart item page we dispatch the sam item
        //  and then update the quantity and price by the code above, it will update according to the quantity and price which is already present in the item.
        // thats why we used only unit quantity addition and unit price addition.
        state.cart[index].quantity++;
        state.cart[index].totalPrice =
          state.cart[index].totalPrice + newElement.unitPrice;
      }
    },

    delQuantity(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload.pizzaId,
      );
    },

    delFromCart(state, action) {
      const newElement = action.payload;

      if (newElement.quantity <= 1) {
        state.cart = [];
      } else {
        const index = state.cart.findIndex(
          (pizza) => pizza.pizzaId === newElement.pizzaId,
        );
        state.cart[index].quantity = state.cart[index].quantity - 1;
        state.cart[index].totalPrice =
          state.cart[index].totalPrice -
          newElement.totalPrice / newElement.quantity;
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, delFromCart, addQuantity, delQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
