// Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const API = 'https://restcountries.com/v3.1/all';

// Actions
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

// Action Creator Thunk
export const fetchCountries = createAsyncThunk(
  FETCH_COUNTRIES,
  async (args, { dispatch }) => {
    const response = await fetch(API);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: FETCH_COUNTRIES,
      payload: countries,
    });
    return countries;
  },
);

// Initial State
const initialState = {
  countriesList: [],
};

// Slice Reducer
const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => ({
      ...state,
      countriesList: action.payload,
    }),
  },
});

export default countrySlice.reducer;
