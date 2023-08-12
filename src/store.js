import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './redux/HomeSlice';

const store = configureStore({
  reducer: {
    data: HomeReducer,
  },
});

export default store;
