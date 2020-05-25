import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../axios/axiosProducts';
import { flatNumber } from '../../../helper';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    deal: false,
    rating: 5,
    category: 'All',
    search: '',
    price: 0,
    maxPrice: 0,
    loading: true,
  },
  reducers: {
    deal: state => {
      state.deal = !state.deal;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
    rating: (state, action) => {
      state.rating = action.payload;
    },
    price: (state, action) => {
      state.price = action.payload;
    },
    category: (state, action) => {
      state.category = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    loading: state => {
      state.loading = !state.loading;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  deal,
  rating,
  search,
  price,
  maxPrice,
  category,
  setProducts,
  setMaxPrice,
  setPrice,
  loading,
} = productsSlice.actions;

export const fetchData = () => dispatch => {
  axios
    .get('/articles.json')
    .then(res => {
      const allProducts = [];
      let max = 0;
      for (let key in res.data) {
        let currPrice = parseInt(flatNumber(res.data[key].price).slice(1));
        if (currPrice > max) {
          max = currPrice;
          dispatch(setMaxPrice(max));
          dispatch(setPrice(max));
        }
        allProducts.push(res.data[key]);
      }
      dispatch(setProducts(allProducts));
      dispatch(loading());
    })
    .catch(err => {
      console.log(err);
    });
};

export const selectSearch = state => state.products.search;
export const selectRating = state => state.products.rating;
export const selectPrice = state => state.products.price;
export const selectDeal = state => state.products.deal;
export const selectMaxPrice = state => state.products.maxPrice;
export const selectCategory = state => state.products.category;
export const selectProducts = state => state.products.products;
export const selectLoading = state => state.products.loading;

export default productsSlice.reducer;
