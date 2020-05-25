import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Components/Products/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
