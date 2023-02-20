import { configureStore, createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "shopping cart",
  initialState: { loggedin: false },
  reducers: {
    login(state, action) {
      state.loggedin = true;
    },
    logout(state, action) {
      state.loggedin = false;
    },
  },
});
export const action1 = slice.actions;
const cart = createSlice({
  name: "items cart",
  initialState: {
    itemsList: [],
    total: 0,
    showCart: false,
  },
  reducers: {
    add(state, action) {
      let item = action.payload;
      let product = state.itemsList.find((items) => {
        return items.id === item.id;
      });
      if (product) {
        product.quantity++;
        product.price = item.price;
        product.totalPrice = item.price * product.quantity;
      } else {
        state.itemsList.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.name,
        });
      }
      state.total = state.itemsList.length;
    },
    removeFromCart(state, action) {},
    additem(state, action) {
      let product = state.itemsList.find((items) => {
        return items.id === action.payload;
      });
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    },
    removeitem(state, action) {
      let product = state.itemsList.find((items) => {
        return items.id === action.payload;
      });
      product.quantity--;
      product.totalPrice = product.price * product.quantity;
    },
    show(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const carts = cart.actions;
const store = configureStore({
  reducer: {
    auth: slice.reducer,
    cart: cart.reducer,
  },
});
export default store;
