import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const BASE_URL = process.env.REACT_APP_COUNTRY_URL;

const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const HomeSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchData };
export default HomeSlice.reducer;
