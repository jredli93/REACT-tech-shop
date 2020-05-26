import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      const checkId = state.cartItems.find(
        item => item._id === action.payload._id
      );

      if (!checkId) {
        const item = {
          _id: action.payload._id,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          amount: 1,
        };
        state.cartItems.push(item);
      } else {
        state.cartItems.find(item => {
          if (item._id === action.payload._id) {
            if (item.amount >= 0) {
              return (item.amount = item.amount + 1);
            }
          }
        });
      }
    },
    increase: (state, action) => {
      state.cartItems.find(item => {
        if (item._id === action.payload) {
          return (item.amount = item.amount + 1);
        }
      });
    },
    decrease: (state, action) => {
      state.cartItems.find(item => {
        if (item._id === action.payload) {
          if (item.amount != 0) {
            return (item.amount = item.amount - 1);
          }
        }
      });
    },
    total: state => {
      let totalNum = state.cartItems.reduce((acc, curr) => {
        return (acc += curr.price);
      }, 0);

      state.total = totalNum;
    },
    clear: state => {
      console.log(state.cartItems);
      state.cartItems = [];
    },
  },
});

export const {
  addCartItem,
  clear,
  increase,
  decrease,
  total,
} = cartSlice.actions;

export const selectCartItems = state => state.cart.cartItems;
export const selectTotal = state => state.cart.total;

export default cartSlice.reducer;
