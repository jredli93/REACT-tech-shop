import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Components/Products/productsSlice';
import sliceReducer from '../features/Containers/Cart/cartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: sliceReducer,
  },
});
